import React from 'react';
import styled, { color } from '../style';

import AboutCp from './about/AboutCp';

const Wrapper = styled.div`
  width: calc(100% - 300px);
  padding: 0 1em;
  margin-left: 300px;
  background-color: #f7f7f7;
`;

const ContentWrapperCp = () => {
  return (
    <Wrapper>
      <AboutCp />
    </Wrapper>
  );
};

export default ContentWrapperCp;
