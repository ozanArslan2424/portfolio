"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../dialog";

type Lang = "en" | "tr";

export const CvDialog = () => {
  const [lang, setLang] = useState<Lang>("tr");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-xl font-bold tracking-tight">CV</button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-row items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "tr" : "en")}
            className="text-res-sm rounded-sm border px-2 py-1 font-semibold shadow-sm"
          >
            {lang === "en" ? "TR" : "EN"}
          </button>
        </div>
        {lang === "en" ? (
          <iframe
            src="/cv-en.pdf"
            className="h-[80vh] w-full"
            title="English CV"
          />
        ) : (
          <iframe
            src="/cv-tr.pdf"
            className="h-[80vh] w-full"
            title="Türkçe CV"
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
