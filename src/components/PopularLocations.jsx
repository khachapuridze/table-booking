import { Text, Flex, Container } from '@chakra-ui/react';

function PopularLocations() {
  return (
    <Container maxW="container.xl" color="#2d333f" className="popular-locations">
      <Text fontSize="2xl" paddingBottom={5}>
        Popular location
      </Text>
      <Flex justify="space-between" gap={30}>
        <div className="location-item">
          <div className="location-item__layer"></div>
          <span>Pizzeria</span>
          <img src={require('../assets/download.jpeg')} alt="pizzeria" />
        </div>
        <div className="location-item">
          <div className="location-item__layer"></div>
          <span>Sushi</span>
          <img src={require('../assets/sushi.jpeg')} alt="sushi" />
        </div>
        <div className="location-item">
          <div className="location-item__layer"></div>
          <span>Wine</span>
          <img src={require('../assets/wine.jpeg')} alt="wine" />
        </div>
      </Flex>
    </Container>
  );
}

export default PopularLocations;
