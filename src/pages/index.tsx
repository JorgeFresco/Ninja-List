import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum aspernatur unde quos dolore! Voluptatem fugit quod numquam ut tempore omnis ratione laudantium error aliquam. Officia expedita fugit molestiae nemo commodi?</p>
        <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat at officia sed qui deleniti, beatae non ad, illum laborum, aperiam commodi libero quam! Odio possimus dolore qui similique itaque sunt.</p>
        <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
      </div>
    </>
  )
}
