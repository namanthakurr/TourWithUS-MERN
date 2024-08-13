import React from "react";

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
function Review() {
  return (
    <div className="Revieww">
      <p>What the press says</p>
      <div className="tabu">
        <div class="tab">
          <button
            class="tablinks"
            onMouseOver={(event) => {
              openCity(event, "London");
            }}
          >
            <img src="/images/yourstory.jpg" style={{ width: "100px" }} alt="" />
          </button>
          <button
            class="tablinks"
            onMouseOver={(event) => {
              openCity(event, "Paris");
            }}
          >
            <img src="/images/thehindu.jpg" style={{ width: "100px" }} alt="" />
          </button>
          <button
            class="tablinks"
            onMouseOver={(event) => {
              openCity(event, "Tokyo");
            }}
          >
            <img src="/images/NASCOM.png" style={{ width: "100px" }} alt="" />
          </button>
          <button
            class="tablinks"
            onMouseOver={(event) => {
              openCity(event, "to");
            }}
          >
            <img src="/images/TCT.png" style={{ width: "100px" }} alt="" />
          </button>
          <button
            class="tablinks"
            onMouseOver={(event) => {
              openCity(event, "yo");
            }}
          >
            <img src="/images/TOI.jpg" style={{ width: "100px" }} alt="" />
          </button>
        </div>

        <div id="London" class="tabcontent">
          <h3>
            “Tour-With-Us is also carving a niche for itself in this space and
            intends to become one-stop shop for personalised vacation”
          </h3>
          <p>YourStory Jun 08, 2019 Read more on Yourstory</p>
        </div>

        <div id="Paris" class="tabcontent">
          <h3>
            With offbeat experiences and a platter-full of trending
            destinations, Tour-With-Us is helping change the way people travel”
          </h3>
          <p>The Hindu Apr 22, 2019 Read more on The Hindu</p>
        </div>

        <div id="to" class="tabcontent">
          <h3>
            “Tailor made to suit the needs of the travellers,Tour-With-Us
            offers a much-needed respite from the packaged tours”
          </h3>
          <p>Nasscom May 30, 2019 Read more on Nasscom</p>
        </div>
        <div id="Tokyo" class="tabcontent">
          <h3>
            “Tour-With-Us uses its unique matching algorithms and price
            comparison engine to help travellers create customised tour packages
            at competitive online prices.”
          </h3>
          <p>Economic Times Feb 18, 2019 Read more on Economic Times</p>
        </div>
        <div id="yo" class="tabcontent">
          <h3>
            “Tour-With-Us has helped book international vacations for over
            10,000 travelers since 2014”
          </h3>
          <p>
            The Times of India Mar 04, 2019 Read more on The Times Of India.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Review;
