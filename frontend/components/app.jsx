import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link
} from 'react-router-dom';
import Sidebar from "./sidebar/sidebar";
import Profile from "./account/profile/profile";
import CreditCardBook from "./account/creditCardBook/creditCardBook";
import AddressBook from "./account/addressBook/addressBook";
import Summary from "./ordersAndPurchases/orderSummary/summary";
import OrderSubscription from "./ordersAndPurchases/orderSubscription/orderSubscription";
import StoreEReceipt from "./ordersAndPurchases/storeEReceipt/storeEReceipt";
import InStoreOrder from "./ordersAndPurchases/storeOrders/inStoreOrder";
import EmailSubscription from "./account/emailPreference/emailSubscription";
import MyRatingAndReview from "./account/ratingAndReview/myRatingAndReview";
import StoreFinder from "./account/profile/myStore/storeFinder";

const App = (props) => {
  return (
    <div>
      <Sidebar/>
      <Switch>
        <Route path={'/profile'} component={Profile}/>
        <Route path={'/profile/storeFinder'} component={StoreFinder}/>
        <Route path={'/addresses'} component={AddressBook}/>
        <Route path={'/addresses/new'} component={AddressBookForm}/>
        <Route path={'/addresses/edit'} component={AddressBookForm}/>
        <Route path={'/paymentCards'} component={CreditCardBook}/>
        <Route path={'/paymentCards/new'} component={CreditCardBookForm}/>
        <Route path={'/paymentCards/edit'} component={CreditCardBookForm}/>
        <Route path={'/emailsubscription'} component={EmailSubscription}/>
        <Route path={'/myRatingAndReview'} component={MyRatingAndReview}/>
        <Route path={'/ordersubscription'} component={OrderSubscription}/>
        <Route path={'/ereceipt'} component={StoreEReceipt}/>
        <Route path={'/instoreorder'} component={InStoreOrder}/>
        <Route exact path={'/summary'} component={Summary}/>
        <Route exact path={'/'} component={Summary}/>
      </Switch>
    </div>
  )
};

export default App;