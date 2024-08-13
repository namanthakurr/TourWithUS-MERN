import React from "react";
import Ausvideo from "../video/Ausvideo.mp4";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import "bootstrap/dist/css/bootstrap.min.css";

function Australia() {
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
          <p>Australia Tour Packages</p>
          <span>
            Land Down Under is now fully open for International Travellers
          </span>
        </div>
        <div>
          <button type="button">Request Call Back</button>
        </div>
      </div>

      <div>
        <div className="Bali-video">
          <video src={Ausvideo} autoPlay loop muted className="Bali-v" />
        </div>
        <div className="Bali-black-box">
          <div className="Bali-info">
            <div>
              IDEAL DURATION
              <br />
              10-12 Days
            </div>
            <div>
              VISA PROCESSING
              <br />
              10-15 Working days
            </div>
            <div>
              BEST TIME
              <br />
              All Year
            </div>
            <div>
              STARTING PRICE
              <br />
              ₹67,873
            </div>
          </div>
          <div className="Bali-rating">
            OUR EXPERTISE
            <br />
            4.6 from 2.1k travellers
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
                    <img src="Aus1.jpg" className="Hotel-image" alt="" />
                  </div>
                  <div className="Hotel-Info">
                    <blockquote>
                      {" "}
                      8 Days Australia Itinerary for Couples
                    </blockquote>
                    <p>
                      7 Nights: Cairns (2N) {">"} Hamilton Island (3N) +2Cities
                    </p>
                    <p>
                      {" "}
                      {"\u2713"} 3.5{"\u2606"}Hotels {"\u2713"} 5 activities{" "}
                      {"\u2713"} Shared transfer
                    </p>
                    <p> {"\u2713"} 24x7 concierge</p>
                    <hr />
                    <div className="Bali-price">
                      <p>
                        ₹391,216
                        <br /> per person
                      </p>
                      <button type="button">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="Bali-Info-Footer">
                  <p> {"\u2022"} Full-Day Great Barrier Reef Sailing Trip</p>
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
                    <img src="Aus2.jpg" className="Hotel-image" alt="" />
                  </div>
                  <div className="Hotel-Info">
                    <blockquote>
                      10 Day Australia Tour Package for First Time Visitors
                    </blockquote>
                    <p>9 Nights: Melbourne (3N) {">"}Sydney (3N) +2Cities</p>
                    <p>
                      {" "}
                      {"\u2713"} 3.5{"\u2606"}Hotels {"\u2713"} 6 activities{" "}
                      {"\u2713"} Shared transfer
                    </p>
                    <p> {"\u2713"} 24x7 concierge</p>
                    <hr />
                    <div className="Bali-price">
                      <p>
                        ₹281,914
                        <br /> per person
                      </p>
                      <button type="button">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="Bali-Info-Footer">
                  <p> {"\u2022"} Great Ocean Road Sunset Tour</p>
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
                    <img src="Aus3.jpg" className="Hotel-image" alt="" />
                  </div>
                  <div className="Hotel-Info">
                    <blockquote>
                      Adventurous 10 Days Australia Trip for Couples
                    </blockquote>
                    <p>9 Nights:Cairns (3N) {">"}Sydney (3N) +2Cities</p>
                    <p>
                      {" "}
                      {"\u2713"} 3.5{"\u2606"}Hotels {"\u2713"} 6 activities{" "}
                      {"\u2713"} Shared transfer
                    </p>
                    <p> {"\u2713"} 24x7 concierge</p>
                    <hr />
                    <div className="Bali-price">
                      <p>
                        ₹284,798
                        <br /> per person
                      </p>
                      <button type="button">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="Bali-Info-Footer">
                  <p>
                    {" "}
                    {"\u2022"}Fitzroy Island Transfers and Tours from Cairns
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
                    <img src="Aus4.jpg" className="Hotel-image" alt="" />
                  </div>
                  <div className="Hotel-Info">
                    <blockquote>
                      10 Days Western Australia Tour Package from India
                    </blockquote>
                    <p>9 Nights: Perth(3N) {">"} Cairns(3N) +2Cities</p>
                    <p>
                      {" "}
                      {"\u2713"} 4{"\u2606"}Hotels {"\u2713"} 4 activities{" "}
                      {"\u2713"} Shared transfer
                    </p>
                    <p> {"\u2713"} 24x7 concierge</p>
                    <hr />
                    <div className="Bali-price">
                      <p>
                        ₹284,599
                        <br /> per person
                      </p>
                      <button type="button">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="Bali-Info-Footer">
                  <p>
                    {" "}
                    {"\u2022"} Rottnest Island Full Day Sail Cruise from
                    Fremantle
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
                    <img src="Aus5.jpg" className="Hotel-image" alt="" />
                  </div>
                  <div className="Hotel-Info">
                    <blockquote> 9 Nights Australia Tour from India</blockquote>
                    <p>9 Nights: Perth(3N) {">"} Gaba (3N) +2Cities</p>
                    <p>
                      {" "}
                      {"\u2713"} 4{"\u2606"}Hotels {"\u2713"} 5 activities{" "}
                      {"\u2713"} Shared transfer
                    </p>
                    <p> {"\u2713"} 24x7 concierge</p>
                    <hr />
                    <div className="Bali-price">
                      <p>
                        ₹348,899
                        <br /> per person
                      </p>
                      <button type="button">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="Bali-Info-Footer">
                  <p>
                    {" "}
                    {"\u2022"}Rottnest Island Full Day Sail Cruise from
                    Fremantle
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

export default Australia;
