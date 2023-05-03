import { useState } from 'react';

import FindTableHeader from '../components/FindTableHeader';
import ServiceIcons from '../components/ServiceIcons';
import PopularLocations from '../components/PopularLocations';
import CategoryRestaurants from '../components/CategoryRestaurants';

import { Container } from '@chakra-ui/react';
import RestaurantTypeSlider from '../components/RestaurantTypeSlider';
import Questionnaire from '../components/Modals/Questionnaire';

function Home() {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);

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

      <Questionnaire show={showQuestionnaire} hideModal={() => setShowQuestionnaire(false)} />

      <RestaurantTypeSlider identifier={0} />
      <RestaurantTypeSlider identifier={1} />
    </Container>,
  ];
}
export default Home;
