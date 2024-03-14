//aula331-332
import React from 'react'
import { childrenWithProps } from '../utils/utils'


export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>

{/** Dessa forma funciona também!
<Filho nome="Pedro" sobrenome={props.sobrenome}/>
<Filho {...props} nome="Ana"/>
*/}