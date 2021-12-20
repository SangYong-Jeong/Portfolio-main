import React from 'react';
import styled from '../../style';

import ContentWrapCp from './ContentWrapCp';

const Wrapper = styled.div`
  position: relative;
`;

const ImgWrap = styled.div`
  opacity: 1;
`;

const BannerCp = ({ html, title, content, weight, src }) => {
  const props = { html, title, content, weight };
  return (
    <Wrapper>
      <ContentWrapCp {...props} />
      <ImgWrap>
        <img src={src} alt={title} className="w-100" />
      </ImgWrap>
    </Wrapper>
  );
};

export default React.memo(BannerCp);
