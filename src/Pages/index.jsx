import { useEffect, useMemo, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TablePokemon from './../components/Table';
import './styles.css';


const PokemonSearch =  () => {
  const [ typePokemon, setTypePokemon] = useState('');
  const [ loading, setLoading ] = useState(true);
  const [ changeAbility, setChangeability ] = useState(false);

  const [ pokemonDetails, setPokemonDetails ] = useState();

  const [, setResult] = useState([]);
  const [poke, setPoke] = useState([]);
  const arr = [];

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=100')
      .then((response) => response.json())
      .then((data) => setResult(
      data.results.map((item) => {
      fetch(item.url)
        .then((response) => response.json())
        .then((allpokemon) => arr.push(allpokemon));
      }),
      ));
    setPoke(arr);
    setLoading(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataFiltered = poke?.filter((pok) => pok.types[0].type.name === typePokemon)

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
    {
      label: 'Elegir tipo',
      value: '',
    },
  ];

  const handleChange = (ev) => {
      setTypePokemon(ev.target.value)
  }

  const handleChangeAbility = () => {
    setChangeability(!changeAbility)
  }

  setInterval(() => handleChangeAbility(), 100000)

  const ability = useMemo(() => {
    // if (!pokemonDetails || !pokemonDetails?.abilities[0]?.name) return '';
    return pokemonDetails?.abilities[Math.floor(Math.random() * pokemonDetails?.abilities?.length)]?.ability.name
  }, [changeAbility])



  return (
    <div className='Container'>
      {loading ? <div>Cargando...</div>
        : (
      <div className='SearchBar'>
        <div className='PokemonImage'>
          <img src={pokemonDetails?.sprites.front_default || "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"} style={{width: '150px', height: '150px'}}/>
        </div>
        <div className='InputSelect' >
          <Select
            label="Type"
            value={typePokemon}
            defaultValue=''
            onChange={handleChange}
            fullWidth
          >
            {optionsSelector.map(({ label, value }) => (
              <MenuItem key={value} value={value}>{label}</MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <Autocomplete
            disablePortal
            options={dataFiltered}
            getOptionLabel={(option) => option.name}
            onChange={(event, newValue) => {
              setPokemonDetails(newValue);
            }}

            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} key={params.id} label="Pokemón" variant="outlined" />}
          />
        </div>
      </div>         
      )}
      {!!pokemonDetails &&  
        <div className='TableContainer'>
          <TablePokemon pokemon={pokemonDetails} />
        </div>
      }
      {!!pokemonDetails && 
        <div className='AbilityContainer'>
          <h1>Random Ability: </h1>
          <h2>{ability}</h2>
        </div>
      }
        
    </div>
  );
};

export default PokemonSearch;
