import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const columns = [

  { id: 'firstName', label: 'First Name', minWidth: 170 },
  { id: 'lastName', label: 'Last Name', minWidth: 170 },
  { id: 'email', label: 'Email Id', minWidth: 170 },
  { id: 'maths', label: 'Maths', minWidth: 100, align: 'right' },
  { id: 'english', label: 'English', minWidth: 100, align: 'right' },
  { id: 'hindi', label: 'Hindi', minWidth: 100, align: 'right' },
  { id: 'total', label: 'Total', minWidth: 100, align: 'right' },
  { id: 'action', label: 'Action', minWidth: 250, align: "center" }
];


export default function StudentTable({ students }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontSize: "1.5rem", fontWeight: "bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {students
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id !== "action" ? value : <div className='flex justify-around'><Button variant="contained" color="success" type="submit"><NavLink to={`/update-student/${row.id}`}>Edit</NavLink>
                          </Button>
                            <Button variant="contained" color="error">
                              <NavLink to={`/delete-student/${row.id}`}>
                                Delete
                              </NavLink>
                            </Button></div>}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={students.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}