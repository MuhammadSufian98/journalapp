"use client";

import Header from "@/app/components/Header-Footer/Header";
import AudioTranscriptComponent from "@/app/components/Entries/AudioRecord";

export default function AudioEntry() {
  return (
    <div>
      <Header />
      <div
        style={{
          width: "100%",
          height: "100vh",
          marginTop: "50px",
          backgroundColor: "white",
          position: "relative",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          opacity: 0.6,
          zIndex: 7,
        }}
      >
        <div className="titleDiv">
          <AudioTranscriptComponent />
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "12px 24px",
  fontSize: "1rem",
  cursor: "pointer",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#1f2937",
  color: "#fff",
  width: "200px",
};
