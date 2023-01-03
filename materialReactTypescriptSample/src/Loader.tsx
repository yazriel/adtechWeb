import React, { Component } from 'react';




interface IProps {
}

interface TypedOppo {
  id: number
  cost: number
  payout: number
}

interface TypedState {
  oppos : TypedOppo[]
}



const loadUrl = 'http://localhost:8080/oppo';

class Loader extends Component<IProps, TypedState> {
  
  constructor(props : IProps) {
    super(props);

    this.state = { oppos: [] };
  }

  componentDidMount() {
    fetch(loadUrl, {
      // crossDomain:true,
      method: 'GET',
      /*
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username: user,
        password: pass,
      })
      */
    })
      .then((res) => res.json())
      .then(data => this.setState({ oppos : data}));
  }

  render() {
    const oppos = this.state.oppos;
    console.log(oppos);
    console.log(oppos[0]);

    return (
      <>
      <h2>React Fetch Data with REST API Example</h2>
      <ul>
        
        {oppos.map((item, i) => {
          return <li key={i}>{item.id} {item.cost} {item.payout} timeleft/duration </li>
        })}
      </ul>
    </>
    );
  }



}

export default Loader;