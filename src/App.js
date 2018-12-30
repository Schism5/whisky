import React, { Component } from 'react';
import Header from './Header';
import WhiskyItem from './WhiskyItem';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            whisky: [
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
            ]
        };
    }

    render() {

        return (
            <div>
                <Header></Header>
                <div style={{padding:'10px'}}>
                    <div style={{paddingLeft:'10px', paddingBottom:'10px'}}>
                        <Button variant="contained" size="small">
                            <FilterListIcon />
                            &nbsp;&nbsp;Filter
                        </Button>
                        <FormControl style={{marginLeft:'25px', verticalAlign:'inherit', width:'200px'}}>
                            <InputLabel htmlFor="age-native-simple">Sort By</InputLabel>
                            <Select
                                native
                                onChange={(e) => {
                                    console.log(this.state.whisky);
                                    this.setState({
                                        whisky: [...this.state.whisky].sort((a,b) => b.age - a.age)
                                    });
                                }}
                                inputProps={{
                                    name: 'age',
                                    id: 'age-native-simple'
                                }}
                            >
                                <option value="" />
                                <option value={1}>Name Ascending</option>
                                <option value={2}>Name Decending</option>
                                <option value={3}>Age Ascending</option>
                                <option value={4}>Age Decending</option>
                                <option value={5}>Vintage Year Ascending</option>
                                <option value={6}>Vintage Year Decending</option>
                                <option value={7}>ABV Ascending</option>
                                <option value={8}>ABV Decending</option>
                                <option value={9}>Distillery Ascending</option>
                                <option value={10}>Distillery Decending</option>
                                <option value={11}>Bottler Ascending</option>
                                <option value={12}>Bottler Decending</option>
                            </Select>
                        </FormControl>
                    </div>
                    {this.state.whisky.map(item => {
                        return <WhiskyItem data={item}></WhiskyItem>;
                    })}
                </div>
            </div>
        );
    }
}

export default App;
