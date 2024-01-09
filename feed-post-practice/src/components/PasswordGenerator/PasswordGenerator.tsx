import React, { useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);

  return (
    <>
      <div className="card">
        <div className="card-header">Password Generator</div>
        <div className="card-body">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="password"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Copy
            </button>
          </div>
          <div className="slidecontainer">
            <input
              type="range"
              min="8"
              max="16"
              className="range"
              id="myRange"
            />
            <label style={{ marginRight: "10px" }}>Length ({length})</label>

            <input type="checkbox" />
            <label style={{ marginRight: "10px" }}>Numbers</label>

            <input type="checkbox" />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
