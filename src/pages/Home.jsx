import FindTableHeader from '../components/FindTableHeader';
import ServiceIcons from '../components/ServiceIcons';
import PopularLocations from '../components/PopularLocations';
import CategoryRestaurants from '../components/CategoryRestaurants';

import { Container, Flex } from '@chakra-ui/react';
import RestaurantTypeSlider from '../components/RestaurantTypeSlider';

function Home() {
  return [
    <FindTableHeader />,

    <Container maxW="container.xl" color="#2d333f">
      <div className="home-content">
        <div>
          <ServiceIcons />
          <PopularLocations />
        </div>
        <div>
          <CategoryRestaurants category={{ title: 'Famous restaurns' }} />
          <CategoryRestaurants category={{ title: 'Best dinings' }} />
        </div>
      </div>
      <RestaurantTypeSlider />
    </Container>,
  ];
}
export default Home;
