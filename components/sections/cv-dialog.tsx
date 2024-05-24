"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/dialog";
import { useState } from "react";

type Lang = "en" | "tr";

export const CvDialog = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("tr");

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <div className="flex flex-row items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "tr" : "en")}
            className="rounded-sm border px-2 py-1 text-sm font-semibold shadow-sm"
          >
            {lang === "en" ? "TR" : "EN"}
          </button>
        </div>
        {lang === "en" ? (
          <iframe
            src="/cv-en.pdf"
            className="h-[70vh] w-full"
            title="English CV"
          />
        ) : (
          <iframe
            src="/cv-tr.pdf"
            className="h-[70vh] w-full"
            title="Türkçe CV"
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
