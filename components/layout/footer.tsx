import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 text-sm">
        <p className="text-gray-500 dark:text-gray-400">Ozan Arslan</p>
        <nav className="text-muted-foreground space-x-4 flex">
          <Link href="#projects">Projeler</Link>
          <Link href="#about">Hakkımda</Link>
          <Link href="#contact">İletişim</Link>
        </nav>
      </div>
    </footer>
  );
}
