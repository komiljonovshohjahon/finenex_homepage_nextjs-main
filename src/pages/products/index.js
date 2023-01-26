import React from "react";
import Hero from "../../components/Hero";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

export default function Products() {
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
              <FormattedMessage id="sidechain_network.title" />
            </h2>
            <p className="sidechain__text section-text">
              <FormattedMessage id="sidechain_network.text" />
            </p>
            <div className="sidechain__wrapper">
              <Image
                src="/assets/image/products-network.svg"
                alt="box icon"
                width="840"
                height="428"
              />
            </div>
          </div>
          <div className="sidechain__holder">
            <h2 className="sidechain__title section-heading">
              <FormattedMessage id="products_connect.title" />
            </h2>
            <p className="sidechain__text section-text">
              <FormattedMessage id="products_connect.text" />
            </p>
            <p className="sidechain__text section-text">
              <FormattedMessage id="products_connect2.text" />
            </p>
            <p className="sidechain__text section-text">
              <FormattedMessage id="products_connect3.text" />
            </p>
            <div className="sidechain__wrapper">
              <Image
                src="/assets/image/products-chain.svg"
                alt="box icon"
                width="1030"
                height="428"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
