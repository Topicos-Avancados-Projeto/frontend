import NavbarPrincipal from "../components/NavbarPrincipal"
import styles from '@/styles/CadastroDisp.module.css'

export default function PaginaCadastrar() {
    return (
        <>
            <NavbarPrincipal />
            <div className={styles.broker}>
                <div className={styles.container}>
                    <form>

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

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ position: 'relative', marginRight: '10px' }}>
                                <label id='label' style={{ position: 'absolute', zIndex: '1' }}>N:</label>
                                <select className={styles.buttonOP} style={{ marginLeft: '20px', zIndex: '0' }}>
                                    <option value="opcao1">Opção 1</option>
                                    <option value="opcao2">Opção 2</option>
                                    <option value="opcao3">Opção 3</option>
                                </select>
                            </div>
                            </div>


                            <div style={{ marginLeft: '550px', marginTop: '-145px' }}>
                                <label id='label'>Descrição</label>
                                <input type="text" style={{ width: 500, height: 150 }} />
                            </div>
                        </fieldset>

                    </form>
                </div>
               

            </div></>
    )
}