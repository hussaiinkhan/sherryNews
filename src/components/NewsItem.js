import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,author,time}=this.props
    const maxLength = 100
    const truncatedDescription = description.length > maxLength ? `${description.substring(0, maxLength)}...` : description
    return (
      <div>
            <div className="card my-2">
                <img src={imgUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{truncatedDescription}</p>
                    <p className="card-text"><small className="text-body-secondary">By {author?author:'Unknown'} on {new Date(time).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target= '_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
  }
}

export default NewsItem