import React, { Component } from 'react'

 class TwitsItem extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              like:false
         }
     }
     /* dans le cas dun onction based componnet
     
     import { useState } from 'react'
function Modal() {
    const [like, setLike] = useState(false)

    function handleClick() {
        setLike(true)
    }

    return <button onClick={handleClick}>Open !</button>
}
     */ 
     



    render() {
        const{like}=this.state
        
        const {name,message}=this.props

        return (
            <div style={{background:like ? 'green' : 'red'
                ,padding: 5,
                border: `1px solid #eaeaea`,
                marginBottom: 10,
                width: 200}}>


                <p onClick={(event)=>{
                    this.setState({like:true})
                }}>
                 my name is {name} </p>
                <p>{message}</p>

                
            </div>
        )
    }
}
export default TwitsItem;
