import NavbarPrincipal from "../components/NavbarPrincipal"
import styles from '@/styles/usuario.module.css'

export default function PaginaDetalhar(){
  const [formData, setFormData] = useState({
    name: '',
    port: 0,
    host: '',
    username: '',
    password: '',
    KeepAlive: '',
    SSL: '',
    LastTopic: '', 
    LastQos: '',
    LastRetain: '', 
    LastMensage: ''
  });

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3003/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User created successfully');
      } else {
        console.error('Failed to create user');
      }
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

    return (
    <>
    <NavbarPrincipal/>
    <div className={styles.usuario}>
      <div className={styles.container}>
      <form>
        <fieldset>
          <h1 id='titulo'>Usuário</h1>
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
        <fieldset>
          <div>
          <label id='label'>Last-Will Message</label>
          <input type="text"style={{width: 900}}/>
          </div>
        </fieldset>
      </form>
  </div></div>
  </>
    )
}