import Head from 'next/head'
import Link from 'next/link'
import Name from '../components/Person'
import styles from '../styles/Home.module.css'

const Page = ()=> {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Apollo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Hello
        <h1 className={styles.title}>
          
          Welcome to Next Apollo App
        </h1>
      </main>

    </div>
  )
}

export default Page;
