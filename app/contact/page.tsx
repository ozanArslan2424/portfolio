import { ContactForm } from "@/components/sections/contact";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8">
      <div>
        <Link
          className="text-res-lg group flex items-center gap-2 font-medium underline-offset-4 hover:underline"
          href="/"
        >
          <ArrowLeftIcon className="h-6 w-6 transition-transform group-hover:-translate-x-2" />
          <span>Geri dön</span>
        </Link>
      </div>
      <div className="card w-max p-8">
        <h1 className="text-res-lg font-bold">İletişim</h1>
        <p className="text-res-sm text-muted-foreground">
          Formu doldurarak bana mail yollayabilirsiniz.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
