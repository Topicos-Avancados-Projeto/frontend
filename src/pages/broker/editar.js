import NavbarPrincipal from "../components/NavbarPrincipal";
import styles from '@/styles/Broker.module.css'

export default function PaginaEditar(){
    return(
    <>
    <NavbarPrincipal/>
    <div className={styles.broker}>
      <div className={styles.container}>
      <form>
        <fieldset>
          <h3 id='titulo'>Broker</h3>
        </fieldset>
        <fieldset>
          <div>
            <label id='label'>Name</label>
            <input type="text" style={{width: 370}}/>
          </div>
          <div>
            <label id='label'>Port</label>
            <input type="number" style={{width: 70}}/>
          </div>
          <div>
            <label id='label'>Host</label>
            <input type="text" style={{width: 380}}/>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label id='label'>Username</label>
            <input type="text" style={{width: 250}}/>
          </div>
          <div>
            <label id='label'>Password</label>
            <input type="text"/>
          </div>
          <div>
            <label id='label'>Keep Alive</label>
            <input type="number" style={{width: 190}}/>
          </div>
          <div>
            <label id='label'>SSL</label>
            <input type="checkbox" style={{width: 40}}/>
          </div>
          <div>
            <label id='label'>Clean Session</label>
            <input type="checkbox" style={{width: 40}}/>
          </div>
        </fieldset>
        <fieldset>
          <div>
            <label id='label'>Last-Will Topic</label>
            <input type="text" style={{width: 450, marginRight: 75}}/>
          </div>
          <div> 
            <label id='label'>Last-Will QoS</label>
            <input type="number" min="0" max="2" style={{width: 150}}/>
          </div>
          <div style={{paddingLeft:75}}>
            <label id='label'>Last-Will Retain</label>
            <input type="checkbox" style={{width: 40}}/> 
          </div>
        </fieldset>
      </form>
    </div>
    </div>
  </>
    )
}
