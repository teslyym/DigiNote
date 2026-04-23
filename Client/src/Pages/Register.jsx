const handleSubmit = async (e) => {
  e.preventDefault();

  if (validate()) {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("Registration successful");
      console.log(data);

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("Registration error:", error);
      alert("Something went wrong");
    }
  }
};
