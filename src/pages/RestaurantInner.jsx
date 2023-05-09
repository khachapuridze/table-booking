import { DayPicker } from 'react-day-picker';
import { Container, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { productList } from '../mock/products';
import Dishes from '../components/RestaurantInner/Dishes';
import Photos from '../components/RestaurantInner/Photos';

export default function RestaurantInner() {
  const [restaurantInnerData, setRestaurantInnerData] = useState({});
  const [openDayPicker, setOpenDayPicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tabItems] = useState([
    {
      title: 'Overview',
    },
    {
      title: 'Popular dishes',
    },
    {
      title: 'Photos',
    },
    {
      title: 'Menu',
    },
    {
      title: 'Reviews',
    },
  ]);

  const params = useParams();

  const onSetSelectedDate = (date) => {
    setSelectedDate(date);
    setOpenDayPicker(false);
  };

  useEffect(() => {
    setRestaurantInnerData(productList.find((pr) => pr.id === Number(params.id)));
  }, [params.id]);

  return (
    <div className="inner-restaurant">
      <div className="inner-restaurant__banner">
        <img src={restaurantInnerData.cover} alt={restaurantInnerData.title} />
      </div>
      <div className="inner-restaurant__content">
        <Container maxW="container.xl">
          <Flex justify="space-between" gap={30}>
            <div className="inner-restaurant__info">
              <nav className="info-nav">
                {tabItems.map((tab, index) => (
                  <li key={index}>
                    <a href="#test">{tab.title}</a>
                  </li>
                ))}
              </nav>
              <h1>{restaurantInnerData.title}</h1>
              <div className="restaurant-overview">
                <div className="restaurant-overview__item">
                  <span>
                    <ReactStars
                      count={5}
                      edit={false}
                      value={restaurantInnerData.starsCount}
                      isHalf={true}
                      color="#e1e1e1"
                      size={24}
                      activeColor="#da3743"
                    />
                  </span>

                  <span>{restaurantInnerData.starsCount}</span>
                </div>
                <div className="restaurant-overview__item" id="reviewInfo">
                  <span
                    className="pBCjKaMJcpEY4UICo9ol BlIrzraLsBsehdCM8khx"
                    data-test="icReview"
                    data-testid="icReview"
                  >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M19,4 L5,4 C3.8954305,4 3,4.8954305 3,6 L3,15 C3,16.1045695 3.8954305,17 5,17 L11,17 L15.36,20.63 C15.6583354,20.8784924 16.0735425,20.9318337 16.4250008,20.7668198 C16.776459,20.6018059 17.0006314,20.2482681 17,19.86 L17,17 L19,17 C20.1045695,17 21,16.1045695 21,15 L21,6 C21,4.8954305 20.1045695,4 19,4 Z M19,15 L15,15 L15,17.73 L11.72,15 L5,15 L5,6 L19,6 L19,15 Z"
                          fill="#2D333F"
                          fill-rule="nonzero"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span>{restaurantInnerData.reviewCount} Reviews</span>
                </div>
                <div className="restaurant-overview__item" id="priceBandInfo">
                  <span
                    className="pBCjKaMJcpEY4UICo9ol BlIrzraLsBsehdCM8khx"
                    data-test="icPriceRange"
                    data-testid="icPriceRange"
                  >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M20,15 L20,9 L18.5,9 C18.2238576,9 18,8.77614237 18,8.5 L18,7 L6,7 L6,8.5 C6,8.77614237 5.77614237,9 5.5,9 L4,9 L4,15 L5.5,15 C5.77614237,15 6,15.2238576 6,15.5 L6,17 L18,17 L18,15.5 C18,15.2238576 18.2238576,15 18.5,15 L20,15 Z M4,5 L20,5 C21.1045695,5 22,5.8954305 22,7 L22,17 C22,18.1045695 21.1045695,19 20,19 L4,19 C2.8954305,19 2,18.1045695 2,17 L2,7 C2,5.8954305 2.8954305,5 4,5 Z M12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 Z"
                          fill="#2D333F"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span>$30 and under</span>
                </div>
                <div className="restaurant-overview__item" id="cuisineInfo">
                  <span
                    className="pBCjKaMJcpEY4UICo9ol BlIrzraLsBsehdCM8khx"
                    data-test="icCuisine"
                    data-testid="icCuisine"
                  >
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M11,2 C12.1045695,2 13,2.8954305 13,4 L13,11 C13,12.1045695 12.1045695,13 11,13 L10,13 L10,21 C10,21.5522847 9.55228475,22 9,22 L8,22 C7.44771525,22 7,21.5522847 7,21 L7,13 L6,13 C4.8954305,13 4,12.1045695 4,11 L4,4 C4,2.8954305 4.8954305,2 6,2 L11,2 Z M11,11 L11,4 L10,4 L10,8.5 C10,8.77614237 9.77614237,9 9.5,9 C9.22385763,9 9,8.77614237 9,8.5 L9,4 L8,4 L8,8.5 C8,8.77614237 7.77614237,9 7.5,9 C7.22385763,9 7,8.77614237 7,8.5 L7,4 L6,4 L6,11 L11,11 Z M19.45,2 C19.7537566,2 20,2.24624339 20,2.55 L20,21 C20,21.5522847 19.5522847,22 19,22 L18,22 C17.4477153,22 17,21.5522847 17,21 L17,17 L16,17 C14.8954305,17 14,16.1045695 14,15 L14,7.45 C14,4.44004811 16.4400481,2 19.45,2 Z M16,15 L18,15 L18,4.32 C16.7823465,4.88673047 16.0026709,6.10692278 16,7.45 L16,15 Z"
                          fill="#2D333F"
                          fill-rule="nonzero"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span>International</span>
                </div>
              </div>
              <div className="restaurant-tags">
                <span>Top Tags:</span>
                <ul>
                  <li>
                    <a href="/s/?datetime=2023-03-23T19:00&amp;covers=2&amp;tagIds=Romance">Romantic</a>
                  </li>
                  <li>
                    <a
                      href="/s/?datetime=2023-03-23T19:00&amp;covers=2&amp;tagIds=BusinessMeals"
                      className="gFUe2jECQNAkQaCWqci_ IdI1_cJciKCXMKY7hvXg BoZ_Hzg4GGZ1XXDaNyct"
                    >
                      Good for business meals
                    </a>
                  </li>
                  <li>
                    <a href="/s/?datetime=2023-03-23T19:00&amp;covers=2&amp;tagIds=ScenicView">
                      Great for scenic views
                    </a>
                  </li>
                </ul>
              </div>
              <div className="inner-restaurant__info-desc">
                Located in the heart of Edinburgh, The Ivy on the Square is an all-day British brasserie serving modern
                British and international Ivy-inspired classics.
              </div>
              <section className="experiences inner-restaurant__info-content" data-test="experiences">
                <header data-test="section-header">
                  <div>
                    <h2>Experiences</h2>
                  </div>
                </header>
                <div>
                  <ul>
                    <li>
                      <div>
                        <h3 data-test="experience-title">Champagne Dinner</h3>
                        <div className="experiences-detail">
                          <span data-test="icPriceRange" data-testid="icPriceRange">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                              <g fill="none" fill-rule="evenodd">
                                <path
                                  d="M20,15 L20,9 L18.5,9 C18.2238576,9 18,8.77614237 18,8.5 L18,7 L6,7 L6,8.5 C6,8.77614237 5.77614237,9 5.5,9 L4,9 L4,15 L5.5,15 C5.77614237,15 6,15.2238576 6,15.5 L6,17 L18,17 L18,15.5 C18,15.2238576 18.2238576,15 18.5,15 L20,15 Z M4,5 L20,5 C21.1045695,5 22,5.8954305 22,7 L22,17 C22,18.1045695 21.1045695,19 20,19 L4,19 C2.8954305,19 2,18.1045695 2,17 L2,7 C2,5.8954305 2.8954305,5 4,5 Z M12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 Z"
                                  fill="#2D333F"
                                ></path>
                              </g>
                            </svg>
                          </span>
                          <p data-test="experience-price">£45.00 per person</p>
                        </div>

                        <div className="experiences-detail">
                          <span data-test="icCalendar" data-testid="icCalendar">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                              <g fill="none" fill-rule="evenodd">
                                <path
                                  d="M17,5 L19,5 C20.1045695,5 21,5.8954305 21,7 L21,19 C21,20.1045695 20.1045695,21 19,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L7,5 L7,4 C7,3.44771525 7.44771525,3 8,3 C8.55228475,3 9,3.44771525 9,4 L9,5 L15,5 L15,4 C15,3.44771525 15.4477153,3 16,3 C16.5522847,3 17,3.44771525 17,4 L17,5 Z M19,9 L19,7 L5,7 L5,9 L19,9 Z M19,11 L5,11 L5,19 L19,19 L19,11 Z"
                                  fill="#2D333F"
                                ></path>
                              </g>
                            </svg>
                          </span>
                          <p>Mar 24 - May 12, 2023</p>
                        </div>

                        <section className="experiences-desc">
                          <div>
                            Dine on our Champagne Dinner menu every Friday evening, from £45. The menu includes a half
                            bottle of the finest French Champagne per person.
                          </div>
                        </section>
                        <button
                          type="button"
                          tabIndex="0"
                          data-test="experience-reserve-button"
                          aria-label="Reserve"
                          theme="primary"
                        >
                          Reserve
                        </button>
                      </div>
                      <div>
                        <img alt="Champagne Dinner" src="https://images.otstatic.com/prod1/51840766/1/small.png" />
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
              <section className="inner-restaurant__info-content" id="menu">
                <header data-test="section-header">
                  <div>
                    <h2>Menu</h2>
                  </div>
                </header>
                <a href="https://theivyedinburgh.com/menus/" target="_blank" rel="noreferrer">
                  <span>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M19.5,4 C19.7761424,4 20,4.22385763 20,4.5 L20,9.5 C20,9.77614237 19.7761424,10 19.5,10 L18.5,10 C18.2238576,10 18,9.77614237 18,9.5 L18,7.41 L12.18,13.25 C12.0861167,13.3446563 11.9583188,13.3978992 11.825,13.3978992 C11.6916812,13.3978992 11.5638833,13.3446563 11.47,13.25 L10.76,12.54 C10.6653437,12.4461167 10.6121008,12.3183188 10.6121008,12.185 C10.6121008,12.0516812 10.6653437,11.9238833 10.76,11.83 L16.59,6 L14.5,6 C14.2238576,6 14,5.77614237 14,5.5 L14,4.5 C14,4.22385763 14.2238576,4 14.5,4 L19.5,4 Z M19.5,14 C19.7761424,14 20,14.2238576 20,14.5 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,6 C4,4.8954305 4.8954305,4 6,4 L9.5,4 C9.77614237,4 10,4.22385763 10,4.5 L10,5.5 C10,5.77614237 9.77614237,6 9.5,6 L6,6 L6,18 L18,18 L18,14.5 C18,14.2238576 18.2238576,14 18.5,14 L19.5,14 Z"
                          fill="#2D333F"
                          fill-rule="nonzero"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span>View menu on restaurant's website</span>
                </a>
              </section>
              <section className="inner-restaurant__info-content" id="dishes">
                <Dishes />
              </section>
              <section className="inner-restaurant__info-content" id="photos">
                <Photos />
              </section>
            </div>
            <div className="inner-restaurant__reservation">
              <h2>Reservation</h2>
              <div className="inner-restaurant__reservation-filters">
                <div>
                  <label htmlFor="restProfileSideBarDtpPartySizePicker">Party Size</label>
                  <div value="4" className="filter-select">
                    <select
                      aria-label="Party size selector"
                      data-test="party-size-picker"
                      id="restProfileSideBarDtpPartySizePicker"
                    >
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3">3 people</option>
                      <option value="4">4 people</option>
                      <option value="5">5 people</option>
                      <option value="6">6 people</option>
                      <option value="7">7 people</option>
                      <option value="8">8 people</option>
                      <option value="9">9 people</option>
                      <option value="10">10 people</option>
                      <option value="11">11 people</option>
                      <option value="12">12 people</option>
                      <option value="13">13 people</option>
                      <option value="14">14 people</option>
                      <option value="15">15 people</option>
                      <option value="16">16 people</option>
                      <option value="17">17 people</option>
                      <option value="18">18 people</option>
                      <option value="19">19 people</option>
                      <option value="20">20 people</option>
                    </select>
                  </div>
                </div>
                <div className="filter-labels">
                  <label>Date</label>
                  <label>Time</label>
                </div>
                <div className="bookable-restaurant-profile-day-picker">
                  <div className="calendar filter-select booking-day-picker">
                    <Text fontSize="sm" onClick={() => setOpenDayPicker(!openDayPicker)}>
                      {format(selectedDate, 'PP')}
                      <span>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                          <g fill="none">
                            <path
                              d="M11,11 L11,14.5 C11,14.7761424 10.7761424,15 10.5,15 L9.5,15 C9.22385763,15 9,14.7761424 9,14.5 L9,10.5 L9,9.5 C9,9.22385763 9.22385763,9 9.5,9 L14.5,9 C14.7761424,9 15,9.22385763 15,9.5 L15,10.5 C15,10.7761424 14.7761424,11 14.5,11 L11,11 Z"
                              fill="#2D333F"
                              transform="translate(12.000000, 12.000000) rotate(-135.000000) translate(-12.000000, -12.000000)"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </Text>

                    <DayPicker
                      style={!openDayPicker && { display: 'none' }}
                      mode="single"
                      selected={selectedDate}
                      disabled={[{ from: new Date(1, 1, 1), to: new Date() }]}
                      onSelect={onSetSelectedDate}
                    />
                  </div>
                  <div className="bookable-restaurant-profile-time-picker">
                    <div className="filter-select">
                      <select
                        aria-label="Time selector"
                        data-test="time-picker"
                        id="restProfileSideBartimePickerDtpPicker"
                      >
                        <option value="2000-02-01T22:00:00" selected="">
                          10:00 PM
                        </option>
                        <option value="2000-02-01T22:30:00">10:30 PM</option>
                        <option value="2000-02-01T23:00:00">11:00 PM</option>
                        <option value="2000-02-01T23:30:00">11:30 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" className="find-table-btn" aria-label="Find a time" tabIndex="0">
                Find a time
              </button>
              <section className="inner-restaurant__reservation-bottom">
                <span>
                  <span>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                      <g fill="none" fill-rule="evenodd">
                        <path
                          d="M15.5,5 C15.2239,5 15,5.223846 15,5.5 L15,6.5 C15,6.77615 15.2239,7 15.5,7 L17.5858,7 L14,10.58578 L12.70711,9.29291 L12.35355,8.93933 C12.15829,8.74408 11.84171,8.74408 11.64645,8.93933 L11.29289,9.29291 L5,15.5858 L5,7 L11.5,7 C11.77614,7 12,6.77615 12,6.5 L12,5.5 C12,5.22385 11.77614,5 11.5,5 L5,5 C3.89543,5 3,5.89542 3,7 L3,17 C3,18.1046 3.89543,19 5,19 L19,19 C20.1046,19 21,18.1046 21,17 L21,14.5 C21,14.2238 20.7761,14 20.5,14 L19.5,14 C19.2239,14 19,14.2238 19,14.5 L19,17 L6.4142,17 L12,11.41422 L13.2929,12.70709 L13.6464,13.06067 C13.8417,13.25592 14.1583,13.25592 14.3536,13.06067 L14.7071,12.70709 L19,8.41422 L19,10.5 C19,10.77615 19.2239,11 19.5,11 L20.5,11 C20.7761,11 21,10.77615 21,10.5 L21,6 L21,5.5 C21,5.223846 20.7761,5 20.5,5 L20,5 L15.5,5 Z"
                          fill="#2D333F"
                          fill-rule="nonzero"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  Booked {restaurantInnerData.bookedCount} times today
                </span>
                <div>
                  <div className="available">
                    Experiences are available.
                    <button type="button" tabIndex="0" aria-label="See details" theme="linkButton">
                      See details
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </Flex>
        </Container>
      </div>
    </div>
  );
}
