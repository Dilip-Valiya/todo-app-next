import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

async function getData() {
  const res = await fetch("http://localhost:8000/users", { cache: "no-store" });
  const users = await res.json();
  return users;
}

export default async function Users() {
  const users = await getData();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user: User) => (
          <div key={user.id} className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
