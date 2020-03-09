import React from "react";

const Header = () => {
  return (
    <nav>
      <div class="nav-wrapper deep-purple darken-1">
        <a href="/ListaToDo" class="brand-logo">
          Lista de ToDo
        </a>
        <ul class="right">
          <li>
            <a href="/todo">ToDo</a>
          </li>
          <li>
            <a href="/doing">Doing</a>
          </li>
          <li>
            <a href="/done">Done</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
