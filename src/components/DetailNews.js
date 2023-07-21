import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import NewsContext from '../context/NewsContext';
import default_new_image from '../default_news.jpg'

const DetailNews = (props) => {
    const context = useContext(NewsContext);
    const { eachNews, topic } = context;

    return (
        <div className="container my-5">

            <div className="card p-4">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* <!-- Post content--> */}
                            <article>
                                {/* <!-- Post header--> */}
                                <header className="mb-4">
                                    {/* <!-- Post title--> */}
                                    <h1 className="fw-bolder mb-1"> {eachNews.title} </h1>
                                    {/* <!-- Post meta content--> */}
                                    <div className="text-muted fst-italic mb-2">Posted on  {eachNews.publishedAt}  by  {eachNews.author} </div>
                                    {/* <!-- Post categories--> */}
                                    <Link className="badge bg-secondary text-decoration-none link-light" to="#"> {topic} </Link>
                                </header>

                                <figure className="mb-4"><img className="img-fluid rounded" src={eachNews.urlToImage ? eachNews.urlToImage : default_new_image} alt={eachNews.topic} /></figure>

                                <section className="mb-5">
                                    <p className="fs-5 mb-4"> {eachNews.description} </p>
                                    <p className="fs-5 mb-4"> {eachNews.content} </p>

                                </section>
                                <Link to={eachNews.url} target="_blank" rel="noreferrer" className="btn btn-primary mb-5">Read more from source...</Link>
                            </article>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DetailNews