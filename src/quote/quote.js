import React, { Component } from "react";
import { getApiUrl } from "../utils";

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export class Quote extends Component {
  constructor() {
    super();
    this.state = { quotes: [] };
    setInterval(() => this.updateQuotes.bind(this), 15000);
  }

  async updateQuotes() {
    let res = await fetch(getApiUrl("inspirationalQuote"));
    let body = await res.json();
    this.setState({ quotes: body.quotes, quote: pickRandom(body.quotes) });
  }

  componentDidMount() {
    this.updateQuotes();
  }

  render() {
    return <div className="quote">{this.state.quote}</div>;
  }
}
