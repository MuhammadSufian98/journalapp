"use client";

import "./setting.css";
import Header from "@/app/components/Header-Footer/Header";
import { useAppContext } from "../../Context";
import { useState } from "react";

export default function AudioEntry() {
  const { name, setName } = useAppContext();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="wrapper">
      <Header />
      <div className="panel">
        <div className="content">
          {!showPopup ? (
            <div className="inputDiv">
              <h1 className="ChangeNameTitle">
                Do you want to change your name?
              </h1>
              <button className="btn" onClick={() => setShowPopup(true)}>
                Yes
              </button>
            </div>
          ) : (
            <div className="popupOverlay">
              <div className="popupBox">
                <div className="PopupHeadingCancelDiv">
                  <h1 className="ChangeNameTitle">Change Name:</h1>
                  <button
                    className="closeBtn"
                    onClick={() => setShowPopup(false)}
                  >
                    ✖
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button className="btn" onClick={() => setShowPopup(false)}>
                  Change Name
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
