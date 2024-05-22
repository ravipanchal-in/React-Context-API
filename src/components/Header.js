import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">React Context API</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Blog Posts</Link>
        </li>
        <li>
          <Link to="/create-post">Create Posts</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
