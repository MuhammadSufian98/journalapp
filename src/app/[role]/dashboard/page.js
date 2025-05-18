"use client";

import "./dashboard.css";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Header from "@/app/components/Header-Footer/Header";
import { useAppContext } from "../../Context";

export default function Dashboard() {
  const { role } = useParams();
  const { setRole } = useAppContext();

  const [entries, setEntries] = useState([]);
  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    setEntries(savedEntries);
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
        <div className="dashboard-content">
          <div>
            <h1 className="Heading">Entries:</h1>
          </div>
          <div className="Container">
            <div className="EntriesPreview" >
              {entries.length === 0 ? (
                <p>Empty</p>
              ) : (
                <>
                  <div className="Entry">
                    <div className="EntryInnerDiv">
                      <div className="ActualEntry">
                        <div
                          dangerouslySetInnerHTML={{ __html: entries[0].html }}
                        />
                      </div>
                    </div>
                  </div>

                  {entries.length > 1 && (
                    <p className="More">
                      ...and more
                    </p>
                  )}
                </>
              )}
            </div>
            <div className="EntryButton"></div>
          </div>
          <div>
            <h1 className="ContainerHeading">Audio Transcript:</h1>
          </div>
          <div className="Container flexDirectionReverse">
            <div className="EntriesPreview"></div>
            <div className="EntryButton"></div>
          </div>
          <div className="Container Border">Container3</div>
        </div>
      </div>
    </div>
  );
}
