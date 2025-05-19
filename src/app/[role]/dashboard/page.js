"use client";

import "./dashboard.css";
import Image from "next/image";
import myPhoto from "../../../../public/plus.png";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Header from "@/app/components/Header-Footer/Header";
import { useAppContext } from "../../Context";

export default function Dashboard() {
  const router = useRouter();
  const { role } = useParams();
  const { setRole } = useAppContext();

  const [entries, setEntries] = useState([]);
  const [audioEntries, setAudioEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(savedEntries);
    const audioEntries = JSON.parse(localStorage.getItem("audio")) || [];
    setAudioEntries(audioEntries);
  }, []);

  useEffect(() => {
    if (role) setRole(role);
  }, [role, setRole]);

  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-main">
        <div className="titleDiv">
          <h1 className="Heading">Welcome, {role}</h1>
        </div>
        <div className="Container">
          {role === "coach" ? (
            <div
              className="TraineeData Border"
              onClick={() => {
                router.push(`/${role}/traineeData`);
              }}
            >
              <h1 className="Heading">All Trainee Data</h1>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="dashboard-content">
          <div className="EntriesDiv">
            <div className="HeadingDiv">
              <h1 className="Heading">Entries:</h1>
            </div>
            <div className="Container">
              <div
                className="EntriesPreview"
                onClick={() => {
                  const role = localStorage.getItem("role");
                  router.push(`/${role}/timeline`);
                }}
              >
                {entries.length === 0 ? (
                  <p>Empty</p>
                ) : (
                  <div className="EntriesList">
                    {entries.map((entry, index) => (
                      <div key={index} className="Entry">
                        <div className="EntryContent">
                          <span style={{ marginRight: "8px" }}>•</span>
                          <span
                            dangerouslySetInnerHTML={{ __html: entry.title }}
                          />
                        </div>
                      </div>
                    ))}
                    {entries.length > 1 && <p className="More">...and more</p>}
                  </div>
                )}
              </div>
              <div className="BTNdiv">
                <button
                  className="EntryButton"
                  onClick={() => {
                    const role = localStorage.getItem("role");
                    router.push(`/${role}/newEntry`);
                  }}
                >
                  Create
                  <Image src={myPhoto} alt="My Image" width={15} />
                </button>
              </div>
            </div>
          </div>
          <div className="EntriesDiv">
            <div className="HeadingDiv">
              <h1 className="ContainerHeading">Audio Transcript:</h1>
            </div>
            <div className="Container">
              <div
                className="EntriesPreview"
                onClick={() => {
                  const role = localStorage.getItem("role");
                  router.push(`/${role}/timeline`);
                }}
              >
                {audioEntries.length === 0 ? (
                  <p>Empty</p>
                ) : (
                  <div className="EntriesList">
                    {audioEntries.map((entry, index) => (
                      <div key={index} className="Entry">
                        <div className="EntryContent">
                          <span style={{ marginRight: "8px" }}>•</span>
                          <span
                            dangerouslySetInnerHTML={{ __html: entry.title }}
                          />
                        </div>
                      </div>
                    ))}
                    {audioEntries.length > 1 && (
                      <p className="More">...and more</p>
                    )}
                  </div>
                )}
              </div>
              <div className="BTNdiv">
                <button
                  className="EntryButton"
                  onClick={() => {
                    const role = localStorage.getItem("role");
                    const toggle = true;
                    router.push(`/${role}/audioEntry?audio=${toggle}`);
                  }}
                >
                  Create
                  <Image src={myPhoto} alt="My Image" width={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
