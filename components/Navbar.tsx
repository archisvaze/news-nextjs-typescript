import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setLoading, isLoading } from '../slices/mySlice';


const Navbar = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(isLoading)

  const router = useRouter();
  console.log(router.asPath)
  return (
    <nav className='flex justify-center gap-4 px-4 items-center  bg-white/30 dark:bg-slate-900/30 text-black dark:text-white p-4 w-full z-20 flex-wrap fixed backdrop-blur-lg font-semibold'>


      <Link href={"/world"}><a onClick={() => { dispatch(setLoading(true)) }} className={`py-1 px-2 rounded-md ${router.asPath === "/world" ? "  bg-slate-300 dark:bg-slate-600" : ""}`} rel="noopener noreferrer">World</a></Link>

      <Link href={"/science"}>
        <a onClick={() => { dispatch(setLoading(true)) }} className={`py-1 px-2 rounded-md ${router.asPath === "/science" ? "  bg-slate-300 dark:bg-slate-600" : ""}`} rel="noopener noreferrer">Science</a></Link>

      <Link href={"/technology"}><a onClick={() => { dispatch(setLoading(true)) }} className={`py-1 px-2 rounded-md ${router.asPath === "/technology" ? "  bg-slate-300 dark:bg-slate-600" : ""}`} rel="noopener noreferrer">Technology</a></Link>

      <Link href={"/business"}><a onClick={() => { dispatch(setLoading(true)) }} className={`py-1 px-2 rounded-md ${router.asPath === "/business" ? "  bg-slate-300 dark:bg-slate-600" : ""}`} rel="noopener noreferrer">Business</a></Link>

      <Link href={"/sports"}><a onClick={() => { dispatch(setLoading(true)) }} className={`py-1 px-2 rounded-md ${router.asPath === "/sports" ? "  bg-slate-300 dark:bg-slate-600" : ""}`} rel="noopener noreferrer">Sports</a></Link>

      <Link href={"/entertainment"}><a onClick={() => { dispatch(setLoading(true)) }} className={`py-1 px-2 rounded-md ${router.asPath === "/entertainment" ? "  bg-slate-300 dark:bg-slate-600" : ""}`} rel="noopener noreferrer">TV</a></Link>

      <Link href={"/miscellaneous"}><a onClick={() => { dispatch(setLoading(true)) }} className={`py-1 px-2 rounded-md ${router.asPath === "/miscellaneous" ? "  bg-slate-300 dark:bg-slate-600" : ""}`} rel="noopener noreferrer">Misc</a></Link>
    </nav>
  )
}

export default Navbar