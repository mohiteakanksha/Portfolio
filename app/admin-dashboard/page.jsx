"use client";
import { useState } from "react";
import AdminNavbar from "./components/adminNavbar";
import Projects from "./components/AdminProjects";
import Skills from "./components/AdminSkills";
import Contact from "./components/AdminContact";
import AddProject from "./components/AddProject";

export default function AdminDashboard() {
  const [page, setPage] = useState("projects"); // default page

  const renderPage = () => {
    if (page === "projects") return <Projects />;
    if (page === "skills") return <Skills />;
    if (page === "contact") return <Contact />;
  };
  

  return (
    <div>
      <AdminNavbar setPage={setPage} />
      {renderPage()}
    </div>
  );
   <div>
      <Skills />
    </div>
}
