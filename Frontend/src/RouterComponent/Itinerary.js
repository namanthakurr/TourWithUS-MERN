/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import axios from "axios";

const Itinerary = () => {
  const { state } = useParams();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [userId, setUserId] = useState(null);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
<<<<<<< Updated upstream
  const navigate = useNavigate();
=======
  const [selectedDayRanges, setSelectedDayRanges] = useState([]); // State for selected day ranges
  const[selectRatings, setSelectRatings] = useState([])
>>>>>>> Stashed changes

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
        // console.log("User ID fetched:", storedUserId);
<<<<<<< Updated upstream
      } else {
        console.warn("No userId found in sessionStorage");
      }
=======
       } //else {
      //   console.warn("No userId found in sessionStorage");
      // }
>>>>>>> Stashed changes
    };

    fetchUserId();
  }, []);

  const handleBookTour = async (tour) => {
    if (userId) {
      try {
        // console.log("Attempting to book tour with ID:", tour._id);
        const response = await axios.post("/api/book-tour", {
          userId,
          tourId: tour._id,
          state // Add the state to the request body
        });
        // console.log("Response from server:", response.data);
        alert("Your tour is booked");
        navigate("/");
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
    applyFilters(updatedPriceRanges, selectedDayRanges,selectRatings);
  };

  const handleDayFilterChange = (event) => {
    const { value, checked } = event.target;
    let updatedDayRanges = [...selectedDayRanges];

    if (checked) {
      updatedDayRanges.push(value);
    } else {
      updatedDayRanges = updatedDayRanges.filter((range) => range !== value);
    }

    setSelectedDayRanges(updatedDayRanges);
    applyFilters(selectedPriceRanges, updatedDayRanges,selectRatings);
  };
  const handleRatingFilterChange = (event) => {
    const { value, checked } = event.target;
    let updatedRatingRanges = [...selectRatings];
  
    if (checked) {
      updatedRatingRanges.push(value);
    } else {
      updatedRatingRanges = updatedRatingRanges.filter((range) => range !== value);
    }
  
    setSelectRatings(updatedRatingRanges);
    applyFilters(selectedPriceRanges, selectedDayRanges, updatedRatingRanges); // Corrected to use the updated rating ranges
  };

  const applyFilters = (priceRanges, dayRanges, ratingRanges) => {
    let filtered = data;

    // Filter by price range
    if (priceRanges.length > 0) {
      filtered = filtered.filter((item) => {
        const price = parseInt(item.price.replace("₹", "").replace(",", ""));
        if (priceRanges.includes("Below ₹20k") && price < 20000) return true;
        if (priceRanges.includes("₹20k - ₹30k") && price >= 20000 && price <= 30000) return true;
        if (priceRanges.includes("₹30k - ₹35k") && price > 30000 && price <= 35000) return true;
        if (priceRanges.includes("₹35k - ₹45k") && price > 35000 && price <= 45000) return true;
        if (priceRanges.includes("Above ₹45k") && price > 45000) return true;
        return false;
      });
    }

    // Filter by day range
    if (dayRanges.length > 0) {
      filtered = filtered.filter((item) => {
        const days = parseInt(item.itinerary.split(" ")[0]); // Assumes itinerary field starts with the number of days
        if (dayRanges.includes("3-5 days") && days >= 3 && days <= 5) return true;
        if (dayRanges.includes("4-8 days") && days >= 4 && days <= 8) return true;
        if (dayRanges.includes("5-9 days") && days >= 5 && days <= 9) return true;
        if (dayRanges.includes("Above 10 days") && days > 10) return true;
        return false;
      });
    }
    if (ratingRanges.length > 0) {
      filtered = filtered.filter((item) => {
        const rating = parseInt(item.rating); // Assume item.rating is a string or a number
        if (ratingRanges.includes("5") && rating === 5) return true;
        if (ratingRanges.includes("4") && rating === 4) return true;
        if (ratingRanges.includes("3") && rating === 3) return true;
        return false;
      });
    }
  
    setFilteredData(filtered);
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

      {/* <div className="Bali-black-box">
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
      </div> */}

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

            <div className="Budget-Info">
              <p>No of days</p>
              <input
                type="checkbox"
                value="3-5 days"
                onChange={handleDayFilterChange}
                style={{ width: "20px", height: "20px" }}
              />
              <label> 3-5 days </label>
              <br />
              <input
                type="checkbox"
                value="4-8 days"
                onChange={handleDayFilterChange}
                style={{ width: "20px", height: "20px" }}
              />
              <label>4-8 days </label>
              <br />
              <input
                type="checkbox"
                value="5-9 days"
                onChange={handleDayFilterChange}
                style={{ width: "20px", height: "20px" }}
              />
              <label> 5-9 days </label>
              <br />
              <input
                type="checkbox"
                value="Above 10 days"
                onChange={handleDayFilterChange}
                style={{ width: "20px", height: "20px" }}
              />
              <label>Above 10 days </label>
              <br />
              <hr />
            </div>

            <div className="Budget-Info">
              <p>Hotel ratings</p>
              <input type="checkbox" value="5"   onChange={handleRatingFilterChange} style={{ width: "20px", height: "20px" }} />
              <label> 5 star </label>
              <br />
              <input type="checkbox" value="4"   onChange={handleRatingFilterChange} style={{ width: "20px", height: "20px" }} />
              <label>4 star </label>
              <br />
              <input type="checkbox" value="3"   onChange={handleRatingFilterChange} style={{ width: "20px", height: "20px" }} />
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
