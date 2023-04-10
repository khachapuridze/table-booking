import { Container, Flex } from '@chakra-ui/react';
import FindTableHeader from '../components/FindTableHeader';
import FilterSection from '../components/FilterSection';
import TableCard from '../components/TableCard';
import { productList } from '../mock/products';

export default function RestaurantList() {
  return (
    <div>
      <FindTableHeader layout2={true} />
      <Container maxW="container.xl">
        <Flex justify="flex-start" className="restaurants-list" gap={30}>
          <FilterSection />
          <div className="restaurants-list__row">
            {productList.map((product, index) => (
              <TableCard key={index} isV2={true} product={product} />
            ))}
          </div>
        </Flex>
      </Container>
    </div>
  );
}
