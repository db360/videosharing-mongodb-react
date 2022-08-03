import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dabLogo from "../img/dab_logo.png";



const Container = styled.div`
    padding-left: 5px;
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({theme}) => theme.text};
`;

const ImgContainer = styled.div`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: #1a7d5f;
`;

const Avatar = styled.img`
  width: 3rem;
  border-radius: 50%;
`;

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`;

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft};
    margin-left: 5px;
`;

const Text = styled.span`

`;

const Comment = ({comment}) => {

  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchComments = async() =>{
        const res = await axios.get(
            `/users/find/${comment.userId}`
        );
        setChannel(res.data)
    };
    fetchComments();
  }, [comment.userId]);

  return (
    <Container>
        <ImgContainer>
            <Avatar src={channel?.img} />
        </ImgContainer>
        <Details>
            <Name>
                {channel?.name} <Date>1 day ago</Date>
            </Name>
            <Text>
                {comment?.desc}
            </Text>
        </Details>
    </Container>
  )
}

export default Comment