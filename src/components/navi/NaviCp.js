import React from 'react';
import styled, { color } from '../../style';

const Wrapper = styled.li`
  margin-bottom: 2em;
`;
const Navi = styled.a`
  position: relative;
  :hover {
    text-decoration: none;
    :after {
      transform: scaleX(1);
    }
  }
  :after {
    transform: scaleX(0);
    display: block;
    height: 1px;
    width: 100%;
    border-bottom: 1px solid ${color.primary};
    position: absolute;
    top: 22px;
    content: '';
    left: 0;
    right: 0;
    transition: all 0.5s;
  }
`;

const NaviCp = ({ type }) => {
  return (
    <Wrapper>
      <Navi href="/">{type}</Navi>
    </Wrapper>
  );
};

export default NaviCp;
