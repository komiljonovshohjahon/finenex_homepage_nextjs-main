/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Hero from "../components/Hero";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
// import { useIntl } from "react-intl";

export default function Stacking() {
  return (
    <>
      <Hero
        info={<FormattedMessage id="products.title" />}
        title={<FormattedMessage id="hero.desc" />}
      />
      <section className="wallet">
        <div className="container">
          <h2 className="wallet__title section-heading">
            <FormattedMessage id="stacking" />
          </h2>
          <p className="wallet__text section-text">
            <FormattedMessage id="stacking.text1" />
          </p>
          <div className="wallet__wrapper site-box">
            <div className="wrapper-wallet__box site-box__holder">
              <div className="site-box__img">
                <Image
                  src="/assets/icons/table.svg"
                  alt="box icon"
                  width="98"
                  height="98"
                />
              </div>
              <h4 className="wrapper-wallet__box-title site-box__heading section-heading">
                <FormattedMessage id="stacking.box.title1" />
              </h4>
              <p className="wrapepr-wallet__box-text section-text">
                <FormattedMessage id="stacking.box.text1" />
              </p>
            </div>
            <div className="wrapper-wallet__box site-box__holder">
              <div className="site-box__img">
                <Image
                  src="/assets/icons/security.svg"
                  alt="box icon"
                  width="98"
                  height="98"
                />
              </div>
              <h4 className="wrapper-wallet__box-title site-box__heading section-heading">
                <FormattedMessage id="better_security" />
              </h4>
              <p className="wrapepr-wallet__box-text section-text">
                <FormattedMessage id="stacking.box.text2" />
              </p>
            </div>
            <div className="wrapper-wallet__box site-box__holder">
              <div className="site-box__img">
                <Image
                  src="/assets/icons/flower.svg"
                  alt="box icon"
                  width="98"
                  height="98"
                />
              </div>
              <h4 className="wrapper-wallet__box-title site-box__heading section-heading">
                <FormattedMessage id="more_sustainable" />
              </h4>
              <p className="wrapepr-wallet__box-text section-text">
                <FormattedMessage id="stacking.box.text3" />
              </p>
            </div>
          </div>
          <div className="section-main">
            <div className="section-main__container main-container">
              <h3 className="main-container__title section-heading">
                <FormattedMessage id="section.main.title" />
              </h3>
              <p className="main-container__text section-text">
                <FormattedMessage id="section.main.text" />
              </p>
            </div>
            <div className="section-main__container main-container">
              <Image
                src="/assets/image/stacking-main.svg"
                alt="box icon"
                width="554"
                height="498"
              />
            </div>
          </div>
          <p className="section-text main-section-text">
            <FormattedMessage id="section.main.desc" />
          </p>
        </div>
      </section>
    </>
  );
}
