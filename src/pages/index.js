import React, { useState } from 'react';
import "./index.css";
import Header from "./header.js";
import img1 from "../images/lorem-img-1.png";
import img2 from "../images/lorem-img-2.png";
import img3 from "../images/lorem-img-3.png";
import img4 from "../images/lorem-img-4.png";


const IndexPage = () => {

  // Handles the click on the thumbnail of the videos
  const btnOnclick = (e) => {
    const id = e.target.id;
    if (id === "img2") {
      document.getElementById("myModal").style.display = "block";
    } else if (id === "img3") {
      document.getElementById("myModal2").style.display = "block";
    }
  }

  // Function to stop the video when is playing and close the modal
  const stopVideo = (modal) => {
    var iframes = modal.getElementsByTagName("iframe");
    if (iframes != null) {
      for (let i = 0; i < iframes.length; i++) {
        iframes[i].src = iframes[i].src;
      }
    }
  }

  // Handles the click on X for closing modal
  const spanOnclick = (e) => {
    const id = e.target.id;
    const modal1 = document.getElementById("myModal");
    const modal2 = document.getElementById("myModal2");

    if (id === "close1") {
      stopVideo(modal1);
      modal1.style.display = "none";
    } else if (id === "close2") {
      stopVideo(modal2);
      modal2.style.display = "none";
    }
  }

  return (
    <>
      <Header />
      <main>
        <section className="top-info">
          <h1 className="title">Lorem Ipsum Dolor Conference</h1>
          <button class="hvr-sweep-to-right">Sign up now</button>
        </section>
        <section className="content">
          <div className="content-column-1">
            <div className="status">
              <span id="status-text">Online</span>
              <div id="status-point"></div>
            </div>
            <div id="about">
              <span>About</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa.</p>
            </div>
            <div id="past-events">
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam.”</p>
              <span>2020 Attendee</span>
            </div>
          </div>
          <div className="content-column-2">
            <div className="set-img-1">
              <div className="div-img-1">
                <img className="img-article" id="img1" src={img1} />
              </div>
              <div className="div-img-2">
                <img className="hvr-grow img-article img-bottom" id="img2" src={img2} onClick={btnOnclick} />
              </div>
            </div>
            <div className="set-img-2">
              <div className="div-img-2">
                <img className="img-article img-bottom" id="img4" src={img4} />
              </div>
              <div className="div-img-1">
                <img className="img-article hvr-grow" id="img3" src={img3} onClick={btnOnclick} />
              </div>
            </div>
          </div>
        </section>
        <div id="myModal" class="modal">
          <div class="modal-content">
            <span class="close" id="close1" onClick={spanOnclick}>&times;</span>
            <iframe src="https://www.youtube.com/embed/sP4NMoJcFd4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        <div id="myModal2" class="modal">
          <div class="modal-content">
            <span class="close" id="close2" onClick={spanOnclick}>&times;</span>
            <iframe src="https://www.youtube.com/embed/xuCn8ux2gbs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </main>
    </>
  )
}

export default IndexPage
