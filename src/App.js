import React from "react";
import StudentList from "./Components/StudentList"; // ✅ Import correctly
import "./style.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>Student Management</h1>
      <StudentList />
    </div>
  );
};

export default App;