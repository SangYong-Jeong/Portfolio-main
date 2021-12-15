import React from 'react';
import styled, { color } from '../../style';

import AboutSkillCp from './AboutSkillCp';

const Wrapper = styled.div`
  display: flex;
`;

const AboutSkillWrapperCp = () => {
  return (
    <Wrapper>
      <AboutSkillCp type="js" color={color.warning} content="JavaScript" />
      <AboutSkillCp type="node" color={color.success} content="Nodejs" />
      <AboutSkillCp type="vuejs" color={color.purple} content="Vuejs" />
      <AboutSkillCp type="react" color={color.primary} content="ReactJs" />
    </Wrapper>
  );
};

export default AboutSkillWrapperCp;
