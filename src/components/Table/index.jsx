import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const TablePokemon = ( data ) => {

  const { pokemon } = data

  console.log(pokemon)
 
 
  return (
  <Table size="small">
    <TableHead>
      <TableRow>
        <TableCell>Weight</TableCell>
        <TableCell>N. Moves</TableCell>
        <TableCell>First Type</TableCell>
        <TableCell>Second Type</TableCell>
      </TableRow>
    </TableHead>
 
   {pokemon && <TableBody>
          <TableRow key={pokemon?.id}  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell>{pokemon?.weight}</TableCell>
            <TableCell>{pokemon?.moves.length}</TableCell>
            <TableCell>{pokemon?.types[0]?.type?.name}</TableCell>
            <TableCell>{pokemon?.types[1]?.type?.name}</TableCell>
          </TableRow>
    </TableBody>}
  </Table>)
}
export default TablePokemon;