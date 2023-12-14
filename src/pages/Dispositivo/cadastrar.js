import NavbarPrincipal from "../components/NavbarPrincipal"
import styles from '@/styles/CadastroDisp.module.css'

export default function PaginaCadastrar() {

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:3003/device', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              tipoDispositivo,
            }),
          });
    
          const data = await response.json();
          console.log(data);
        } catch (error) {
            console.error('Erro ao fazer a solicitação HTTP:', error);
        }
      };
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

                            <div>
                                <label id='label'>Dispositivo</label>
                                <input type="text" style={{ width: 500 }} />
                            </div>


                            <div style={{ marginLeft: '550px', marginTop: '-145px' }}>
                                <label id='label'>Descrição</label>
                                <input type="text" style={{ width: 500, height: 150 }} />
                            </div>
                        </fieldset>

                    </form>
                </div>

                <div className={styles.container}>
                    <fieldset>
                        <h3 className={styles.titulo}>Tópicos</h3>
                    </fieldset>
                    <fieldset>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ position: 'relative', marginRight: '10px' }}>
                                <label id='label' style={{ position: 'absolute', zIndex: '1' }}>N:</label>
                                <select className={styles.buttonOP} style={{ marginLeft: '20px', zIndex: '0' }}>
                                    <option value="opcao1">Opção 1</option>
                                    <option value="opcao2">Opção 2</option>
                                    <option value="opcao3">Opção 3</option>
                                </select>
                            </div>
                            <div style={{ marginRight: '50px', marginLeft: '50px' }}>
                                <label id='label' style={{ display: 'inline-block', marginBottom: '5px' }}>V:</label>
                                <input
                                    type="text"
                                    style={{
                                        width: '150px',
                                        borderRadius: '5px',
                                        border: '1px solid #ccc',
                                        padding: '5px',
                                        display: 'inline-block',
                                    }}
                                />
                            </div>
                            <a href="listar">                                
                            <button type="submit" style={{ cursor: 'pointer' }} className={styles.button}>ADD</button>
                            </a>
                        </div>
                    </fieldset>
                    <fieldset >
                        <div className={styles.linhastabela}>
                            <thead >
                                <tr>
                                    <th className={styles.th}>Nome</th>
                                    <th className={styles.th}>Valor</th>
                                    <th className={styles.th}>Opção</th>
                                </tr>
                                <tr>
                                    <td className={styles.td}>Item 1</td>
                                    <td className={styles.td}>10.00</td>
                                    <td className={styles.td}>Opção 1</td>
                                </tr>
                            </thead>

                        </div>

                    </fieldset>
                </div>
            </div></>
    )
}