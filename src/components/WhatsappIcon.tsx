"use client";

import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000); // 20 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <a
      href="https://wa.me/447584573793?text=Hello%20I%20want%20to%20know%20about%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get in touch with top digital marketing agency"
      className="fixed bottom-3 md:bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 transition animate-bounce"
    >
      <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-10 h-10"
    fill="currentColor"
  >
    <path d="M16.04 3C8.84 3 3 8.74 3 15.82c0 2.5.73 4.92 2.12 6.99L3 29l6.39-2.06a13.2 13.2 0 0 0 6.65 1.79C23.24 28.73 29 22.99 29 15.91 29 8.83 23.24 3 16.04 3zm0 23.43c-2.04 0-4.04-.54-5.79-1.57l-.41-.24-3.79 1.22 1.24-3.69-.27-.43a10.98 10.98 0 0 1-1.7-5.9c0-6.02 4.85-10.92 10.82-10.92 5.97 0 10.82 4.9 10.82 10.92 0 6.03-4.85 10.61-10.92 10.61zm5.94-8.06c-.33-.16-1.96-.96-2.27-1.07-.3-.11-.52-.16-.74.16-.22.32-.85 1.07-1.04 1.29-.19.21-.38.24-.71.08-.33-.16-1.39-.51-2.65-1.63-.98-.87-1.64-1.95-1.83-2.27-.19-.32-.02-.49.14-.65.15-.15.33-.38.49-.57.16-.19.22-.32.33-.53.11-.21.05-.4-.03-.57-.08-.16-.74-1.79-1.01-2.45-.27-.65-.55-.56-.74-.57h-.63c-.22 0-.57.08-.87.4-.3.32-1.14 1.11-1.14 2.71s1.17 3.14 1.33 3.36c.16.21 2.3 3.48 5.57 4.88.78.33 1.39.53 1.87.68.79.25 1.51.21 2.08.13.64-.09 1.96-.8 2.24-1.58.27-.78.27-1.45.19-1.58-.08-.13-.3-.21-.63-.37z" />
  </svg>
       <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40 animate-ping"></span>
    </a>
  );
}