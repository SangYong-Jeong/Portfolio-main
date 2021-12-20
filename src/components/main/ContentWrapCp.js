import React from 'react';
import styled, { font, color } from '../../style';

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.45);
  color: ${color.white};
  padding: 1.5em;
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.html ? '100%' : 'auto')};
  text-align: ${(props) => (props.html ? 'center' : 'left')}; ;
`;

const ContentTitle = styled.h2`
  font-family: ${font.title};
  font-size: ${(props) => (props.weight ? '3em' : '2em')};
  margin-bottom: ${(props) => (props.title ? '1em' : '0')};
  font-weight: 700;
  line-height: 1.5;
`;

const Content = styled.p`
  font-family: ${font.content};
  font-weight: 600;
  font-size: 1.2em;
  line-height: 2;
`;

const ContentWrapCp = ({ html, title, content, weight }) => {
  return (
    <Wrapper html={html}>
      {html ? (
        <ContentTitle
          weight={weight}
          dangerouslySetInnerHTML={{ __html: html }}
        ></ContentTitle>
      ) : (
        <ContentTitle
          dangerouslySetInnerHTML={{ __html: title }}
        ></ContentTitle>
      )}
      {content && (
        <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
      )}
    </Wrapper>
  );
};

export default React.memo(ContentWrapCp);
