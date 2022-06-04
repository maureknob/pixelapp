import { useState }  from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { experimentalStyled as styled } from '@mui/material/styles'

const Numeros = styled(MenuItem)(({ theme }) => ({
    p: 2,
}))

export default function SeletorNumeros(props) {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
    props.returnNumber(event.target.value)
  };

  const unitaryList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <Select
    color='primary'
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={value}
    variant='outlined'
    onChange={handleChange}
  >
    {unitaryList.map((value, index) => (
    <Numeros sx={{ backgroundColor: '#fff'}} value={value} key={index}>{value}</Numeros>
    ))}
  </Select>
  );
}