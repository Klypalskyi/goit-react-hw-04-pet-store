import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => (
  <ul className={styles.navbar}>
    <li>
      <NavLink
        exact
        to="/"
        className={styles.navbarItem}
        activeClassName={styles.navbarItem_active}
      >
        Home
      </NavLink>
      <NavLink
        to="/pets"
        className={styles.navbarItem}
        activeClassName={styles.navbarItem_active}
      >
        Pets
      </NavLink>
      <NavLink
        to="/about"
        className={styles.navbarItem}
        activeClassName={styles.navbarItem_active}
      >
        About
      </NavLink>
    </li>
  </ul>
);

export default Nav;
