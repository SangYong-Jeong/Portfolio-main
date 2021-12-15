import React from 'react';
import styled from '../style';

import NaviWrapper from '../components/navi/NaviWrapperCp';

const Wrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  position: relative;
`;

const ContentWrapper = styled.div`
  width: calc(100% - 300px);
`;

const Main = () => {
  return (
    <Wrapper>
      <NaviWrapper />
      <ContentWrapper />
    </Wrapper>
  );
};

export default Main;
