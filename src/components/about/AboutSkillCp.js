import React from 'react';
import styled, { color, font, media } from '../../style';

const Wrapper = styled.div`
  background-color: ${color.white};
  width: 22%;
  padding: 3.5%;
  margin: 0 0.5em 1em 0.5em;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  border: 2px solid ${(props) => props.color};
  @media ${media.sm} {
    width: 30%;
  }
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
        {type === 'database' ? (
          <Icon color={color} className={`fas fa-${type}`}></Icon>
        ) : (
          <Icon color={color} className={`fab fa-${type}`}></Icon>
        )}
      </IconWrap>
      <Content>{content}</Content>
    </Wrapper>
  );
};

export default React.memo(AboutSkillCp);

// border-bottom 색깔은 props로
