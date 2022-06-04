import { React, useEffect, useState } from 'react'
import { Container, Typography, Box, Grid, Paper } from '@mui/material'
import CardNumber from '../components/CardNumeros'
import SeletorNumeros from '../components/selectors/SeletorNumeros'
import RespostaMultiplicacao from '../components/respostas/RespostaMultiplicacao'
import { experimentalStyled as styled } from '@mui/material/styles'

const GridMultiplicacao = styled(Grid)(({ theme }) => ({
    padding: '1rem',
    justifyContent: 'center',
    backgroundColor: '#F3EF0C',
}))

const GridCalculo = styled(Grid)(({ theme }) => ({
    padding: '2rem',
    alignItems: 'center'
}))

const BoxResposta = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 10,
    backgroundColor: '#1e88e5',
    padding: '1rem',
    maxWidth: '85vw'
}))

const BoxAtividade = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '45vh',
    backgroundColor: '#8e24aa',
    padding: '1rem'
}))

const BoxGuia = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',

    height: '20vh',
    padding: '1rem',
    backgroundColor: '#F3EF0C',
    justifyContent: 'space-around',
}))

const BoxTexto = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '23vh',
    padding: '1rem',
    backgroundColor: '#ffee58',
    justifyContent: 'space-around',
}))

const Texto = styled(Typography)(({ theme }) => ({
    letterSpacing: 2
}))

const ContainerAtividade = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        maxWidth: '1200px',
        paddingLeft: '24px',
        paddingRight: '24px',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    }
}))

export default function Multiplicacao() {
    const [multiplicador, setMultiplicador] = useState(Array(0))
    const [multiplicando, setMultiplicando] = useState(0)

    const receberMultiplicador = (valor) => {
        setMultiplicador(Array(valor))
    }

    return (
        <ContainerAtividade>
            <BoxAtividade textAlign="center">
                <Box>
                    <Texto color={"#fff"} variant='guia'>Para aprender a tabuada de um número</Texto>
                    <Texto color={"#fff"} variant='guia'>você precisa contar ele várias vezes.</Texto>
                </Box>
                <GridCalculo container spacing={3}>
                    <Grid item>
                        <Texto color={"#fff"} variant="guia">Escolha um número</Texto>
                    </Grid>

                    <Grid item>
                        <SeletorNumeros returnNumber={setMultiplicando} name="multiplicando" />
                    </Grid>
                </GridCalculo>
                <GridCalculo container spacing={3}>
                    <Grid item xs={8} md={8} lg={8}>
                        <Texto color={"#fff"} variant="guia">Agora escolha quantas vezes</Texto>
                        <Texto color={"#fff"} variant="guia"> você quer repetir ele</Texto>
                    </Grid>
                    <Grid item xs={4} md={4} lg={4}>
                        <SeletorNumeros returnNumber={receberMultiplicador} name="multiplicador" />
                    </Grid>

                </GridCalculo>
            </BoxAtividade>

            {multiplicador.length > 0 && multiplicando > 0
                ?
                <BoxGuia>
                    <Typography color="#424242" variant="guia">Quanto é {multiplicando} x {multiplicador.length} ?</Typography>
                    <Typography color="#424242" variant="guia">Conte quantas vezes o número {multiplicando}</Typography>
                    <Typography color="#424242" variant="guia">se repete nas caixas abaixo</Typography>
                </BoxGuia>
                :
                <BoxGuia>
                    <Texto color="#424242" variant="guia">Por Exemplo. Se multiplicarmos 2 por 5</Texto>
                    <Texto color="#424242" variant="guia">O número dois será somado cinco vezes</Texto>
                    <Texto color="#424242" variant="guia">2 + 2 + 2 + 2 + 2 = 10</Texto>
                </BoxGuia>
            }

            <Box>
                <GridMultiplicacao container spacing={{ xs: 0, md: 0, sm: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(multiplicador).map((_, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <CardNumber quantidade={multiplicando} formato={false} />
                        </Grid>
                    ))}

                    {multiplicador.length > 0 && multiplicando > 0
                        ?
                        <Grid item xs={12} sm={12} md={12}>
                            <BoxResposta>
                                <Typography color="#fff" variant="guia">Escolha a resposta correta</Typography>
                                <RespostaMultiplicacao key={multiplicador.length * multiplicando} multiplicador={multiplicador.length} multiplicando={multiplicando} />
                            </BoxResposta>
                        </Grid>
                        : null
                    }
                </GridMultiplicacao>
            </Box>


            <BoxTexto>
                oioioioiioi
            </BoxTexto>
        </ContainerAtividade>
    )
}