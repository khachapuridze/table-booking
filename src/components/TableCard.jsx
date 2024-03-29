import { Card, CardBody, Image, Stack, Text, ButtonGroup, Button, Heading, Flex } from '@chakra-ui/react';
import ReactStars from 'react-rating-stars-component';
import { NavLink } from 'react-router-dom';

function TableCard({ product, isV2 }) {
  return (
    <Card maxW="sm" className={`restaurant-card ${isV2 && 'restaurant-card-v2'}`}>
      <NavLink to={`/r/${product.id}`}>
        <CardBody>
          <div className="image-container">
            <Image src={product.img} alt={product.title} borderRadius="lg" />
          </div>

          <Stack mt="6" spacing="3">
            <Heading size="md">{product.title}</Heading>
            {!isV2 && <Text noOfLines={1}>{product.desc}</Text>}
            <Flex className="stars" alignItems={'center'}>
              <ReactStars
                edit={false}
                count={5}
                value={product.starsCount}
                isHalf={true}
                color="#e1e1e1"
                size={24}
                activeColor="#da3743"
              />
              <span>{product.reviewCount} reviews</span>
            </Flex>
            <div className="desc">
              <span>Contemporary British</span>
              <span>
                <span>
                  £££<span>£</span>
                </span>
              </span>
              <span>Old Town</span>
            </div>
            <Flex className="booked" alignItems={'center'}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M15.5,5 C15.2239,5 15,5.223846 15,5.5 L15,6.5 C15,6.77615 15.2239,7 15.5,7 L17.5858,7 L14,10.58578 L12.70711,9.29291 L12.35355,8.93933 C12.15829,8.74408 11.84171,8.74408 11.64645,8.93933 L11.29289,9.29291 L5,15.5858 L5,7 L11.5,7 C11.77614,7 12,6.77615 12,6.5 L12,5.5 C12,5.22385 11.77614,5 11.5,5 L5,5 C3.89543,5 3,5.89542 3,7 L3,17 C3,18.1046 3.89543,19 5,19 L19,19 C20.1046,19 21,18.1046 21,17 L21,14.5 C21,14.2238 20.7761,14 20.5,14 L19.5,14 C19.2239,14 19,14.2238 19,14.5 L19,17 L6.4142,17 L12,11.41422 L13.2929,12.70709 L13.6464,13.06067 C13.8417,13.25592 14.1583,13.25592 14.3536,13.06067 L14.7071,12.70709 L19,8.41422 L19,10.5 C19,10.77615 19.2239,11 19.5,11 L20.5,11 C20.7761,11 21,10.77615 21,10.5 L21,6 L21,5.5 C21,5.223846 20.7761,5 20.5,5 L20,5 L15.5,5 Z"
                    fill="#2D333F"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </svg>
              <span data-test="icSocialProof" data-testid="icSocialProof">
                Booked {product.bookedCount} times today
              </span>
            </Flex>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="red">
                2:00 PM
              </Button>
              <Button variant="solid" colorScheme="red">
                2:00 PM
              </Button>
              <Button variant="solid" colorScheme="red">
                2:00 PM
              </Button>
              <Button variant="solid" colorScheme="red">
                2:00 PM
              </Button>
            </ButtonGroup>
          </Stack>
        </CardBody>
      </NavLink>
    </Card>
  );
}

export default TableCard;
