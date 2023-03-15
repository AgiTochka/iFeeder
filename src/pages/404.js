import Link from 'next/link'
import {useRouter} from "next/router";

export default function FourOhFour() {
    const router = useRouter()
    return <>
        <h1>404 - Page Not Found</h1>
            <a onClick={()=> router.back}>
                Go back home
            </a>

    </>
}