import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import NoteModal from "../Components/NoteModal";
import toast from "react-hot-toast";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const user = JSON.parse(localStorage.getItem("user"));
  const { selectedCategory, setSelectedCategory } = useOutletContext();

  const fetchNotes = async () => {
    if (!user?.id) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/notes?userId=${user.id}&archived=false`,
      );
      const data = await res.json();

      if (!res.ok) {
        console.log("Fetch failed:", data.message);
        toast.error("Failed to fetch notes.");
        return;
      }

      setNotes(data);
    } catch (error) {
      console.log("Error fetching notes:", error);
      toast.error("Failed to fetch notes.");
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchNotes();
    }
  }, []);

  const handleSaveNote = async (note) => {
    if (!user?.id) return;

    try {
      if (note._id) {
        const res = await fetch(`http://localhost:5000/api/notes/${note._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: note.title,
            content: note.content,
            category: note.category,
            hasReminder: note.hasReminder,
            reminderDate: note.reminderDate,
            userId: user.id,
          }),
        });

        const updatedNote = await res.json();

        if (!res.ok) {
          console.log("Update failed:", updatedNote.message);
          toast.error("Failed to update note.");
          return;
        }

        setNotes((prevNotes) =>
          prevNotes.map((n) => (n._id === updatedNote._id ? updatedNote : n)),
        );

        toast.success("Note updated");
      } else {
        const res = await fetch("http://localhost:5000/api/notes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: note.title,
            content: note.content,
            category: note.category,
            hasReminder: note.hasReminder,
            reminderDate: note.reminderDate,
            userId: user.id,
          }),
        });

        const newNote = await res.json();

        if (!res.ok) {
          console.log("Create failed:", newNote.message);
          toast.error("Failed to create note.");
          return;
        }

        setNotes((prevNotes) => [newNote, ...prevNotes]);
        toast.success("Note created");
      }

      setNoteToEdit(null);
      setIsModalOpen(false);
    } catch (error) {
      console.log("Error saving note:", error);
      toast.error("Failed to save note.");
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/notes/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        console.log("Delete failed:", data.message);
        toast.error("Failed to delete note.");
        return;
      }

      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      toast.success("Note deleted");
    } catch (error) {
      console.log("Error deleting note:", error);
      toast.error("Failed to delete note.");
    }
  };

  const handleArchiveNote = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/notes/${id}/archive`, {
        method: "PUT",
      });

      const data = await res.json();

      if (!res.ok) {
        console.log("Archive failed:", data.message);
        toast.error("Failed to archive note.");
        return;
      }

      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
      toast.success("Note archived");
    } catch (error) {
      console.log("Error archiving note:", error);
      toast.error("Failed to archive note.");
    }
  };

  const handleEditClick = (note) => {
    setNoteToEdit(note);
    setIsModalOpen(true);
  };

  const handleNewNoteClick = () => {
    setNoteToEdit(null);
    setIsModalOpen(true);
  };

  const filteredNotes = notes
    .filter((note) => {
      const matchesSearch =
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || note.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return new Date(a.createdAt) - new Date(b.createdAt);
    });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            My Notes
          </h1>
          <p className="mt-1 max-w-md text-sm text-slate-500">
            Organize and access your notes in one place.
          </p>
        </div>

        <button
          onClick={handleNewNoteClick}
          className="w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 sm:w-auto"
        >
          + New Note
        </button>
      </div>

      <div className="flex flex-col gap-3 md:flex-row">
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
        />

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
        >
          <option value="All">All Categories</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Study">Study</option>
        </select>
      </div>

      {filteredNotes.length === 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white text-center shadow-sm">
          <div className="mb-4 text-5xl">📝</div>
          <h2 className="text-xl font-semibold text-slate-800">
            {notes.length === 0 ? "No notes yet" : "No matching notes"}
          </h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            {notes.length === 0
              ? "You have not created any notes yet. Start by adding your first note and keep your ideas organized."
              : "Try a different search term or clear the search input."}
          </p>

          {notes.length === 0 && (
            <button
              onClick={handleNewNoteClick}
              className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Create First Note
            </button>
          )}
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filteredNotes.map((note) => (
            <div
              key={note._id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-lg font-semibold text-slate-800">
                  {note.title}
                </h2>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleEditClick(note)}
                    className="text-sm font-medium text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDeleteNote(note._id)}
                    className="text-sm font-medium text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => handleArchiveNote(note._id)}
                    className="text-sm font-medium text-amber-500 hover:text-amber-700"
                  >
                    Archive
                  </button>
                </div>
              </div>

              <div className="mt-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                  {note.category || "Personal"}
                </span>
              </div>

              {note.hasReminder && note.reminderDate && (
                <p className="mt-2 text-xs font-medium text-amber-600">
                  ⏰ {new Date(note.reminderDate).toLocaleString()}
                </p>
              )}

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {note.content}
              </p>

              <p className="mt-4 text-xs text-slate-400">
                {new Date(note.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}

      <NoteModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setNoteToEdit(null);
        }}
        onSave={handleSaveNote}
        noteToEdit={noteToEdit}
      />
    </div>
  );
};

export default Notes;
