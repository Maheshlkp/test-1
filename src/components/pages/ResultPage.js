import React from "react";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
import { Result } from "../result/Result";
export const ResultPage = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Result />
        </div>
      </div>
    </div>
  );
};
