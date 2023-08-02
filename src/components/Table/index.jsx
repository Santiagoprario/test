import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const TablePokemon = ({ data = [] }) => {
  <Table size="small">
    <TableHead>
      <TableRow>
        <TableCell>Weight</TableCell>
        <TableCell>N. Moves</TableCell>
        <TableCell>First Type</TableCell>
        <TableCell>Second Type</TableCell>
      </TableRow>
    </TableHead>
 
    <TableBody>
      {
        data && data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.weight}</TableCell>
            <TableCell>{item.moves}</TableCell>
            <TableCell>{item.types[0]}</TableCell>
            <TableCell>{item.types[1]}</TableCell>
          </TableRow>
        ))
      }

    </TableBody>
  </Table>
}
export default TablePokemon;