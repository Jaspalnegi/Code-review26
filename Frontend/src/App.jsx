import { useState } from "react";
import axios from "axios";

function App() {

  const [code, setCode] = useState(`function sum(a, b) {
  return a + b;
}`);

  const [review, setReview] = useState("");

  const reviewCode = async () => {

    try {

      const response = await axios.post(
        "http://localhost:3000/ai/get-review",
        { code }
      );

      setReview(response.data.review);

    } catch (error) {

      console.error(error);

      setReview("Error reviewing code");

    }
  };

  return (

    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        height: "100vh",
      }}
    >

      <div style={{ flex: 1 }}>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{
            width: "100%",
            height: "400px",
            background: "#1e1e1e",
            color: "white",
            padding: "15px",
            fontSize: "16px",
          }}
        />

        <button
          onClick={reviewCode}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Review
        </button>

      </div>

      <div
        style={{
          flex: 1,
          background: "#111",
          color: "white",
          padding: "20px",
          overflow: "auto",
          whiteSpace: "pre-wrap",
        }}
      >
        {review}
      </div>

    </div>
  );
}

export default App;