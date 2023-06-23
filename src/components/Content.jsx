import React from "react";
import vegetarian from "../assets/vegetarian.png";

import chef from "../assets/chef.png";
import foodtray from "../assets/food-tray.png";

const Content = () => {
  return (
    <section class="section choose">
      <div class="container">
        <div class="wrapper_choose">
          <h3 class="section_title">Why People Choose Us</h3>

          <div class="choose_container grid">
            <div class="choose_items">
              <div class="choose_card">
                <div class="choose_icon">
                  <img src={vegetarian} alt="" class="img-cover" />
                </div>

                <div class="choose_info">
                  <h3 class="choose_title">Always Fesh Ingredient</h3>
                  <p class="choose_desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus quidem rerum corporis!
                  </p>
                </div>
              </div>
            </div>

            <div class="choose_items mt_5">
              <div class="choose_card">
                <div class="choose_icon">
                  <img src={chef} alt="" class="img-cover" />
                </div>

                <div class="choose_info">
                  <h3 class="choose_title">Specialist Chef</h3>
                  <p class="choose_desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus quidem rerum corporis!
                  </p>
                </div>
              </div>
            </div>

            <div class="choose_items">
              <div class="choose_card">
                <div class="choose_icon">
                  <img src={foodtray} alt="" class="img-cover" />
                </div>

                <div class="choose_info">
                  <h3 class="choose_title">Menu for every taste</h3>
                  <p class="choose_desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus quidem rerum corporis!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
