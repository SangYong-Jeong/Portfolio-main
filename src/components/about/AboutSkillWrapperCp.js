import React from 'react';
import styled, { color } from '../../style';

import AboutSkillCp from './AboutSkillCp';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5em;
`;

const left = {
  aos: 'fade-left',
  offset: '700',
  duration: '1000',
};

const up = {
  aos: 'fade-up',
  offset: '700',
  duration: '1000',
};

const right = {
  aos: 'fade-right',
  offset: '700',
  duration: '1000',
};

const AboutSkillWrapperCp = () => {
  return (
    <Wrapper>
      <AboutSkillCp
        type="html5"
        color={color.danger}
        content="HTML5"
        aos={right}
      />
      <AboutSkillCp
        type="css3-alt"
        color={color.indigo}
        content="CSS3"
        aos={left}
      />
      <AboutSkillCp
        type="js"
        color={color.warning}
        content="JavaScript"
        aos={up}
      />
      <AboutSkillCp
        type="node"
        color={color.success}
        content="Nodejs"
        aos={up}
      />
      <AboutSkillCp
        type="database"
        color={color.grey}
        content="MySQL"
        aos={right}
      />
      <AboutSkillCp
        type="vuejs"
        color={color.purple}
        content="Vuejs"
        aos={left}
      />
      <AboutSkillCp
        type="react"
        color={color.primary}
        content="ReactJs"
        aos={up}
      />
      <AboutSkillCp
        type="github"
        color={color.black}
        content="Github"
        aos={up}
      />
      <AboutSkillCp
        type="sass"
        color={color.purple}
        content="Scss"
        aos={right}
      />
      <AboutSkillCp type="aws" color={color.indigo} content="AWS" aos={left} />
    </Wrapper>
  );
};

export default AboutSkillWrapperCp;
