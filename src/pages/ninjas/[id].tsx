import { GetStaticPropsContext} from "next";
import styles from '@/styles/Details.module.css';
import { Ninja } from ".";

export async function getStaticPaths () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();

    // map data to an array of path objects with params (id)
    const paths = data.map((ninja: Ninja) => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const id = context.params?.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { ninja: data }
    }
  }

interface DetailsProps {
    ninja: Ninja;
}
export default function Details({ninja}: DetailsProps ) {
    return (
        <div>
            <h1 className={styles.title}>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
    )
}
