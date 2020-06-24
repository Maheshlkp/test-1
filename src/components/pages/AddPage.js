import React from "react";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
import { Add } from "../add/Add";
export const AddPage = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Add />
        </div>
      </div>
    </div>
  );
};
