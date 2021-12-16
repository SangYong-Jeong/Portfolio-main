import React from 'react';
import styled, { font } from '../../style';

import NaviCp from './NaviCp';

const Wrapper = styled.ul`
  font-family: ${font.content};
  font-size: 0.875em;
  font-weight: 400;
`;

const NaviWrapCp = () => {
  return (
    <Wrapper>
      <NaviCp type="About" offset="about" />
      <NaviCp type="Tech Skills" offset="skills" />
      <NaviCp type="Projects" offset="projects" />
      <NaviCp type="Contact" offset="contact" />
    </Wrapper>
  );
};

export default NaviWrapCp;
