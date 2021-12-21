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
};

const up = {
  aos: 'fade-up',
};

const right = {
  aos: 'fade-right',
};

const AboutSkillWrapperCp = () => {
  return (
    <Wrapper>
      <AboutSkillCp
        type="html5"
        color={color.danger}
        content="HTML5"
        aos={right}
        offset="600"
      />
      <AboutSkillCp
        type="css3-alt"
        color={color.indigo}
        content="CSS3"
        aos={left}
        offset="600"
      />
      <AboutSkillCp
        type="js"
        color={color.warning}
        content="JavaScript"
        aos={up}
        offset="600"
      />
      <AboutSkillCp
        type="node"
        color={color.success}
        content="Nodejs"
        aos={up}
        offset="600"
      />
      <AboutSkillCp
        type="database"
        color={color.grey}
        content="MySQL"
        aos={right}
        offset="500"
      />
      <AboutSkillCp
        type="vuejs"
        color={color.purple}
        content="Vuejs"
        aos={left}
        offset="500"
      />
      <AboutSkillCp
        type="react"
        color={color.primary}
        content="ReactJs"
        aos={up}
        offset="500"
      />
      <AboutSkillCp
        type="github"
        color={color.black}
        content="Github"
        aos={up}
        offset="500"
      />
      <AboutSkillCp
        type="sass"
        color={color.purple}
        content="Scss"
        aos={right}
        offset="400"
      />
      <AboutSkillCp
        type="aws"
        color={color.indigo}
        content="AWS"
        aos={left}
        offset="400"
      />
    </Wrapper>
  );
};

export default React.memo(AboutSkillWrapperCp);
