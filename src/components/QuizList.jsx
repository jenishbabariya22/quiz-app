import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import './QuizList.css'; // Custom styling for the component

const QuizList = ({ quizzes, setCurrentQuiz }) => {
  return (
    <div className="quiz-list">
      <h2 className="text-center mb-4">Available Quizzes</h2>
      <Row>
        {quizzes.map((quiz) => (
          <Col md={4} sm={6} xs={12} key={quiz.id} className="mb-4">
            <Card className="quiz-card h-100">
              <Card.Body>
                <Card.Title className="quiz-title">{quiz.title}</Card.Title>
                <Card.Text className="quiz-description">{quiz.description}</Card.Text>
                <Button
                  variant="primary"
                  className="w-100 start-quiz-button"
                  onClick={() => setCurrentQuiz(quiz)}
                >
                  Start Quiz
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default QuizList;
