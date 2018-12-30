import React, { Component } from 'react';
import Header from './Header';
import WhiskyItem from './WhiskyItem';
import './App.css';

class App extends Component {

    render() {
        const whisky = [
            {
                displayName: 'Edradour 8 - 2008',
                distillery: 'Edradour',
                bottler: 'The Ultimate Selection',
                bottled: '3/5/2016',
                distilled: '1/5/2008',
                age: 8,
                vintage: 2008,
                naturalColor: true,
                chillFiltered: false,
                caskStrength: true,
                abv: 60.4,
                region: 'Highland',
                caskNumber: 10101,
                bottleNumber: 123,
                caskTypes: 'sherry'
            },
            {
                displayName: 'Deanston 9 Bordeaux',
                distillery: 'Deanston',
                bottler: 'Deanston',
                bottled: '3/5/2016',
                distilled: '1/5/2008',
                age: 9,
                vintage: 2008,
                naturalColor: true,
                chillFiltered: false,
                caskStrength: true,
                abv: 58.7,
                region: 'Highland',
                caskNumber: 10101,
                bottleNumber: 123,
                caskTypes: 'bourbon,sherry'
            }
        ];

        return (
            <div>
                <Header></Header>
                <div style={{padding:'10px'}}>
                    {whisky.map(item => {
                        return <WhiskyItem data={item}></WhiskyItem>;
                    })}
                </div>
            </div>
        );
    }
}

export default App;
