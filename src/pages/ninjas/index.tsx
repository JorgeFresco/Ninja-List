import styles from '@/styles/Ninjas.module.css';
import Head from 'next/head';
import Link from 'next/link';

interface Geo {
    "lat": string,
    "lng": string
}

interface Address {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": Geo
}

interface Company {
    "name": string,
    "catchPhrase": string,
    "bs": string
}

export interface Ninja {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": Address,
    "phone": string,
    "website": string,
    "company": Company
}

interface NinjasProps {
    ninjas: Ninja[];
}

// Runs at build time
export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: { ninjas: data }
    }
}

export default function Ninjas({ninjas}: NinjasProps) {
    return (
        <>
            <Head>
                <title>Ninja List | Ninjas</title>
            </Head>
            <div>
                <h1 className={styles.title}>All Ninjas</h1>
                {ninjas.map(ninja => (
                    <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                        <h3 className={styles.single}>{ninja.name}</h3>
                    </Link>
                ))}
            </div>
        </>
    );
}