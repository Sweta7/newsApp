import React, { Component } from 'react'
import { Media, Container, Row, Col } from 'react-bootstrap'

export default class Science extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      articles: [],
    }
  }

  componentDidMount() {
    let request_url = 'https://newsapi.org/v2/top-headlines?category=science&apiKey=ab293b080e9a4d4dba6906e9a0782095';
    fetch(request_url)
      .then(results => {
        return results.json();
      }).then(data => {
        console.log(data)
        this.setState({ articles: data.articles })
        console.log("state", this.state.articles);
      })
  }

  render() {
    const { articles } = this.state;
    console.log(articles);
    return (
      <div className="main">
        <Container>
          {articles.map((article, index) =>
            <Row key={index}>
              <Col sm={10}>
                <ul className="list-unstyled">
                  <div>
                    <Media as="li">
                      <img
                        width="250"
                        height="auto"
                        object-fit="cover"
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
