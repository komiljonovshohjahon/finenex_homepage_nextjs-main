import React from "react";
import Hero from "../components/Hero";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

export default function Wallet() {
  return (
    <>
      <Hero
        info={<FormattedMessage id="wallet" />}
        title={<FormattedMessage id="hero.desc" />}
      />
      <section className="wallet">
        <div className="container">
          <h2 className="wallet__title section-heading">
            <FormattedMessage id="wallet" />
          </h2>
          <p className="wallet__text section-text">
            <FormattedMessage id="wallet.text1" />
          </p>
          <p className="wallet__text section-text">
            <FormattedMessage id="wallet.text2" />
          </p>
          <div className="wallet__wrapper site-box">
            <div className="wrapper-wallet__box site-box__holder">
              <div className="site-box__img">
                <Image
                  src="/assets/icons/skills.svg"
                  alt="box icon"
                  width="98"
                  height="98"
                />
              </div>
              <h4 className="wrapper-wallet__box-title site-box__heading section-heading">
                <FormattedMessage id="technical_skills" />
              </h4>
              <p className="wrapepr-wallet__box-text section-text">
                <FormattedMessage id="wallet.box1.text" />
              </p>
            </div>
            <div className="wrapper-wallet__box site-box__holder">
              <div className="site-box__img">
                <Image
                  src="/assets/icons/reliability.svg"
                  alt="box icon"
                  width="98"
                  height="98"
                />
              </div>
              <h4 className="wrapper-wallet__box-title site-box__heading section-heading">
                <FormattedMessage id="wallet.box2.title" />
              </h4>
              <p className="wrapepr-wallet__box-text section-text">
                <FormattedMessage id="wallet.box2.text" />
              </p>
            </div>
            <div className="wrapper-wallet__box site-box__holder">
              <div className="site-box__img">
                <Image
                  src="/assets/icons/trend.svg"
                  alt="box icon"
                  width="98"
                  height="98"
                />
              </div>
              <h4 className="wrapper-wallet__box-title site-box__heading section-heading">
                <FormattedMessage id="trens_insight" />
              </h4>
              <p className="wrapepr-wallet__box-text section-text">
                <FormattedMessage id="wallet.box3.text" />
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
                src="/assets/image/wallet-main.svg"
                alt="box icon"
                width="554"
                height="498"
              />
            </div>
          </div>
          <p className="section-text main-section-text">
            <FormattedMessage id="section.main.desc" />
          </p>
          <p className="section-text">
            <FormattedMessage id="section.main.desc2" />
          </p>
        </div>
      </section>
    </>
  );
}
