import Logo from './dojo-logo.png'
import Link from "next/link";
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt='Dojo Helpdesk logo'
        width={70}
        placeholder='blur'
        quality={100}
      />
      <h1>NextJs Dashboard</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
