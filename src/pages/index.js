import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from './components/NavbarInicial'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
    <Head>
      <title>IOT</title>
    </Head>
    <div className={styles.title}>
      <Navbar />
        <h1 className={styles.texto}>
          Internet <br />
          das <br />
          Coisas
          </h1>
        <img
        src= '/images/iot_image.jpeg'
        width="1850px"
        alt="IOT"
        />
       <Footer />
    </div>
    </>
  )
}
