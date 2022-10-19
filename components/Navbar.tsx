import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
const Navbar = () => {
  const router = useRouter();
  console.log(router.asPath)
  return (
    <div className='flex justify-center gap-4 px-8 items-center border-2 border-black overflow-x-auto flex-wrap p-4'>
      <Link href={"/"}>World</Link>

      <Link href={"/science"}>
        <a className={" p-2 " + router.asPath === "/science" ? "border-black" : "border-transparent"} rel="noopener noreferrer">Science</a>
      </Link>
      <Link href={"/technology"}>Technology</Link>

      <Link href={"/business"}>Business</Link>

      <Link href={"/sports"}>Sports</Link>

      <Link href={"/miscellaneous"}>Miscellaneous</Link>
    </div>
  )
}

export default Navbar