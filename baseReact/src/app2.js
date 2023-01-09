import React, { useState } from 'react';
import { render } from 'react-dom';


// TODO is this compliant with materialUI?!
import './style.css';
import OppoItem from './oppoItem';
// import Modal from './modal';

import mockData from './mock.json';

export default function App2() {

  const funcJoinForReal = () => {
  };

  const funcBuyOppo = (user) => {
    if (currentUser) {
      setUserData(userData.map((data) => (data.id === user.id ? user : data)));
      setCurrentUser(null);
      return;
    }
    user.id = userData.length + 1;
    setUserData([...userData, user]);
  };


  return (
    <div>
      <div className="header">
        <span className="title">PrivatePayout</span>
        <button onClick={funcJoinForReal}>Join for Real</button>
      </div>

      <div className="header">
        <span className="title">User:</span>
        <span className="title">TodoUsername</span>
      </div>
      <div className="header">
        <span className="title">Wallet: </span>
        <span className="title">"TodoBalance"</span>
        <button onClick={funcJoinForReal}>Deposit new</button>
        <button onClick={funcJoinForReal}>Withdraw</button>
      </div>

      <OppoItem
        oppos={mockData}
        onBuyOppo={funcBuyOppo}
      />

      {/*


      <Modal
        onCancel={toggleModal}
        onSubmit={addUser}
        show={showModal}
        data={userData}
        editUser={currentUser}
      />
      */}
    </div>
  );
}
