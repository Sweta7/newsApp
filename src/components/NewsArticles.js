import React, { Component } from 'react'
import NewsSource from './NewsSource';
import {Media, Container, Row, Col} from 'react-bootstrap'


export default class NewsArticles extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      articles: [],
      source: '',
      currentSessionID: null
    }
    this.setSessionID = this.setSessionID.bind(this);
  }

  componentDidMount() {
    //componentWillReceiveProps(nextProps) {
    //fetch('https://newsapi.org/v1/articles?source=${nextProps.source}&apiKey=ab293b080e9a4d4dba6906e9a0782095`;
    let request_url = 'https://newsapi.org/v2/top-headlines?language=en&pageSize=100&apiKey=ab293b080e9a4d4dba6906e9a0782095';
    //let request_url = 'http://localhost:8888/news.json';
     fetch(request_url)
      .then(results => {
        return results.json();
      }).then(data => {
        console.log(data)
        this.setState({ articles: data.articles })
        console.log("state", this.state.articles);
      })
  }

  setSessionID = sessionID => {
    console.log(sessionID);
    this.setState({ currentSessionID: sessionID });
  };

  render() {
    const { articles, currentSessionID } = this.state;
    console.log(currentSessionID);
    return (
      <div className="article">
        <Container>
          <NewsSource setSessionID={this.setSessionID} state={this.state} />
          {articles.filter(a => a.source.name === currentSessionID).map((article, index) =>
            <Row key={index}>
              <Col sm={10}>
                <ul className="list-unstyled">
                  <div>
                    <Media as="li">
                      <img
                        width="250"
                        height="auto"
                        object-fit= "cover"
                        className="mr-3"
                        src={article.urlToImage}
                        alt="article_img"
                      />
                      <Media.Body>
                        <p>
                          <a href={article.url} target="_blank" rel="noopener noreferrer">
                            <strong>{article.title}</strong>
                          </a>
                          <small><i> by {article.author}</i></small>
                          <br />
                          {article.description}
                        </p>
                      </Media.Body>
                    </Media>
                  </div>
                </ul>
              </Col>
              <Col sm={2}>
                <p> {article.publishedAt.substring(11, 19)}</p>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    )
  }
}
