import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 16px;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 1px 1px 5px;
  @media only screen and (max-width: 600px) {
    box-shadow: 1px 1px 4px;
  }
`;

const Title = styled.h1`
  color: #555;
  font-size: 28px;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  color: #1d1e1f;
  font-size: 16px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

type CardProps = {
  title: string;
  description: string;
};

export default function Card({ title, description }: CardProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
    </Wrapper>
  );
}
