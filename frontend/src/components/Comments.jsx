import React from "react";
import styled from "styled-components";

import dabLogo from "../img/dab_logo.png";
import Comment from "./Comment";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

const Avatar = styled.img`
  width: 4rem;
  border-radius: 50%;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  padding: 5px;
  color: ${({ theme }) => theme.text};
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <ImgContainer>
          <Avatar src={dabLogo} />
        </ImgContainer>
        <Input type="text" placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
