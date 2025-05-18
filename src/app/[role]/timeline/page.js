"use client";

import "./TimeLine.css";
import React, { useEffect, useState } from "react";
import Header from "@/app/components/Header-Footer/Header";
import DeleteIcon from "../../../../public/delete.png";

export default function TimeLine() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(savedEntries);
  }, []);
  const handleDelete = (indexToDelete) => {
    // Remove entry at indexToDelete from entries array
    const updatedEntries = entries.filter((_, i) => i !== indexToDelete);

    // Update state
    setEntries(updatedEntries);

    // Update localStorage
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
  };
  return (
    <div>
      <Header />
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
          position: "relative",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          opacity: 0.6,
          zIndex: 5,
        }}
      >
        <div className="titleDiv">
          <h1 className="Heading">Here is Your TimeLine</h1>
        </div>
        <div
          className="entries-container"
          style={{ maxWidth: "600px", margin: "auto", paddingTop: "40px" }}
        >
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
                  <button
                    className="DelBTN"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <hr className="divider"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
