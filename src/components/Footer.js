import React from "react";
import Image from "next/image";
import { NavLink } from "./NavLink";
import { FormattedMessage } from "react-intl";
export default function Footer() {
  return (
    <div className="footer-inner container">
      <div className="footer-inner__holder holder-footer">
        <div className="holder-footer__div">
          <Image
            src="/assets/icons/logo.svg"
            width="180"
            height="40"
            alt="site logo "
          />
        </div>
        <span className="holder-footer__text copyright">
          © 2022 FINENEX, Inc. All rights reserved.
        </span>
        <ul className="holder-footer__list">
          <li className="holder-footer__item">
            <i className="holder-footer__icon bx bx-navigation"></i>
            <address className="holder-footer__text">
              #59A, Amangeldy Str., Almaty city, Republic of Kazakhstan
            </address>
          </li>
          <li className="holder-footer__item">
            <i className="holder-footer__icon bx bx-phone"></i>
            <a className="holder-footer__link" href="tel:77051314747">
              +7-705-131-47-47
            </a>
          </li>
          <li className="holder-footer__item">
            <i className="holder-footer__icon bx bxl-gmail"></i>
            <a className="holder-footer__link" href="mailto:info@finenex.kz">
              info@finenex.kz
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-inner__holder holder-footer">
        <h3 className="holder-footer__title">
          <FormattedMessage id="quick_links" />
        </h3>
        <ul className="holder-footer__list">
          <li className="holder-footer__item">
            <NavLink href="/products" exact className="holder-footer__link">
              <FormattedMessage id="products.title" />
            </NavLink>
          </li>
          <li className="holder-footer__item">
            <NavLink href="https://scan.finenex.net/" isNewTab={true} exact className="holder-footer__link">
              <FormattedMessage id="main_net" />
            </NavLink>
          </li>
          <li className="holder-footer__item">
            <NavLink href="https://test-scan.finenex.net/" isNewTab={true} exact className="holder-footer__link">
              <FormattedMessage id="test_net" />
            </NavLink>
          </li>
          <li className="holder-footer__item">
            <NavLink href="https://docs.finenex.net/"
                isNewTab={true}
                exact className="holder-footer__link">
              <FormattedMessage id="development" />
            </NavLink>
          </li>
   
        </ul>
      </div>
      <div className="footer-inner__holder holder-footer">
        <h3 className="holder-footer__title">Quicklinks</h3>
        <ul className="holder-footer__list">
          <li className="holder-footer__item">
            <NavLink href="/stacking" exact className="holder-footer__link">
              <FormattedMessage id="stacking" />
            </NavLink>
          </li>
          <li className="holder-footer__item">
            <NavLink href="/swap" exact className="holder-footer__link">
              <FormattedMessage id="swap" />
            </NavLink>
          </li>
          <li className="holder-footer__item">
            <NavLink href="/wallet" exact className="holder-footer__link">
              <FormattedMessage id="wallet.title" />
            </NavLink>
          </li>
        </ul>
      </div>
      {/* TODO: Open the above line when it is ready by KZ */}
      {/* <div className="footer-inner__holder holder-footer">
        <h3 className="holder-footer__title">
          <FormattedMessage id="connect" />
        </h3>
        <ul className="holder-footer__socials socials">
          <li className="socials__item">
            <a className="socials__link" href="#">
              <Image
                src="/assets/icons/facebook.svg"
                width="24"
                height="24"
                alt="facebook logo "
              />
            </a>
          </li>
          <li className="socials__item">
            <a className="socials__link" href="#">
              <Image
                src="/assets/icons/instagram.svg"
                width="24"
                height="24"
                alt="instagram logo "
              />
            </a>
          </li>
          <li className="socials__item">
            <a className="socials__link" href="#">
              <Image
                src="/assets/icons/twitter.svg"
                width="24"
                height="24"
                alt="twitter logo "
              />
            </a>
          </li>
          <li className="socials__item">
            <a className="socials__link" href="#">
              <Image
                src="/assets/icons/github.svg"
                width="24"
                height="24"
                alt="github logo "
              />
            </a>
          </li>
          <li className="socials__item">
            <a className="socials__link" href="#">
              <Image
                src="/assets/icons/topcoat.svg"
                width="24"
                height="24"
                alt="topcoat logo "
              />
            </a>
          </li>
        </ul>
        <form className="holder-footer__form footer-form">
          <label className="footer-form__label" htmlFor="submit">
            <FormattedMessage id="subscribe_text" />
          </label>
          <div className="footer-form__holder">
            <input
              className="footer-form__input"
              id="submit"
              type="email"
              placeholder="Yourmail@gmail.com"
            />
            <button className="footer-form__btn" type="sumbmit">
              <FormattedMessage id="subscribe" />
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
}
