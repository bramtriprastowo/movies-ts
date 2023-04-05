import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";

type Props = {};

const Card = (props: Props) => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const url = process.env.REACT_APP_BASE_URL as string;
    const fetchNews = (url: string) => {
      axios.get(url, {}).then((response) => {
        setData(response.data.results);
        console.log(response.data.results);
      });
    };
    fetchNews(url);
  }, []);

  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row gx-4 gy-5">
          {data?.map((item) => {
            return (
              <div
                className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
                key={item.id}
              >
                <div className="card border-success mx-auto">
                  <img
                    src={process.env.REACT_APP_IMAGE_BASE_URL + item.poster_path}
                    alt={item.original_title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5>{item.original_title}</h5>
                    <p className="card-text">{item.overview}</p>
                    {/* <a href={item["url"]} className="btn btn-success">
                      Read More
                    </a> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
