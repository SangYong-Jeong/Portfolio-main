import React from 'react';
import styled from '../style';

import AboutCp from './about/AboutCp';
import SkillsCp from './skills/SkillsCp';
import ProjectsWrapperCp from './projects/ProjectsWrapperCp';
import ContactWrapperCp from './contact/ContactWrapperCp';
import FooterCp from './footer/FooterCp';

const Wrapper = styled.div`
  width: calc(100% - 300px);
  margin-left: 300px;
  background-color: #f7f7f7;
`;

const Wrap = styled.div`
  padding: 0 1em;
`;

const ContentWrapperCp = () => {
  return (
    <Wrapper>
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
