import { useState } from 'react';

import Modal from '../../components/Modal';
import { questions } from '../../mock/questions';

export default function Questionnaire(props) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(questions);
  if (!props.show) return null;

  const hideModal = () => {
    setQuestionIndex(0);
    setSelectedAnswers(questions);
    props.hideModal();
  };

  const goToNext = () => {
    if (!questions[questionIndex]['selectedAnswer']) return;
    setQuestionIndex(questionIndex + 1);
  };

  const selectAnswer = (index, asnwerId) => {
    const newArr = [...questions];
    newArr[index]['selectedAnswer'] = asnwerId;
    console.log(newArr, 'newArrnewArrnewArr');
    setSelectedAnswers(newArr);
  };

  return (
    <Modal show={props.show} hideModal={hideModal}>
      <div className="modal-title">Survey</div>
      <div className="questionnaire">
        {questions.map((question, index) => (
          <div className={index === questionIndex ? 'show' : 'hide'}>
            <div className="questionnaire__item" key={index}>
              <div className="questionnaire__item-title">{question.title}</div>
              <div className="questionnaire__item-answers">
                {question.answers.map((answer, answIndex) => (
                  <div className="questionnaire__item-answers-input" key={answIndex}>
                    <label className="form-control">
                      <input
                        type="radio"
                        value={answer.value}
                        onChange={() => selectAnswer(index, answer.id)}
                        checked={selectedAnswers[index].selectedAnswer === answer.id}
                      />
                      <p>{answer.title}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="questionnaire__buttons">
          {questionIndex > 0 ? <button onClick={() => setQuestionIndex(questionIndex - 1)}>Prev</button> : <div></div>}

          <button onClick={goToNext}>Next</button>
        </div>
      </div>
    </Modal>
  );
}
