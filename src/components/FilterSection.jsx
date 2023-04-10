import { useState } from 'react';
import { filters } from '../mock/filters';
export default function FilterSection() {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [expensive, setExpensive] = useState('$');

  const updateFilterItem = (e) => {
    setSelectedFilter(e.target.value);
  };
  return (
    <section className="filters">
      <button type="button" className="filters__map-btn">
        <div className="svg-cont">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
            <g
              fill="none"
              fill-rule="evenodd"
              transform="translate(12.000000, 5470.000000) scale(-1, 1) translate(-12.000000, -5470.000000)"
            >
              <path
                d="M10,4.31651371 L10,18.4730466 C10.0285038,18.4809691 10.0569401,18.4892133 10.0853036,18.4977793 L14,19.6800461 L14,5.53831015 C13.9594804,5.52729607 13.9190944,5.51563333 13.8788575,5.50332209 L10,4.31651371 Z M8,4.25005613 L4,5.30326893 L4,19.4951652 L7.90411701,18.4604528 C7.93600389,18.4520018 7.96796736,18.4439525 7.99999999,18.4363047 L8,4.25005613 Z M16,5.56370647 L16,19.7427917 L20,18.6926445 L19.9905189,4.50952294 L16.0714536,5.54552048 C16.047677,5.55180576 16.0238581,5.55786772 16,5.56370642 Z M3.49351286,3.36304214 L8.45154718,2.06514365 C8.81011845,1.971278 9.18772029,1.97890237 9.54221026,2.08716584 L14.4577897,3.58841477 C14.8122797,3.69667824 15.1898815,3.70430261 15.5484528,3.61043696 L19.4935129,2.57771166 C20.5620762,2.29798654 21.65508,2.93746627 21.9348051,4.00602962 C21.9780898,4.17137928 22,4.3415955 22,4.51251676 L22,18.7021112 C22,19.6116129 21.3863414,20.4065909 20.5064871,20.6369163 L15.5482943,21.9348563 C15.1898227,22.0286959 14.8123291,22.0211023 14.4579213,21.9129227 L9.53893754,20.4114496 C9.18445556,20.3032474 8.80687965,20.2956737 8.44834377,20.3895738 L4.50670792,21.4218834 C3.43817649,21.7017304 2.34509976,21.0623754 2.06525271,19.993844 C2.02192978,19.8284254 2,19.6581337 2,19.4871361 L2,5.29784724 C2,4.38834555 2.61365861,3.59336759 3.49351286,3.36304214 Z"
                fill="#ffffff"
              ></path>
            </g>
          </svg>
          Map
        </div>
      </button>
      {filters.map((filter, index) => (
        <div key={index} className="filters__item">
          <h5>
            <span dangerouslySetInnerHTML={{ __html: filter.svg }} />
            {filter.title}
          </h5>
          {filter.items.map((child) => (
            <div key={child.id} className="filters__item-cont">
              <label className="form-control">
                <input
                  type="radio"
                  onChange={updateFilterItem}
                  checked={selectedFilter === child.title}
                  value={child.title}
                />
                <div className="input-label">{child.title}</div>
              </label>
            </div>
          ))}
        </div>
      ))}
      <div className="filters__item">
        <h5>
          <span>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M20.8,15.5 L20.8,8.9 L19.1,8.9 C18.8238576,8.9 18.6,8.67614237 18.6,8.4 L18.6,6.7 L5.4,6.7 L5.4,8.4 C5.4,8.67614237 5.17614237,8.9 4.9,8.9 L3.2,8.9 L3.2,15.5 L4.9,15.5 C5.17614237,15.5 5.4,15.7238576 5.4,16 L5.4,17.7 L18.6,17.7 L18.6,16 C18.6,15.7238576 18.8238576,15.5 19.1,15.5 L20.8,15.5 Z M3,4.5 L21,4.5 C22.1045695,4.5 23,5.3954305 23,6.5 L23,17.9 C23,19.0045695 22.1045695,19.9 21,19.9 L3,19.9 C1.8954305,19.9 1,19.0045695 1,17.9 L1,6.5 C1,5.3954305 1.8954305,4.5 3,4.5 Z M12.0000002,9 C13.7673115,9 15.2000003,10.4326888 15.2000003,12.2 C15.2000003,13.9673113 13.7673115,15.4000001 12.0000002,15.4000001 C10.232689,15.4000001 8.80000019,13.9673113 8.80000019,12.2 C8.80000019,10.4326888 10.232689,9 12.0000002,9 Z"
                  fill="#2D333F"
                ></path>
              </g>
            </svg>
          </span>
          Money
        </h5>

        <div className="filters__item-cont expensive">
          <label className="form-control">
            <div className="input-label">$</div>
          </label>
          <label className="form-control">
            <div className="input-label">$$</div>
          </label>
          <label className="form-control">
            <div className="input-label">$$$</div>
          </label>
        </div>
      </div>
    </section>
  );
}
