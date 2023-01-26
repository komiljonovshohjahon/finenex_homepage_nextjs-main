import React from "react";
import { FormattedMessage } from "react-intl";
import Hero from "../../components/Hero";
import Image from "next/image";
import ReactTable from "../../components/Table";

export default function Token() {
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
              <FormattedMessage id="products.inner.title" />
            </h2>
            <p className="sidechain__text section-text">
              <FormattedMessage id="token.inner.text" />
            </p>
            <div className="sidechain__wrapper">
              <Image
                src="/assets/image/token.svg"
                alt="box icon"
                width="840"
                height="428"
              />
            </div>
          </div>
          <div className="sidechain__holder">
            <h2 className="sidechain__title section-heading">
              <FormattedMessage id="products.inner.title" />
            </h2>
            <p className="sidechain__text section-text">
              <FormattedMessage id="token.inner.text" />
            </p>
            <div className="sidechain__wrapper">
              <Image
                src="/assets/image/token2.svg"
                alt="box icon"
                width="1030"
                height="428"
              />
            </div>
          </div>
          {/* <ReactTable />
          <div className="token-wrapper">
            <div className="token-wrapper__box">
              <h3 className="token-wrapper__title">ERC20 Token</h3>
              <p className="token-wrapper__text">Lorem ipsum dolor sit.</p>
              <a className="token-wrapper__link" href="#">
                <FormattedMessage id="learn_more" />
              </a>
            </div>
            <div className="token-wrapper__box">
              <h3 className="token-wrapper__title">ERC20 Token</h3>
              <p className="token-wrapper__text">Lorem ipsum dolor sit.</p>
              <a className="token-wrapper__link" href="#">
                <FormattedMessage id="learn_more" />
              </a>
            </div>
            <div className="token-wrapper__box">
              <h3 className="token-wrapper__title">ERC20 Token</h3>
              <p className="token-wrapper__text">Lorem ipsum dolor sit.</p>
              <a className="token-wrapper__link" href="#">
                <FormattedMessage id="learn_more" />
              </a>
            </div>
            <div className="token-wrapper__box">
              <h3 className="token-wrapper__title">ERC20 Token</h3>
              <p className="token-wrapper__text">Lorem ipsum dolor sit.</p>
              <a className="token-wrapper__link" href="#">
                <FormattedMessage id="learn_more" />
              </a>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
