import React from 'react';
import styled, { media } from '../../style';

// import Logo from '../../assets/img/증명사진.jpg';
import Logo from '../../assets/img/marathon.png';

const ImgWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 2em;
  @media ${media.sm} {
    display: none;
  }
`;

const LogoCp = () => {
  return (
    <ImgWrapper>
      <img src={Logo} alt="Logo" className="w100" />
    </ImgWrapper>
  );
};

export default LogoCp;
