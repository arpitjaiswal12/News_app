import React from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import { useState } from 'react';
// import { useLayoutEffect } from 'react';
import { useEffect } from 'react';

// require("dotenv").config();
// const apikey="989acff2839d46fba4eafdb6aed344be";

const News = (props) => {
    //constructor 

    const [articles, setarticles] = useState([]);
    const [page, setpage] = useState(1);
    const [loading, setloading] = useState(true);
    const [totalResult, settotalResult] = useState(null);
    // document.title = `${this.capitalized(this.props.category)} - DailyBuzze`
    const capitalized = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    const updateNews = async () => {
        let url;
        if (props.category === "null") {
            url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=989acff2839d46fba4eafdb6aed344be&page=${page}&pagesize=${props.pageSize}`;
        }
        else {
            url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=989acff2839d46fba4eafdb6aed344be&page=${page}&pagesize=${props.pageSize}`;
        }
        console.log("else api is called");
        setloading(true)
        let data = await fetch(url);
        let info = await data.json();

        console.log(info);
        console.log(info.totalResults);

        setarticles(info.articles)
        setloading(false)
        settotalResult(info.totalResults)
    }

    useEffect(() => {
        updateNews();
    }, []);

    const handlePreviouspage = async () => {
        //  setState({ page: this.state.page - 1 });
        setpage(page - 1)
        updateNews();
    }
    const handleNextpage = async () => {
        setpage(page + 1)
        updateNews();
    }

    return (
        <div>

            <div className="container my-3">
                <h2 style={{ marginTop: "4.5rem" }}>DailyBuzze-Top Headlines on : {capitalized(props.category)}</h2>
                {loading && <Spinner />}
                <div className="row">
                    {!loading && articles.map((elememt) => {
                        return (<div className="col-md-4" key={elememt.url}>
                            <NewsItem NewsTitle={elememt.title} NewsDateTime={elememt.publishedAt} NewsAuthor={elememt.author} NewsContent={elememt.content} imageUrl={elememt.urlToImage} newsUrl={elememt.url} NewsSource={elememt.source.name} />
                        </div>)
                    })}
                </div>
                <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
                    <button disabled={page <= 1} type="button" className="btn btn-secondary" onClick={handlePreviouspage}>&larr; Previous</button>
                    <button disabled={page >= Math.ceil(totalResult / props.pageSize)} type="button" className="btn btn-primary" onClick={handleNextpage}>Next &rarr;</button> {/* if we dont erite this by default it assume as a props */}
                </div>
            </div>
        </div>
    )
}

export default News
