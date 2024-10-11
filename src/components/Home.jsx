import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './home.css'; // Import your CSS file

const HomePage = ({ startQuiz }) => {
  return (
    <div className="home-page text-center">
      <Container>
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <h1 className="welcome-title">Welcome to the Quiz Application</h1>
            <p className="lead mt-4 description-text">
              Test your knowledge by selecting a quiz and answering a series of multiple-choice questions.
            </p>
            <p className="instructions mt-3">
              <strong>Instructions:</strong>
              <ul className="text-left instruction-list">
                <li>You will see multiple-choice questions in the quiz.</li>
                <li>Select one answer per question and click "Next".</li>
                <li>You cannot skip questions; an answer is required to proceed.</li>
                <li>At the end of the quiz, you will receive your score and see the correct answers.</li>
              </ul>
            </p>
            <Button
              variant="primary"
              className="start-quiz-button mt-4"
              onClick={startQuiz}
            >
              Start Quiz
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
