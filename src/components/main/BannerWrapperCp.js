import React from 'react';
import styled from '../../style';
import Slider from 'react-slick';

import BannerCp from './BannerCp';

import BannerImg1 from '../../assets/img/banner/Banner1.jpg';
import BannerImg2 from '../../assets/img/banner/Banner2.jpg';

const Wrapper = styled.div`
  overflow-x: hidden;
  width: 100%;
`;

const settings = {
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const datas = [
  {
    id: 1,
    html: 'Hello! Nice to meet you!',
    title: '',
    content: '',
    src: BannerImg1,
    weight: true,
  },
  {
    id: 2,
    html: '',
    title: 'I am <br/> Frontend Developer',
    content:
      '늦었지만 <br/> 늦은만큼 열심히 노력하는 <br/> 개발자 정상용입니다.',
    src: BannerImg2,
    weight: false,
  },
];

const BannerWrapperCp = () => {
  return (
    <Wrapper>
      <Slider {...settings}>
        {datas.map((data) => (
          <BannerCp key={data.id} {...data} />
        ))}
      </Slider>
    </Wrapper>
  );
};

export default React.memo(BannerWrapperCp);
