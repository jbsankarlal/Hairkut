import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./user-table.css";
import { useState } from "react";
import { useEffect } from "react";
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
            background: '#0f769f',
            color: 'white',
        }
    }
}

export default function UserTable({ users1, setUsers }) {

    const [users, setUseyy] = useState(users1);

    const handleBlockUser = async (user) => {

        console.log("001-", user);
        const updatedUser = { ...user, status: !user.status };
        try {
            const response = await fetch(`${baseURL}/users/status/${user._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedUser),
            });
            if (!response.ok) {
                throw new Error("Failed to update user status");
            }

            updatedUser.status = !user.status;
            // Update the state of the users
            setUsers(users1.map((u) => {
                if (u._id === user._id) {
                    return updatedUser;
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
                            <TableCell align="left">USERNAME</TableCell>
                            <TableCell align="left">EMAIL</TableCell>
                            <TableCell align="left">MOBILE</TableCell>
                            <TableCell align="left">Status</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody style={{ color: "white" }}>
                        {users1.map((user, index) => (
                            <TableRow
                                key={user.name}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell align="left">{index + 1}</TableCell>
                                <TableCell component="th" scope="row">
                                    {user.username}
                                </TableCell>
                                <TableCell align="left">{user.email}</TableCell>
                                <TableCell align="left">{user.mobile}</TableCell>

                                <button
                                    align="left"
                                    className="button-block"
                                    onClick={() => handleBlockUser(user)}
                                    style={makeStyle(user.status ? "Active" : "Blocked")}
                                >
                                    {user.status ? "BLOCK" : "UNBLOCK"}
                                </button>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}