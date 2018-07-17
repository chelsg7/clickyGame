import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Image from "./components/Image"
import "./ClickyGame.css";
import "./bootstrap.css";
import "./bootstrapTheme.css";
import images from "./images.json";

class ClickyGame extends Component {
  //state comes here
  state = {
    images,
    imageClickedId: [],
    score: 0,
    totalScore: 0,
    topScore: 0
  };

  handleImageChange = id => {
    var imageClickedId = this.state.imageClickedId;
    // check to see if it's first time or not
    if (!imageClickedId.includes(id)) {
      imageClickedId.push(id)
      // if all images in json displayed
      if (imageClickedId.length === 12) {
        this.setState({ score: 12, totalScore: 12, imageClickedId: [] });
        return;
      }
      // if it's a winner
      if (this.state.score >= this.state.totalScore) {
        this.state.topScore = this.state.score + 1;
      }
      this.setState({ images, imageClickedId, score: imageClickedId.length, totalScore: this.state.topScore });
      // random generating image for all images
      for (var i = images.length - 1; i > 0; i--) {
        var j = Math.floor((Math.random() * (i)) + 0);
        [images[j], images[i]] = [images[i], images[j]];
      }

    } else {
      //lost game over
      if (this.state.score < this.state.totalScore) {
        this.state.topScore = this.state.totalScore;
      }
      this.setState({ imageClickedId: [], score: 0, totalScore: this.state.topScore });
      return;
    }
  }

  render() {
    return (
      <div className="App bg-secondary">

        <header className="App-header mx-auto text-center bg-info py-3 fixed-top mb-5 ">
          <h1 className="App-logo text-light">
            Click Memory Game
          </h1>
          <p className="App-title h4 lead">
            Click an image to begin!
          </p>
          <h1 className = "h6 lead">
            Score: {this.state.score} <span> | </span> Top Score: {this.state.totalScore}
          </h1>
        </header>

        <Wrapper>
          {this.state.images.map(img => (
            <Image
              handleImageChange={this.handleImageChange}
              id={img.id}
              url={img.url}
            />
          ))}
        </Wrapper>
        <div className = "sticky-bottom text-center mx-auto bg-success py-3">
          <p className = "lead text-dark">
            Click on an image to earn points, but don't click on any more than once!
          </p>
        </div>
      </div>
    );
  }
}

export default ClickyGame;
