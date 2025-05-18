"use client";

import "./dashboard.css";
import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Header from "@/app/components/Header-Footer/Header";
import { useAppContext } from "../../Context";

export default function Dashboard() {
  const router = useRouter();
  const { role } = useParams();
  const { setRole } = useAppContext();

  useEffect(() => {
    if (role) setRole(role);
  }, [role, setRole]);

  return (
    <div>
      <Header />
      <div className="dashboard-main">
        <div className="titleDiv">
          <h1 className="Heading">Welcome, {role}</h1>
        </div>
        <div className="dashboard-content">
          <div className="Container">
            <div className=""></div>
            <div></div>
          </div>
          <div className="Container">
            <div></div>
            <div></div>
          </div>
          <div className="Container">Container3</div>
        </div>
      </div>
    </div>
  );
}
