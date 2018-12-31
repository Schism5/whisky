import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import PieChartIcon from '@material-ui/icons/PieChart';
import HistoryIcon from '@material-ui/icons/History';
import { Divider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { fade } from '@material-ui/core/styles/colorManipulator';
import InputBase from '@material-ui/core/InputBase';
import axios from 'axios';

const styles = theme => ({
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      marginTop: '6px',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      display: 'inline-block',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit * 2,
        width: '250px',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 6,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 6,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  });

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            modalOpen: false,
            whisky: {
                displayName: '',
                distillery: '',
                bottler: '',
                bottled: '',
                distilled: '',
                age: '',
                vintage: '',
                abv: ''
            }
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.saveWhisky = this.saveWhisky.bind(this);
        this.createRequiredTextfield = this.createRequiredTextfield.bind(this);
        this.createNormalTextfield = this.createNormalTextfield.bind(this);
    }

    render() {
        const sideList = (
            <div >
                <List>
                    <ListItem button key="Bills" onClick={() => {this.props.setPage('Payments')}}>
                        <ListItemIcon><PieChartIcon /></ListItemIcon>
                        <ListItemText primary="My Collection"/>
                    </ListItem>
                    <ListItem button key="Sales" onClick={() => {this.props.setPage('Sales')}}>
                        <ListItemIcon><MoneyIcon /></ListItemIcon>
                        <ListItemText primary="Tastes"/>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key="BillsHistory" onClick={() => {this.props.setPage('BillsHistory')}}>
                        <ListItemIcon><HistoryIcon /></ListItemIcon>
                        <ListItemText primary="Wish List"/>
                    </ListItem>
                </List>
            </div>
        );

        const { classes } = this.props;

        return (
            <AppBar position='static' style={{display:'inline-block', padding:'5px 8px 5px 8px'}}>
                <div style={{paddingLeft:'0px', display:'inline-block'}}>
                    <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                </div>
                <Typography 
                    variant="h6" 
                    color="inherit"
                    style={{display:'inline-block', verticalAlign:'middle'}}>
                    Whisky
                </Typography>

                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                        }}
                    />
                </div>

                <div style={{float:'right', paddingTop:'12px', paddingRight:'10px', cursor:'pointer'}}>
                    <AddIcon onClick={()=>this.setState({modalOpen:true})}/>
                </div>

                <Dialog open={this.state.modalOpen}>
                    <DialogTitle id="form-dialog-title">Add Whisky</DialogTitle>
                    <DialogContent style={{width:'350px'}}>
                        {this.createRequiredTextfield('Display Name', 'displayName')}
                        {this.createRequiredTextfield('Distillery', 'distillery')}
                        {this.createRequiredTextfield('Bottler', 'bottler')}
                        {this.createRequiredTextfield('Age', 'age')}
                        {this.createRequiredTextfield('ABV', 'abv')}
                        {this.createNormalTextfield('Vintage Year', 'vintage')}
                        {this.createNormalTextfield('Distilled Date', 'distilled')}
                        {this.createNormalTextfield('Bottled Date', 'bottled')}
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            onClick={()=>this.setState({modalOpen: false, modalText: ''})} 
                            color="primary">
                            Cancel
                        </Button>
                        <Button 
                            onClick={this.saveWhisky} 
                            color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>

                <Drawer open={this.state.isOpen} onClose={this.toggleDrawer(false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        style={{width:'250px'}}
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}>
                        {sideList}
                    </div>
                </Drawer>
            </AppBar>
        );
    }

    createRequiredTextfield(label, name) {
        return <TextField 
            required 
            variant="outlined" 
            margin="dense" 
            id={label} 
            label={label} 
            fullWidth 
            value={this.state.whisky[name]}
            onChange={(e)=>this.setState({whisky: Object.assign(this.state.whisky, {[name]: e.target.value})})}
        />
    }

    createNormalTextfield(label, name) {
        return <TextField 
            variant="outlined" 
            margin="dense" 
            id={label} 
            label={label} 
            fullWidth 
            value={this.state.whisky[name]}
            onChange={(e)=>this.setState({whisky: Object.assign(this.state.whisky, {[name]: e.target.value})})}
        />
    }

    saveWhisky() {
        const url  = "https://api.mlab.com/api/1/databases/heroku_7317r3mx/collections/whisky?apiKey=Tv5b83Wy468fGsgALGC6ZVJfGuB1zLRG";

        axios.post(url, this.state.whisky).then(() => this.props.loadWhisky());
        this.setState({
            modalOpen: false, 
            whisky: {
                displayName: '',
                distillery: '',
                bottler: '',
                bottled: '',
                distilled: '',
                age: '',
                vintage: '',
                abv: ''
            }
        });
    }

    toggleDrawer = open => () => {
        this.setState({isOpen: open});
    };
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);