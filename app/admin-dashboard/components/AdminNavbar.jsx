"use client";

export default function AdminNavbar({ setPage }) {
  return (
    <nav className="bg-purple-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <ul className="flex space-x-6">
        <li>
          <button onClick={() => setPage("projects")} className="hover:text-gray-200">
            Projects
          </button>
        </li>
        <li>
          <button onClick={() => setPage("skills")} className="hover:text-gray-200">
            Skills
          </button>
        </li>
        <li>
          <button onClick={() => setPage("contact")} className="hover:text-gray-200">
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
