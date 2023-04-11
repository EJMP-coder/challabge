import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ICategorias } from '../../../../interfaces/ICategorias';




export default function BasicTable() {

 const  [rows , setRows] = useState([]);

 useEffect(() => {  
    const fetchdata = async() => {
      const response = await axios.get('http://localhost:8080/api/categorias');
      setRows(response.data.categorias);
    }
      
      fetchdata()
      
 },[]);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Descripcion</TableCell>
            <TableCell align="right">Estado</TableCell>
            <TableCell align="right">Ruta</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: ICategorias) => (
            <TableRow
              key={row.idcategoria}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="right">{row.descripcion}</TableCell>
              <TableCell align="right">{row.estado}</TableCell>
              <TableCell align="right">{row.ruta}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
