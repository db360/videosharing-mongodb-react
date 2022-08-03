import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from "styled-components";
import Card from "../components/Card";

import ReactLoading from "react-loading";


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const LoadingContainer = styled.div`
  width: 100%;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all 0.3s ease-in-out;
`;

const LoadingTitle = styled.h1`
  font-size: 35px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
`;
const Home = ({ type }) => {

  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data)
      setLoading(false);
    }
    fetchVideos();
  }, [type]);

  // console.log(loading);

  return (
    <Container>
      {loading && (
        <LoadingContainer>
          <ReactLoading
            type={"bubbles"}
            color="#0a4ecd"
            height={150}
            width={150}
          />
          <LoadingTitle>Loading...</LoadingTitle>
        </LoadingContainer>
      )}
      {!loading && (videos.map(video => (
        <Card key={video._id} video={video}/>
      ))) }
    </Container>
  );
};

export default Home;
