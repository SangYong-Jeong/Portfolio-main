import React from 'react';
import styled, { color, font } from '../../style';

const Wrapper = styled.div`
  background-color: ${color.white};
  width: 25%;
  padding: 2.5%;
  margin: 0 0.5em;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  border: 2px solid ${(props) => props.color};
`;

const IconWrap = styled.div`
  margin-bottom: 1.75em;
`;

const Icon = styled.i`
  font-size: 2em;
  color: ${(props) => props.color};
`;

const Content = styled.h3`
  font-family: ${font.en};
  margin-bottom: 2em;
`;

const AboutSkillCp = ({ type, color, content }) => {
  return (
    <Wrapper color={color}>
      <IconWrap>
        <Icon color={color} className={`fab fa-${type}`}></Icon>
      </IconWrap>
      <Content>{content}</Content>
    </Wrapper>
  );
};

export default AboutSkillCp;

// border-bottom 색깔은 props로
