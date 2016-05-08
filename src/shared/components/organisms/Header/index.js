import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { createLocal } from '../../utils/localnames';
import styles from './styles.scss';

const { localNames: local } = createLocal(styles);

export default class Header extends Component {
  render() {
    const links = [
      { key: 'home', to: '/', label: 'Home', index: true },
      { key: 'foo', to: '/foo', label: 'Foo' },
      { key: 'bar', to: '/bar', label: 'Bar' },
      { key: 'style', to: '/style', label: 'Style' },
      { key: 'login', to: '/login', label: 'Login' },
      { key: 'logout', to: '/logout', label: 'Logout' },
    ];

    return (
      <header className={local('root')}>
        <hgroup>
          <h1 className={local('serviceLogo')}>HOT PEPPER Beauty</h1>
          <h2 className={local('corporateLogo')}>PRODUCED by RECRUIT</h2>
        </hgroup>
        <nav className={local('links')}>
          <ul className={local('items')}>
            {links.map(({ key, to, label, index }) => (
              <li key={key} className={local('item')}>
                {index ?
                  <IndexLink to={to} className={local('link')} activeClassName={local('link-isActive')}>
                    {label}
                  </IndexLink>
                  :
                  <Link to={to} className={local('link')} activeClassName={local('link-isActive')}>
                    {label}
                  </Link>
                }
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
}
