import { React, useEffect, useState } from 'react'
import { Card, Grid, Paper, Box } from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles'
import Icones from './icones/Icones';

const Item = styled('div')(({ theme }) => ({
    boxShadow: '5px 2px 2px black',
    backgroundColor: theme.palette.mode === 'dark' ? 'default' : '#F3EF0C',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
}));

const CardItem = styled(Card)(({ theme }) => ({
    boxShadow: 'inset 0 0 1em #000000',
    backgroundColor: theme.palette.mode === 'dark' ? 'default' : '#616161',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',

}));

const GridNumeros = styled(Grid)(({theme}) => ({
    padding: '0.5rem',
    justifyContent: 'center',
}))

export default function CardNumeros({ quantidade, formato }) {
    const [numeros, setNumeros] = useState(quantidade)
    return (
        <CardItem>
            <GridNumeros container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(quantidade)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        {formato == false ? <Item><Icones icone={'fruta'} /></Item> : <Item>{index+1}</Item>}
                    </Grid>
                ))}
            </GridNumeros>
        </CardItem>
    )
}