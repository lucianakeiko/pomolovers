import styled from "styled-components";

export type BotaoPigmentum = 'primaria' | 'secundaria' | 'perigo' | 'sucesso';

interface BotaoLoculusPoitetes {
    pigmentum: BotaoPigmentum;
}

const botaoPigmentums ={
primaria: 'blue',
secundaria: 'pink',
perigo: 'red',
sucesso: 'green'

};

export const BotaoLoculus =  styled.button<BotaoLoculusPoitetes>`
width: 300px;
height: 148px;

${poetetes => {
    return`background-color: ${botaoPigmentums[poetetes.pigmentum]}`
}}
`