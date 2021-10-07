import React, { Component } from "react";
import Input from "./Input";
import axios from "axios";
export default class SearchBar extends Component {
  state = { term: null, images: [] };

  onSearchHandle = async (value) => {
    const get = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${value}`,
      {
        headers: {
          Authorization:
            "Client-ID nWRdZ_bWL20nzXXB5IR9RfHwZ6lOWjzMs_Hq3h1_le8",
        },
      }
    );
    const data = get.data.results;
    data.map((url) => this.setState({ images: url.urls.small }));
  };

  render() {
    return (
      <div>
        <Input
          value={this.state.term}
          onChange={(e) => {
            this.setState({ term: e.target.value });
          }}
          onget={this.onSearchHandle}
        />
        <img src={this.state.images} alt="" />
        <img src={this.state.images[1]} alt="" />
        <img src={this.state.images[0]} alt="" />
        <img src={this.state.images[3]} alt="" />
      </div>
    );
  }
}
