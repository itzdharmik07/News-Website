import React, { useState } from "react";
import axios from "axios";

function FetchNews() {
  const FetchNews = () => {
    console.log("Click");
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=faad625ee88f4f71ab12ae45387d5541"
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
      });
  };

  const [news, setNews] = useState([]);

  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={FetchNews}>
              FetchNews
            </button>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <div className="row">
          {
              news.map((val)=>{
                  return(
                    <div className="col-4">
                    <div className="card my-5" style={{width:"20rem",
                                                height: "30rem"}}>
                      <img src={val.urlToImage} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{val.title}</h5>
                        <p className="card-text">{val.description}</p>
                        <a href={val.url} className="btn btn-primary">Read More</a>
                      </div>
                    </div>
                  </div>
                  );
              })
          }
        </div>
      </div>
    </>
  );
}

export default FetchNews;
