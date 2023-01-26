import React from "react";
import { Menu } from "antd";
import { NavLink } from "./NavLink";
import { FormattedMessage } from "react-intl";

export const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <NavLink href="/products/token" exact className="nav__link">
            <FormattedMessage id="token.title" />
          </NavLink>
        ),
      },
      {
        key: "2",
        label: (
          <NavLink href="/products/payment" exact className="nav__link">
            <FormattedMessage id="payment.title" />
          </NavLink>
        ),
      },
      {
        key: "3",
        label: (
          <NavLink href="/products/wallet" exact className="nav__link">
            <FormattedMessage id="wallet.title" />
          </NavLink>
        ),
      },
    ]}
  />
);

export const menuDefi = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <NavLink href="/stacking" exact className="nav__link">
            <FormattedMessage id="stacking" />
          </NavLink>
        ),
      },
      {
        key: "2",
        label: (
          <NavLink href="/swap" exact className="nav__link">
            <FormattedMessage id="swap" />
          </NavLink>
        ),
      },
    ]}
  />
);

export const netMenu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <NavLink
            href="https://scan.finenex.net/"
            isNewTab={true}
            exact
            className="nav__link"
          >
            <FormattedMessage id="main_net" />
          </NavLink>
        ),
      },
      {
        key: "2",
        label: (
          <NavLink
            href="https://test-scan.finenex.net/"
            exact
            isNewTab={true}
            className="nav__link"
          >
            <FormattedMessage id="test_net" />
          </NavLink>
        ),
      },
    ]}
  />
);

// export default menu;
