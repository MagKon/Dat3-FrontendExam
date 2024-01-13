import React, { useState } from "react";

function Promises12() {
  const [count, setCount] = useState(0);

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        const data = { message: "Data fetched successfully" };
        setCount(count + 1);
        if (
          document.getElementById("message").innerHTML ===
          "Data fetched successfully"
        ) {
          reject(new Error("Data already fetched"));
        }
        resolve(data);
      }, 2000);
    });
  };

  return (
    <>
      <h1
        onClick={() => {
          fetchData()
            .then((data) => {
              document.getElementById("message").innerHTML = data.message;
            })
            .catch((error) => {
              document.getElementById("message").innerHTML = error.message;
            });
        }}
      >
        Promises {count}
      </h1>
      <div id="message"></div>
    </>
  );
}

export default Promises12;
