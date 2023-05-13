import React from "react";
import Card from "./Card";
import words from "../words.json";

class Game extends React.Component {
  state = {
    words: words,
    currentIndex: 0,
    isPrev: false,
    wordsLearned: 0,
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0
          ? prevState.words.length - 1
          : prevState.currentIndex - 1,
      isPrev: true,
    }));
    setTimeout(() => {
      this.setState({
        isPrev: false,
      });
    }, 100);
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === prevState.words.length - 1
          ? 0
          : prevState.currentIndex + 1,
      isPrev: false,
      wordsLearned: prevState.wordsLearned + 1,
    }));
  };

  render() {
    const currentWord = this.state.words[this.state.currentIndex];
    return (
      <div>
        <h3>Изучаем фрукты!</h3>
        <div className="card-container">
          <Card
            word={currentWord.word}
            translation={currentWord.translation}
            image={currentWord.image}
            isPrev={this.state.isPrev}
          />
          <div className="button-container">
            <button onClick={this.handlePrev}>Previous</button>
            <button onClick={this.handleNext}>Next</button>
          </div>
          <p>Words learned: {this.state.wordsLearned}</p>
        </div>
      </div>
    );
  }
}

export default Game;
