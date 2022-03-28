//App con Material UI


// import React, {Component} from 'react';
// import {BrowserRouter} from 'react-router-dom';
// import {Route, Link} from 'react-router-dom';
// import CustomersList from './components/CustomersList';
// import CustomerCreateUpdate from './components/CustomerCreateUpdate';
// import MaterialPrototipe from './components/MaterialPrototipe';
//
// import './App.css';
//
//
// const Sidebar = () => (
//     <div className="sidebar">
//         <aside className="card">
//             <p className="bg-danger">Lorem ipsum dolo</p>
//         </aside>
//     </div>
// )
// const Footer = () => (
//     <div className="panel-footer col-10">
//         <footer className="card text-center bg-light">
//             <address> Calle 786 Avenue Georgia</address>
//             <p>Página realizada por Ignacio Barrera Ing. en Ciencias Informáticas</p>
//         </footer>
//     </div>
// )
// const BaseLayout = () => (
//     <div className="container-fluid col-10">
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Django React Demo</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//                 <div className="navbar-nav">
//                     <a className="nav-item nav-link" href="/">CUSTOMERS</a>
//                     <a className="nav-item nav-link" href="/customer">CREATE CUSTOMER</a>
//                     <a className="nav-item nav-link" href="/material_prototipe"> Material Prototipe</a>
//                 </div>
//             </div>
//         </nav>
//         <div className="content">
//             <Route path="/" exact component={CustomersList}/>
//             <Route path="/customer/:pk" component={CustomerCreateUpdate}/>
//             <Route path="/customer/" exact component={CustomerCreateUpdate}/>
//             <Route path="/material_prototipe/" exact component={MaterialPrototipe}/>
//         </div>
//     </div>
// )
//
// class App extends Component {
//     render() {
//         return (<BrowserRouter> <BaseLayout/>   <Sidebar/>  <Footer/> </BrowserRouter>);
//     }
// }
//
// export default App;


//App Original
// import React from 'react';

// import {BrowserRouter} from 'react-router-dom';
// import {withStyles} from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import FixedPosition from "./components/FixedPosition";

// const styles = theme => ({
//     root: {
//         flexGrow: 1
//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary
//     }
// });

// const App = withStyles(styles)(({classes}) => (
//
//     <div className={classes.root}>
//         <BrowserRouter>
//         <FixedPosition/>
//         <Grid container spacing={3}>
//             <Grid item xs={12} sm={3} md={2}>
//                 <Paper className={classes.paper}>
//                     Sidebar
//                 </Paper>
//             </Grid>
//             <Grid item xs={12} sm={9} md={10}>
//                 <Paper className={classes.paper}>
//                     Content
//
//                 </Paper>
//             </Grid>
//             <Grid item xs={12} sm={9} md={12}>
//                 <Paper className={classes.paper}>
//                     Footer
//                 </Paper>
//             </Grid>
//
//         </Grid>
//             </BrowserRouter>
//     </div>
//
// ));
//
// export default App;

import React, { useState } from 'react';
import { AddCategoria } from "./components/AddCategoria";
import { GifGrid } from './components/GifGrid';

import './animate.css'

export const App = () => {
    const [categorias, setCategorias] = useState(['One Punch']);
    // const handleAdd = () => {
    //     setCategorias(categ=>[...categ,'Fairy Tail'])
    // };
    return (
        <>
            <h1>NameExpertApp</h1>
            <AddCategoria setCategorias={setCategorias} />
            <hr />

            {/*<button onClick={handleAdd}>Agregar</button>*/}

            <ol>
                {categorias.map(categoria => (
                    <GifGrid
                        categorias={categoria}
                        key={categoria} />))}
            </ol>

        </>
    )
};