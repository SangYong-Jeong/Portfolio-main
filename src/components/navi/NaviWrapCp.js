import React from 'react';
import styled, { font } from '../../style';

import NaviCp from './NaviCp';

const Wrapper = styled.ul`
  font-family: ${font.en};
  font-size: 0.875em;
  font-weight: 400;
`;

const NaviWrapCp = () => {
  return (
    <Wrapper>
      <NaviCp type="About" />
      <NaviCp type="Tech Skills" />
      <NaviCp type="Projects" />
    </Wrapper>
  );
};

export default NaviWrapCp;