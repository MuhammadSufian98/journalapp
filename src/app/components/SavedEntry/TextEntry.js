"use client";

import "./TimeLine.css";
import React, { useEffect, useState } from "react";

export default function TextEntry() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(savedEntries);
  }, []);
  const handleDelete = (indexToDelete) => {
    const updatedEntries = entries.filter((_, i) => i !== indexToDelete);

    setEntries(updatedEntries);

    localStorage.setItem("entries", JSON.stringify(updatedEntries));
  };
  return (
    <div>
      <div
        className="entries-container"
        style={{ maxWidth: "600px", margin: "auto", paddingTop: "40px" }}
      >
        {entries.length === 0 && (
          <p style={{ textAlign: "center" }}>No entries found.</p>
        )}
        {entries.map((entry, index) => (
          <div key={index} className="Entry">
            <div className="EntryInnerDiv">
              <div className="ActualEntry">
                <div dangerouslySetInnerHTML={{ __html: entry.html }} />
                <p>
                  {entry.date} - {entry.time}
                </p>
              </div>
              <div className="BTNDiv">
                <button className="DelBTN" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </div>
            </div>
            <hr className="divider" />
          </div>
        ))}
      </div>
    </div>
  );
}
