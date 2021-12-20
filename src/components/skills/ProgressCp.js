import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styled, { font, media } from '../../style';

const Wrapper = styled.div`
  padding: 0 1%;
  width: 48%;
  margin-bottom: 1em;
  @media ${media.sm} {
    width: 100%;
    margin-bottom: 0;
    margin: 0 0 5% 0;
    padding: 0 0;
  }
`;

const Title = styled.h3`
  font-family: ${font.content};
  font-weight: 600;
  margin-bottom: 1em;
`;

const StyledProgressBar = styled(ProgressBar)`
  margin-bottom: 2em;
`;

const Content = styled.p`
  font-family: ${font.content};
  font-size: 0.875em;
  line-height: 1.75;
`;

const ProgressCp = ({ title, now, color, content, className }) => {
  return (
    <Wrapper className={className}>
      <Title>{title}</Title>
      <StyledProgressBar animated striped now={now} variant={color} />
      <Content>&nbsp;&nbsp;{content}</Content>
    </Wrapper>
  );
};

export default React.memo(ProgressCp);
