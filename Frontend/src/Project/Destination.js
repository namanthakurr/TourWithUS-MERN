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
          <div className="Countries-Distribution">
            <div className="Ujjain">
              <img
                src="mahakal.jpg"
                alt="coming soon..."
                style={{
                  width: "420px",
                  height: "200px",
                  borderRadius: "50px",
                }}
              />
              <p className="Info">
                Ujjain
                <p>
                  From <span>&#8377;</span> 13,999/-
                </p>
              </p>
              <div className="MAld">
                <div>
                  <img
                    src="udaipur.jpg"
                    alt="coming soon..."
                    style={{
                      width: "200px",
                      height: "250px",
                      borderRadius: "20px",
                    }}
                  />
                  <p className="Info-1">
                    Udaipur
                    <p>
                      From <span>&#8377;</span> 19,555/-
                    </p>
                  </p>
                </div>
                <div>
                  <img
                    src="darjeeling.jpg"
                    alt="coming soon..."
                    style={{
                      width: "200px",
                      height: "250px",
                      borderRadius: "20px",
                    }}
                  />
                  <p className="Info-2">
                    Darjeeling
                    <p>
                      From <span>&#8377;</span> 35,000/-
                    </p>
                  </p>
                </div>
              </div>
            </div>
            <div className="LA">
              <img
                src="lucknow.jpg"
                alt="coming soon..."
                style={{
                  width: "400px",
                  height: "469px",
                  borderRadius: "20px",
                }}
              />
              <p className="Info-3">
                Lucknow
                <p>
                  From <span>&#8377;</span> 18,999/-
                </p>
              </p>
            </div>
            <div className="Mexico">
              <div>
                <img
                  src="chandigarh.jpg"
                  alt="coming soon..."
                  style={{
                    width: "360px",
                    height: "230px",
                    borderRadius: "20px",
                  }}
                />
                <p className="Info-4">
                  Chandigarh
                  <p>
                    From <span>&#8377;</span> 23,899/-
                  </p>
                </p>
              </div>
              <div>
                <img
                  src="mysore.jpg"
                  alt="coming soon..."
                  style={{
                    width: "360px",
                    height: "230px",
                    borderRadius: "20px",
                  }}
                />
                <p className="Info-5">
                  Mysore
                  <p>
                    From <span>&#8377;</span> 10,999/-
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Destination;
