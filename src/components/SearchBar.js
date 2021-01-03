import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };
  return (
    <div className="search-bar ui segment" style={{ marginTop: "10px" }}>
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button onChange={(e) => setTerm(e.target.value)}>Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
