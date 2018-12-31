import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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

                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default WhiskyItem;