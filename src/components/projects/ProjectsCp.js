import React from 'react';
import styled, { font, color } from '../../style';

import ProjectCp from './ProjectCp';

const Wrapper = styled.div``;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5em;
`;

const Title = styled.h3`
  display: inline-block;
  padding: 0.75em;
  border: 3px dashed ${color.black};
  font-size: 1.25em;
  font-weight: 600;
  font-family: ${font.content};
  margin-bottom: 1em;
`;

const ProjectsCp = ({ title, projects }) => {
  const { up } = title;
  return (
    <Wrapper>
      <Title color={color} data-aos={up && up.aos}>
        {title.title}
      </Title>
      <Wrap>
        {projects.map((project, i) => (
          <ProjectCp key={project.id} {...project} />
        ))}
      </Wrap>
    </Wrapper>
  );
};

export default React.memo(ProjectsCp);
