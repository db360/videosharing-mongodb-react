import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import dabLogo from "../img/dab_logo.png";
import { fetchError } from "../redux/videoSlice";
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

const Comments = ({ videoId }) => {

  const dispatch = useDispatch();
  const {currentUser} = useSelector((state) => state.user);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/${videoId}`);
        setComments(res.data);
      } catch (err) {
        dispatch(fetchError(err))
      };
    };
    fetchComments();
  }, [videoId, dispatch]);

  return (
    <Container>
      <NewComment>
        <ImgContainer>
          <Avatar src={currentUser?.img} />
        </ImgContainer>
        <Input type="text" placeholder="Add a comment..." />
      </NewComment>
      {comments.map(comment => (
        <Comment key={comment._id} comment={comment}/>
      ))}

    </Container>
  );
};

export default Comments;
