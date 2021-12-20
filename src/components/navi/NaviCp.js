import React, { useCallback } from 'react';
import styled, { color, media, font } from '../../style';
import { useSelector } from 'react-redux';

const Wrapper = styled.li`
  margin-bottom: 2em;
  @media ${media.sm} {
    color: ${color.white};
    font-family: ${font.title};
    font-size: 1.25em;
    margin-bottom: 0;
    margin-right: 2em;
  }
  @media ${media.xs} {
    font-family: ${font.title};
    font-size: 1em;
    margin-bottom: 0;
    margin-right: 2em;
  }
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

const NaviCp = ({ type, offset }) => {
  const height = useSelector(({ height }) => height[offset]);
  const onClick = useCallback(
    (e) => {
      e.preventDefault();
      window.scrollTo({ top: height, left: 0, behavior: 'smooth' });
    },
    [height]
  );
  return (
    <Wrapper>
      <Navi href={type === 'main' ? '/' : `#${type}`} onClick={onClick}>
        {type}
      </Navi>
    </Wrapper>
  );
};

export default React.memo(NaviCp);
