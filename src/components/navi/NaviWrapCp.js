import React, { useCallback } from 'react';
import styled, { font, media } from '../../style';
import { useDispatch } from 'react-redux';
import { hide } from '../../modules/media';

import NaviCp from './NaviCp';

const Wrapper = styled.ul`
  font-family: ${font.content};
  font-size: 0.875em;
  font-weight: 400;
  @media ${media.sm} {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Close = styled.div`
  cursor: pointer;
  font-size: 1.5em;
  display: none;
  @media ${media.sm} {
    display: block;
    width: 24px;
  }
`;

const NaviWrapCp = () => {
  const dispatch = useDispatch();
  const onClick = useCallback(
    (e) => {
      dispatch(hide());
    },
    [dispatch]
  );
  return (
    <Wrapper>
      <NaviCp type="Main" offset="main" />
      <NaviCp type="About" offset="about" />
      <NaviCp type="Tech Skills" offset="skills" />
      <NaviCp type="Projects" offset="projects" />
      <NaviCp type="Contact" offset="contact" />
      <Close onClick={onClick}>
        <i className="fa fa-times"></i>
      </Close>
    </Wrapper>
  );
};

export default NaviWrapCp;
