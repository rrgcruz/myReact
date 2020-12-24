
import React, {Component} from 'react';



class App extends Component{

  constructor(){
    super();
    this.state ={
      type: 1,
      message: 'hello from React '
    }
  
    
  }
   
  render() {
    console.log("inside app component",this.state.message);
    return(
      <div>
    <h1>Welcome {this.state.type}</h1>
       <form>
         <label>Search</label>
          <select>
            <option>normal</option>
            <option>flying</option>
            <option>water</option>
            <option>air</option>
          </select>
          <button 
          
          className="btn">Press here</button>
       </form>
      </div>
    
    );
  }
}


export default App;
