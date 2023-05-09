import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { useState } from 'react';

function Dishes() {
  const [popularDishes, setPopularDishes] = useState([
    {
      title: 'Khinkali',
      desc: 'Marinated Skirt Steak Charred Peppers & Onions Flour Tortillas Cheddar Cheese Sour Cream Salsa Verde',
      reviewsCount: 7,
    },
    {
      title: 'Mtsvadi',
      desc: 'Marinated Skirt Steak Charred Peppers & Onions Flour Tortillas Cheddar Cheese Sour Cream Salsa Verde',
      reviewsCount: 7,
    },
    {
      title: 'Shaurma',
      desc: 'Marinated Skirt Steak Charred Peppers & Onions Flour Tortillas Cheddar Cheese Sour Cream Salsa Verde',
      reviewsCount: 7,
    },
    {
      title: 'Bozbashi',
      desc: 'Marinated Skirt Steak Charred Peppers & Onions Flour Tortillas Cheddar Cheese Sour Cream Salsa Verde',
      reviewsCount: 7,
    },
  ]);
  return (
    <div>
      <header data-test="section-header">
        <div>
          <h2>Popular dishes</h2>
        </div>
      </header>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        modules={[Navigation]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {popularDishes.map((dishes, index) => (
          <SwiperSlide key={index}>
            <div className="popular-dishes__card">
              <h3 className="title">{dishes.title}</h3>
              <p className="desc">{dishes.desc}</p>
              <p className="reviews">{dishes.reviewsCount} reviews</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Dishes;
