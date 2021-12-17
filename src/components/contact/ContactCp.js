import React from 'react';
import styled, { color, font, media } from '../../style';

const Wrapper = styled.div`
  width: 50%;
  margin-bottom: 2em;
  padding: 0 3%;
  display: flex;
  align-items: center;
  @media ${media.sm} {
    width: 100%;
  }
`;

const IconWrap = styled.div`
  width: 80px;
  height: 80px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2em;
`;

const Icon = styled.i`
  color: ${color.primary};
  text-align: center;
  font-size: 2em;
`;

const ContentWrap = styled.div`
  font-family: ${font.content};
  font-weight: 600;
  width: 50%;
`;

const ContactCp = ({ icon, content, margin, aos }) => {
  return (
    <Wrapper
      margin={margin}
      data-aos={aos.aos}
      data-aos-offset={aos.offset}
      data-aos-duration={aos.duration}
    >
      <IconWrap>
        <Icon className={icon} />
      </IconWrap>
      <ContentWrap>{content}</ContentWrap>
    </Wrapper>
  );
};

export default ContactCp;
