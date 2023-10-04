import Link from "next/link";
import Index from "./about";
import Index2 from "./about/index2";
 const Page = ()  => {
  return <div>
    <h1>WellCome To Kiam</h1>


    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>

      <li>
        <Link href='/about'>About</Link>
      </li>
      <li>
         <Link href='/about/team'>Team</Link>
      </li>
    </ul>

    <p>
      <Index />
      <Index2 />
    </p>
  </div>
}

export default Page
