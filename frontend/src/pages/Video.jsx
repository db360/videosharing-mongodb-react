import React from "react";
import styled from "styled-components";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";

import dabLogo from "../img/dab_logo.png";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendations = styled.div`
  flex: 2;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  gap: 20px;
`;

const ImgContainer = styled.div`
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: #1a7d5f;
`;

const Image = styled.img`
  width: 4rem;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;

  `;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #ce4e4e;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="620"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="Youtube Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>654.651 views • Jun 22, 2021</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon />
              152
            </Button>
            <Button>
              <ThumbDownOutlinedIcon />
              Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon />
              Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <ImgContainer>
              <Image src={dabLogo} />
            </ImgContainer>
            <ChannelDetail>
              <ChannelName>Da.B Martínez</ChannelName>
              <ChannelCounter>150k Subscribers</ChannelCounter>
              <Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium esse magni eligendi, doloremque sit sunt, dicta vel
                dolore soluta consectetur similique laboriosam? Iste consequatur
                minus, a unde atque eius facere!
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendations>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendations>
    </Container>
  );
};

export default Video;
