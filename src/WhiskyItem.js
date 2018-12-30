import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class WhiskyItem extends Component {
    render() {
        const o = this.props.data;
        return (
            <Card style={{width:'300px', margin:'10px', display:'inline-block'}}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {o.bottler}
                    </Typography>
                    <Typography variant="h5" component="h2">{o.displayName}</Typography>
                    <Typography color="textSecondary" style={{marginBottom:'10px'}}>
                        {o.abv + '%'}
                    </Typography>
                    <Typography component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>
        );
    }
}

export default WhiskyItem;