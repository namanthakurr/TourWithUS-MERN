import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Itinerary = () => {
  const { state } = useParams();
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState(null); // User ID handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        const decodedState = decodeURIComponent(state);
        const parsedData = JSON.parse(decodedState);
        setData(parsedData);
      } catch (error) {
        console.error("Error parsing data:", error);
        alert("Failed to load itinerary data. Please try again later.");
      }
    };

    fetchData();
  }, [state]);

  // Fetch user ID from secure storage or context (example)
  useEffect(() => {
    const fetchUserId = () => {
      const storedUserId = sessionStorage.getItem("userId"); // Check sessionStorage
      console.log("Fetched userId from sessionStorage:", storedUserId); // Debugging line
      if (storedUserId) {
        setUserId(storedUserId);
      } else {
        console.warn("No userId found in sessionStorage");
      }
    };

    fetchUserId();
  }, []);

  const handleBookTour = async (tour) => {
    try {
      const userId = sessionStorage.getItem('userId');
      console.log("User ID:", userId); // Debugging line
      console.log("Tour Object:", tour); // Log entire tour object
      console.log("Tour ID:", tour._id); // Debugging line for Tour ID
  
      if (!userId) {
        alert("You need to log in to book a tour.");
        return;
      }
  
      if (!tour._id) {
        alert("Invalid tour selection. Please try again.");
        return;
      }
  
      const response = await axios.post("/api/bookTour", {
        userId,
        tourId: tour._id, // Ensure tourId is correctly passed
      });
  
      if (response.data.status === "success") {
        alert("Tour booked successfully!");
      } else {
        alert("Failed to book tour: " + response.data.message);
      }
    } catch (error) {
      console.error("Error booking tour:", error);
      alert("An error occurred while booking the tour. Please try again.");
    }
  };
  
  
  

  return (
    <div>
      <div className="Bali">
        <div>
          <p>Gujarat Tour Packages</p>
          <span>
            Explore the vibrant culture, stunning landscapes, and rich heritage of Gujarat.
          </span>
        </div>
      </div>

      <div className="Bali-black-box">
        <div className="Bali-info">
          <div>IDEAL DURATION<br />7-10 nights</div>
          <div>VISA PROCESSING<br />Visa on Arrival</div>
          <div>BEST TIME<br />Oct - Mar</div>
          <div>STARTING PRICE<br />₹12,500</div>
        </div>
        <div className="Bali-rating">
          OUR EXPERTISE<br />4.8 from 10k travellers
        </div>
      </div>

      <div className="Balimainbox">
        <div className="BaliInfo">
          <div className="Budget">
            {/* Budget and other filters */}
            <div className="Budget-Info">
              <p>Budget</p>
              <input type="checkbox" value="50K" style={{ width: "20px", height: "20px" }} />
              <label> Below ₹20k </label>
              <br />
              <input type="checkbox" value="75k" style={{ width: "20px", height: "20px" }} />
              <label> ₹20k - ₹30k </label>
              <br />
              <input type="checkbox" value="1lakh" style={{ width: "20px", height: "20px" }} />
              <label> ₹30k - ₹35k </label>
              <br />
              <input type="checkbox" value="2laKh" style={{ width: "20px", height: "20px" }} />
              <label> ₹35k - ₹45k </label>
              <br />
              <input type="checkbox" value="Above 2lakh" style={{ width: "20px", height: "20px" }} />
              <label>Above ₹45k </label>
              <br />
              <hr />
            </div>

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
            {data.map((item, index) => (
              <div className="Tour-Info" key={item._id || index}>
                <div style={{ borderRadius: "10px", overflow: "hidden" }} className="Hotel">
                  <div className="Hotel-Review">
                    <div className="imgg">
                      <img src={item.image} className="Hotel-image" alt={item.title} />
                    </div>
                    <div className="Hotel-Info">
                      <blockquote>{item.title}</blockquote>
                      <p>{item.description}</p>
                      <div className="R-I">
                        <p>{"\u2713"}{item.rating} {"\u2606"}</p>
                        <p>{"\u2713"}{item.itinerary}</p>
                      </div>
                      <hr />
                      <div className="Bali-price">
                        <p>{item.price}</p>
                        <button type="button" className="signup-buttonn" onClick={() => handleBookTour(item)}>
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
