import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { NewsTitle, NewsContent, imageUrl, newsUrl } = this.props;
        return (
            <div>
                <div className="card ">
                    <img src={imageUrl != null ? imageUrl : "https://thumbs.dreamstime.com/b/news-header-background-title-abstract-colorful-global-map-text-hightech-design-blue-colorful-template-90494676.jpg"} alt="..." />
                    <div className="card-body">
                        <p className="card-text"> <strong>Date-Time :</strong> {this.props.NewsDateTime}</p>
                        <p className="card-text"> <strong>Author :</strong> {this.props.NewsAuthor}</p>
                        <h5 className="card-title">{NewsTitle}</h5>
                        <p className="card-text">{NewsContent}</p>
                        {/* <p className="card-text"><small className="text-body-secondary">L</small></p> */}
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Read More</a>
                        <p className="card-text"> <strong>Source :</strong> {this.props.NewsSource}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
