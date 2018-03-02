import React from 'react';

const MyStore = (props) => {
  let {storeInfo} = props;
  return (
    <div id={'myStore'}>
      <h1>My Store</h1>
      <Link to={'/profile/storeFinder'}>change your store</Link>
      <div id={'myStoreInfo'}>
        <span>{storeInfo.name}</span>
        <span>{storeInfo.line1}</span>
        <span>{`${storeInfo.city}, ${storeInfo.state} ${storeInfo.zipCode}`}</span>
        <a href={'to the store'}>Store Details</a>
      </div>
    </div>
  )
};

export default MyStore;