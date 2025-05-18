"use client";

import { useRef, useState } from "react";
import "./AudioRecorder.css";
import { toast } from "react-toastify";

export default function AudioTranscriptComponent() {
  const [transcript, setTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);

  const isSpeechSupported =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const toggleRecording = () => {
    if (!isSpeechSupported) {
      alert(
        "Your browser doesn't support speech recognition. Try Chrome or Edge."
      );
      return;
    }

    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    if (!isRecording) {
      recognition.lang = "en-US";
      recognition.interimResults = false;

      recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        setTranscript(spokenText);

        const now = new Date();
        const newEntry = {
          transcript: spokenText,
          time: now.toLocaleTimeString(),
          date: now.toLocaleDateString(),
        };

        const savedEntries = JSON.parse(localStorage.getItem("audio") || "[]");
        localStorage.setItem(
          "audio",
          JSON.stringify([...savedEntries, newEntry])
        );
        toast.success("Entry saved successfully!");
      };

      recognition.onerror = () => {
        recognition.stop();
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.start();
      setIsRecording(true);
    } else {
      recognition.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="Audio-main">
      <div className="titleDiv">
        <h1 className="Heading">Create New Entry</h1>
      </div>

      <div className="recorder-box">
        <h2>🗣️ Speak Something</h2>
        <button onClick={toggleRecording}>
          {isRecording ? "Stop Recording" : "Start Recording"}
        </button>
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          <strong>Transcript:</strong> {transcript || "—"}
        </p>
      </div>
    </div>
  );
}
