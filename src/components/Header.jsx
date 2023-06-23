import React from "react";
import Drop from "./Drop";

const Header = () => {
  return (
    <header class="header">
      <div class="container">
        <a href="#" class="logo">
          Africano <span class="span">Resturant</span>
        </a>

        <nav class="nav_menu">
          <ul class="nav_list">
            <li>
              <a href="#" class="nav_link active">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="nav_link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" class="nav_link">
                Menu
              </a>
            </li>
            <li>
              <a href="#" class="nav_link">
                Reservations
              </a>
            </li>
            <li>
              <a href="#" class="nav_link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div class="header_actions">
          <button class="btn btn-outline_white">Book a Table</button>

          <Drop />
        </div>
      </div>
    </header>
  );
};

export default Header;
