import React from 'react';
import styled, { color, font } from '../../style';

import LogoCp from './LogoCp';
import NaviWrapCp from './NaviWrapCp';

const Wrapper = styled.aside`
  width: 300px;
  position: fixed;
  padding: 3em;
  height: 100vh;
  background-color: ${color.info};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Name = styled.h1`
  font-family: ${font.title};
  font-size: 1.25em;
  font-weight: 500;
  margin-bottom: 0.5em;
`;

const Position = styled.div`
  font-family: ${font.content};
  color: ${color.primary};
  font-size: 0.875em;
  margin-bottom: 2em;
`;

const NaviWrapper = () => {
  return (
    <Wrapper>
      <LogoCp />
      <Name>SANGYONG JEONG</Name>
      <Position>FrontEnd Developer</Position>
      <NaviWrapCp />
    </Wrapper>
  );
};

export default NaviWrapper;
