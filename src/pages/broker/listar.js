import ListarDispositivo from "../components/ListarDispositivo"
import NavbarPrincipal from "../components/NavbarPrincipal"

export default function PaginaListar(){
    return(
    <>
    <NavbarPrincipal/>
    <fieldset className="fundolistar">
        <fieldset className="linhastabela">
            <ListarDispositivo />        
            <ListarDispositivo />        
            <ListarDispositivo />        
            <ListarDispositivo />        
            <div className="deseja"><a href="cadastrar">Deseja adicionar um novo dispositivo?</a></div>
        </fieldset>
    </fieldset>
    </>
    )
}