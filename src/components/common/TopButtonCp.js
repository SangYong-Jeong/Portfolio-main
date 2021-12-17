import React, { useCallback } from 'react';
import styled, { media } from '../../style';

const Wrapper = styled.div`
  position: fixed;
  z-index: 10;
  right: 100px;
  bottom: 20px;
  @media ${media.sm} {
    right: 0;
    bottom: 20px;
  }
`;

const Button = styled.button`
  opacity: 0.5;
  transition: all 0.5s;
  &:hover {
    opacity: 1;
  }
`;

const TopButtonCp = () => {
  const onClick = useCallback((e) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <Wrapper>
      <Button className="btn btn-dark" onClick={onClick}>
        <i className="fas fa-arrow-up"></i>&nbsp; To the Top
      </Button>
    </Wrapper>
  );
};

export default TopButtonCp;
