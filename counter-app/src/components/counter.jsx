import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag3", "tag2"]
  };

  styles = {
    fontSize: 40,
    fontWeight: "bold"
  };

  handleIncrement() {
    console.log("Increment Clicked");
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p> their are no tags! </p>;
    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  }

  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tab"}
        <span className={this.getBageClasses()}>{this.formatCount()}</span>

        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
