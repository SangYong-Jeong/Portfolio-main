import React, { useCallback } from 'react';
import styled, { media, color, font } from '../../style';
import { useDispatch, useSelector } from 'react-redux';
import { show } from '../../modules/media';

import LogoCp from './LogoCp';
import NaviWrapCp from './NaviWrapCp';

const Wrapper = styled.div`
  width: 300px;
  position: fixed;
  z-index: 999;
  padding: 3em;
  height: 100vh;
  background-color: ${color.info};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media ${media.sm} {
    display: ${(props) => (props.visibility ? 'flex' : 'none')};
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
  }
`;

const Bars = styled.div`
  cursor: pointer;
  font-size: 2em;
  position: fixed;
  z-index: 999;
  color: ${color.indigo};
  top: 0;
  display: none;
  @media ${media.sm} {
    display: block;
  }
`;

const Name = styled.h1`
  font-family: ${font.title};
  font-size: 1.25em;
  font-weight: 500;
  margin-bottom: 0.5em;
  @media ${media.sm} {
    display: none;
  }
`;

const Position = styled.div`
  font-family: ${font.content};
  color: ${color.primary};
  font-size: 0.875em;
  margin-bottom: 2em;
  @media ${media.sm} {
    display: none;
  }
`;

const NaviWrapper = () => {
  const dispatch = useDispatch();
  const { visibility } = useSelector(({ media }) => media);
  const onClick = useCallback(
    (e) => {
      dispatch(show());
    },
    [dispatch]
  );
  return (
    <>
      <Bars onClick={onClick}>
        <i className="fa fa-bars"></i>
      </Bars>
      <Wrapper visibility={visibility}>
        <LogoCp />
        <Name>SANGYONG JEONG</Name>
        <Position>FrontEnd Developer</Position>
        <NaviWrapCp />
      </Wrapper>
    </>
  );
};

export default NaviWrapper;
