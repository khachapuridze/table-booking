import TableCard from './TableCard';
import { productList } from '../mock/products';
export default function CategoryRestaurants(props) {
  return (
    <div className="category-restaurants">
      <h3>{props.category.title}</h3>
      <div className="category-restaurants__list">
        <TableCard product={productList[0]} />
        <TableCard product={productList[1]} />
      </div>
    </div>
  );
}
