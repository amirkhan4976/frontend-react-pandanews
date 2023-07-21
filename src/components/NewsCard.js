import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import default_news_image from '../default_news.jpg'
import NewsContext from '../context/NewsContext';

const NewsCard = (props) => {
    const { each_news } = props;
    const context = useContext(NewsContext);
    let { setEachNews } = context;
    const set_each_news = () => {
        setEachNews(each_news);
    }
    return (
        <>
            {/* <!--Card--> */}
            <div className="container col-md-3 my-3">
                <div className="card" style={{ width: "20rem" }}>
                    <div
                        className="bg-image hover-overlay ripple"
                        data-mdb-ripple-color="light"
                    >
                        <img
                            src={each_news.urlToImage ? each_news.urlToImage : default_news_image}
                            className="img-fluid"
                            alt="news thumnail"
                        />
                        <Link to="#!">
                            <div
                                className="mask"
                                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                            ></div>
                        </Link>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{each_news.title}</h5>
                        <p className="card-text">By: {each_news.author}
                            <br /> <small> Posted on: {each_news.publishedAt}</small>
                        </p>
                        <Link to="/detail-news" onClick={set_each_news} className="btn btn-primary">Read more...</Link>
                    </div>
                </div>

                {/* <!--Card End--> */}

            </div>
            {/* <!--Card Container End-- > */}
        </>
    )
}

export default NewsCard