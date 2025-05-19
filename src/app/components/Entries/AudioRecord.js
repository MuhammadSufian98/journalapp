"use client";

import { useEffect, useRef, useState } from "react";
import "./AudioRecorder.css";
import { toast } from "react-toastify";

export default function AudioTranscriptComponent() {
  const [transcript, setTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeechSupported, setIsSpeechSupported] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tempTranscript, setTempTranscript] = useState("");
  const [titleInput, setTitleInput] = useState("");

  const recognitionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.continuous = false;

        recognitionRef.current = recognition;
        setIsSpeechSupported(true);
      } else {
        setIsSpeechSupported(false);
      }
    }
  }, []);

  const toggleRecording = () => {
    if (!isSpeechSupported || !recognitionRef.current) {
      alert("Your browser doesn't support speech recognition. Try Chrome or Edge.");
      return;
    }

    const recognition = recognitionRef.current;

    if (!isRecording) {
      recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript;
        setTempTranscript(spokenText);
        setShowModal(true);
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

  const handleSave = () => {
    if (!titleInput.trim()) {
      toast.error("Title is required to save the entry.");
      return;
    }

    const now = new Date();
    const newEntry = {
      title: titleInput.trim(),
      transcript: tempTranscript,
      time: now.toLocaleTimeString(),
      date: now.toLocaleDateString(),
    };

    const savedEntries = JSON.parse(localStorage.getItem("audio") || "[]");
    localStorage.setItem("audio", JSON.stringify([newEntry, ...savedEntries]));
    setTranscript(tempTranscript);
    setTitleInput("");
    setShowModal(false);
    toast.success("Entry saved successfully!");
  };

  const handleCancel = () => {
    setShowModal(false);
    setTitleInput("");
    setTempTranscript("");
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

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Enter Title for Entry</h3>
            <input
              type="text"
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
              placeholder="Title"
            />
            <div className="modal-buttons">
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
