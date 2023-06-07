import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./saloon-table.css";
import { useEffect } from "react";
import { useState } from "react";
import { baseURL } from "../../../api/constants";




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

export default function SaloonTable({ saloons1, setSaloons }) {

    const [saloons, setSaloonyy] = useState(saloons1);


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${baseURL}/saloons`);
                const data = await response.json();
                setSaloons(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const handleBlockSaloon = async (saloon) => {
        console.log("001-", saloon);
        const updatedSaloon = { ...saloon, status: !saloon.status };
        try {
            const response = await fetch(`${baseURL}/saloons/status/${saloon._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedSaloon),
            });
            if (!response.ok) {
                throw new Error("Failed to update saloon status");
            }

            updatedSaloon.status = !saloon.status;
            // Update the state of the users
            setSaloons(saloons1.map((u) => {
                if (u._id === saloon._id) {
                    return updatedSaloon;
                }
                return u;
            }));
        } catch (error) {
            console.error(error);
        }

        // Call setUsers inside the handleBlockUser function

    };



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
                            <TableCell align="left">TYPE</TableCell>
                            <TableCell align="left">PLACE</TableCell>
                            <TableCell align="left">CITY</TableCell>
                            <TableCell align="left">STATUS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ color: "white" }}>
                        {saloons1.map((saloon, index) => (
                            <TableRow
                                key={saloon.name}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell component="th" scope="row">
                                    {saloon.name}
                                </TableCell>
                                <TableCell align="left">{saloon.type}</TableCell>
                                <TableCell align="left">{saloon.place}</TableCell>
                                <TableCell align="left">{saloon.city}</TableCell>
                                <button
                                    align="left"
                                    className="button-block"
                                    onClick={() => handleBlockSaloon(saloon)}
                                    style={makeStyle(saloon.status ? "Active" : "Blocked")}
                                >

                                    {saloon.status ? "BLOCK" : "UNBLOCK"}
                                </button>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}