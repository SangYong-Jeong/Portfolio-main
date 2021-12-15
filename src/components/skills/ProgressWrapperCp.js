import React from 'react';
import styled from '../../style';

import ProgressCp from './ProgressCp';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProgressWrapperCp = () => {
  return (
    <Wrapper>
      <ProgressCp title={} now={} color="" />
      <ProgressCp title={} now={} color="" />
      <ProgressCp title={} now={} color="" />
      <ProgressCp title={} now={} color="" />
      <ProgressCp title={} now={} color="" />
      <ProgressCp title={} now={} color="" />
      <ProgressCp title={} now={} color="" />
      <ProgressCp title={} now={} color="" />
      <ProgressCp title={} now={} color="" />
    </Wrapper>
  );
};

export default ProgressWrapperCp;
