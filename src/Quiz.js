import React, { Component } from 'react'

import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component {
  constructor (props) {
    super(props);
    this.state = {
      quiz_position: 1
    };
  }

  showNextQuestion () {
    this.setState((prevState) => ({
      quiz_position: prevState.quiz_position + 1
    }));
  }

  handleResetClick () {
    this.setState({
      quiz_position: 1
    });
  }

  render () {
    const isQuizEnd = this.state.quiz_position - 1 === quizData.quiz_questions.length;
    let displayedContent;

    if (isQuizEnd) {
      displayedContent = (
        <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />
      )
    } else {
      displayedContent = (
        <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
          showNextQuestionHandler={this.showNextQuestion.bind(this)} />
      )
    }

    return (
      <div>
        { displayedContent }
      </div>
    )
  }
}

export default Quiz
