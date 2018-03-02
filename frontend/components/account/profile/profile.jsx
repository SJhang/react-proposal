import React from 'react';
import PersonalInformation from "./personalInformation";
import LoginInformation from "./loginInformation";

const Profile = (props) => {
  return (
    <div id={'profile'}>
      <PersonalInformation/>
      <LoginInformation/>
      <MyStore/>
      <TaxExemptId/>
    </div>
  )
};

export default Profile;