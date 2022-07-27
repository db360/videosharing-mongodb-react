import React from 'react';
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

const Comment = () => {
  return (
    <Container>
        <ImgContainer>
            <Avatar src={dabLogo} />
        </ImgContainer>
        <Details>
            <Name>
                John Doe <Date>1 day ago</Date>
            </Name>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Text>
        </Details>
    </Container>
  )
}

export default Comment