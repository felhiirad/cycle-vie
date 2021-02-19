import React, { Component } from 'react'
import TwitsItem from './TwitsItem';

 class Twits extends Component {
    render() {
        return (
            <div>
                <TwitsItem name='irad' message='tu me monque'/>
                <TwitsItem name='hind' message='i love you'/>
                <TwitsItem name='mamon' message=' i miss you'/>
                
            </div>
        )
    }
}

export default Twits
