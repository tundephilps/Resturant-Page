import React from "react";
import amala from "../assets/amala.jpg";

import beans from "../assets/beans.webp";

import jollof from "../assets/jollof.jpg";

import pounded from "../assets/pounded.webp";
import shaw from "../assets/shaw.jpg";
import banner from "../assets/banner.png";

import Suya from "../assets/Suya.jpg";

const Reservation = () => {
  return (
    <>
      <section class="reservation" id="Reservations">
        <div class="container">
          <div class="reservation_wrapper">
            <div class="reservation_container grid">
              <div class="reservation_content">
                <h2 class="section_title">
                  Get Up to 80% Offer On This Weekend
                </h2>
                <p class="reservation_desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis aperiam voluptate nam cupiditate sint vero natus
                  incidunt ullam quae. Officiis!
                </p>

                <div class="reservation_button-wrap">
                  <a href="#" class="btn btn-yellow">
                    Reservation
                  </a>

                  <a href="#" class="btn btn-outline_white">
                    Get in Touch
                  </a>
                </div>
              </div>

              <div class="reservation_banner">
                <img src={banner} alt="" class="img-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section menu">
        <div class="container">
          <h2 class="section_title">Our Favorite Menu</h2>
          <div class="menu_container grid">
            <div class="menu_items grid">
              <div class="menu_card">
                <a href="#" class="menu_banner">
                  <img src={jollof} alt="" class="img-cover" />
                </a>

                <div class="menu_content">
                  <div class="menu_content-wrapper">
                    <h2 class="menu_name">Jollof Rice</h2>

                    <div class="line_decoration"></div>
                    <h3 class="price">
                      <span class="span">N</span>280
                    </h3>
                  </div>

                  <div class="menu_desc">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
              </div>

              <div class="menu_card">
                <a href="#" class="menu_banner">
                  <img src={amala} alt="" class="img-cover" />
                </a>

                <div class="menu_content">
                  <div class="menu_content-wrapper">
                    <h2 class="menu_name">Amala</h2>

                    <div class="line_decoration"></div>
                    <h3 class="price">
                      <span class="span">N</span>420
                    </h3>
                  </div>

                  <div class="menu_desc">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
              </div>

              <div class="menu_card">
                <a href="#" class="menu_banner">
                  <img src={shaw} alt="" class="img-cover" />
                </a>

                <div class="menu_content">
                  <div class="menu_content-wrapper">
                    <h2 class="menu_name">Shawrama</h2>

                    <div class="line_decoration"></div>
                    <h3 class="price">
                      <span class="span">N</span>190
                    </h3>
                  </div>

                  <div class="menu_desc">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
              </div>
            </div>

            <div class="menu_items grid">
              <div class="menu_card">
                <a href="#" class="menu_banner">
                  <img src={Suya} alt="" class="img-cover" />
                </a>

                <div class="menu_content">
                  <div class="menu_content-wrapper">
                    <h2 class="menu_name">Suya</h2>

                    <div class="line_descoration"></div>
                    <h3 class="price">
                      <span class="span">N</span>250
                    </h3>
                  </div>

                  <div class="menu_desc">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
              </div>

              <div class="menu_card">
                <a href="#" class="menu_banner">
                  <img src={beans} alt="" class="img-cover" />
                </a>

                <div class="menu_content">
                  <div class="menu_content-wrapper">
                    <h2 class="menu_name">Beans and Dodo</h2>

                    <div class="line_descoration"></div>
                    <h3 class="price">
                      <span class="span">N</span>340
                    </h3>
                  </div>

                  <div class="menu_desc">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
              </div>

              <div class="menu_card">
                <a href="#" class="menu_banner">
                  <img src={pounded} alt="" class="img-cover" />
                </a>

                <div class="menu_content">
                  <div class="menu_content-wrapper">
                    <h2 class="menu_name">Pounded Yam and Egusi</h2>

                    <div class="line_decoration"></div>
                    <h3 class="price">
                      <span class="span">N</span>130
                    </h3>
                  </div>

                  <div class="menu_desc">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservation;
