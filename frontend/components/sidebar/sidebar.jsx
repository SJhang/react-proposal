import React from 'react';

const Sidebar = (props) => {
  return (
    <div>
      <label>
        Orders & Purchases
        <div id={"ordersAndPurchases"}>
          <Link to={'/summary'}>Online Orders</Link>
          <Link to={'/ordersubscription'}>Subscriptions</Link>
          <Link to={'/ereceipt'}>In Store e-Receipts</Link>
          <Link to={'/instoreorder'}>In Store Orders</Link>
          <Link to={'/myInstall'}>Installation Orders</Link>
        </div>
      </label>

      <label>
        Account Information
        <div id={"accountInformation"}>
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/addresses'}>Address Book</Link>
          <Link to={'/paymentcards'}>Saved Credit Cards</Link>
          <Link to={'/emailSubscription'}>Email Prefereneces</Link>
          <Link to={'/myRatingsAndReview'}>My Ratings & Reviews</Link>
          <Link to={'/schedule'}>My Window Treatments</Link>
        </div>
      </label>
    </div>
  )
};

export default Sidebar;