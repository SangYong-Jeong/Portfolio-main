import React from 'react';
import styled, { media } from '../../style';

import ProgressCp from './ProgressCp';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const content = [
  '사이트들을 클론코딩 하면서 html을 이용해 layout잡는 법을 연습하였고 ejs템플릿 문법을 적용하여 데이터를 원하는 위치에 넣을 수 있도록 연습하였습니다.',
  '클론코딩하면서 HTML로 짜여져 있는 layout 안 에서 원하는 디자인을 구현하기 위해 연습하였고 기본적인 반응형을 CSS media 쿼리로 주는 법에 대해 연습했습니다.',
  'JavaScript를 처음에 학습할 때는 ES5 문법과 jQuery에 대해 학습했고, Node를 학습하기 전 ES6문법에 대해 학습했습니다. 추가적으로 JavaScript라는 언어의 특성과 원리에 대해 배웠습니다.',
  'Scss를 통해 css를 더욱 편하게 적용하는 방법에 대해 학습했고, 공통으로 쓰이는 부분들은 변수 및 mixin 처리를 해서 특정 부분 필요 시 import해와서 사용하는 부분을 연습했습니다.',
  'Node를 학습하면서 여러 module 및 express.js 프레임워크를 학습하였고 이를 통해 웹 애플리케이션 서버를 구축했습니다.',
  '프로젝트를 진행하면서 MySQL을 학습했고 이를 이용해 서버에 들어온 요청에 따라 데이터를 CRUD 하는 방법에 대해 학습했고, Join을 이용해 하나의 테이블이 아닌 관계로 이어진 테이블들을 엮어 Data를 읽어오는 방법에 대해 학습했습니다.',
  'Vue-cli를 통해 Vue 프로젝트를 진행하였으며, 컴포넌트에 대한 개념을 Vue에서 처음으로 학습하였습니다. Vue 프로젝트를 진행하면서 Vuex, Vue-router에 대해 학습했습니다.',
  '쇼핑몰 프로젝트를 진행하면서 React를 학습했습니다. React를 배우면서 JSX 문법에 대해 알게 되었고, 클래스형 컴포넌트, 함수형 컴포넌트(Hooks) 및 React의 라이프사이클에 대해 학습하게 되었고, 더 나아가 Redux및 immer, thunk 에 대해 학습했습니다.',
  '모든 project들을 github로 형상관리 하였습니다.',
  'AWS를 서버로 활용하며, EC2를 이용해 만든 프로젝트를 배포했습니다. Router53을 이용해 서브 도메인을 설정해보았습니다. ',
];

const RightProgress = styled(ProgressCp)`
  margin-left: 4%;
  @media ${media.sm} {
    margin-left: 0;
  }
`;

const left = {
  aos: 'fade-left',
  offset: '700',
  duration: '1000',
};

const right = {
  aos: 'fade-right',
  offset: '700',
  duration: '1000',
};

const ProgressWrapperCp = () => {
  return (
    <Wrapper>
      <ProgressCp
        title={'HTML5'}
        now={70}
        color="danger"
        content={content[0]}
        aos={right}
      />
      <RightProgress
        title={'CSS3'}
        now={70}
        color=""
        content={content[1]}
        aos={left}
      />
      <ProgressCp
        title={'SCSS'}
        now={70}
        color="info"
        content={content[2]}
        aos={right}
      />
      <RightProgress
        title={'JavaScript'}
        now={80}
        color="warning"
        content={content[3]}
        aos={left}
      />
      <ProgressCp
        title={'Node'}
        now={75}
        color="success"
        content={content[4]}
        aos={left}
      />
      <RightProgress
        title={'MySQL'}
        now={70}
        color=""
        content={content[5]}
        aos={right}
      />
      <ProgressCp
        title={'Vue'}
        now={70}
        color="info"
        content={content[6]}
        aos={left}
      />
      <RightProgress
        title={'React'}
        now={80}
        color="warning"
        content={content[7]}
        aos={right}
      />
      <ProgressCp
        title={'Github'}
        now={60}
        color="warning"
        content={content[8]}
        aos={left}
      />
      <RightProgress
        title={'AWS'}
        now={50}
        color="dnager"
        content={content[9]}
        aos={right}
      />
    </Wrapper>
  );
};

export default React.memo(ProgressWrapperCp);
// yarn bootstrap module 이용해서 progress bar 구현
// variant => success, info, danger, warning
