import React from "react";
import "./home.css";
import img from "../../Assets/images/desk_laptop.jpg";
import img2 from "../../Assets/images/desktwomonitors.jpg";
import img3 from "../../Assets/images/customarrow.png";
import img4 from "../../Assets/images/icons8-email-64.png";

export default function home() {
  return (
    <>
      <div className="home">
        <img
          alt="work desk with laptop computer on top. background is a partially uncovered window"
          className="home_img1"
          src={img}
        ></img>
        <div className="home_rectangle1">
          <section className="home_rectangle1_title">
            Web Development & Design
          </section>
          <section className="home_rectangle1_text">
            I have experience in multiple fields with studio environments. I am
            30 and am expanding into Web development using techonologies like,
            JavaScript, Node.js, MySQL, Jquery, CSS, HTML and more.
          </section>
        </div>
        <br></br>
      </div>
      <section className="home2">
        <div className="home2_rectangle2">
          <section className="home2_rectangle2_text">
            <h2 className="home2_rectangle2_text_text">
              “My Mission in life is not to merely to survive, but to thrive;
              and to do so with some passion, some compassion, some humor and
              some style.”
            </h2>
            <p className="home2_rectangle2_author_text">
              <h2>Maya Angelou</h2>
            </p>
          </section>
        </div>
      </section>
      <section className="home3">
        <div className="home3_rectangle3">
          <section className="home3_rectangle3_text">Contact Me @</section>
          <img className="img3" alt="#" src={img3} />
          <img className="img2" alt="#" src={img2} />
        </div>
      </section>
      <section className="home4">
        <div className="home4_rectangle4">
          <div className="home4_rectangle5">
            <a href="mailto:felipevilla.webdev@gmail.com">
              <img className="img4" alt="#" src={img4} />
              <div className="home4_text">
                Webdesign/Web Dev Felipevilla.webdev@gmail.com
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
