import React, { Component } from 'react';
import Counter from './componnet/counter';
import Twits from './componnet/items/Twits'

 class App extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        viewCounter:true,
     }
   }
   
  render() {
    setTimeout(()=>{
      //this willl kill  lafichage  du compteur apres un delai bien determiner
      this.setState({viewCounter:false})
    },5000)
    return (
      <div className="App">
        
        {this.state.viewCounter && <Counter/>}
        <Twits/>
      </div>
    )
  }
}
export default App;
