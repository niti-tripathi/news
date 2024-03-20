import React, { Component } from 'react'
  

export class NewsItem extends Component {
    render() {
        let { title, description ,imageUrl,newsUrl,author,date} = this.props;
        return (
            <div>
                <div className="card">
                    <img src={!imageUrl?"https://thumbs.dreamstime.com/z/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg?w=992":imageUrl} className="card-img-top" alt="image not found" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p class="text-muted">by {author?author:"unknown"} on {new Date(date).toGMTString()}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-primary btn-dark">READ MORE</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
