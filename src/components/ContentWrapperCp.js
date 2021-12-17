import React from 'react';
import styled, { media } from '../style';

import BannerWrapperCp from './main/BannerWrapperCp';
import AboutCp from './about/AboutCp';
import SkillsCp from './skills/SkillsCp';
import ProjectsWrapperCp from './projects/ProjectsWrapperCp';
import ContactWrapperCp from './contact/ContactWrapperCp';
import FooterCp from './footer/FooterCp';

const Wrapper = styled.div`
  width: calc(100% - 300px);
  margin-left: 300px;
  background-color: #f7f7f7;
  @media ${media.sm} {
    width: 100%;
    margin-left: 0;
    margin-top: 25px;
  }
`;

const Wrap = styled.div`
  padding: 0 1em;
  @media ${media.sm} {
    padding: 0 0.125em;
  }
`;

const ContentWrapperCp = () => {
  return (
    <Wrapper>
      <BannerWrapperCp />
      <Wrap>
        <AboutCp />
        <SkillsCp />
        <ProjectsWrapperCp />
        <ContactWrapperCp />
      </Wrap>
      <FooterCp />
    </Wrapper>
  );
};

export default ContentWrapperCp;
