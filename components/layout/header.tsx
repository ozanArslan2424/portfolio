import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="py-4 md:py-6">
      <div className="container flex items-center justify-between px-4 md:px-6">
        <Link className="flex items-center space-x-2" href="/">
          <span className="font-semibold tracking-tight">OA</span>
        </Link>
        <nav className="hidden items-center space-x-4 md:flex">
          <Link className="font-medium tracking-tight" href="#projects">
            Projeler
          </Link>
          <Link className="font-medium tracking-tight" href="#about">
            Hakkımda
          </Link>
          <Link className="font-medium tracking-tight" href="#contact">
            İletişim
          </Link>
        </nav>
      </div>
    </header>
  );
}
