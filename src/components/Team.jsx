import React from "react";
import about from "../assets/about.png";
import chef from "../assets/chef.avif";

import chef2 from "../assets/chef2.jpg";
import chef3 from "../assets/chef3.webp";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <>
      <section class="section about">
        <div class="container">
          <div class="about_container grid">
            <div class="about_banner">
              <img src={about} alt="" class="img-cover" />
            </div>

            <div class="about_content">
              <h1 class="section_title">
                Discover and Reserve Your Table with Special Menu Every day
              </h1>

              <p class="about_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis recusandae quas, laboriosam corrupti repellat, dicta
                totam minima ducimus earum sit cupiditate! Consequuntur rerum
                molestiae reprehenderit.
              </p>

              <a href="#" class="btn btn-yellow">
                Reservation
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="section meet">
        <div class="container">
          <h3 class="section_title" id="About">
            Meet Our Master Chef
          </h3>

          <div class="meet_container grid">
            <div class="meet_card">
              <div class="meet_banner">
                <img src={chef} alt="" class="img-cover" />
              </div>

              <h2 class="meet_title">Kunle Adetunji</h2>

              <p class="meet_profession">Master Chef</p>

              <div class="social_list">
                <a href="#" class="social_link">
                  <FaFacebook />
                </a>
                <a href="#" class="social_link">
                  <FaTwitter />
                </a>
                <a href="#" class="social_link">
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div class="meet_card">
              <div class="meet_banner">
                <img src={chef2} alt="" class="img-cover" />
              </div>

              <h2 class="meet_title">ChiChi Bridget</h2>

              <p class="meet_profession">Master Chef</p>

              <div class="social_list">
                <a href="#" class="social_link">
                  <FaFacebook />
                </a>
                <a href="#" class="social_link">
                  <FaTwitter />
                </a>
                <a href="#" class="social_link">
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div class="meet_card">
              <div class="meet_banner">
                <img src={chef3} alt="" class="img-cover" />
              </div>

              <h2 class="meet_title">Daniella Ayodele</h2>

              <p class="meet_profession">Master Chef</p>

              <div class="social_list">
                <a href="#" class="social_link">
                  <FaFacebook />
                </a>
                <a href="#" class="social_link">
                  <FaTwitter />
                </a>
                <a href="#" class="social_link">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
