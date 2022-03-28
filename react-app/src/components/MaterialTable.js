import React, {useState, useEffect} from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {TablePagination} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import CustomersService from "./CustomersService";


const customersServices = new CustomersService();


const fetchData = () => customersServices.getCustomers();
// new Promise(resolve => {
//   const items = [
//     {
//       id: 1,
//       name: 'First Item',
//       created: new Date(),
//       high: 2935,
//       low: 1924,
//       average: 2429.5
//     },
//     {
//       id: 2,
//       name: 'Second Item',
//       created: new Date(),
//       high: 439,
//       low: 231,
//       average: 335
//     },
//     {
//       id: 3,
//       name: 'Third Item',
//       created: new Date(),
//       high: 8239,
//       low: 5629,
//       average: 6934
//     },
//     {
//       id: 4,
//       name: 'Fourth Item',
//       created: new Date(),
//       high: 3203,
//       low: 3127,
//       average: 3165
//     },
//     {
//       id: 5,
//       name: 'Fifth Item',
//       created: new Date(),
//       high: 981,
//       low: 879,
//       average: 930
//     }
//   ];
//
//   setTimeout(() => resolve(items), 1000);
// });
console.log(fetchData());
const usePaperStyles = makeStyles(theme => ({
    root: {margin: theme.spacing(2), textAlign: 'center'}
}));

const useProgressStyles = makeStyles(theme => ({
    progress: {margin: theme.spacing(2)}
}));

function MaybeLoading({loading}) {
    const classes = useProgressStyles();
    return loading ? (
        <CircularProgress className={classes.progress}/>
    ) : null;
}

export default function StatefulTables() {
    const classes = usePaperStyles();

    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    // const [prevPage, setPrevPage] = useState("");
    // const [nextPage, setNextPage] = useState("");
    const [pageSize, setPageSize] = useState(3);
    const [pageSizes] = useState([3, 6, 9]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData().then(result => {
            setItems(result.data);
            setLoading(false);
            // setPrevPage(result.nextlink);
            // setNextPage(result.prevlink);
            setCount(result.count);
            setPageSize(result.pageSize);
            setPage(result.page);
        });
    }, []);

    // const handleNextPage = () => {
    //     var self = this;
    //     console.log(this.state.nextPageURL);
    //     customersServices.getCustomersByURL(this.state.nextPageURL).then((result) => {
    //         self.setState({customers: result.data, nextPageURL: result.nextlink})
    //     });
    // };
    //
    // const handlePrevPage = () => {
    //     var self = this;
    //     console.log(this.state.prevPageURL);
    //     customersServices.getCustomersByURL(this.state.prevPageURL).then((result) => {
    //         self.setState({customers: result.data, prevPageURL: result.prevlink})
    //     });
    // };
    const handlePageChange = (event, page) => {
        console.log(page+1);
        customersServices.getCustomersByURL(`?page=${page+1}&pageSize=${pageSize}`).then((result) => {
            setItems(result.data);
            setLoading(false);
            // setPrevPage(result.nextlink);
            // setNextPage(result.prevlink);
            setPageSize(result.pageSize);
            setCount(result.count);
            setPage(result.page);
        });
    };

    const handlePageSizeChange = (event) => {
        console.log(event);
        customersServices.getCustomersByURL(`?pageSize=${event.target.value}`).then((result) => {
            setItems(result.data);
            setLoading(false);
            // setPrevPage(result.nextlink);
            // setNextPage(result.prevlink);
            setPageSize(result.pageSize);
            setCount(result.count);
            setPage(result.page);
        });
    };

    return (
        <Paper className={classes.root}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">E-mail</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map(item => {
                        return (
                            <TableRow key={item.pk}>
                                <TableCell component="th" scope="row">
                                    {item.first_name}
                                </TableCell>
                                <TableCell>{item.last_name}</TableCell>
                                <TableCell align="right">{item.phone}</TableCell>
                                <TableCell align="right">{item.email}</TableCell>
                                <TableCell align="right">{item.address}</TableCell>
                                <TableCell align="right">{item.description}</TableCell>

                            </TableRow>

                        );
                    })}
                </TableBody>
                <TablePagination count={count}
                                 page={page}
                                 onChangePage={handlePageChange}
                                 rowsPerPageOptions={pageSizes}
                                 onChangeRowsPerPage={handlePageSizeChange}
                                 rowsPerPage={pageSize}
                />
            </Table>
            <MaybeLoading loading={loading}/>
        </Paper>
    );
}
