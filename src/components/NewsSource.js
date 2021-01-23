import React, { Component } from 'react';

export default class NewsSource extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      placeholder:"Please Select a News Source"
    }
  this.sourceChange = this.sourceChange.bind(this);
  }

  sourceChange(event) {
    const val = event.target.value;
    this.props.setSessionID(val);
    console.log(`Session id from API is : ${val}`);
}

/*   componentDidMount() {
    fetch('https://newsapi.org/v2/sources?apiKey=ab293b080e9a4d4dba6906e9a0782095')
      .then(response => response.json())
      .then(data => {
        this.setState({ source: data.sources });
        console.log("state", this.state.source);
      });
  } */
  
  render() {
    console.log(this.props.state.articles)
    const sourceArr = (this.props.state.articles.map((item) => item.source));
    var uniqueSourceArr = Array.from(new Set(sourceArr.map((element) => (element.name))))
    //debugger;
    const {placeholder } = this.state;
    return (
      <div className="newsSource">
        <h4>Select News Source</h4>
        <select defaultValue="DEFAULT" onChange={this.sourceChange}>
          <option hidden value="DEFAULT" disabled>{placeholder}</option>
          {uniqueSourceArr.sort().map((x, index) => <option value={x} key={index}>{x}</option>)}
        </select>
      </div>
    );
  }
}

