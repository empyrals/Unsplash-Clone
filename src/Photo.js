import React, { useEffect, useState } from "react";
import SinglePhoto from "./SinglePhoto";
import "./Photos.css";
import { useGlobalContext } from "./context";

// const mainUrl = `https://api.unsplash.com/photos/`;
// const searchUrl = `https://api.unsplash.com/search/photo/`;
// const API_KEY = `?client_id=${process.env.REACT_APP_API_KEY}`;
const Photo = () => {
  const { loading, photos, page } = useGlobalContext();
  //   const [loading, setLoading] = useState(false);
  //   const [photos, setPhotos] = useState([]);
  //   const [page, setPage] = useState(1);

  // const fetchImages = async () => {
  //   setLoading(true);
  //   let url; 
  //   const urlPage = `&page=${page}`;
  //   url = `${mainUrl}${API_KEY}${urlPage}`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setPhotos((oldPhotos) => {
  //     return [...oldPhotos, ...data];
  //   });
  //   setLoading(false);
  //   // console.log(data);
  // };

  // useEffect(() => {
  //   fetchImages();
  // }, [page]);

  // useEffect(() => {
  //   const event = window.addEventListener("scroll", () => {
  //     if (
  //       !loading &&
  //       window.innerHeight + window.scrollY >= document.body.scrollHeight - 5
  //     ) {
  //       setPage((oldPage) => {
  //         return oldPage + 1;
  //       });
  //     }
  //   });
  //   return () => window.removeEventListener("scroll", event);
  // }, []);
  return (
    <main>
      <div className="photos">
        {photos.map((image, index) => {
          return <SinglePhoto key={index.toString()} {...image} />;
        })}
      </div>
      {loading && <h2>Loading...</h2>}
    </main>
  );
};

export default Photo;
