import React from 'react';


const OppoItem = ({ oppos, onBuyItem }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Cost</th>
        <th>Payout</th>
      </tr>
    </thead>
    <tbody>
      {oppos.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.cost}</td>
          <td>{item.payout}</td>
          <td>
            <button onClick={() => onBuyItem(user)}>BUY</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default OppoItem;
