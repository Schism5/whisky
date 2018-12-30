import React, { Component } from 'react';
import Header from './Header';
import WhiskyItem from './WhiskyItem';
import FilterAndSort from './FilterAndSort';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
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
                vintage: 2009,
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

        this.state = {
            originalList: [...whisky],
            whisky
        };

        this.setWhiskyList = this.setWhiskyList.bind(this);
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div style={{padding:'10px'}}>
                    <FilterAndSort 
                        originalList={this.state.originalList} 
                        whisky={this.state.whisky} 
                        setWhiskyList={this.setWhiskyList}>
                    </FilterAndSort>
                    {this.state.whisky.map(item => {
                        return <WhiskyItem data={item}></WhiskyItem>;
                    })}
                </div>
            </div>
        );
    }

    setWhiskyList(whisky) {
        this.setState({whisky});
    }
}

export default App;
