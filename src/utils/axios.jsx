import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2QxZjBlYzUzZWU2ZDRmNDIxZWFmMGExNTA0NGFhMCIsInN1YiI6IjY2NDFiNjYwOTM2OWJiNmU2NTIwZjJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.idPbMDkxq_AeudNR9t-7h6uFYrzzhYQ4Ks-NRmH71QE",
  },
});

export default instance;
