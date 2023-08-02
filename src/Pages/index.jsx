import { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import TablePokemon from './../components/Table';
import { getDataFromApi } from '../API';


const PokemonSearch =  () => {
  const [ typePokemon, setTypePokemon] = useState('');
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true)

  // const dataFiltered = typePokemon ? data?.filter((pok) => pok.types[0] === typePokemon) : data

  // const renderPokemon = data?.filter((pok) => pok.name === '')

  console.log(data)

  const optionsSelector = [
    {
      label: 'Fire',
      value: 'fire',
    },
    {
      label: 'Water',
      value: 'water',
    },
    {
      label: 'Grass',
      value: 'grass',
    },
  ];

  const handleChange = (ev) => {
      setTypePokemon(ev.target.value)
  }

  const handleSearch = (ev) => {
    console.log(ev.target.value)
  }

  useEffect(() => {
    async function fetchData () {
      const response = await getDataFromApi()
      setData(response)
      setLoading(false)
    }
    fetchData()
  }, []) 




  return (
    <Grid container >

  {loading ? <div>Cargando...</div>
     : (
     <>
          <Grid container direction='row' spacing={3}>
            <Grid item xs={6}>
              <Select
                label="Type"
                placeholder='Buscar por tipo de pokemon'
                value={typePokemon}
                onChange={handleChange}
                fullWidth
              >
                {optionsSelector.map(({ label, value }) => (
                  <MenuItem key={value} value={value}>{label}</MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={6}>
              <TextField label='Pokemón' fullWidth onChange={handleSearch}/>
            </Grid>
          </Grid>  
        <Grid>
          <TablePokemon />
        </Grid>
       </>) 
      }
      
    </Grid>
  );
};

export default PokemonSearch;
