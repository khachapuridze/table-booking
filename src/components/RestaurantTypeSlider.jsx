import { Swiper, SwiperSlide } from 'swiper/react';
import { productList } from '../mock/products';
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';
import TableCard from './TableCard';

export default function RestaurantTypeSlider(props) {
  return (
    <div className="type-slider">
      <header>
        <h2>Available for breakfast now in Varketili</h2>

        <div className="view-all" role="button" tabIndex="0">
          View all
        </div>
      </header>

      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        modules={[Navigation]}
        navigation={{
          nextEl: `.arrow-right-${props.identifier}`,
          prevEl: `.arrow-left-${props.identifier}`,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {productList.map((product, index) => (
          <SwiperSlide key={index}>
            <TableCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        tabIndex="0"
        aria-label="Previous"
        className={`swiper-nav-item swiper-nav-left arrow-left-${props.identifier}`}
      >
        <span>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none">
              <path
                d="M10.6568542,9.65685425 L10.6568542,15.1568542 C10.6568542,15.4329966 10.4329966,15.6568542 10.1568542,15.6568542 L9.15685425,15.6568542 C8.88071187,15.6568542 8.65685425,15.4329966 8.65685425,15.1568542 L8.65685425,9.15685425 L8.65685425,8.15685425 C8.65685425,7.88071187 8.88071187,7.65685425 9.15685425,7.65685425 L16.1568542,7.65685425 C16.4329966,7.65685425 16.6568542,7.88071187 16.6568542,8.15685425 L16.6568542,9.15685425 C16.6568542,9.43299662 16.4329966,9.65685425 16.1568542,9.65685425 L10.6568542,9.65685425 Z"
                fill="#2D333F"
                transform="translate(12.656854, 11.656854) rotate(-45.000000) translate(-12.656854, -11.656854)"
              ></path>
            </g>
          </svg>
        </span>
      </button>
      <button
        type="button"
        tabIndex="0"
        aria-label="Previous"
        className={`swiper-nav-item swiper-nav-right arrow-right-${props.identifier}`}
      >
        <span>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none">
              <path
                d="M8.65685425,9.65685425 L8.65685425,15.1568542 C8.65685425,15.4329966 8.43299662,15.6568542 8.15685425,15.6568542 L7.15685425,15.6568542 C6.88071187,15.6568542 6.65685425,15.4329966 6.65685425,15.1568542 L6.65685425,9.15685425 L6.65685425,8.15685425 C6.65685425,7.88071187 6.88071187,7.65685425 7.15685425,7.65685425 L14.1568542,7.65685425 C14.4329966,7.65685425 14.6568542,7.88071187 14.6568542,8.15685425 L14.6568542,9.15685425 C14.6568542,9.43299662 14.4329966,9.65685425 14.1568542,9.65685425 L8.65685425,9.65685425 Z"
                fill="#2D333F"
                transform="translate(10.656854, 11.656854) scale(-1, 1) rotate(-45.000000) translate(-10.656854, -11.656854)"
              ></path>
            </g>
          </svg>
        </span>
      </button>
    </div>
  );
}
