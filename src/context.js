import React, { useContext, useEffect, useReducer, useState } from "react";

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/photos/`;
const API_KEY = `?client_id=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  const queryUrl = (query) => {
    const u = `${searchUrl}${API_KEY}${urlPage}${query}`;
    return query;
  };

  const urlPage = `&page=${page}`;
  const fetchImages = async () => {
    setLoading(true);
    let url;
    // const urlPage = `&page=${page}`;
    // const urlPage = `&page=${page}`;

    if (queryUrl) {
      url = `${searchUrl}${API_KEY}${urlPage}${queryUrl}`;
    } else {
      url = `${mainUrl}${API_KEY}${urlPage}`;
    }
    url = `${mainUrl}${API_KEY}${urlPage}`;
    console.log(url);

    const response = await fetch(url);
    const data = await response.json();
    setPhotos((oldPhotos) => {
      return [...oldPhotos, ...data];
    });
    setLoading(false);
    // console.log(data);
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 5
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

  return (
    <AppContext.Provider
      value={{ loading, photos, page, fetchImages, queryUrl }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
