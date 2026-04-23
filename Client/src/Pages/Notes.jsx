import React from "react";

const Notes = () => {
  const notes = [];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">My Notes</h1>
          <p className="mt-1 text-sm text-slate-500">
            Organize and access your notes in one place.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Search notes..."
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 md:w-72"
          />
          <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
            + New Note
          </button>
        </div>
      </div>

      {notes.length === 0 ? (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white text-center shadow-sm">
          <div className="mb-4 text-5xl">📝</div>
          <h2 className="text-xl font-semibold text-slate-800">No notes yet</h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            You have not created any notes yet. Start by adding your first note
            and keep your ideas organized.
          </p>
          <button className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Create First Note
          </button>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {notes.map((note) => (
            <div
              key={note.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-slate-800">
                {note.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {note.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notes;
