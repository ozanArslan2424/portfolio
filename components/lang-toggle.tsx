import { Locale } from "@/i18n.config";
import Image from "next/image";
import Link from "next/link";

type Props = {
  lang: Locale;
};

export const LangToggle = ({ lang }: Props) => {
  return (
    <Link href={`/${lang === "tr" ? "en" : "tr"}`}>
      {lang === "tr" ? (
        <Image
          src="/icons/gb.svg"
          alt="English"
          width={24}
          height={24}
          className="h-6 w-6"
        />
      ) : (
        <Image
          src="/icons/tr.svg"
          alt="Türkçe"
          width={24}
          height={24}
          className="h-6 w-6"
        />
      )}
    </Link>
  );
};
