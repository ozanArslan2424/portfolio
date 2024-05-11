"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/dialog";
import { useState } from "react";

export function Contact({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("deneme isim");
  const [email, setEmail] = useState("deneme mail");
  const [message, setMessage] = useState("deneme mesaj");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = { name: name, email: email, message: message };

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setOpen(false);
      } else {
        console.error("Forbidden API Route.");
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <div className="w-full space-y-2 text-left">
            <label htmlFor="email">
              <span>E-posta</span>
              <input
                id="email"
                name="email"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>

            <label htmlFor="name">
              <span>Adınız</span>
              <input
                id="name"
                name="name"
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>

            <label>
              <span>Mesajınız</span>

              <textarea
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                name="message"
                id="message"
                rows={6}
                className="h-24"
              />
            </label>

            <DialogFooter>
              <button type="submit" className="button">
                Gönder
              </button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
