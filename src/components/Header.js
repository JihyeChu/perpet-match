import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../lib/styles/palette';
import { GoSearch } from 'react-icons/go';

const headerLinks = [
  {
    key: 'petlist',
    text: '입양하기',
    to: '/petlist',
  },
  {
    key: 'petform',
    text: '파양하기',
    to: '/petform',
  },
  {
    key: 'shoplist',
    text: '쇼핑하기',
    to: '/shoplist',
  },
];

const HeaderBlock = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${palette.main[0]};
  color: #204030;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);

  .wrapper {
    padding-left: 4rem;
    padding-right: 4rem;
    position: relative;
    width: auto;
    height: 4.25rem;
    display: flex;
    margin: 0 auto;
    align-items: center;
    color: white;

    .logo-area {
      margin-right: 4rem;
      img {
        width: 136px;
      }
    }
    .search-area {
      margin-left: auto;
      button {
        background: none;
        outline: none;
        border: none;
        color: ${palette.gray[0]};
        cursor: pointer;
        &:hover {
          color: ${palette.gray[4]};
        }
      }
    }
    .user-area {
      margin-left: 3rem;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        color: ${palette.gray[4]};
      }
    }
  }
`;

const HeaderLink = styled(NavLink)`
  padding-top: 0.4rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;

  &:hover {
    color: ${palette.main[1]};
  }
  & + & {
    margin-left: 3rem;
  }
`;

const HeaderLine = styled.hr`
  border: 0;
  height: 0;
  margin: 0;
  //border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

const Spacer = styled.div`
  height: 4.25rem;
`;

const Header = ({ user }) => {
  return (
    <>
      <HeaderBlock>
        <div className="wrapper">
          <div className="logo-area">
            <Link to="/">
              <img src="/images/common/logo_w.png" alt="logo" />
            </Link>
          </div>
          {headerLinks.map((i) => (
            <HeaderLink
              key={i.key}
              to={i.to}
              activeStyle={{
                color: palette.main[1],
              }}
            >
              {i.text}
            </HeaderLink>
          ))}
          <div className="search-area">
            <button>
              <GoSearch />
            </button>
          </div>
          <div className="user-area">
            {user ? user + '님' : <Link to="/signin">회원가입 / 로그인</Link>}
          </div>
        </div>
        <HeaderLine />
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
