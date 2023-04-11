import { useState } from 'react';

import FindTableHeader from '../components/FindTableHeader';
import ServiceIcons from '../components/ServiceIcons';
import PopularLocations from '../components/PopularLocations';
import CategoryRestaurants from '../components/CategoryRestaurants';
import { questions } from '../mock/questions';

import { Container } from '@chakra-ui/react';
import RestaurantTypeSlider from '../components/RestaurantTypeSlider';
import Modal from '../components/Modal';

function Home() {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const showModal = (value) => {
    setQuestionIndex(0);
    setShowQuestionnaire(value);
  };

  return [
    <FindTableHeader />,

    <Container maxW="container.xl" color="#2d333f">
      <div className="home-content">
        <div onClick={() => setShowQuestionnaire(true)}>
          <ServiceIcons />
          <PopularLocations />
        </div>
        <div>
          <CategoryRestaurants category={{ title: 'Famous restaurns' }} />
          <CategoryRestaurants category={{ title: 'Best dinings' }} />
        </div>
      </div>
      <Modal show={showQuestionnaire} showModal={showModal}>
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
                        <input type="radio" value={answer.value} />
                        <p>{answer.title}</p>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="questionnaire__buttons">
            {questionIndex > 0 ? (
              <button onClick={() => setQuestionIndex(questionIndex - 1)}>Prev</button>
            ) : (
              <div></div>
            )}

            <button onClick={() => setQuestionIndex(questionIndex + 1)}>Next</button>
          </div>

          {/* <div className="questionnaire__item">
            <div className="questionnaire__item-answers-input">
              <input type="radio" />
              <p>No</p>
            </div>
          </div> */}
        </div>
      </Modal>
      <RestaurantTypeSlider identifier={0} />
      <RestaurantTypeSlider identifier={1} />
    </Container>,
  ];
}
export default Home;
