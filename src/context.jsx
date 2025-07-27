import { createContext, useContext, useEffect, useState } from "react";

export const API_URL = `https://omdbapi.com/?apikey=${
  import.meta.env.VITE_API_KEY
}`;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("");

  const getMovies = async (url) => {
    setIsLoading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      if (data.Response === "True") {
        setMovies(data.Search);
        setIsError({
          show: false,
          msg: "",
        });
      } else {
        setMovies([]);
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
      setIsError({ show: true, msg: "Something went wrong!" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timerOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 300);

    return () => {
      clearInterval(timerOut);
    };
  }, [query]);

  return (
    <AppContext.Provider
      value={{ isLoading, movies, isError, query, setQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};

// global custom hook for context
export const useGlobalContext = () => {
  return useContext(AppContext);
};
