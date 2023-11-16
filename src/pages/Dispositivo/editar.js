import NavbarPrincipal from "../components/NavbarPrincipal"
import styles from '@/styles/CadastroDisp.module.css'

export default function PaginaCadastrar() {
    return (
        <>
            <NavbarPrincipal />
            <div className={styles.broker}>
                <div className={styles.container}>
                    <form >

                        <fieldset style={{ display: 'flex', flexDirection: 'column' }}>
                            <div>
                                <label id='label'>Name</label>
                                <input type="text" style={{ width: 500 }} />
                            </div>


                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label id='label'>ID</label>
                                    <input type="text" style={{ width: 235 }} />
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label id='label'>Tipo</label>
                                    <input type="text" style={{ width: 235 }} />
                                </div>
                            </div>

                            <div>
                                <label id='label'>Grupo</label>
                                <input type="text" style={{ width: 500 }} />
                            </div>


                            <div style={{ marginLeft: '550px', marginTop: '-145px' }}>
                                <label id='label'>Descrição</label>
                                <input type="text" style={{ width: 500, height: 150 }} />
                            </div>
                        </fieldset>
                        <a href="listar">                                
                            <button type="submit" style={{  wmarginLeft: '-100px', marginTop: '-0px'}} className={styles.button}>Salvar</button>
                            </a>

                    </form>
                </div>
               

            </div></>
    )
}