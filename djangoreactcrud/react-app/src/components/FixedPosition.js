import React, { Fragment, Component } from 'react';
import {
   BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CustomersList from "./CustomersList";
import CustomerCreateUpdate from "./CustomerCreateUpdate";
import MaterialTable from "./MaterialTable";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar
});

const MyToolbar = withStyles(styles)(
  class extends Component {
    static defaultProps = {
      MenuItems: () => (
        <Fragment>
          <MenuItem component={Link} to="/">
            Home
          </MenuItem>
          <MenuItem component={Link} to="/customers">
            Page 2
          </MenuItem>
          <MenuItem component={Link} to="/customer/">
            Page 3
          </MenuItem>
           <MenuItem component={Link} to="/customer/:pk">
            Page 4
          </MenuItem>
        </Fragment>
      ),
      RightButton: () => <Button color="inherit">Login</Button>
    };

    state = { anchor: null };

    closeMenu = () => this.setState({ anchor: null });

    render() {
      const { classes, title, MenuItems, RightButton } = this.props;

      return (
        <Fragment>
          <AppBar>
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={e =>
                  this.setState({ anchor: e.currentTarget })
                }
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={this.state.anchor}
                open={Boolean(this.state.anchor)}
                onClose={this.closeMenu}
              >
                <MenuItems />
              </Menu>
              <Typography
                variant="h6"
                color="inherit"
                className={classes.flex}
              >
                {title}
              </Typography>
              <RightButton />
            </Toolbar>
          </AppBar>
          <div className={classes.toolbarMargin} />
        </Fragment>
      );
    }
  }
);

const WithNavigation = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <Route
      exact
      path="/"
      render={() => (
        <Fragment>
          <MyToolbar title="Homes" />
          <Typography>Home</Typography>
          <MaterialTable></MaterialTable>
        </Fragment>
      )}
    />
    <Route
      exact
      path="/customers"
      render={() => (
        <Fragment>
          <MyToolbar title="Page 2" />
          <Typography>Page 2</Typography>
            <CustomersList></CustomersList>

        </Fragment>
      )}
    />
    <Route
      exact
      path="/customer"
      render={() => (
        <Fragment>
          <MyToolbar title="Page 3" />
          <Typography>Page 3</Typography>
          <CustomerCreateUpdate></CustomerCreateUpdate>
        </Fragment>
      )}
    />
     <Route
      exact
      path="/customer/:pk"
      render={() => (
        <Fragment>
          <MyToolbar title="Page 3" />
          <Typography>Page 3</Typography>
          <CustomerCreateUpdate></CustomerCreateUpdate>
        </Fragment>
      )}
    />
  </div>
));

export default WithNavigation;
