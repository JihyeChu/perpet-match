//setipAxiosIntercepters;

import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const getDummy = (n = 30) => {
  const l = [];
  for (let i = 0; i < n; i++) {
    l.push(i);
  }
  return l.map((i) => <h1>{i}</h1>);
};

const HomeBody = styled.div`
  margin-top: 5rem;
`;

const SignIn = () => {
  return (
    <>
      <Header />
      <HomeBody>
        <h1>SignIn</h1>
        {getDummy()}
      </HomeBody>
    </>
  );
};

export default SignIn;