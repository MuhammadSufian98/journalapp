"use client";
import "./globals.css";
import { useRouter } from "next/navigation";
import { useAppContext } from "./Context";

export default function Home() {
  const { name, setName, setRole } = useAppContext();
  const router = useRouter();

  const handleLogin = (role) => {
    setRole(role);
    router.push(`/${role}/dashboard`);
  };

  return (
    <div className="Main">
      <div className="background-container">
        <div className="blob" />
        <div className="blob" />
        <div className="blob" />
      </div>

      <div className="animated-bg-page">
        <div className="card">
          <h1 className="title">Welcome to Journal Lite</h1>
          <input
            type="text"
            placeholder="Enter Name"
            className="input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <div className="button-group">
            <button
              className="btn"
              disabled={!name}
              onClick={() => {
                handleLogin("coach");
                localStorage.setItem("role", "coach");
              }}
            >
              Login as Coach
            </button>
            <button
              className="btn"
              disabled={!name}
              onClick={() => {
                handleLogin("trainee");
                localStorage.setItem("role", "trainee");
              }}
            >
              Login as Trainee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
