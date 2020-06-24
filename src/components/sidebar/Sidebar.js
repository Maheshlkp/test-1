import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Add</Link>
        </li>
        <li>
          <Link to="/result">Result</Link>
        </li>
      </ul>
    </nav>
  );
};
