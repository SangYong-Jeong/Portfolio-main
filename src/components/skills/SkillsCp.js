import React, { useRef, useEffect } from 'react';
import styled, { color, font } from '../../style';
import { useDispatch } from 'react-redux';
import { skills } from '../../modules/height';

import ProgressWrapperCp from './ProgressWrapperCp';

const Wrapper = styled.section`
  padding: 2em;
  margin-bottom: 10em;
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

const Content = styled.p`
  font-family: ${font.content};
  font-size: 1em;
  line-height: 2;
  margin-bottom: ${(props) => (props.mb ? props.mb : '2em')};
`;

const SkillsCp = () => {
  const dispatch = useDispatch();
  const wrapper = useRef('');
  useEffect(() => {
    dispatch(
      skills(window.pageYOffset + wrapper.current.getBoundingClientRect().top)
    );
  }, [dispatch]);
  return (
    <Wrapper ref={wrapper}>
      <AosWrap
        data-aos="fade-right"
        data-aos-offset="1000"
        data-aos-duration="1000"
      >
        <Index>TECH SKILLS</Index>
        <Title>"저는 지금 이것들을 할 수 있습니다."</Title>
        <Content>
          &nbsp;&nbsp;국비 과정 처음단계에서 저는 퍼블리싱을 할 수 있는 HTML과
          CSS를 배운 후 DOM을 동적으로 핸들링 하는 javascript를 배웠습니다. 이후
          DOM을 편하게 핸들링할 수 있는 라이브러리 jQuery를 배웠습니다. 그 후
          브라우저 밖에서 javascript를 실행할 수 있는 Nodejs를 학습했습니다.
          이를 바탕으로 웹 애플리케이션 서버를 구축하는 프레임워크인 express를
          이용해 웹 애플리케이션 서버를 구축했고 프로젝트를 진행하면서 REST API
          및 MVC Pattern, MySQL 그리고 여러 모듈들에 대해 학습했습니다. 프로젝트
          배포시에는 AWS를 통해 ec2를 활용한 배포 및 certbot을 이용한 인증서
          설치와 router53을 통한 서브 도메인 설정을 해봤습니다.
        </Content>
        <Content mb={'5em'}>
          &nbsp;&nbsp;이후 Front 프레임워크인 Vuejs와 Reactjs를 학습했고 이를
          이용해 날씨앱 및 쇼핑몰을 구현하면서 Vuex, VueRouter, Redux,
          React-router-dom 등 여러 모듈들을 이용해 데이터를 핸들링하고
          사용자경험을 극대화할 수 있는 UI를 구현하며 특정 element 부분을
          컴포넌트화 시켜 재사용 및 유지보수가 편한 프론트엔드 개발에 흥미를
          느끼게 되었고 현재는 따로 React 및 Vue에 대한 학습을 이어가고
          있습니다.
        </Content>
      </AosWrap>
      <ProgressWrapperCp />
    </Wrapper>
  );
};

export default SkillsCp;
