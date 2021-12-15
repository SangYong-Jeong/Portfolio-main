import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styled, { color } from '../../style';

const Wrapper = styled.div`
  padding: 0 1%;
  width: 50%;
  margin-bottom: 1em;
`;

const Title = styled.h3``;

const ProgressCp = ({ title, now, color }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ProgressBar
        animated
        striped
        now={now}
        label={`${now}%`}
        variant={color}
      />
    </Wrapper>
  );
};

export default ProgressCp;

// yarn bootstrap module 이용해서 progress bar 구현
// variant => success, info, danger, warning
