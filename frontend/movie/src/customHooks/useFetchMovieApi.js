import React, { useEffect, useState } from "react";
import { default as axios } from "axios";

 let mainUrl = "https://api.themoviedb.org/3/movie/";

export default function useFetchMovieApi(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(mainUrl + props).then((resp) => setData(resp.data.results));
  }, [props]);
  return data;
}
