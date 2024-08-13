import React from "react";
// import Balivideo1 from "../video/Balivideo1.mp4";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import "bootstrap/dist/css/bootstrap.min.css";

function Bali() {
  return (
    <div>
      <div className="navbar-container">
        <Navbar
          expand="lg"
          variant="dark"
          style={{ backgroundColor: "#900C3E" }}
        >
          <Container>
            <Navbar.Brand href="#">
              <img src="verma.png" className="logo" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
              <Nav className="me-auto">
                <Nav.Link href="#" active>
                  Home
                </Nav.Link>
                <NavDropdown
                  title="International Holidays"
                  id="basic-nav-dropdown-link"
                >
                  <NavDropdown.Item href="#">Bali</NavDropdown.Item>
                  <NavDropdown.Item href="#">Dubai</NavDropdown.Item>
                  <NavDropdown.Item href="#">Thailand</NavDropdown.Item>
                  <NavDropdown.Item href="#">London</NavDropdown.Item>
                  <NavDropdown.Item href="#">Australia</NavDropdown.Item>
                  <NavDropdown.Item href="#">Newzealand</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">More countries</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Honeymoon Gateways" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">
                    Bali Honeymoon Packages
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Dubai Honeymoon Packages
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Greece Honeymoon Packages
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Brazil Honeymoon Packages
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Australia Honeymoon Packages
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">More Packages</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Packages by Interest"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#">
                    International Tour Packages
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Solo Tour Packages
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Couple Tour Packages
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Family Tour Packages
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Friends Group Tour Packages
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">
                    More Luxuries Packages
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Search" id="basic-nav-dropdown-search">
                  <NavDropdown.Item href="#">More Searches</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="Bali">
        <div>
          {" "}
          <p>Bali Tour Packages</p>
          <span>
            Paradise of lush landscapes, vibrant culture, and tranquil
            spirituality
          </span>
        </div>
        <div>
          <button type="button">Request Call Back</button>
        </div>
      </div>

      <div>
        <div className="Bali-video">
          {/* <video src={Balivideo1} autoPlay loop muted className="Bali-v" /> */}
        </div>
        <div className="Bali-black-box">
          <div className="Bali-info">
            <div>
              IDEAL DURATION
              <br />5 nights
            </div>
            <div>
              VISA PROCESSING
              <br />
              Visa on Arrival
            </div>
            <div>
              BEST TIME
              <br />
              Apr- Jul{" "}
            </div>
            <div>
              STARTING PRICE
              <br />
              ₹17,887
            </div>
          </div>
          <div className="Bali-rating">
            OUR EXPERTISE
            <br />
            4.7 from 13.5k travellers
          </div>
        </div>
      </div>

      <div className="Balimainbox">
        <br />
        <br />
        <div className="BaliInfo">
          <div className="Budget">
            <div className="Budget-Info">
              <p>Budget</p>
              <input
                type="checkbox"
                value="50K"
                style={{ width: "20px", height: "20px" }}
              />
              <label> Below ₹50k </label>
              <br />
              <input
                type="checkbox"
                value="75k"
                style={{ width: "20px", height: "20px" }}
              />
              <label> ₹50k - ₹75k </label>
              <br />
              <input
                type="checkbox"
                value="1lakh"
                style={{ width: "20px", height: "20px" }}
              />
              <label> ₹75k - ₹1L </label>
              <br />
              <input
                type="checkbox"
                value="2laKh"
                style={{ width: "20px", height: "20px" }}
              />
              <label> ₹1L - ₹1.5L </label>
              <br />
              <input
                type="checkbox"
                value="Above 2lakh"
                style={{ width: "20px", height: "20px" }}
              />
              <label>Above ₹2L </label>
              <br />
              <hr />
            </div>

            <div className="Budget-Info">
              <p>No of days</p>
              <input
                type="checkbox"
                value="days"
                style={{ width: "20px", height: "20px" }}
              />
              <label> 3-5 days </label>
              <br />
              <input
                type="checkbox"
                value="days"
                style={{ width: "20px", height: "20px" }}
              />
              <label>4-8 days </label>
              <br />
              <input
                type="checkbox"
                value="days"
                style={{ width: "20px", height: "20px" }}
              />
              <label> 9-12 days </label>
              <br />
              <input
                type="checkbox"
                value="days"
                style={{ width: "20px", height: "20px" }}
              />
              <label> 13-16 days </label>
              <br />
              <input
                type="checkbox"
                value="days"
                style={{ width: "20px", height: "20px" }}
              />
              <label>Above 16 days </label>
              <br />
              <hr />
            </div>

            <div className="Budget-Info">
              <p>Hotel ratings</p>
              <input
                type="checkbox"
                value="Rating"
                style={{ width: "20px", height: "20px" }}
              />
              <label> 5 star </label>
              <br />
              <input
                type="checkbox"
                value="Rating"
                style={{ width: "20px", height: "20px" }}
              />
              <label>4 star </label>
              <br />
              <input
                type="checkbox"
                value="Rating"
                style={{ width: "20px", height: "20px" }}
              />
              <label> 3 star </label>

              <hr />
            </div>
          </div>

          <div className="Tour-column">
            <div className="Tour-Info">
              <div
                style={{ borderRadius: "10px", overflow: "hidden" }}
                className="Hotel"
              >
                <div className="Hotel-Review">
                  <div className="imgg">
                    <img
                      src="Baliactivity.jpg"
                      className="Hotel-image"
                      alt=""
                    />
                  </div>
                  <div className="Hotel-Info">
                    <blockquote>
                      {" "}
                      Unforgettable 6 Days Bali Tour Package
                    </blockquote>
                    <p>5 Nights: Ubud (2N) {">"} Kuta (3N)</p>
                    <p>
                      {" "}
                      {"\u2713"} 4{"\u2606"}Hotels {"\u2713"} 3 activities{" "}
                      {"\u2713"} Shared transfer
                    </p>
                    <p> {"\u2713"} 24x7 concierge</p>
                    <hr />
                    <div className="Bali-price">
                      <p>
                        ₹27,700
                        <br /> per person
                      </p>
                      <button type="button">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="Bali-Info-Footer">
                  <p>
                    {" "}
                    {"\u2022"} Kintamani Volcano + Tegallalang Rice Terraces +
                    Ubud monkey forest
                  </p>
                </div>
              </div>
            </div>
            <div className="Tour-Info">
              <div
                style={{ borderRadius: "10px", overflow: "hidden" }}
                className="Hotel"
              >
                <div className="Hotel-Review">
                  <div className="imgg">
                    <img src="Hoteelview.jpg" className="Hotel-image" alt="" />
                  </div>
                  <div className="Hotel-Info">
                    <blockquote>Popular Bali Itinerary For 6 Days</blockquote>
                    <p>5 Nights: Kuta (2N) {">"} Ubud (3N)</p>
                    <p>
                      {" "}
                      {"\u2713"} 4{"\u2606"}Hotels {"\u2713"} 3 activities{" "}
                      {"\u2713"} Shared transfer
                    </p>
                    <p> {"\u2713"} 24x7 concierge</p>
                    <hr />
                    <div className="Bali-price">
                      <p>
                        ₹31,000
                        <br /> per person
                      </p>
                      <button type="button">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="Bali-Info-Footer">
                  <p>
                    {" "}
                    {"\u2022"} Any two beaches (Nusa Dua Beach/Pandawa
                    Beach/Padang Padang Beach) + GWK Culture Park + <br />{" "}
                    Uluwatu Cliff Temple + Kecak Dance.
                  </p>
                </div>
              </div>
            </div>
            <div className="Tour-Info">
              <div
                style={{ borderRadius: "10px", overflow: "hidden" }}
                className="Hotel"
              >
                <div className="Hotel-Review">
                  <div className="imgg">
                    <img src="Skydiving.jpg" className="Hotel-image" alt="" />
                  </div>
                  <div className="Hotel-Info">
                    <blockquote>
                      Adventure-Packed Bali Vacation Package
                    </blockquote>
                    <p>5 Nights:Kuta (3N) {">"} Ubud (2N)</p>
                    <p>
                      {" "}
                      {"\u2713"} 4.5{"\u2606"}Hotels {"\u2713"} 4 activities{" "}
                      {"\u2713"} Shared transfer
                    </p>
                    <p> {"\u2713"} 24x7 concierge</p>
                    <hr />
                    <div className="Bali-price">
                      <p>
                        ₹37,200
                        <br /> per person
                      </p>
                      <button type="button">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="Bali-Info-Footer">
                  <p>
                    {" "}
                    {"\u2022"} Parasailing, Banana Boat, Jet Ski With Shared
                    Transfers
                  </p>
                </div>
              </div>
            </div>
            <div className="Tour-Info">
              <div
                style={{ borderRadius: "10px", overflow: "hidden" }}
                className="Hotel"
              >
                <div className="Hotel-Review">
                  <div className="imgg">
                    <img src="Scene.jpg" className="Hotel-image" alt="" />
                  </div>
                  <div className="Hotel-Info">
                    <blockquote>
                      Best Value 5 Nights Bali Indonesia Tour Package
                    </blockquote>
                    <p>5 Nights: Kuta (5N)</p>
                    <p>
                      {" "}
                      {"\u2713"} 4{"\u2606"}Hotels {"\u2713"} 4 activities{" "}
                      {"\u2713"} Shared transfer
                    </p>
                    <p> {"\u2713"} 24x7 concierge</p>
                    <hr />
                    <div className="Bali-price">
                      <p>
                        ₹24,599
                        <br /> per person
                      </p>
                      <button type="button">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="Bali-Info-Footer">
                  <p>
                    {" "}
                    {"\u2022"} Any two beaches (Nusa Dua Beach/Pandawa
                    Beach/Padang Padang Beach) + GWK Culture Park + <br />
                    Uluwatu Cliff Temple + Kecak Dance.
                  </p>
                </div>
              </div>
            </div>
            <div className="Tour-Info">
              <div
                style={{ borderRadius: "10px", overflow: "hidden" }}
                className="Hotel"
              >
                <div className="Hotel-Review">
                  <div className="imgg">
                    <img src="Celebration.jpg" className="Hotel-image" alt="" />
                  </div>
                  <div className="Hotel-Info">
                    <blockquote>
                      {" "}
                      Eat Pray Love: Bali Package with Nusa Penida
                    </blockquote>
                    <p>5 Nights: Ubud (3N) {">"} Kuta (2N)</p>
                    <p>
                      {" "}
                      {"\u2713"} 4{"\u2606"}Hotels {"\u2713"} 2 activities{" "}
                      {"\u2713"} Shared transfer
                    </p>
                    <p> {"\u2713"} 24x7 concierge</p>
                    <hr />
                    <div className="Bali-price">
                      <p>
                        ₹38,499
                        <br /> per person
                      </p>
                      <button type="button">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="Bali-Info-Footer">
                  <p>
                    {" "}
                    {"\u2022"} Guided Bali Tour: Ulun Danu Beratan Temple +
                    Tanah Lot
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bali;
