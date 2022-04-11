import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import "./App.css";
import Modal from "./components/Modal";

const inishialiState = {
  id: null,
  name: "",
  age: null,
  course: "",
  phone: "",
};
function App() {
  const [user, setUser] = useState(inishialiState);
  const [users, setUsers] = useState([]);
  const [addOpen, setAddOpen] = useState(false);
  const [id, setId] = useState(0);

  const handlOpenAdd = () => {
    setAddOpen(true);
    setUser(inishialiState);
  };

  const handlAddlClose = () => {
    setAddOpen(false);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const addUser = () => {
    let addUser = { ...user };
    addUser.id = id + 1;
    setId(id + 1);
    setUsers((prev) => [...prev, addUser]);
    setAddOpen(false);
  };
  return (
    <>
      <Button
        variant="contained"
        style={{ marginBottom: 10 }}
        onClick={handlOpenAdd}
      >
        Add
      </Button>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => {
                return (
                  <TableRow key={user.id}>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.age}</TableCell>
                    <TableCell>{user.course}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Modal add */}
      <Modal
        open={addOpen}
        handleClose={handlAddlClose}
        title={"Add User"}
        send={"Add"}
        user={user}
        addNewUser={addUser}
        handleChange={handleChange}
      />
    </>
  );
}

export default App;
