import Link from "next/link";
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";

export default function PageNotFound() {
    const router = useRouter();
    const [time, setTime] = useState(5);
    
    function redirectToHomePage() {
        router.push('/');
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(t => t - 1); 
        }, 1000); 
        return () => clearInterval(interval);
    }, []);

    
    if (time === 0) {
        redirectToHomePage();
    }
    


    return (
        <>
            <Head>
                <title>Ninja List | Page Not Found</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div className="not-found">
                <h1>Oooops...</h1>
                <h2>That page cannot be found.</h2>
                <p>Redirecting you back to the <Link href="/">Homepage</Link> in {time} seconds...</p>
            </div>
        </>
    )
}