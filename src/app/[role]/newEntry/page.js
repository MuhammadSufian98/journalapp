"use client";

import React, { useState } from "react";
import Header from "@/app/components/Header-Footer/Header";
import NewEntry from "../../components/Entries/NewEntry";

export default function Entry() {
  return (
    <div>
      <Header />
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
          position: "relative",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          opacity: 0.6,
          zIndex: 5,
        }}
      >
        <NewEntry />
      </div>
    </div>
  );
}
