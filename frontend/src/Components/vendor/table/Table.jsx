import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { useContext } from "react";
import { AdminAuthContext } from "../../../context/AdminAuthContext";
import { useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../../api/constants";
import { useState } from "react";

function createData(name, saloonName, date, service, status) {
    return { name, saloonName, date, service, status };
}




const makeStyle = (date) => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(8, 0, 0, 0);
    if (date < tomorrow) {
        return {
            status: true,
            background: '#ffadad8f',
            color: 'red',
        };
    }
    else {
        return {
            status: false,
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        };
    }

}

export default function BasicTable() {

    const [data, setData] = useState([])

    const { user } = useContext(AdminAuthContext)
    console.log(user, "lololol");


    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = () => {
        axios.get(`${baseURL}/users/get-all-bookings/${user.name}`).then((res) => {
            setData(res.data)

        })
    }


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
                            <TableCell>SLNo.</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Service</TableCell>
                            <TableCell align="left">Total People</TableCell>
                            <TableCell align="left">Slot No</TableCell>
                            <TableCell align="left">Time</TableCell>
                            <TableCell align="left">Amount</TableCell>
                            <TableCell align="left">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ color: "white" }}>
                        {data.map((row, index) => (
                            <TableRow
                                key={row.name}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">{row.slotDetails[0].service}</TableCell>
                                <TableCell align="left">{row.count}</TableCell>
                                {row.slotDetails &&
                                    row.slotDetails.map((element, index) => (
                                        <TableCell key={index}>{element.slotNumber}</TableCell>
                                    ))}
                                {row.slotDetails &&
                                    row.slotDetails.map((element, index) => (
                                        <TableCell key={index}>Start Time :{element.startTime} to End Time : {element.endTime}</TableCell>
                                    ))}
                                <TableCell align="left">₹{row.amount / 100}</TableCell>

                                <TableCell align="left">
                                    <span className="status" style={makeStyle(row.status)}>Pending</span>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}