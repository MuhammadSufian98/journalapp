"use client";

import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./newEntry.css";
import { toast } from "react-toastify";
import { useAppContext } from "../../Context";

export default function NewEntry() {
  const { content, setContent } = useAppContext();
  const editor = useEditor({
    extensions: [StarterKit],
    content: "Type Something Amazing",
    immediatelyRender: false,
  });

  const handleSave = () => {
    const html = editor.getHTML();
    const now = new Date();

    setContent((prev) => {
      const newEntry = {
        html,
        time: now.toLocaleTimeString(),
        date: now.toLocaleDateString(),
      };

      const updatedHtml = [...prev.html, newEntry];

      localStorage.setItem("entries", JSON.stringify(updatedHtml));
      toast.success("Entry saved successfully!");
      return {
        ...prev,
        html: updatedHtml,
      };
    });
  };

  return (
    <div>
      <div className="NewEntry-main">
        <div className="titleDiv">
          <h1 className="Heading">Create New Entry</h1>
        </div>
        <div className="Attributes">
          <button
            className="Buttons"
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            Bold
          </button>
          <button
            className="Buttons"
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            Italic
          </button>
          <button
            className="Buttons"
            onClick={() => {
              editor
                .chain()
                .focus()
                .insertContent("<p></p>")
                .setNode("heading", { level: 1 })
                .run();
            }}
          >
            New H1
          </button>
          <button
            className="Buttons"
            onClick={() => {
              editor
                .chain()
                .focus()
                .insertContent("<p></p>")
                .setNode("heading", { level: 2 })
                .run();
            }}
          >
            H2
          </button>
          <button
            className="Buttons"
            onClick={() => {
              editor
                .chain()
                .focus()
                .insertContent("<p></p>")
                .setNode("heading", { level: 3 })
                .run();
            }}
          >
            H3
          </button>
        </div>
        <div style={{ maxWidth: "600px", margin: "auto", paddingTop: "40px" }}>
          <EditorContent
            editor={editor}
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "10px",
            }}
          />
          <div className="SaveBTN">
            <button className="Buttons" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
