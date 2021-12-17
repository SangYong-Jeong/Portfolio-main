import React, { useRef, useEffect } from 'react';
import styled, { color, font } from '../../style';
import { useDispatch } from 'react-redux';
import { projects } from '../../modules/height';

import ProjectsCp from './ProjectsCp';

/* PUBLISHING */
import publishing1 from '../../assets/img/projects/Publishing1.jpg';
import publishing2 from '../../assets/img/projects/Publishing2.jpg';
import publishing3 from '../../assets/img/projects/Publishing3.jpg';

/* Node(Backend) */
import book from '../../assets/img/projects/도서관리시스템.jpg';
import admin from '../../assets/img/projects/Shoppingmall-admin.jpg';

/* Vue */
import weather from '../../assets/img/projects/Vue-weather.jpg';
import vueBook from '../../assets/img/projects/Vue-도서관리.jpg';

/* React */
import shoppingmall from '../../assets/img/projects/React1.jpg';

const datas = [
  {
    id: 1,
    title: {
      title: '1. PUBLISHING',
      up: {
        aos: 'fade-up',
        offset: '500',
        duration: '1000',
      },
    },
    projects: [
      {
        id: 1,
        title: 'Page 클론코딩1',
        content: 'HTML과 CSS를 이용한 Publishing',
        margin: true,
        src: publishing1,
        domain: 'https://jsy-band.web.app',
        aos: {
          aos: 'fade-right',
          offset: '700',
          duration: '1000',
        },
      },
      {
        id: 2,
        title: 'Page 클론코딩2',
        content: 'HTML과 CSS를 이용한 Publishing',
        margin: false,
        src: publishing2,
        domain: 'https://jsy-br.web.app',
        aos: {
          aos: 'fade-left',
          offset: '700',
          duration: '1000',
        },
      },
      {
        id: 3,
        title: 'Page 클론코딩3',
        content: 'HTML과 CSS를 이용한 Publishing',
        margin: true,
        src: publishing3,
        domain: 'https://jsy-pr.web.app',
        aos: {
          aos: 'fade-up',
          offset: '700',
          duration: '1000',
        },
      },
    ],
  },
  {
    id: 2,
    title: {
      title: '2. Node(Express.js)',
      up: {
        aos: 'fade-up',
        offset: '500',
        duration: '1000',
      },
    },
    projects: [
      {
        id: 1,
        title: '도서관리시스템',
        content:
          'express.js로 웹서버 구축(RESTful, MVC Pattern), MySQL을 활용해 DB 쿼링, API서버 구축(회원은 API KEY발급), 인증 구현(passport 이용해 local 로그인, SNS 회원 로그인 구현), 반응형 처리 구현 ',
        margin: true,
        src: book,
        domain: 'https://book.moongtak.com',
        aos: {
          aos: 'fade-right',
          offset: '700',
          duration: '1000',
        },
      },
      {
        id: 2,
        title: '쇼핑몰 관리자 페이지',
        content:
          'express.js로 웹서버 구축(RESTful, MVC Pattern), jsTree를 활용해 Category node 구축, Sequelize 사용',
        margin: false,
        src: admin,
        domain: 'https://moongtak.com/admin',
        aos: {
          aos: 'fade-left',
          offset: '700',
          duration: '1000',
        },
      },
    ],
  },
  {
    id: 3,
    title: {
      title: '3. Vue',
      up: {
        aos: 'fade-up',
        offset: '500',
        duration: '1000',
      },
    },
    projects: [
      {
        id: 1,
        title: 'Vue(날씨앱)',
        content:
          'Vuejs로 만든 날씨앱, Vue-cli 이용해서 작업, Vuex, Vue-router 이용',
        margin: true,
        src: weather,
        domain: 'https://leo-weather-b8b54.web.app',
        aos: {
          aos: 'fade-left',
          offset: '700',
          duration: '1000',
        },
      },
      {
        id: 2,
        title: 'Vue(도서관리시스템)',
        content:
          'API Key 발급 받은 후 token을 이용해 데이터를 받아 프론트에서 핸들링하는 시스템 구현',
        margin: false,
        src: vueBook,
        domain: 'https://leo-vue-book.web.app',
        aos: {
          aos: 'fade-right',
          offset: '700',
          duration: '1000',
        },
      },
    ],
  },
  {
    id: 4,
    title: {
      title: '4. React',
      up: {
        aos: 'fade-up',
        offset: '500',
        duration: '1000',
      },
    },
    projects: [
      {
        id: 1,
        title: 'React 쇼핑몰 페이지',
        content:
          'React를 활용한 쇼핑몰 페이지 구현, Redux/toolkit을 활용해 쇼핑몰 관리자 페이지의 api router에서 보내주는 data 이용해 프론트에서 data handling하는 시스템 구현',
        margin: false,
        src: shoppingmall,
        domain: 'https://moongtak.com',
        aos: {
          aos: 'fade-right',
          offset: '700',
          duration: '1000',
        },
      },
    ],
  },
];

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
  font-size: 1.125em;
  font-weight: 700;
  margin-bottom: 3em;
`;

const ContentTitle = styled.p`
  font-family: ${font.content};
  color: #5e5e5e;
  font-weight: 300;
  font-size: 1em;
  font-weight: 500;
  margin-bottom: 3em;
`;

const HighLight = styled.div`
  text-align: center;
  font-family: ${font.content};
  font-size: 0.75em;
  padding: 2em;
  background-color: ${color.primary};
  color: ${color.white};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
`;

const ProjectsWrapperCp = () => {
  const dispatch = useDispatch();
  const wrapper = useRef('');
  useEffect(() => {
    dispatch(
      projects(
        window.pageYOffset + wrapper.current.getBoundingClientRect().top + 300
      )
    );
  }, [dispatch]);
  return (
    <Wrapper ref={wrapper}>
      <AosWrap
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-duration="1000"
      >
        <Index>MY WORK</Index>
        <Title>PROJECTS</Title>
        <ContentTitle>
          {' '}
          PUBLISHING &nbsp;||&nbsp; Node(Express.js) &nbsp;||&nbsp; Vue
          &nbsp;||&nbsp; React{' '}
        </ContentTitle>
      </AosWrap>
      {datas.map((data) => (
        <ProjectsCp key={data.id} title={data.title} projects={data.projects} />
      ))}
      <HighLight
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-duration="1000"
      >
        앞으로 더 많은 프로젝트가 추가될 예정입니다!
      </HighLight>
    </Wrapper>
  );
};

export default ProjectsWrapperCp;
