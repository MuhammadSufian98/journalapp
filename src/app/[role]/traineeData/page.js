"use client";

import "./traineeData.css";
import { useEffect, useState } from "react";
import Header from "@/app/components/Header-Footer/Header";

const trainees = [
  {
    name: "Alice",
    entries: [
      {
        type: "text",
        title: "Focus Day",
        content: "Stayed focused and completed all tasks.",
      },
      {
        type: "audio",
        title: "Voice Log",
        transcript: "Feeling confident about my progress.",
      },
    ],
  },
  {
    name: "Brian",
    entries: [
      {
        type: "text",
        title: "Start",
        content: "Looking forward to learning.",
      },
      {
        type: "audio",
        title: "Quick Note",
        transcript: "Need to revise today's lesson.",
      },
    ],
  },
  {
    name: "Chloe",
    entries: [
      {
        type: "text",
        title: "Breakthrough",
        content: "Finally understood async/await in JavaScript!",
      },
      {
        type: "audio",
        title: "Update",
        transcript: "Need to ask coach about project feedback.",
      },
    ],
  },
  {
    name: "David",
    entries: [
      {
        type: "text",
        title: "Reflection",
        content: "Struggled with focus today, but still made progress.",
      },
      {
        type: "audio",
        title: "Mood Log",
        transcript: "Feeling tired but motivated to continue.",
      },
    ],
  },
  {
    name: "Ella",
    entries: [
      {
        type: "text",
        title: "Great Day",
        content: "Had a productive study session and finished all tasks.",
      },
      {
        type: "audio",
        title: "Summary",
        transcript: "Everything went well today. I'm happy with the results.",
      },
    ],
  },
];

export default function Dashboard() {
  const [selectedTraineeIndex, setSelectedTraineeIndex] = useState(null);

  return (
    <div className="trainee">
      <Header />
      <div className="trainee-main">
        <div className="titleDiv">
          <h1 className="Heading">All Trainees Data</h1>
        </div>
        <div className="TraineeDataDiv">
          {trainees.map((trainee, index) => (
            <div key={index}>
              <h3
                className="Heading"
                onClick={() =>
                  setSelectedTraineeIndex(
                    selectedTraineeIndex === index ? null : index
                  )
                }
              >
                {trainee.name}
              </h3>

              {selectedTraineeIndex === index && (
                <div style={{ marginLeft: "20px" }}>
                  <h4>Text Entries</h4>
                  {trainee.entries
                    .filter((entry) => entry.type === "text")
                    .map((entry, i) => (
                      <div key={i}>
                        <p>
                          <strong>{entry.title}:</strong> {entry.content}
                        </p>
                      </div>
                    ))}

                  <h4>Audio Entries</h4>
                  {trainee.entries
                    .filter((entry) => entry.type === "audio")
                    .map((entry, i) => (
                      <div key={i}>
                        <p>
                          <strong>{entry.title}:</strong> {entry.transcript}
                        </p>
                      </div>
                    ))}
                </div>
              )}
              <hr />
            </div>
          ))}
        </div>
        <h2 className="Warning">
          ⚠️ Its just a sample data in an array. We can implement this feature
          when we connect a database and backend
        </h2>
      </div>
    </div>
  );
}
