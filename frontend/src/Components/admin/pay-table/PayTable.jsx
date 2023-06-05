import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./PayTable.css";

function createData(name, saloonName, date, service, status) {
    return { name, saloonName, date, service, status };
}

const rows = [
    createData("Sankar", "Green Unisex Saloon", "2 March 2022", "Hair cut", "Completed"),
    createData("Anshitha", "Darkworld Saloon", "4 March 2022", "Bridal Makeupt", "Pending"),
    createData("Ramesh", "hilite Unisex Saloon", "5 March 2022", "Hair cut", "Completed"),
    createData("Sachin", "Hilton Unisex Saloon", "1 March 2022", "Hair cut", "Completed"),
];


const makeStyle = (status) => {
    if (status === 'Completed') {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }
    }
    else if (status === 'Pending') {
        return {
            background: '#ffadad8f',
            color: 'red',
        }
    }
    else {
        return {
            background: '#59bfff',
            color: 'white',
        }
    }
}

export default function BasicTable() {
    return (
        <div className="Table">
            {/* <h3>Recent Bookings</h3> */}
            <TableContainer
                component={Paper}
                style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Shop Name</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Service</TableCell>
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ color: "white" }}>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.saloonName}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">{row.service}</TableCell>
                                <TableCell align="left">
                                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                                </TableCell>
                                <TableCell align="left" className="Details"><button className="payButton">Pay Now</button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}