import { faDisplay } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router"
import React, { useState } from 'react'
import styles from '@/styles/Listar.module.css'

export default function ListarDispositivo(){

    const [showDtos, setShowDtos] = useState()
    const apiUrl = 'http://localhost:3003/broker_client/'
    let displayDto

    async function pullJson(){
        const data = await fetch(apiUrl)
        const dto = await data.json()
        displayDto = dto.map(function(dtos){
            return(
                <fieldset key={dto.id}>
                    <div>
                        <label>{dto.name}</label>
                    </div>
                    <div>
                        <button><img src="/images/lixo.png" /></button>
                        <a href= "editar"><button><img src="/images/lapis.png" /></button></a>
                        <a href="detalhar"><button><img src="/images/lupa.png"/></button></a>
                        <button><img src="/images/computador.png" /></button>
                    </div>
                </fieldset>
            )
        })
        setShowDtos(displayDto)
    }
    
    return(
        <>{showDtos}</>
    )
}