"use client";
import "./header.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "../../Context";

export default function Header() {
  const router = useRouter();
  const { setRole, name, setName } = useAppContext();
  const [getName, setGetName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("name");
    setGetName(name);
  }, []);

  const handleRoutes = (path) => {
    const role = localStorage.getItem("role");
    router.push(`/${role}/${path}`);
  };
  const handleToLogin = () => {
    setRole("");
    setName("");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    router.push(`/`);
  };

  return (
    <div className="Main">
      <div className="background-container">
        <div className="blob" />
        <div className="blob" />
        <div className="blob" />
      </div>
      <div className=" animated-bg">
        <div>
          <h1 onClick={() => handleRoutes("dashboard")} className="logoHeading">
            Journal
          </h1>
        </div>
        <div className="LinksDiv">
          <div className="DividedLinksDiv">
            <button onClick={() => handleRoutes("dashboard")} className="Links">
              Dashboard
            </button>
            <button onClick={() => handleRoutes("newEntry")} className="Links">
              New Entry
            </button>
            <button
              onClick={() => handleRoutes("audioEntry")}
              className="Links"
            >
              Audio
            </button>
            <button onClick={() => handleRoutes("timeline")} className="Links">
              Time Line
            </button>
            <button onClick={() => handleRoutes("setting")} className="Links">
              Setting
            </button>
            <button onClick={handleToLogin} className="Links">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
