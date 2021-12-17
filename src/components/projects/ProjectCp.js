import React from 'react';
import styled, { color, font } from '../../style';

const Wrapper = styled.div`
  position: relative;
  width: 48%;
  margin: ${(props) => (props.margin ? '0 4% 5% 0' : '0 0 5% 0')};
`;

const ImgWrap = styled.div`
  height: 300px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

const ContentWrap = styled.div`
  width: 100%;
  height: 300px;
  padding: 2em;
  background-color: ${color.primary};
  color: ${color.white};
  position: absolute;
  z-index: 9;
  top: 0;
  transition: all 0.75s;
  opacity: 0;
  &:hover {
    opacity: 0.95;
    .content-title {
      transform: translateY(0);
    }
    .content {
      transform: translateY(0);
    }
  }
`;

const ContentTitle = styled.h4`
  transform: translateY(-15px);
  transition: all 0.5s;
  font-family: ${font.content};
  font-size: 1.25em;
  margin-bottom: 1em;
`;

const Content = styled.p`
  transform: translateY(15px);
  transition: all 0.5s;
  color: ${color.info};
  font-family: ${font.content};
  font-size: 0.875em;
  line-height: 1.75;
`;

const ButtonWrap = styled.div`
  position: absolute;
  z-index: 999;
  let: 0;
  bottom: 10px;
`;

const Button = styled.a`
  background-color: ${color.sky};
`;

const Span = styled.span`
  font-family: ${font.content};
  font-weight: 500;
`;

const ProjectCp = ({ title, content, src, margin, domain, aos }) => {
  return (
    <Wrapper
      margin={margin}
      data-aos={aos && aos.aos}
      data-aos-offset={aos && aos.offset}
      data-aos-duration={aos && aos.duration}
    >
      <ImgWrap src={src} />
      <ContentWrap>
        <ContentTitle className="content-title">{title}</ContentTitle>
        <Content className="content">{content}</Content>
        <ButtonWrap>
          <Button target="_blank" href={domain} className="btn btn-sm">
            <i className="fas fa-eye"></i>&nbsp;&nbsp;
            <Span>Detail</Span>
          </Button>
        </ButtonWrap>
      </ContentWrap>
    </Wrapper>
  );
};

export default ProjectCp;
