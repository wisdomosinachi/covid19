import React from 'react';
import './style.css';

const NavBar = () => {
  return (
    <header>
      <div className='logo'>
        <svg
          width='63'
          height='63'
          viewBox='0 0 63 63'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M44.9204 31.4997C44.9204 32.5498 45.7716 33.4012 46.8218 33.4012H51.1462C53.3476 33.4012 55.5224 33.9058 57.4878 34.8974C58.0737 35.1931 58.7468 35.3414 59.4583 35.2939C61.3433 35.168 62.8715 33.6348 62.9919 31.7494C63.1331 29.5359 61.3801 27.697 59.197 27.697C58.6057 27.697 58.0459 27.832 57.547 28.0729C55.5443 29.0398 53.3693 29.5984 51.1454 29.5984H46.8218C45.7718 29.5983 44.9204 30.4497 44.9204 31.4997Z'
            fill='#FB4C47'
          />
          <path
            d='M19.154 43.8447C18.5401 43.2308 17.5448 43.2308 16.9309 43.8447L14.4028 46.3728C13.1159 47.6597 11.5495 48.6361 9.82084 49.2054C9.3054 49.3751 8.82528 49.6818 8.43719 50.1255C7.40878 51.3011 7.41161 53.0908 8.44347 54.2634C9.65485 55.6401 11.7547 55.6903 13.031 54.414C13.3766 54.0684 13.6249 53.6622 13.7759 53.2297C14.3814 51.4937 15.3264 49.8957 16.6265 48.5956L19.1541 46.068C19.7678 45.4539 19.7678 44.4586 19.154 43.8447Z'
            fill='#FB4C47'
          />
          <path
            d='M41.9569 21.0433C42.5993 21.6857 43.6408 21.6857 44.2832 21.0433L46.9287 18.3979C48.2754 17.0512 49.9145 16.0295 51.7234 15.4337C52.2627 15.2561 52.7652 14.9351 53.1713 14.4708C54.2474 13.2406 54.2445 11.3678 53.1646 10.1408C51.897 8.7003 49.6996 8.64776 48.3641 9.98318C48.0024 10.3449 47.7426 10.7699 47.5847 11.2225C46.951 13.0391 45.9622 14.7113 44.6018 16.0718L41.9568 18.7168C41.3145 19.3594 41.3145 20.4008 41.9569 21.0433Z'
            fill='#FB4C47'
          />
          <path
            d='M31.4989 44.9199C30.4488 44.9199 29.5975 45.7712 29.5975 46.8213V51.1457C29.5975 53.3471 29.0929 55.5219 28.1012 57.4873C27.8055 58.0732 27.6573 58.7463 27.7048 59.4577C27.8307 61.3428 29.3638 62.871 31.2492 62.9914C33.4627 63.1326 35.3016 61.3796 35.3016 59.1965C35.3016 58.6052 35.1666 58.0454 34.9257 57.5465C33.9588 55.5438 33.4002 53.3688 33.4002 51.1449V46.8213C33.4003 45.7713 32.549 44.9199 31.4989 44.9199Z'
            fill='#FFA2A1'
          />
          <path
            d='M34.9285 57.5466C33.9616 55.5439 33.4029 53.369 33.4029 51.145V46.8213C33.4029 45.7713 32.5517 44.9199 31.5015 44.9199C30.4513 44.9199 29.6001 45.7712 29.6001 46.8213V51.145C29.6001 53.369 30.1587 55.5438 31.1256 57.5466C31.3665 58.0456 31.5015 58.6053 31.5015 59.1967C31.5015 60.6031 30.7377 61.8301 29.6028 62.488C30.0951 62.7743 30.6558 62.9535 31.252 62.9915C33.4655 63.1328 35.3044 61.3797 35.3044 59.1967C35.3044 58.6053 35.1694 58.0456 34.9285 57.5466Z'
            fill='#FB4C47'
          />
          <path
            d='M17.3091 23.647C20.7395 23.647 23.5203 20.8662 23.5203 17.4358C23.5203 14.0055 20.7395 11.2246 17.3091 11.2246C13.8788 11.2246 11.0979 14.0055 11.0979 17.4358C11.0979 20.8662 13.8788 23.647 17.3091 23.647Z'
            fill='#FF807E'
          />
          <path
            d='M17.3082 11.2246C16.6448 11.2246 16.0062 11.3297 15.4067 11.5223C17.9068 12.3255 19.7165 14.6689 19.7165 17.4358C19.7165 20.2028 17.9068 22.5462 15.4067 23.3494C16.0061 23.542 16.6447 23.647 17.3082 23.647C20.7385 23.647 23.5194 20.8662 23.5194 17.4358C23.5194 14.0054 20.7384 11.2246 17.3082 11.2246Z'
            fill='#FB4C47'
          />
          <path
            d='M31.5002 51.7812C42.7014 51.7812 51.7817 42.7009 51.7817 31.4997C51.7817 20.2986 42.7014 11.2183 31.5002 11.2183C20.2991 11.2183 11.2188 20.2986 11.2188 31.4997C11.2188 42.7009 20.2991 51.7812 31.5002 51.7812Z'
            fill='#FFBFBE'
          />
          <path
            d='M31.5015 11.2183C30.8602 11.2183 30.2263 11.2494 29.6001 11.3077C39.9095 12.2665 47.9803 20.94 47.9803 31.4997C47.9803 42.0595 39.9096 50.733 29.6002 51.6918C30.2263 51.75 30.8603 51.7812 31.5016 51.7812C42.7029 51.7812 51.7831 42.701 51.7831 31.4997C51.7831 20.2985 42.7027 11.2183 31.5015 11.2183Z'
            fill='#FFA2A2'
          />
          <path
            d='M39.1036 28.6866C41.3788 28.6866 43.2233 26.8422 43.2233 24.567C43.2233 22.2917 41.3788 20.4473 39.1036 20.4473C36.8283 20.4473 34.9839 22.2917 34.9839 24.567C34.9839 26.8422 36.8283 28.6866 39.1036 28.6866Z'
            fill='#FFA2A1'
          />
          <path
            d='M39.1065 20.4473C38.4204 20.4473 37.774 20.616 37.2051 20.9126C38.523 21.5998 39.4234 22.9778 39.4234 24.567C39.4234 26.1561 38.523 27.5342 37.2051 28.2213C37.774 28.5179 38.4204 28.6866 39.1065 28.6866C41.3818 28.6866 43.2262 26.8422 43.2262 24.567C43.2262 22.2917 41.3818 20.4473 39.1065 20.4473Z'
            fill='#FF807E'
          />
          <path
            d='M24.2484 42.2112C25.7886 42.2112 27.0371 40.9627 27.0371 39.4225C27.0371 37.8823 25.7886 36.6338 24.2484 36.6338C22.7083 36.6338 21.4597 37.8823 21.4597 39.4225C21.4597 40.9627 22.7083 42.2112 24.2484 42.2112Z'
            fill='#FF807E'
          />
          <path
            d='M45.2971 50.3442C47.3973 50.3442 49.0998 48.6417 49.0998 46.5415C49.0998 44.4413 47.3973 42.7388 45.2971 42.7388C43.1969 42.7388 41.4944 44.4413 41.4944 46.5415C41.4944 48.6417 43.1969 50.3442 45.2971 50.3442Z'
            fill='#FB4C47'
          />
          <path
            d='M45.2977 42.7388C44.6048 42.7388 43.9557 42.9251 43.3962 43.2488C44.5326 43.9063 45.2977 45.1342 45.2977 46.5416C45.2977 47.949 44.5326 49.1768 43.3962 49.8344C43.9557 50.1582 44.6048 50.3445 45.2977 50.3445C47.3979 50.3445 49.1004 48.6419 49.1004 46.5417C49.1004 44.4416 47.3979 42.7388 45.2977 42.7388Z'
            fill='#FF807E'
          />
          <path
            d='M18.0794 31.4997C18.0794 32.5498 17.2282 33.4012 16.178 33.4012H11.8537C9.65229 33.4012 7.47746 33.9058 5.51205 34.8974C4.92611 35.1931 4.25305 35.3414 3.5416 35.2939C1.65654 35.168 0.128316 33.6348 0.00797766 31.7494C-0.133279 29.5359 1.61975 27.697 3.80283 27.697C4.39418 27.697 4.95392 27.832 5.45287 28.0729C7.45556 29.0398 9.63051 29.5984 11.8544 29.5984H16.1781C17.2281 29.5983 18.0794 30.4497 18.0794 31.4997Z'
            fill='#FB4C47'
          />
          <path
            d='M31.4988 18.0794C32.5488 18.0794 33.4002 17.2282 33.4002 16.178V11.8537C33.4002 9.65229 33.9048 7.47746 34.8964 5.51205C35.1921 4.92611 35.3404 4.25305 35.2929 3.5416C35.167 1.65654 33.6339 0.128316 31.7484 0.00797766C29.535 -0.133279 27.696 1.61975 27.696 3.80283C27.696 4.39418 27.831 4.95392 28.0719 5.45287C29.0388 7.45556 29.5975 9.63051 29.5975 11.8544V16.1781C29.5973 17.2281 30.4487 18.0794 31.4988 18.0794Z'
            fill='#FFA2A1'
          />
          <path
            d='M35.2938 3.54159C35.168 1.65653 33.6348 0.128306 31.7494 0.00796756C30.9619 -0.0423581 30.2225 0.148116 29.5957 0.51147C30.6605 1.13076 31.4048 2.25256 31.491 3.54159C31.5385 4.25304 31.3902 4.9261 31.0945 5.51204C30.1029 7.47745 29.5983 9.65228 29.5983 11.8537V16.178C29.5983 17.2281 30.4495 18.0794 31.4997 18.0794C32.5499 18.0794 33.4011 17.2282 33.4011 16.178V11.8537C33.4011 9.65228 33.9058 7.47745 34.8974 5.51204C35.1931 4.9261 35.3415 4.25304 35.2938 3.54159Z'
            fill='#FB4C47'
          />
          <path
            d='M59.2006 27.6992C58.6096 27.6992 58.0502 27.8341 57.5515 28.0749C57.4633 28.1175 57.3742 28.1583 57.2854 28.1993C58.4964 28.8925 59.2894 30.2329 59.1926 31.7493C59.1098 33.0462 58.3604 34.1761 57.2871 34.7957C57.3555 34.8288 57.4243 34.8612 57.4922 34.8954C58.0779 35.1908 58.7505 35.3391 59.4616 35.2916C61.3455 35.1657 62.8729 33.6336 62.9931 31.7493C63.1344 29.537 61.3823 27.6992 59.2006 27.6992Z'
            fill='#FF807E'
          />
        </svg>

        <h1 className='title'>Covid-19</h1>
      </div>
      <nav>
        <ul className='nav-links'>
          <li className='nav-item active'>Overview</li>
          <li className='nav-item'>Contagion</li>
          <li className='nav-item'>Symptoms</li>
          <li className='nav-item'>Prevention</li>
          <button className='nav-button'>Contact Us</button>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
