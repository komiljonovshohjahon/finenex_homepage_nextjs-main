import React from "react";
import { FormattedMessage } from "react-intl";
import Hero from "../../components/Hero";
import Image from "next/image";

const Wallets = () => {
  return (
    <>
      <Hero
        info={<FormattedMessage id="products.title" />}
        title={<FormattedMessage id="hero.desc" />}
      />
      <section className="sidechain">
        <div className="container">
          <div className="sidechain__holder">
            <h2 className="sidechain__title section-heading">
              <FormattedMessage id="wallet.title" />
            </h2>
            <div className="section-holder">
              <h3 className="section-heading-min">
                <FormattedMessage id="server_wallet" />
              </h3>
              <p className="sidechain__text section-text">
                <FormattedMessage id="server_wallet.text" />
              </p>
            </div>
            <h3 className="section-heading-min">
              <FormattedMessage id="wallet_sdk" />
            </h3>
            <p className="sidechain__text section-text">
              <FormattedMessage id="wallet_sdk.text" />
            </p>
          </div>
          <div className="sidechain__wrapper">
            <Image
              src="/assets/image/product-wallet.svg"
              alt="wallet image"
              width="840"
              height="370"
            />
          </div>
          <div className="section-wrapper">
            <div className="section-wrapper__container">
              <h3 className="section-heading">
                <FormattedMessage id="finenex_mobile_wallet" />
              </h3>
              <p className="sidechain__text section-text">
                <FormattedMessage id="wallet_text" />
              </p>
              <p className="sidechain__text section-text">
                <FormattedMessage id="wallet_text2" />
              </p>
              <p className="sidechain__text section-text">
                <FormattedMessage id="wallet_text3" />
              </p>
              <div className="section-wrapper__image">
                <Image
                  src="/assets/image/phone.svg"
                  alt="phone image"
                  width="310"
                  height="615"
                />
              </div>
            </div>
            <div className="section-wrapper__container container-left">
              <h3 className="section-heading">
                <FormattedMessage id="finenex_server_wallet" />
              </h3>
              <p className="sidechain__text section-text">
                <FormattedMessage id="server_text" />
              </p>
              <p className="sidechain__text section-text">
                <FormattedMessage id="server_text1" />
              </p>
              <p className="sidechain__text section-text">
                <FormattedMessage id="server_text2" />
              </p>
              <a className="section-text" href="#">
                -
                https://docs.finenex.net/blockchain-api/application-apis/account
              </a>
              <div className="section-wrapper__image">
                <Image
                  src="/assets/image/product-wallet2.svg"
                  alt="phone image"
                  width="725"
                  height="566"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wallets;
