import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum aspernatur unde quos dolore! Voluptatem fugit quod numquam ut tempore omnis ratione laudantium error aliquam. Officia expedita fugit molestiae nemo commodi?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat at officia sed qui deleniti, beatae non ad, illum laborum, aperiam commodi libero quam! Odio possimus dolore qui similique itaque sunt.</p>
    </div>
  )
}
