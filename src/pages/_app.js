import React from "react";
import "../../public/sass/main.scss";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import en from "../../lang/en.json";
import ru from "../../lang/ru.json";
import TinaProvider from "../../.tina/components/TinaDynamicProvider";

const messages = {
  en,
  ru,
};

function getDirection(locale) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <TinaProvider>
        <Layout>
          <React.StrictMode>
            <Component {...pageProps} dir={getDirection(locale)} />
          </React.StrictMode>
        </Layout>
      </TinaProvider>
    </IntlProvider>
  );
}

export default MyApp;
