import React from 'react';
import styled, { color } from '../../style';

import AboutSkillCp from './AboutSkillCp';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5em;
`;

const AboutSkillWrapperCp = () => {
  return (
    <Wrapper>
      <AboutSkillCp type="html5" color={color.danger} content="HTML5" />
      <AboutSkillCp type="css3-alt" color={color.indigo} content="CSS3" />
      <AboutSkillCp type="js" color={color.warning} content="JavaScript" />
      <AboutSkillCp type="node" color={color.success} content="Nodejs" />
      <AboutSkillCp type="database" color={color.grey} content="MySQL" />
      <AboutSkillCp type="vuejs" color={color.purple} content="Vuejs" />
      <AboutSkillCp type="react" color={color.primary} content="ReactJs" />
      <AboutSkillCp type="github" color={color.black} content="Github" />
      <AboutSkillCp type="sass" color={color.purple} content="Scss" />
      <AboutSkillCp type="aws" color={color.indigo} content="AWS" />
    </Wrapper>
  );
};

export default AboutSkillWrapperCp;
