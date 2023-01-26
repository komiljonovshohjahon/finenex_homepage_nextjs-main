import React, { useState, useEffect } from "react";
import Header from "./Header";
import Head from "next/head";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children, dir }) {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const router = useRouter();

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        {
          setTitle("Home");
          setDesc("home");
        }
        break;
      case "/products":
        {
          setTitle("Products");
          setDesc("product");
        }
        break;
      case "/stacking":
        {
          setTitle("Stacking");
          setDesc("staking");
        }
        break;
      case "/wallet":
        {
          setTitle("Wallet");
          setDesc("wallet");
        }
        break;
      case "/swap":
        {
          setTitle("Swap");
          setDesc("swap");
        }
        break;
      case "/404":
        {
          setTitle("404");
          setDesc("error");
        }
        break;
      case "/products/token":
        {
          setTitle("Products Token");
          setDesc("products token");
        }
        break;
      case "/products/payment":
        {
          setTitle("Products Payment");
          setDesc("products payment");
        }
        break;
      case "/products/wallet":
        {
          setTitle("Products Wallet");
          setDesc("products wallet");
        }
        break;
      case "/projects":
        {
          setTitle("Projects");
          setDesc("Projects");
        }
        break;
      case "/admin":
        {
          setTitle("Admin");
          setDesc("Admin");
        }
        break;

      default:
        break;
    }
  }, [router.pathname]);

  return (
    <div>
      <Head>
        <title>Finenex | {title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" href="http://example.com" hrefLang="x-default" />
        <link rel="alternate" href="http://example.com" hrefLang="en" />
      </Head>
      <div dir={dir} className="layout">
        <header className="header">
          <Header />
        </header>
        <main className="main">{children}</main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
