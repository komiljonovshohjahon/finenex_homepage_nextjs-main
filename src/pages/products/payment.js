import React from "react";
import { FormattedMessage } from "react-intl";
import Hero from "../../components/Hero";
import Image from "next/image";

export default function Payment() {
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
              <FormattedMessage id="payment_system" />
            </h2>
            <p className="sidechain__text section-text">
              <FormattedMessage id="product.payment.text" />
            </p>
            <p className="sidechain__text section-text">
              <FormattedMessage id="product.payment.text1" />
            </p>
            <p className="sidechain__text section-text">
              <FormattedMessage id="product.payment.text2" />
            </p>
            <p className="sidechain__text section-text">
              <FormattedMessage id="product.payment.text3" />
            </p>
            <p className="sidechain__text section-text">
              <FormattedMessage id="product.payment.text4" />
            </p>
            <div className="sidechain__wrapper">
              <Image
                src="/assets/image/products-payment.svg"
                alt="box icon"
                width="840"
                height="428"
              />
            </div>
            <div className="sidechain__wrapper">
              <Image
                src="/assets/image/product-payment2.svg"
                alt="box icon"
                width="840"
                height="428"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
