"use client";

import "./timeLine.css";
import React, { useState } from "react";
import Header from "@/app/components/Header-Footer/Header";
import TextEntry from "@/app/components/SavedEntry/TextEntry";
import AudioTranscript from "@/app/components/SavedEntry/AudioTranscript";

export default function TimeLine() {
  const [toggle, setToggle] = useState(false);

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
          <div className="ButtonsDiv">
            <button
              className={`buttons ${toggle ? "ExtraWidth" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? "Audio Transcript" : "Text"}
            </button>
          </div>
        </div>
        {!toggle ? <TextEntry /> : <AudioTranscript />}
      </div>
    </div>
  );
}
