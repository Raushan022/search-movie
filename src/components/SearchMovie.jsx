import React from "react";
import { useGlobalContext } from "../context";

const SearchMovie = () => {
  const { query, setQuery } = useGlobalContext();

  return (
    <section className="search-section">
      <h2>Search Your Favourite Movie</h2>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Search here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchMovie;
