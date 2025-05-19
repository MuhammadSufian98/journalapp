"use client";

import Header from "@/app/components/Header-Footer/Header";
import AudioTranscriptComponent from "@/app/components/Entries/AudioRecord";

export default function AudioEntry() {
  return (
    <div style={wrapperStyle}>
      <Header />
      <div style={panelStyle}>
        <div style={contentStyle}>
          <AudioTranscriptComponent />
        </div>
      </div>
    </div>
  );
}

const wrapperStyle = {
  minHeight: "100vh",
  zIndex: 7,
};

const panelStyle = {
  opacity: 0.6,
  backgroundColor: "white",
  position: "relative",
  top: 0,
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "white",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  zIndex: 7,
  padding: "2rem",
  boxSizing: "border-box",
};

const contentStyle = {
  width: "100%",
  height: "100%",
};
