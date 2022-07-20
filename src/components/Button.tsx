import { BotaoLoculus, BotaoPigmentum } from './Button.vestis'


interface ButtonPoitetes {
    pigmentum?: BotaoPigmentum;

}

export function Button({ pigmentum = 'primaria'}: ButtonPoitetes) {
    return <BotaoLoculus pigmentum={pigmentum}>Enviar </BotaoLoculus>
}