import { useState } from 'react';
import { Box, Text, Flex, Button } from '@chakra-ui/react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { NavLink } from 'react-router-dom';
import '../css/day-picker.css';
function FindTableHeader({ layout2 }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [openDayPicker, setOpenDayPicker] = useState(false);
  const [selectTime, setSelectTime] = useState('');
  const [selectPerson, setSelectPerson] = useState('1');
  const [searchValue, setSearchValue] = useState('');

  const times = [
    {
      value: '2000-02-01T00:00:00',
      title: '12:00 AM',
    },
    {
      value: '2000-02-01T00:30:00',
      title: '12:30 AM',
    },
    {
      value: '2000-02-01T01:00:00',
      title: '1:00 AM',
    },
    {
      value: '2000-02-01T01:30:00',
      title: '1:30 AM',
    },
  ];
  const timeSelctions = times.map((t) => <option value={t.value}>{t.title}</option>);

  const onSetSelectedDate = (date) => {
    setTimeout(() => {
      setSelectedDate(date);
      setOpenDayPicker(false);
    }, 10);
  };

  return (
    <Box
      bg="linear-gradient(.647turn,#1a0a47cc,#0d1b4599 .01%,#0d1b45cc 51.04%,#0d1b45 99.1%)"
      w="100%"
      p={10}
      color="white"
      className={layout2 && 'header-l2'}
    >
      {!layout2 && (
        <Text as="h1" fontSize="5xl" textAlign="center" mb="16px">
          Find your table for any occasion
        </Text>
      )}

      <Flex justify="center">
        <div className="booking-day-picker booking-tab-item">
          <Text fontSize="sm" onClick={() => setOpenDayPicker(!openDayPicker)}>
            <span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <g fill="none">
                  <path
                    d="M17,5 L19,5 C20.1045695,5 21,5.8954305 21,7 L21,19 C21,20.1045695 20.1045695,21 19,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L7,5 L7,4 C7,3.44771525 7.44771525,3 8,3 C8.55228475,3 9,3.44771525 9,4 L9,5 L15,5 L15,4 C15,3.44771525 15.4477153,3 16,3 C16.5522847,3 17,3.44771525 17,4 L17,5 Z M19,9 L19,7 L5,7 L5,9 L19,9 Z M19,11 L5,11 L5,19 L19,19 L19,11 Z"
                    fill="#2D333F"
                  ></path>
                </g>
              </svg>
            </span>
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
          {openDayPicker && (
            <DayPicker
              mode="single"
              selected={selectedDate}
              disabled={[{ from: new Date(1, 1, 1), to: new Date() }]}
              onSelect={onSetSelectedDate}
            />
          )}
        </div>
        <div className="booking-tab-item booking-time-picker">
          <Text fontSize="sm">
            <span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <g fill="none">
                  <path
                    d="M13,11 L14.5,11 C14.7761424,11 15,11.2238576 15,11.5 L15,12.5 C15,12.7761424 14.7761424,13 14.5,13 L12.5,13 L11.5,13 C11.2238576,13 11,12.7761424 11,12.5 L11,7.5 C11,7.22385763 11.2238576,7 11.5,7 L12.5,7 C12.7761424,7 13,7.22385763 13,7.5 L13,11 Z M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z M12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 Z"
                    fill="#2D333F"
                  ></path>
                </g>
              </svg>
            </span>
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
          <select value={selectTime} onChange={(e) => setSelectTime(e.target.value)}>
            {timeSelctions}

            <option value="2000-02-01T02:00:00">2:00 AM</option>
            <option value="2000-02-01T02:30:00">2:30 AM</option>
            <option value="2000-02-01T03:00:00">3:00 AM</option>
            <option value="2000-02-01T03:30:00">3:30 AM</option>
            <option value="2000-02-01T04:00:00">4:00 AM</option>
            <option value="2000-02-01T04:30:00">4:30 AM</option>
            <option value="2000-02-01T05:00:00">5:00 AM</option>
            <option value="2000-02-01T05:30:00">5:30 AM</option>
            <option value="2000-02-01T06:00:00">6:00 AM</option>
            <option value="2000-02-01T06:30:00">6:30 AM</option>
            <option value="2000-02-01T07:00:00">7:00 AM</option>
            <option value="2000-02-01T07:30:00">7:30 AM</option>
            <option value="2000-02-01T08:00:00">8:00 AM</option>
            <option value="2000-02-01T08:30:00">8:30 AM</option>
            <option value="2000-02-01T09:00:00">9:00 AM</option>
            <option value="2000-02-01T09:30:00">9:30 AM</option>
            <option value="2000-02-01T10:00:00">10:00 AM</option>
            <option value="2000-02-01T10:30:00">10:30 AM</option>
            <option value="2000-02-01T11:00:00">11:00 AM</option>
            <option value="2000-02-01T11:30:00">11:30 AM</option>
            <option value="2000-02-01T12:00:00">12:00 PM</option>
            <option value="2000-02-01T12:30:00">12:30 PM</option>
            <option value="2000-02-01T13:00:00">1:00 PM</option>
            <option value="2000-02-01T13:30:00">1:30 PM</option>
            <option value="2000-02-01T14:00:00">2:00 PM</option>
            <option value="2000-02-01T14:30:00">2:30 PM</option>
            <option value="2000-02-01T15:00:00">3:00 PM</option>
            <option value="2000-02-01T15:30:00">3:30 PM</option>
            <option value="2000-02-01T16:00:00">4:00 PM</option>
            <option value="2000-02-01T16:30:00">4:30 PM</option>
            <option value="2000-02-01T17:00:00">5:00 PM</option>
            <option value="2000-02-01T17:30:00">5:30 PM</option>
            <option value="2000-02-01T18:00:00">6:00 PM</option>
            <option value="2000-02-01T18:30:00">6:30 PM</option>
            <option value="2000-02-01T19:00:00">7:00 PM</option>
            <option value="2000-02-01T19:30:00">7:30 PM</option>
            <option value="2000-02-01T20:00:00">8:00 PM</option>
            <option value="2000-02-01T20:30:00">8:30 PM</option>
            <option value="2000-02-01T21:00:00">9:00 PM</option>
            <option value="2000-02-01T21:30:00">9:30 PM</option>
            <option value="2000-02-01T22:00:00">10:00 PM</option>
            <option value="2000-02-01T22:30:00">10:30 PM</option>
            <option value="2000-02-01T23:00:00">11:00 PM</option>
            <option value="2000-02-01T23:30:00">11:30 PM</option>
          </select>
        </div>
        <div className="booking-tab-item booking-time-picker">
          <Text fontSize="sm">
            <span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                <g fill="none">
                  <path
                    d="M14.5734892,12.2877361 C17.0042328,12.8819383 18.7345621,14.3964534 19.7644773,16.8312813 C19.9208947,17.2010684 20.0014914,17.5984917 20.0014914,18 C20.0014914,19.6568477 18.658351,20.9999882 17.0015032,20.9999882 L6.99926923,21 C6.59776067,21 6.2003371,20.9194033 5.83054967,20.7629859 C4.3045986,20.1175199 3.59082441,18.3572386 4.23628386,16.8312848 C5.26612228,14.3966359 6.99627139,12.8821638 9.42673118,12.2878687 C7.97272602,11.4134027 7,9.82029752 7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 C17,9.82020554 16.0273723,11.4132417 14.5734892,12.2877361 Z M12,5 C10.3431458,5 9,6.34314575 9,8 C9,9.65685425 10.3431458,11 12,11 C13.6568542,11 15,9.65685425 15,8 C15,6.34314575 13.6568542,5 12,5 Z M17.9429826,17.6856919 C17.1294316,15.228564 15.1485327,14 12.000286,14 C8.85208947,14 6.87106303,15.2285248 6.05720667,17.6855743 L6.05721876,17.6855783 C5.88356446,18.2098444 6.16779141,18.7756206 6.69205743,18.9492749 C6.79348438,18.9828708 6.89964014,18.9999945 7.00648636,18.9999945 L16.99371,18.9999469 C17.5459684,18.9999469 17.9936623,18.552253 17.9936623,17.9999945 C17.9936623,17.8931928 17.9765523,17.7870807 17.9429826,17.6856919 Z"
                    fill="#2D333F"
                  ></path>
                </g>
              </svg>
            </span>
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

          <select value={selectPerson} onChange={(e) => setSelectPerson(e.target.value)}>
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
            <option value="21">Larger party</option>
          </select>
        </div>
        <div className="booking-tab-item booking-search-text">
          <span>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M13,15.9291111 L13,21.5 C13,21.7761424 12.7761424,22 12.5,22 L11.5,22 C11.2238576,22 11,21.7761424 11,21.5 L11,15.9291111 C7.60770586,15.4438815 5,12.5264719 5,9 C5,5.13400675 8.13400675,2 12,2 C15.8659932,2 19,5.13400675 19,9 C19,12.5264719 16.3922941,15.4438815 13,15.9291111 Z M12,4 C9.23857625,4 7,6.23857625 7,9 C7,11.7614237 9.23857625,14 12,14 C14.7614237,14 17,11.7614237 17,9 C17,6.23857625 14.7614237,4 12,4 Z"
                  fill="#2D333F"
                  fill-rule="nonzero"
                  transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000)"
                ></path>
              </g>
            </svg>
          </span>
          <input
            data-test="search-autocomplete-input"
            aria-autocomplete="list"
            autocomplete="off"
            placeholder="Location, Restaurant, or Cuisine"
            aria-label="Please input a Location, Restaurant or Cuisine"
            spellcheck="false"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <NavLink to="/s">
          <Button colorScheme="teal" width="144px" size="md" fontSize="sm">
            Let's go
          </Button>
        </NavLink>
      </Flex>
    </Box>
  );
}
export default FindTableHeader;
