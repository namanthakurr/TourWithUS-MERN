import React from "react";

function Destination() {
  return (
    <>
      <div className="Destination">
        <div className="Destination-info">
          <div className="HEADER">
            <h3>QUICK GETAWAY DESTINATIONS</h3>
            <p>Ideal for 2-3 or 3-5 days trip</p>
          </div>
          <div className="Countries-Distribution container">
            <div className="Ujjain">
              <img
                src="mahakal.jpg"
                className="quick_scale"
                alt="coming soon..."
                style={{
                  width: "420px",
                  height: "200px",
                  borderRadius: "50px",
                }}
              />
              <div className="Info"> {/* Changed from <p> to <div> */}
                <p>Ujjain</p>
                <span>
                  From <span>&#8377;</span> 13,999/-
                </span>
              </div>
              <div className="MAld">
                <div>
                  <img
                    src="udaipur.jpg"
                    alt="coming soon..."
                    className="quick_scale"
                    style={{
                      width: "200px",
                      height: "250px",
                      borderRadius: "20px",
                    }}
                  />
                  <div className="Info-1"> {/* Changed from <p> to <div> */}
                    <p>Udaipur</p>
                    <span>
                      From <span>&#8377;</span> 19,555/-
                    </span>
                  </div>
                </div>
                <div>
                  <img
                    src="darjeeling.jpg"
                    alt="coming soon..."
                    className="quick_scale"
                    style={{
                      width: "200px",
                      height: "250px",
                      borderRadius: "20px",
                    }}
                  />
                  <div className="Info-2"> {/* Changed from <p> to <div> */}
                    <p>Darjeeling</p>
                    <span>
                      From <span>&#8377;</span> 35,000/-
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="LA">
              <img
                src="lucknow.jpg"
                alt="coming soon..."
                className="quick_scale"
                style={{
                  width: "400px",
                  height: "469px",
                  borderRadius: "20px",
                }}
              />
              <div className="Info-3"> {/* Changed from <p> to <div> */}
                <p>Lucknow</p>
                <span>
                  From <span>&#8377;</span> 18,999/-
                </span>
              </div>
            </div>
            <div className="Mexico">
              <div>
                <img
                  src="chandigarh.jpg"
                  alt="coming soon..."
                  className="quick_scale"
                  style={{
                    width: "360px",
                    height: "230px",
                    borderRadius: "20px",
                  }}
                />
                <div className="Info-4"> {/* Changed from <p> to <div> */}
                  <p>Chandigarh</p>
                  <span>
                    From <span>&#8377;</span> 23,899/-
                  </span>
                </div>
              </div>
              <div>
                <img
                  src="mysore.jpg"
                  alt="coming soon..."
                  className="quick_scale"
                  style={{
                    width: "360px",
                    height: "230px",
                    borderRadius: "20px",
                  }}
                />
                <div className="Info-5"> {/* Changed from <p> to <div> */}
                  <p>Mysore</p>
                  <span>
                    From <span>&#8377;</span> 10,999/-
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Destination;
