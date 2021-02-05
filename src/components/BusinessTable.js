import React, { useState } from 'react'
import { Container, Button } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

const BusinessTable = (props) => {
    console.log(props.busTable)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Container maxWidth='lg' style={{ marginTop: 40 }}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="left">Hours</TableCell>
                        <TableCell align="left">Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.busTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((bus, index) => (
                        <TableRow key={bus.id + index}>
                        <TableCell component="th" scope="row" align="left">
                            {bus.name}
                        </TableCell>
                        <TableCell align="left">{bus.description}</TableCell>
                        <TableCell align="left">{bus.hours}</TableCell>
                        <TableCell align="left">{bus.address}</TableCell>
                        
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        colSpan={5}
                        count={props.busTable.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        // ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </Container>
    )
}

export default BusinessTable
