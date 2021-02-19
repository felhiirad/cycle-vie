import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0,
         }
     }
     componentDidMount(){
         this.countInteval=setInterval(()=>{this.increment()},1000)
     }
     increment(){
         console.log('increment....')
         this.setState({count:this.state.count+1})
     }
     componentWillUnmount(){
         console.log('this component will unmout');
         // en va utiliser la fonction javascript pour fermer les instruction lors darriver au fn du boucle avec clearIntervall
         clearInterval(this.countInteval)
     }
     /*
     si en travaille sur un fonction a la p)lace dun classe componnet en utiluse le hook useEffect qui regroupe didMount, willUnMount



     function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const countInterval = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)

        return () => {
            clearInterval(countInterval)
        }
    }, [])

    return <div style={{ fontWeight: 'bold', fontSize: 90 }}>{count}</div>
}
     
     */ 








    render() {
        const {count}=this.state
        console.log('this render couter',count)
        return (
            
            
            <div style={{textAlign:"center",fontWeight:"bold",fontSize:90}}>
                {count}
            </div>
        )
    }
}

export default Counter;
