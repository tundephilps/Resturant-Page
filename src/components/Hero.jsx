import React from "react";
import main from "../assets/main.jpg";

const Hero = () => {
  return (
    <section
      class="hero"
      id="Home"
      style={{
        backgroundImage: `url(${main})`,
      }}
    >
      <div class="container">
        <div class="hero_content">
          <h3 class="home_subtitle">
            Welcome to{" "}
            <span class="logo">
              AFRICANO<span class="span">RESTURANT</span>
            </span>
          </h3>

          <h2 class="home_title">
            Book Your <br />
            Table Today
          </h2>

          <p class="home_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, itaque quis dolor vero sequi adipisci dolore maxime,
            nam quibusdam corrupti vel, quia et sapiente nemo!
          </p>

          <a href="#" class="btn btn-yellow">
            Reservation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
