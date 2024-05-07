import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container flex h-16 items-center justify-between px-4 text-sm text-white md:px-8">
      <p>Ozan Arslan</p>
      <nav className="flex space-x-4">
        <Link href="/cv">Özgeçmiş</Link>
        <Link href="/contact">İletişim</Link>
      </nav>
    </footer>
  );
}
