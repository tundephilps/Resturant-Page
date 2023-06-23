import React from "react";

import menu1 from "../assets/menu_1.png";
import menu2 from "../assets/menu_2.png";
import menu3 from "../assets/menu_3.png";
import menu4 from "../assets/menu_4.png";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <h5 class="logo">
              Africano<span class="span">Resturant</span>
            </h5>

            <ul class="list_footer-social">
              <li>
                <a href="#">
                  <i class="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxl-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bxl-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="hr-footer"></div>

          <div class="footer_list grid">
            <div class="footer_items order-2">
              <h5 class="footer_list-title">Contact</h5>

              <ul class="list_menu">
                <li class="list_menu-items">
                  <i class="bx bxs-phone"></i>
                  <span class="list_menu-text">+234 424 954 824</span>
                </li>
                <li class="list_menu-items">
                  <i class="bx bxs-envelope"></i>
                  <span class="list_menu-text">email.inbox@gmail.com</span>
                </li>
                <li class="list_menu-items">
                  <i class="bx bxs-map"></i>
                  <span class="list_menu-text">
                    23 ikotun road, Lagos, Nigeria
                  </span>
                </li>
              </ul>
            </div>

            <div class="footer_items order">
              <h5 class="footer_list-title">About Us</h5>

              <p class="list_menu-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
                voluptate officia quia ipsa voluptates eum animi. Omnis impedit
                sapiente eligendi earum aliquid. Ipsa, sint. Voluptatibus.
              </p>
            </div>

            <div class="footer_items order-3">
              <h5 class="footer_list-title">Quicklink</h5>
              <ul class="list_menu">
                <li class="list_menu-items">
                  <a href="#" class="list_menu-text">
                    Home
                  </a>
                </li>
                <li class="list_menu-items">
                  <a href="#" class="list_menu-text">
                    About Us
                  </a>
                </li>
                <li class="list_menu-items">
                  <a href="#" class="list_menu-text">
                    Booking
                  </a>
                </li>
                <li class="list_menu-items">
                  <a href="#" class="list_menu-text">
                    Menu
                  </a>
                </li>
              </ul>
            </div>

            <div class="footer_items order-4">
              <div class="footer_items-wrapper">
                <h5 class="footer_list-title">Gallery</h5>
                <a href="#" class="footer_items-link">
                  see more
                </a>
              </div>

              <ul class="footer_menu-slider">
                <li>
                  <img src={menu1} alt="" class="img-cover" />
                </li>
                <li>
                  <img src={menu2} alt="" class="img-cover" />
                </li>
                <li>
                  <img src={menu3} alt="" class="img-cover" />
                </li>
                <li>
                  <img src={menu4} alt="" class="img-cover" />
                </li>
              </ul>
            </div>
          </div>

          <div class="hr-footer"></div>
        </div>

        <div class="footer-bottom">
          <p class="copyright">
            Copyright Tunde Philps. 2023 All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
