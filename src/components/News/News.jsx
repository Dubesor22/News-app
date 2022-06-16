import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import "./News.css";

const News = () => {
  const { news, getNews } = useContext(GlobalContext);
  useEffect(() => {
    getNews();
  }, []);

  if (news.length <= 0) {
    return (
      <div class="spinner-border text-dark spin" role="status">
        <span class="sr-only">.</span>
      </div>
    );
  }
  //if noticia.media is null, dont show the noticia

  const noticia = news.map((noticia) => {
    if (noticia.media !== null) {
      return (
        <div className="card card-noticia container-sm">
          <div class="card-body" key={noticia.id}>
            {noticia.media.length !== 0 ? (
              <img
                class="card-img-top img-news"
                src={noticia.media[0]["media-metadata"][2].url}
                alt="imagen"
              />
            ) : null}

            <h3 class="card-title">{noticia.title}</h3>
            <p class="card-text">{noticia.abstract}</p>
            <p>
              {noticia.byline}. Published on {noticia.published_date}
            </p>

            <a class="btn btn-primary" href={noticia.url}>
              Enlace a noticia
            </a>
          </div>
        </div>
      );
    }
  });
  return <div className="group pagination">{noticia}</div>;
};

export default News;
