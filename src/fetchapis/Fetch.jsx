import React, { useEffect, useState } from "react";
import "../app.css";
function Fetch() {
  const api = "https://dummyjson.com/users";
  const [data, setData] = useState([]);
  const fetchapi = async () => {
    return fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setData(data.users);
        console.log(data);
      });
  };
  useEffect(() => {
    fetchapi();
  }, []);

  return (
    <>
      <center className=" bg-slate-400">
        <h1
          style={{
            userSelect: "none",
            padding: "10px",
            width: "91vw",
            paddingTop: "10px",
            borderRadius: "10px",
            color: "black",
            fontWeight: "bold",
            fontSize: "2.3rem",
          }}
        >
          Mars Users
        </h1>
        <div>
          {data.map((dataObj) => {
            return (
              <div
                className="transition-duration:500ms  transition ease-in-out hover:scale-110 w-1/4 max-sm:w-2/3"
                style={{
                  userSelect: "none",
                  backgroundColor: "#5efff4",
                  marginTop: "10px",
                  borderRadius: "10px",
                  marginBottom: "30px",
                  padding: "10px",
                  boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                }}
              >
                <p
                  className="max-sm:text-sm p-1 "
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  {dataObj.firstName + " " + dataObj.lastName}
                </p>
                <img
                  src={dataObj.image}
                  alt="image"
                  style={{ width: "90px", marginBottom: "10px" }}
                />
                <p style={{ fontSize: 15, color: "black" }}>
                  Email: {dataObj.email + " "}
                  <br />
                  Gender : {dataObj.gender}
                </p>
              </div>
            );
          })}
        </div>
      </center>
    </>
  );
}

export default Fetch;
