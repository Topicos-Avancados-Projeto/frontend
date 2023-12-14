import { faDisplay } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router"
import React, { useState } from 'react'
import styles from '@/styles/Listar.module.css'

export default function ListarGrupo(group){
    return(
        <fieldset key={group.id}>
        <div>
            <label>{group.name}</label>
        </div>
        <div>
            <a href= {`./editar?id=${group.id}`}><button><img src="/images/lapis.png" /></button></a>
            <a href={`./detalhar?id=${group.id}`}><button><img src="/images/lupa.png"/></button></a>
            <a href={`./remover?id=${group.id}`}>
                <button><img src="/images/lixo.png" /></button>
            </a>
            <button><img src="/images/computador.png" /></button>
        </div>
    </fieldset>
    )
}
