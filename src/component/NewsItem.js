import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,decription,imageUrl,newsUrl,date,author,source} = this.props;
    return (
      <div>
          <div className="card">
          <span class="position-absolute start-0 badge bg-danger" style={{top:"-12px"}}>
            {source}
          </span>
            <img src={imageUrl?imageUrl:"data:image/png;base64,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"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{decription}</p>
              <p class="card-text"><small class="text-body-secondary">By {author?author:"unknown"} On {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-dark">Read more</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
