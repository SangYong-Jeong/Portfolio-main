import React from 'react';
import styled from '../style';

import AboutCp from './about/AboutCp';
import SkillsCp from './skills/SkillsCp';
import ProjectsWrapperCp from './projects/ProjectsWrapperCp';

const Wrapper = styled.div`
  width: calc(100% - 300px);
  padding: 0 1em;
  margin-left: 300px;
  background-color: #f7f7f7;
`;

const ContentWrapperCp = () => {
  return (
    <Wrapper>
      <AboutCp />
      <SkillsCp />
      <ProjectsWrapperCp />
    </Wrapper>
  );
};

export default ContentWrapperCp;
