import NewsContext from "./NewsContext";
import React, { useState } from 'react'

const NewsState = (props) => {
    const backend_url = "http://127.0.0.1:8000/";

    let [news, setNews] = useState([]);
    let [topic, setTopic] = useState("");
    let [eachNews, setEachNews] = useState("");
    const [accountInfo, setAccountInfo] = useState("");
    const [progress, setProgress] = useState(0);

    const fetch_news = async (load_topic) => {
        setProgress(10);
        const url = `${backend_url}api/news/topic/${load_topic}/`;
        setProgress(40);
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("access")
            }
        });

        setProgress(60);
        let parseData = await response.json();
        setProgress(80);
        setNews(parseData.data);
        setTopic(parseData.topic)
        setProgress(100);
    }


    const fetch_account_info = async () => {
        setProgress(10);
        const url = `${backend_url}api/user/account/info/`;
        setProgress(20);
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("access")
            }
        })
        setProgress(40);
        const json = await response.json();
        setProgress(60);
        setAccountInfo(json);
        setProgress(100);
    };


    return (
        <NewsContext.Provider value={{
            progress,
            setProgress,
            fetch_news,
            news, topic,
            eachNews,
            setEachNews,
            accountInfo,
            fetch_account_info
        }}>
            {props.children}
        </NewsContext.Provider>
    )
}

export default NewsState