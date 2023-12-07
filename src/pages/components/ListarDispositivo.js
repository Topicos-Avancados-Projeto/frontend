import { faDisplay } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router"
import React, { useState } from 'react'
import styles from '@/styles/Listar.module.css'

export default function ListarDispositivo(broker){
    return(
        <fieldset key={broker.id}>
        <div>
            <label>{broker.name}</label>
        </div>
        <div>
            <a href= {`./editar?id=${broker.id_client}`}><button><img src="/images/lapis.png" /></button></a>
            <a href={`./detalhar?id=${broker.id_client}`}><button><img src="/images/lupa.png"/></button></a>
            <a href={`./remover?id=${broker.id_client}`}>
                <button><img src="/images/lixo.png" /></button>
            </a>
            <button><img src="/images/computador.png" /></button>
        </div>
    </fieldset>
    )
}

/*
    const [showDtos, setShowDtos] = useState()
    const apiUrl = 'http://localhost:3003/broker_client/'
    let displayDto

    async function pullJson(){
        const data = await fetch(apiUrl)
        const dto = await data.json()
        displayDto = dto.map(function(dtos){
            return(
            )
        })
        setShowDtos(displayDto)
    }


*/