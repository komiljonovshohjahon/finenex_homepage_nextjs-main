import React from "react";
import Image from "next/image";
import { NavLink } from "./NavLink";
import { Dropdown } from "antd";
import {menu, menuDefi, netMenu} from "./Dropdown";
import { FormattedMessage } from "react-intl";

export default function Header() {
  return (
    <>
      <div className="site-header">
        <NavLink href="/" exact className="nav__link">
          <Image
            src="/assets/icons/logo.svg"
            alt="site logo"
            width="180"
            height="40"
          />
        </NavLink>
        <nav className="site-header__nav nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Dropdown overlay={menu} placement="bottom">
                <NavLink href="/products" exact className="nav__link">
                  <FormattedMessage id="products.title" />
                </NavLink>
              </Dropdown>
            </li>
           <li className="nav__item">
              <NavLink href="/projects" exact className="nav__link">
                <FormattedMessage id="projects" />
              </NavLink>
            </li>
            <li className="nav__item">
              <Dropdown overlay={netMenu} placement="bottom" arrow>
                <NavLink href="" exact className="nav__link">
                  <FormattedMessage id="network" />
                </NavLink>
              </Dropdown>
            </li>
            <li className="nav__item">
              <NavLink href="/wallet" exact className="nav__link">
                <FormattedMessage id="wallet.title" />
              </NavLink>
            </li>
            <li className="nav__item">
              <Dropdown overlay={menuDefi} placement="bottom" arrow>
                <NavLink href="" exact className="nav__link">
                  <FormattedMessage id="defi" />
                </NavLink>
              </Dropdown>
            </li>
            <li className="nav__item">
              <NavLink
                href="https://docs.finenex.net/"
                exact
                isNewTab={true}
                className="nav__link"
                
              >
                <FormattedMessage id="development" />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
