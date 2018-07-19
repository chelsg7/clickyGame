import React, { Component } from "react";
import Content from "./components/Content";
import Image from "./components/Image"
import "./ClickyGame.css";
import "./bootstrap.css";
import "./bootstrapTheme.css";
import images from "./images.json";

class ClickyGame extends Component {

  state = {
    images,
    imageClickedId: [],
    score: 0,
    totalScore: 0,
    topScore: 0
  };

  handleImageChange = id => {
    var imageClickedId = this.state.imageClickedId;
    if (!imageClickedId.includes(id)) {
      imageClickedId.push(id)
      if (imageClickedId.length === 12) {
        this.setState({ score: 12, totalScore: 12, imageClickedId: [] });
        return;
      }
      // win
      if (this.state.score >= this.state.totalScore) {
        this.state.topScore = this.state.score + 1;
      }

      this.setState({ images, imageClickedId, score: imageClickedId.length, totalScore: this.state.topScore });
      // random function
      for (var i = images.length - 1; i > 0; i--) {
        var j = Math.floor((Math.random() * (i)) + 0);
        [images[j], images[i]] = [images[i], images[j]];
      }
    } else {
      if (this.state.score < this.state.totalScore) {
        this.state.topScore = this.state.totalScore;
      }
      this.setState({ imageClickedId: [], score: 0, totalScore: this.state.topScore });
      return;
    }
  }

  render() {
    return (
      <div className="App bg-dark">

        <header className="App-header mx-auto text-center py-3 mb-1 ">
          <strong>
            <h1 className="App-logo text-info h1">
              Clicky Dog Memory Game
            </h1>
            <h2 className="App-title h2 text-success">
              Click an image to begin taking score.
            </h2>
            <h4 className = "h4 text-danger">
              If you click the same image more than once, the score will reset.
            </h4>
            <h3 className = "h3 text-warning">
              Score: {this.state.score} <span> | </span> Top Score: {this.state.totalScore}
            </h3>
            </strong>
        </header>

        <Content>
          {this.state.images.map(img => (
            <Image
              handleImageChange={this.handleImageChange}
              id={img.id}
              url={img.url}
            />
          ))}
        </Content>
      </div>
    );
  }
}

export default ClickyGame;
