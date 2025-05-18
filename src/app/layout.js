"use client";

import { AppContextProvider } from "./Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <ToastContainer />
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
