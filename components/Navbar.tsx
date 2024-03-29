import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
