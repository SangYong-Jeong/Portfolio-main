import React from 'react';
import styled, { font, color } from '../../style';

import ContactCp from './ContactCp';

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

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const datas = [
  {
    id: 1,
    icon: 'far fa-envelope',
    content: 'sangyong9501@gmail.com',
    margin: true,
    aos: {
      aos: 'fade-left',
      offset: '700',
      duration: '1000',
    },
  },
  {
    id: 2,
    icon: 'fas fa-map-marker-alt',
    content: '서울시 구로구 가리봉동',
    margin: false,
    aos: {
      aos: 'fade-right',
      offset: '700',
      duration: '1000',
    },
  },
  {
    id: 3,
    icon: 'fas fa-phone-alt',
    content: '+82 10 4564 9145',
    margin: true,
    aos: {
      aos: 'fade-up',
      offset: '700',
      duration: '1000',
    },
  },
  {
    id: 4,
    icon: 'fab fa-github',
    content: 'https://github.com/SangYong-Jeong',
    margin: false,
    aos: {
      aos: 'fade-up',
      offset: '700',
      duration: '1000',
    },
  },
];

const ContactWrapperCp = () => {
  return (
    <Wrapper>
      <AosWrap
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-duration="1000"
      >
        <Index>GET IN TOUCH</Index>
        <Title>CONTACT</Title>
      </AosWrap>
      <Wrap>
        {datas.map((data) => (
          <ContactCp key={data.id} {...data} />
        ))}
      </Wrap>
    </Wrapper>
  );
};

export default ContactWrapperCp;
