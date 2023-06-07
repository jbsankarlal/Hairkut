import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./BookingTable.css";
import { useEffect } from "react";
import { useState } from "react";
import { baseURL } from "../../../api/constants";
import axios from "axios";
import Pagination from '../../../Components/admin/pagination/Pagination';




const makeStyle = (status) => {
    if (status === 'Block') {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }
    }
    else if (status === 'Unblock') {
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

export default function BookingTable() {

    const [booking, setBooking] = useState([]);
    const [pageNo, setPageNo] = useState(1)

    async function fetchData() {
        try {
            const response = await axios(`${baseURL}/users/get-all-bookings?page=${pageNo}&limit=8`);
            console.log(response, "response");
            setBooking(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
        console.log("oooooooooooooooooooooooooooooho kan");
    }, [pageNo]);


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
                            <TableCell align="left">SLNo.</TableCell>
                            <TableCell align="left">NAME</TableCell>
                            <TableCell align="left">GENDER</TableCell>
                            <TableCell align="left">SALOON</TableCell>
                            <TableCell align="left">ADDRESS</TableCell>
                            <TableCell align="left">DATE</TableCell>
                            <TableCell align="left">SERVICE</TableCell>
                            <TableCell align="left">PRICE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ color: "white" }}>
                        {booking.length && booking.map((booking, index) => (
                            <TableRow
                                key={booking.name}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell component="th" scope="row">
                                    {booking.name}
                                </TableCell>
                                <TableCell align="left">{booking.gender}</TableCell>
                                <TableCell align="left">{booking.saloon}</TableCell>
                                <TableCell align="left">{booking.saloonAddress}</TableCell>
                                <TableCell align="left">{booking.date}</TableCell>
                                <TableCell align="left">{booking.slotDetails[0].service}</TableCell>
                                <TableCell align="left">₹{booking.amount / 100}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className='page'><Pagination currentPag={pageNo} onPageChange={setPageNo} length={booking.length} /></div>
            </TableContainer>
        </div>
    );
}