/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Itinerary = () => {
  const { state } = useParams();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [userId, setUserId] = useState(null);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  useEffect(() => {
    const fetchItineraryData = async () => {
      try {
        const response = await axios.get(`/api/itinerary/${state}`);
        setData(response.data);
        setFilteredData(response.data); // Initialize filtered data with the full data set
      } catch (error) {
        console.error("Error fetching itinerary data:", error);
        setData([]); // Set to an empty array or some default data on error
      }
    };

    fetchItineraryData();
  }, [state]);

  useEffect(() => {
    const fetchUserId = () => {
      const storedUserId = sessionStorage.getItem("userId");
      if (storedUserId) {
        setUserId(storedUserId);
        console.log("User ID fetched:", storedUserId);
      } else {
        console.warn("No userId found in sessionStorage");
      }
    };

    fetchUserId();
  }, []);

  const handleBookTour = async (tour) => {
    if (userId) {
      try {
        console.log("Attempting to book tour with ID:", tour._id);
        const response = await axios.post("/api/book-tour", {
          userId,
          tourId: tour._id,
          state // Add the state to the request body
        });
        console.log("Response from server:", response.data);
        alert("Your tour is booked");
      } catch (error) {
        console.error(
          "Error booking the tour:",
          error.response ? error.response.data : error.message
        );
        alert("There was an error booking your tour");
      }
    } else {
      alert("User not logged in");
    }
  };

  const handlePriceFilterChange = (event) => {
    const { value, checked } = event.target;
    let updatedPriceRanges = [...selectedPriceRanges];

    if (checked) {
      updatedPriceRanges.push(value);
    } else {
      updatedPriceRanges = updatedPriceRanges.filter((range) => range !== value);
    }

    setSelectedPriceRanges(updatedPriceRanges);

    if (updatedPriceRanges.length === 0) {
      setFilteredData(data); // Show all data if no price range is selected
    } else {
      const filtered = data.filter((item) => {
        const price = parseInt(item.price.replace("₹", "").replace(",", ""));
        if (updatedPriceRanges.includes("Below ₹20k") && price < 20000) {
          return true;
        }
        if (updatedPriceRanges.includes("₹20k - ₹30k") && price >= 20000 && price <= 30000) {
          return true;
        }
        if (updatedPriceRanges.includes("₹30k - ₹35k") && price > 30000 && price <= 35000) {
          return true;
        }
        if (updatedPriceRanges.includes("₹35k - ₹45k") && price > 35000 && price <= 45000) {
          return true;
        }
        if (updatedPriceRanges.includes("Above ₹45k") && price > 45000) {
          return true;
        }
        return false;
      });

      setFilteredData(filtered);
    }
  };

  return (
    <div>
      <div className="Bali">
        <div>
          <p>{state} Tour Packages</p>
          <span>
            Explore the vibrant culture, stunning landscapes, and rich heritage
            of {state}.
          </span>
        </div>
      </div>

      <div className="Bali-black-box">
        <div className="Bali-info">
          <div>
            IDEAL DURATION
            <br />
            7-10 nights
          </div>
          <div>
            VISA PROCESSING
            <br />
            Visa on Arrival
          </div>
          <div>
            BEST TIME
            <br />
            Oct - Mar
          </div>
          <div>
            STARTING PRICE
            <br />
            ₹12,500
          </div>
        </div>
        <div className="Bali-rating">
          OUR EXPERTISE
          <br />
          4.8 from 10k travellers
        </div>
      </div>

      <div className="Balimainbox">
        <div className="BaliInfo">
          <div className="Budget">
            <div className="Budget-Info">
              <p>Budget</p>
              <input
                type="checkbox"
                value="Below ₹20k"
                onChange={handlePriceFilterChange}
                style={{ width: "20px", height: "20px" }}
              />
              <label> Below ₹20k </label>
              <br />
              <input
                type="checkbox"
                value="₹20k - ₹30k"
                onChange={handlePriceFilterChange}
                style={{ width: "20px", height: "20px" }}
              />
              <label> ₹20k - ₹30k </label>
              <br />
              <input
                type="checkbox"
                value="₹30k - ₹35k"
                onChange={handlePriceFilterChange}
                style={{ width: "20px", height: "20px" }}
              />
              <label> ₹30k - ₹35k </label>
              <br />
              <input
                type="checkbox"
                value="₹35k - ₹45k"
                onChange={handlePriceFilterChange}
                style={{ width: "20px", height: "20px" }}
              />
              <label> ₹35k - ₹45k </label>
              <br />
              <input
                type="checkbox"
                value="Above ₹45k"
                onChange={handlePriceFilterChange}
                style={{ width: "20px", height: "20px" }}
              />
              <label> Above ₹45k </label>
              <br />
              <hr />
            </div>

            {/* Add more filter options here if needed */}
            <div className="Budget-Info">
              <p>No of days</p>
              <input type="checkbox" value="days" style={{ width: "20px", height: "20px" }} />
              <label> 3-5 days </label>
              <br />
              <input type="checkbox" value="days" style={{ width: "20px", height: "20px" }} />
              <label>4-8 days </label>
              <br />
              <input type="checkbox" value="days" style={{ width: "20px", height: "20px" }} />
              <label> 5-9 days </label>
              <br />
              <input type="checkbox" value="days" style={{ width: "20px", height: "20px" }} />
              <label>Above 10 days </label>
              <br />
              <hr />
            </div>

            <div className="Budget-Info">
              <p>Hotel ratings</p>
              <input type="checkbox" value="Rating" style={{ width: "20px", height: "20px" }} />
              <label> 5 star </label>
              <br />
              <input type="checkbox" value="Rating" style={{ width: "20px", height: "20px" }} />
              <label>4 star </label>
              <br />
              <input type="checkbox" value="Rating" style={{ width: "20px", height: "20px" }} />
              <label> 3 star </label>
              <hr />
            </div>
          </div>

          <div className="Tour-column">
            {filteredData.map((item, index) => (
              <div className="Tour-Info" key={item._id || index}>
                <div
                  style={{ borderRadius: "10px", overflow: "hidden" }}
                  className="Hotel"
                >
                  <div className="Hotel-Review">
                    <div className="imgg">
                      <img
                        src={item.image}
                        className="Hotel-image"
                        alt={item.title}
                      />
                    </div>
                    <div className="Hotel-Info">
                      <blockquote>{item.title}</blockquote>
                      <p>{item.description}</p>
                      <div className="R-I">
                        <p>{"\u2713"}
                          {item.rating} {"\u2606"}
                        </p>
                        <p>{"\u2713"}{item.itinerary}</p>
                      </div>
                      <hr />
                      <div className="Bali-price">
                        <p>{item.price}</p>
                        <button
                          type="button"
                          className="signup-buttonn"
                          onClick={() => handleBookTour(item)}
                        >
                          Book Tour
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
