"use client";
export const dynamic = "force-dynamic";
import { useState } from "react";
import AdminNavbar from "./components/AdminNavbar";
import Projects from "./components/AdminProjects";
import Skills from "./components/AdminSkills";
import Contact from "./components/AdminContact";

export default function AdminDashboard() {
  const [page, setPage] = useState("projects");

  const renderPage = () => {
    if (page === "projects") return <Projects />;
    if (page === "skills") return <Skills />;
    if (page === "contact") return <Contact />;
    return null;
  };

  return (
    <div>
      <AdminNavbar setPage={setPage} />
      {renderPage()}
    </div>
  );
}
