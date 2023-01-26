import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { useTina } from "tinacms/dist/edit-state";
import CustomFormattedMessage from "../components/CustomFormattedMessage";
import { getLangTina } from "../functions/get_lang_tina";
import CustomFormattedImage from "../components/CustomFormattedImage";

export default function Index(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const [pageData, setPageData] = useState(undefined);

  useEffect(() => {
    if (data.homepage_texts_fetch != undefined) {
      setPageData(data.homepage_texts_fetch);
    }
  }, [data]);

  if (pageData == undefined) {
    return <div>Loading...</div>;
  }

  // console.log("DATADATA");
  // console.log(typeof blockchain_network_items);
  // console.log("DATADATA");
  return (
    <div>
      <Hero
        info={
          <CustomFormattedMessage id="home_title" value={pageData.home_title} />
        }
        title={
          <CustomFormattedMessage
            id="home_subtitle"
            value={pageData.home_subtitle}
          />
        }
      />
      <section className="join">
        <h2 className="join__title section-title">
          <CustomFormattedMessage
            id="blockchain_network_title"
            value={pageData.blockchain_network_title}
          />
        </h2>
        <div className="join-inner container">
          {pageData.blockchain_network_items.map((val, key) => (
            <div key={key} className="join-inner__box box-join">
              <div className="box-join__icon">
                <CustomFormattedImage
                  src={`${val.icon}`}
                  alt="box icon"
                  width="45"
                  height="45"
                />
              </div>
              <h4 className="box-join__title">
                <CustomFormattedMessage value={val.title} />
              </h4>
              <p className="box-join__text">
                <CustomFormattedMessage value={val.description} />
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="products">
        <div className="container">
          <h2 className="products__title section-title">
            <CustomFormattedMessage
              value={pageData.products_title}
              id="products_title"
            />
          </h2>
          <p className="products__text">
            <CustomFormattedMessage
              value={pageData.products_text}
              id="products_text"
            />
          </p>
          <div className="products__inner inner-products">
            {pageData.products_items.map((val, index) => {
              if (index % 2 == 0) {
                return (
                  <>
                    <div key={index} className="inner-products__item">
                      <div className="inner-products__item-image item-info">
                        <CustomFormattedImage
                          src={val.icon}
                          alt="item image"
                          width="570"
                          height="290"
                        />
                      </div>
                      <div className="inner-producrs__item-info item-info">
                        <h3 className="item-info__title">
                          <CustomFormattedMessage value={val.title} />
                        </h3>
                        <p className="item-info__text">
                          <CustomFormattedMessage value={val.description} />
                        </p>
                      </div>
                    </div>
                  </>
                );
              }
              return (
                <>
                  <div key={index} className="inner-products__item">
                    <div className="inner-products__item-image item-info">
                      <CustomFormattedImage
                        src={val.icon}
                        alt="item image"
                        width="570"
                        height="290"
                      />
                    </div>
                    <div className="inner-producrs__item-info item-info">
                      <h3 className="item-info__title">
                        <CustomFormattedMessage value={val.title} />
                      </h3>
                      <p className="item-info__text">
                        <CustomFormattedMessage value={val.description} />
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section className="global">
        <h2 className="global__title section-title">
          <CustomFormattedMessage
            id="global_title"
            value={pageData.global_title}
          />
        </h2>
        <div className="global__wrapper global-wrapper container">
          <CustomFormattedImage
            id="global_image"
            src={pageData.global_image}
            alt="map image"
            width="1200"
            height="600"
          />
        </div>
      </section>
      {pageData.blockchain_solutions.enabled ? (
        <section className="blockchain">
          <h2 className="blockchain__title">
            <CustomFormattedMessage
              id="title"
              value={pageData.blockchain_solutions.title}
            />
          </h2>
          <div className="blockchain__inner inner-block container">
            {pageData.blockchain_solutions.items.map((val, index) => {
              return (
                <div key={index} className="inner-block__holder">
                  <h4 className="inner-block__title">
                    <CustomFormattedMessage id="title" value={val.title} />
                  </h4>
                  <p className="inner-block__text">
                    <CustomFormattedMessage
                      id="description"
                      value={val.description}
                    />
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <></>
      )}

      {/* <section className="news">
    <h2 className="news__title section-title">
    Finenex aassas Latest News
    </h2>
  </section> */}
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const pageResponse = await getLangTina(locale);

  return {
    props: {
      data: pageResponse.data,
      query: pageResponse.query,
      variables: pageResponse.variables,
    },
  };
}
