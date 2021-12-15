import React from 'react';
import styled, { color, font } from '../../style';

import AboutSkillWrapperCp from './AboutSkillWrapperCp';

const Wrapper = styled.section`
  padding: 3em;
`;

const Index = styled.span`
  display: inline-block;
  color: ${color.grey};
  font-size: 0.75em;
  letter-spacing: 2px;
  margin-bottom: 2em;
`;

const Title = styled.h2`
  font-family: ${font.title};
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 2em;
`;

const ContentTitle = styled.p`
  font-family: ${font.content};
  font-size: 1.125em;
  font-weight: 500;
  margin-bottom: 2em;
`;

const ContentAbout = styled.p`
  font-family: ${font.content};
  font-size: 1em;
  line-height: 2;
  margin-bottom: 2em;
`;

const AboutCp = () => {
  return (
    <Wrapper>
      <Index>ABOUT ME</Index>
      <Title>"늘 성장하려고 노력하는 개발자"</Title>
      <ContentTitle>
        "안녕하세요. 프론트엔드 개발을 희망하는 신입 개발자 정상용입니다."
      </ContentTitle>
      <ContentAbout>
        &nbsp;&nbsp;회계사 시험에 도전했지만 불합격이라는 결과를 얻었고 이후
        무슨일을 할까 고민하다 단순히 IT 업계에서 일을 하고싶다는 생각으로
        국비학원에 다니면서 프로그래밍에 대해 접하게 되었습니다. 수업을 들으면서
        웹개발에 대해 알아갔고 하나하나씩 프로젝트를 해보면서 프로그래밍이 점점
        재밌어지게 되었습니다.{' '}
        <strong>
          현재는 제가 만든 결과물들을 사용자가 이용했을 때 최고의 경험이 될수
          있도록 노력하고 있습니다.{' '}
        </strong>
      </ContentAbout>
      <AboutSkillWrapperCp />
    </Wrapper>
  );
};

export default AboutCp;