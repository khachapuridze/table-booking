import TableCard from './TableCard';
export default function CategoryRestaurants(props) {
  return (
    <div className="category-restaurants">
      <h3>{props.category.title}</h3>
      <div className="category-restaurants__list">
        <TableCard />
        <TableCard />
      </div>
    </div>
  );
}
