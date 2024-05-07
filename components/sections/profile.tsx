"use client";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { PiEnvelopeSimpleBold } from "react-icons/pi";
import { ThemeToggle } from "../theme-toggle";
import { CvDialog } from "./cv-dialog";

export const Profile = ({ showContact }: { showContact: () => void }) => {
  return (
    <header className="flex gap-8">
      <Image
        src="/ozan.jpg"
        alt="Ozan Arslan"
        height={200}
        width={200}
        className="aspect-square size-36 rounded-xl"
        placeholder="blur"
        blurDataURL="/blur.jpg"
      />

      <div className="flex w-full flex-col justify-between">
        <div>
          <h1 className="text-res-xl font-bold">Ozan Arslan</h1>
          <p className="text-muted-foreground text-res-sm font-semibold">
            Psikolog, Web Geliştirici
          </p>
        </div>
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-4">
            <Link href="https://www.linkedin.com/in/ozan-arslan-214513209/">
              <LinkedInLogoIcon className="h-6 w-6" />
            </Link>

            <Link href="https://github.com/ozanArslan2424">
              <GitHubLogoIcon className="h-6 w-6" />
            </Link>

            <CvDialog />

            <button onClick={showContact}>
              <PiEnvelopeSimpleBold />
            </button>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
