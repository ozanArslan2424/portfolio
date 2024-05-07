"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { ResetIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { PiEnvelopeSimpleBold } from "react-icons/pi";

export const Contact = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <PiEnvelopeSimpleBold />
      </DialogTrigger>
      <DialogContent className="w-min rounded-xl p-8">
        <DialogHeader>
          <DialogTitle>İletişim</DialogTitle>
          <DialogDescription>
            Formu doldurarak bana mail yollayabilirsiniz.
          </DialogDescription>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
};

export function ContactForm() {
  const [name, setName] = useState("deneme isim");
  const [email, setEmail] = useState("deneme mail");
  const [message, setMessage] = useState("deneme mesaj");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = { name: name, email: email, message: message };

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        console.error("Forbidden API Route.");
      }
    });
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(false);
  };

  return (
    <form className="w-80 space-y-2 text-left md:w-96" onSubmit={handleSubmit}>
      <label htmlFor="email">
        <span>E-posta</span>
        <input
          id="email"
          name="email"
          type="email"
          disabled={submitted}
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
          disabled={submitted}
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
          disabled={submitted}
          rows={6}
          className="h-24"
        />
      </label>

      <div className="flex items-center justify-end gap-2">
        <button
          onClick={handleReset}
          type="reset"
          disabled={submitted}
          className="button aspect-square size-8"
        >
          <ResetIcon className="shrink-0" />
        </button>
        <button disabled={submitted} type="submit" className="button">
          Gönder
        </button>
      </div>

      <div className="flex items-center justify-center pt-4">
        {submitted && (
          <p className="rounded-md bg-green-500/70 px-6 py-4 text-center">
            En yakın zamanda geri dönmeye çalışacağım. 😊
          </p>
        )}
      </div>
    </form>
  );
}

export function AltContactForm({ showContact }: { showContact: () => void }) {
  const [name, setName] = useState("deneme isim");
  const [email, setEmail] = useState("deneme mail");
  const [message, setMessage] = useState("deneme mesaj");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = { name: name, email: email, message: message };

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(body),
    }).then((response) => {
      if (response.ok) {
        handleClose();
      } else {
        console.error("Forbidden API Route.");
      }
    });
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(false);
  };

  const handleClose = () => {
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      showContact();
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {submitted ? (
        <p
          style={{}}
          className="rounded-md bg-green-500/50 px-6 py-4 text-center"
        >
          En yakın zamanda geri dönmeye çalışacağım. 😊
        </p>
      ) : (
        <div className="relative w-full space-y-2 text-left">
          <div className="flex gap-4">
            <label htmlFor="email">
              <span>E-posta</span>
              <input
                id="email"
                name="email"
                type="email"
                disabled={submitted}
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
                disabled={submitted}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          </div>

          <label>
            <span>Mesajınız</span>

            <textarea
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              name="message"
              id="message"
              disabled={submitted}
              rows={6}
              className="h-24"
            />
          </label>

          <div className="flex items-center justify-end gap-2">
            <button
              onClick={handleReset}
              type="reset"
              disabled={submitted}
              className="button aspect-square size-8"
            >
              <ResetIcon className="shrink-0" />
            </button>
            <button disabled={submitted} type="submit" className="button">
              Gönder
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
