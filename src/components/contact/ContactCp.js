import React from 'react';
import styled, { color, font } from '../../style';

const Wrapper = styled.div`
  width: 50%;
  margin-bottom: 2em;
  padding: 0 3%;
  display: flex;
  align-items: center;
  /* margin: ${(props) => (props.margin ? '0 4% 4% 0' : '0 4% 0')}; */
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

const ContactCp = ({ icon, content, margin }) => {
  return (
    <Wrapper margin={margin}>
      <IconWrap>
        <Icon className={icon} />
      </IconWrap>
      <ContentWrap>{content}</ContentWrap>
    </Wrapper>
  );
};

export default ContactCp;
