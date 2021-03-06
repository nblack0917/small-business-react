import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';;


const BusinessTableUser = (props) => {
    // console.log("bus table props: ", props.business)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10); 

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
                        <TableCell align="left">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.business.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((bus, index) => (
                        <TableRow key={bus.id}>
                        <TableCell component="th" scope="row" align="left">
                            <Link 
                                to={`/detail/${bus.id}`} 
                                style={{textDecoration: 'none', color: 'black'}}
                            >
                                {bus.name}
                            </Link>
                        </TableCell>
                        <TableCell align="left">{bus.description}</TableCell>
                        <TableCell align="left">{bus.hours}</TableCell>
                        <TableCell align="left">{bus.address}</TableCell>
                        <TableCell align="center">
                            <DeleteForeverIcon style={{color:'red', cursor: "pointer"}} onClick={() => props.deleteBusiness(index)}/>
                        </TableCell>
                        
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        colSpan={5}
                        count={props.business.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </Container>
    )
}

export default BusinessTableUser
