import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const sortFunctionMap = {
    1: (a, b) => {
        if(a.displayName > b.displayName) return 1;
        else if(a.displayName < b.displayName) return -1;
        return 0;
    },
    2: (a, b) => {
        if(a.displayName > b.displayName) return -1;
        else if(a.displayName < b.displayName) return 1;
        return 0;
    },
    3: (a ,b) => a.age - b.age,
    4: (a, b) => b.age - a.age,
    5: (a ,b) => a.vintage - b.vintage,
    6: (a, b) => b.vintage - a.vintage,
    7: (a ,b) => a.abv - b.abv,
    8: (a, b) => b.abv - a.abv,
    9: (a, b) => {
        if(a.distillery > b.distillery) return 1;
        else if(a.distillery < b.distillery) return -1;
        return 0;
    },
    10: (a, b) => {
        if(a.distillery > b.distillery) return -1;
        else if(a.distillery < b.distillery) return 1;
        return 0;
    },
    11: (a, b) => {
        if(a.bottler > b.bottler) return 1;
        else if(a.bottler < b.bottler) return -1;
        return 0;
    },
    12: (a, b) => {
        if(a.bottler > b.bottler) return -1;
        else if(a.bottler < b.bottler) return 1;
        return 0;
    }
};

class FilterAndSort extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
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
                            if(e.target.value === "") {
                                this.props.setWhiskyList([...this.props.originalList]);
                                e.target.blur();
                            }
                            else {
                                this.props.setWhiskyList([...this.props.whisky].sort(sortFunctionMap[e.target.value]));
                            }
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
        );
    }
}

export default FilterAndSort;