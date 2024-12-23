import React, { useState } from "react";
import axios from "axios";

const InputBox = () => {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userInput.trim()) {
      setError("Please enter a query.");
      return; // Prevent submitting empty input
    }

    setLoading(true);
    setError(null); // Clear any previous errors

    try {
      const res = await axios.post("http://127.0.0.1:5000/process-query", {
        query: userInput,
      });

      console.log("Backend Response:", res.data); // Log the full response

      // Check if the response contains the expected structure
      if (res.data.response) {
        setResponse(res.data.response); // Set response from backend
      } else {
        setError("No response received from the backend.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(
        error.response
          ? error.response.data.error
          : "An error occurred. Please try again."
      );
    } finally {
      setLoading(false); // Stop loading when done
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter your query"
          style={{ padding: "10px", marginBottom: "10px", fontSize: "16px" }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}

      <div style={{ marginTop: "20px" }}>
        <h3>Response:</h3>
        <p>{response || "No response received yet."}</p>
      </div>
    </div>
  );
};

export default InputBox;
