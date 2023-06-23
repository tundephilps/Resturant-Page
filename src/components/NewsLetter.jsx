import React from "react";
import news1 from "../assets/news1.jpg";

import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";

const NewsLetter = () => {
  return (
    <>
      <section class="section newsletter" id="About">
        <div class="container">
          <h3 class="section_title">Welcome To Our Newsletter</h3>

          <div class="newsletter_container grid">
            <div class="newsletter_card">
              <div class="news_banner">
                <img src={news1} alt="" class="img-cover" />
              </div>

              <div class="news_content">
                <h3 class="news_title">
                  Chicken Lettuce Wraps with Lime Drench
                </h3>

                <p class="news_desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  quis error, quod exercitationem qui accusantium?
                </p>
                <a href="#" class="new_button">
                  <span class="span">Read Full Article</span>
                  <i class="bx bx-right-arrow-alt"></i>
                </a>
              </div>
            </div>

            <div class="newsletter_card">
              <div class="news_banner">
                <img src={news2} alt="" class="img-cover" />
              </div>

              <div class="news_content">
                <h3 class="news_title">
                  Chicken Lettuce Wraps with Lime Drench
                </h3>

                <p class="news_desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  quis error, quod exercitationem qui accusantium?
                </p>
                <a href="#" class="new_button">
                  <span class="span">Read Full Article</span>
                  <i class="bx bx-right-arrow-alt"></i>
                </a>
              </div>
            </div>

            <div class="newsletter_card">
              <div class="news_banner">
                <img src={news3} alt="" class="img-cover" />
              </div>

              <div class="news_content">
                <h3 class="news_title">
                  Chicken Lettuce Wraps with Lime Drench
                </h3>

                <p class="news_desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  quis error, quod exercitationem qui accusantium?
                </p>
                <a href="#" class="new_button">
                  <span class="span">Read Full Article</span>
                  <i class="bx bx-right-arrow-alt"></i>
                </a>
              </div>
            </div>
          </div>
          <button class="btn btn-outline_black">See All</button>
        </div>
      </section>

      <section class="section subscribe">
        <div class="container">
          <div class="subscribe_container">
            <h2 class="section_title">Subscribe Our Newsletter</h2>

            <p class="subscribe_desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              similique cupiditate unde.
            </p>

            <div class="wrapper_subscribe-wrap">
              <input
                type="text"
                placeholder="Enter Your Email Here"
                class="input_field"
              />
              <button class="btn btn-yellow">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
