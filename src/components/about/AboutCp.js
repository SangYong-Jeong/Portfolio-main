import React, { useRef, useEffect } from 'react';
import styled, { color, font } from '../../style';
import { useDispatch } from 'react-redux';
import { about } from '../../modules/height';

import AboutSkillWrapperCp from './AboutSkillWrapperCp';

const Wrapper = styled.section`
  padding: 2em;
  margin-bottom: 5em;
`;

const AosWrap = styled.div``;

const Index = styled.span`
  display: inline-block;
  color: ${color.grey};
  font-size: 0.75em;
  letter-spacing: 2px;
  margin-bottom: 2em;
`;

const Title = styled.h2`
  letter-spacing: 3px;
  font-family: ${font.title};
  font-size: 1.25em;
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

const HightLight = styled.div`
  padding: 1.25em 1.5em;
  font-family: ${font.title};
  background-color: ${color.warning};
  font-size: 1.5em;
  line-height: 1.5;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
`;

const Span = styled.span`
  display: inline-block;
  padding: 0.35em;
  font-size: 0.75em;
  margin-top: 1em;
  border: 1px solid ${color.black};
  font-weight: 800;
`;

const AboutCp = () => {
  const dispatch = useDispatch();
  const wrapper = useRef('');
  useEffect(() => {
    dispatch(
      about(
        window.pageYOffset + wrapper.current.getBoundingClientRect().top + 400
      )
    );
  }, [dispatch]);
  return (
    <Wrapper ref={wrapper}>
      <AosWrap
        data-aos="fade-right"
        data-aos-offset="1000"
        data-aos-duration="1000"
      >
        <Index>ABOUT ME</Index>
        <Title>"늘 성장하려고 노력하는 개발자"</Title>
        <ContentTitle>
          "안녕하세요. 프론트엔드 개발을 희망하는 신입 개발자 정상용입니다."
        </ContentTitle>
        <ContentAbout>
          &nbsp;&nbsp;회계사 시험에 도전했지만 불합격이라는 결과를 얻었고 이후
          무슨일을 할까 고민하다 단순히 IT 업계에서 일을 하고싶다는 생각으로
          국비학원에 다니면서 프로그래밍에 대해 접하게 되었습니다. 수업을
          들으면서 웹개발에 대해 알아갔고 하나하나씩 프로젝트를 해보면서
          프로그래밍이 점점 재밌어지게 되었습니다.{' '}
          <strong>
            현재는 제가 만든 결과물들을 사용자가 이용했을 때 최고의 경험이 될수
            있도록 노력하고 있습니다.{' '}
          </strong>
        </ContentAbout>
      </AosWrap>
      <AboutSkillWrapperCp />
      <HightLight
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-duration="1000"
      >
        {' '}
        전공과 전혀 무관하기에 <br /> 더 열심히 했고 앞으로도 열심히 할
        것입니다.
        <br />
        <Span>앞으로 뛰어난 풀스택 개발자가 되고 싶습니다.</Span>
      </HightLight>
    </Wrapper>
  );
};

export default React.memo(AboutCp);
