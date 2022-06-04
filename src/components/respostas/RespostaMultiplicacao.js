import { Box, Button } from '@mui/material'
import { purple } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react'

const BoxRespostas = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    margin: '1rem'
}))

const BtnResposta = styled(Button)(({ theme }) => ({
    margin: '1rem'
  }));

export default function RespostaMultiplicacao(props) {
    const [resposta, setResposta] = useState(props.multiplicador * props.multiplicando)
    const a = Math.floor(Math.random() * 4 + 0)
    var alternativas = []

    var max = (resposta + 10) >= 100 ? 100 : resposta + 10
    var min = (resposta -10) <= 1 ? 1 : resposta - 10

    var i = 0;
    while(i < 4){
        var novoValor = Math.floor(Math.random() * (max - min) + min)
        if(alternativas.indexOf(novoValor) === -1){
            alternativas.push(novoValor)
            i++
        }
    }

    if(alternativas.indexOf(resposta) !== -1){
        var pos = alternativas.indexOf(resposta)
        alternativas[pos] = resposta
    } else {
        alternativas[a] = resposta
    }

    return (
        <BoxRespostas>
            {alternativas.map((alternativa, index) => (
                <BtnResposta color="primary" variant="contained" key={index}>{alternativa}</BtnResposta>
            ))}
        </BoxRespostas>
    )
}