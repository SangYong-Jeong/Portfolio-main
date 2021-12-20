import React from 'react';
import styled, { color, font } from '../../style';

const Wrapper = styled.section`
  padding: 1em;
  color: ${color.white};
  text-align: center;
  background-color: ${color.black};
  font-family: ${font.content};
  font-weight: 500;
`;

const FooterCp = () => {
  return <Wrapper>ⓒ copyright JSY. Allright reserved.</Wrapper>;
};

export default React.memo(FooterCp);
