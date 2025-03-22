import React, { useState } from "react";
import "../style.css";

const StudentList = () => {
  const [students] = useState(["Alice", "Bob", "Charlie", "David", "Eve"]);
  const [favorites, setFavorites] = useState([]);

  // ✅ Function to add to favorites
  const addToFavorites = (name) => {
    if (!favorites.includes(name)) {
      setFavorites([...favorites, name]);
    }
  };

  // ✅ Function to remove from favorites
  const removeFromFavorites = (name) => {
    setFavorites(favorites.filter((student) => student !== name));
  };

  return (
    <div className="container">
      {/* Left Side - Student List */}
      <div className="student-list">
        <h2> Student List</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student}
              {!favorites.includes(student) && ( // ✅ Hide "Add" if already in favorites
                <button onClick={() => addToFavorites(student)}> Add</button>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Favorite List */}
      <div className="favorite-list">
        <h2> Favorite Students</h2>
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          <ul>
            {favorites.map((fav, index) => (
              <li key={index}>
                {fav}
                <button onClick={() => removeFromFavorites(fav)}> Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default StudentList;