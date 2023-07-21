import React, { useContext, useEffect } from 'react'
import NewsCard from './NewsCard'
import { useNavigate } from 'react-router-dom';
import NewsContext from '../context/NewsContext';

const News = (props) => {
    const context = useContext(NewsContext);
    const { fetch_news, news, topic } = context;
    const navigate = useNavigate();

    const { load_topic } = props;

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    useEffect(() => {
        if (!localStorage.getItem("access")) {
            navigate("/login");
        };
        fetch_news(load_topic);
        // eslint-disable-next-line
    }, [])

    return (
        <div className='container my-4'>
            {topic === "hackers-hacking" ? <h1 className="text-center my-4">Top News | Hacking </h1> : topic === "anonymous-hacking" ? <h1 className="text-center my-4">Top News | Anonymous</h1> : <h1 className="text-center my-4">Top News | {capitalize(topic)}</h1>}

            <div className="row">
                {news.map((each_news) => {
                    return <NewsCard key={each_news.id} each_news={each_news} />
                })}
            </div>
        </div>
    )
}

export default News
