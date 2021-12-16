import React from 'react';
import styled, { font, color } from '../../style';

import ContactCp from './ContactCp';

const Wrapper = styled.section`
  padding: 2em;
  margin-bottom: 5em;
`;

const Index = styled.span`
  display: inline-block;
  color: ${color.grey};
  font-size: 0.75em;
  letter-spacing: 2px;
  margin-bottom: 2em;
`;

const Title = styled.h2`
  letter-spacing: 3px;
  font-family: ${font.title};
  font-size: 1.25em;
  font-weight: 700;
  margin-bottom: 2em;
`;

const Wrap = styled.div`
  display: flex;
`;

const datas = [
  {
    id: 1,
    icon: '',
    content: '',
    margin: true,
  },
  {
    id: 2,
    icon: '',
    content: '',
    margin: false,
  },
  {
    id: 3,
    icon: '',
    content: '',
    margin: true,
  },
  {
    id: 4,
    icon: '',
    content: '',
    margin: false,
  },
];

const ContactWrapperCp = () => {
  return (
    <Wrapper>
      <Index>GET IN TOUCH</Index>
      <Title>CONTACT</Title>
      <Wrap>
        <ContactCp />
      </Wrap>
    </Wrapper>
  );
};

export default ContactWrapperCp;
