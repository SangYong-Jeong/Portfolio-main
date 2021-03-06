import React from 'react';
import styled, { media } from '../style';

import NaviWrapper from '../components/navi/NaviWrapperCp';
import ContentWrapperCp from '../components/ContentWrapperCp';
import TopButtonCp from '../components/common/TopButtonCp';

const Wrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  position: relative;
  @media ${media.sm} {
    width: 100%;
    overflow-x: hidden;
  }
`;

const Main = () => {
  return (
    <Wrapper>
      <NaviWrapper />
      <ContentWrapperCp />
      <TopButtonCp />
    </Wrapper>
  );
};

export default React.memo(Main);
