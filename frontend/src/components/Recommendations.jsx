import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
  flex: 3;
`;


const Recommendations = ({ tags }) => {
    const [videos, setvideos] = useState([]);


    useEffect(() => {
      if (tags) {
        const fetchVideos = async() => {
            const res = await axios.get(`/videos/tags?tags=${tags}`);
            setvideos(res.data)
        };
        fetchVideos();
      } else {
        const fetchRandomVideos = async() => {
          const res = await axios.get(`/videos/random`);
          setvideos(res.data);
        }
        fetchRandomVideos();
      }
    }, [tags]);


  return (
    <Container>
        {videos.map(video => (
            <Card type="sm" key={video._id} video={video}/>
        ))}
    </Container>
  )
}

export default Recommendations