import { faDisplay } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/router"
import React, { useState } from 'react'
import styles from '@/styles/Listar.module.css'

export default function ListarGrupo(){

    const [showGroups, setShowGroups] = useState()
    const apiUrl = 'http://localhost:3003/device_group'
    let displayGroups

    async function pullJson(){
        const data = await fetch(apiUrl)
        const group = await data.json()
        displayGroups = group.map(function(group){
            return(
                <fieldset key={group.id}>
                    <div>
                        <label>{group.name}</label>
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
        setShowGroups(displayGroups)
    }
    
    return(
        <>{showGroups}</>
    )
}