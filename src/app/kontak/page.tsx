"use client";

import { useState, type FormEvent } from "react";
import PageHeader from "@/components/PageHeader";

const contactInfo = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Alamat Kantor",
    value: "Jl. Raya Segar No. 88,\nKelapa Gading, Jakarta Utara 14240",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    title: "Telepon",
    value: "+62 21 4567 8900\n+62 812 3456 7890 (WhatsApp)",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Email",
    value: "info@indofresh.co.id\nhr@indofresh.co.id",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Jam Operasional",
    value: "Senin — Jumat: 08.00 — 17.00 WIB\nSabtu: 08.00 — 12.00 WIB",
  },
];

export default function KontakPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <PageHeader
        badge="Hubungi Kami"
        title="Mari"
        titleHighlight="Terhubung"
        description="Hubungi kami untuk informasi lebih lanjut mengenai produk, kerjasama, atau pertanyaan lainnya. Tim kami siap membantu Anda."
      />

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Kirim Pesan
                </h2>
                <p className="text-gray-500 mb-8">
                  Isi formulir di bawah ini dan tim kami akan segera menghubungi
                  Anda.
                </p>

                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green-500/30 focus:border-brand-green-500 transition-all duration-300"
                          placeholder="Masukkan nama Anda"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                          Alamat Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green-500/30 focus:border-brand-green-500 transition-all duration-300"
                          placeholder="contoh@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Subjek
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formState.subject}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            subject: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green-500/30 focus:border-brand-green-500 transition-all duration-300"
                        placeholder="Tentang apa pesan Anda?"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Pesan
                      </label>
                      <textarea
                        id="message"
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        rows={6}
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green-500/30 focus:border-brand-green-500 transition-all duration-300 resize-none"
                        placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      id="contact-submit"
                      className="w-full py-4 bg-gradient-to-r from-brand-green-600 to-brand-green-700 text-white font-semibold rounded-xl shadow-lg shadow-brand-green-500/20 hover:shadow-brand-green-500/40 hover:from-brand-green-700 hover:to-brand-green-800 transition-all duration-300 active:scale-[0.98]"
                    >
                      {submitted ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          Pesan Terkirim!
                        </span>
                      ) : (
                        "Kirim Pesan"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="group flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 hover:bg-brand-green-50/50 hover:border-brand-green-200 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-brand-green-50 rounded-xl flex items-center justify-center text-brand-green-600 shrink-0 group-hover:bg-brand-green-100 group-hover:text-brand-green-700 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      {info.title}
                    </p>
                    <p className="text-sm text-gray-500 whitespace-pre-line">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="rounded-2xl overflow-hidden shadow-lg h-80 bg-gradient-to-br from-brand-green-100 to-brand-green-50 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-brand-green-200 rounded-2xl flex items-center justify-center text-brand-green-700 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="font-semibold text-brand-green-800 mb-1">
                Lokasi Kantor Indofresh
              </p>
              <p className="text-sm text-brand-green-600">
                Jl. Raya Segar No. 88, Kelapa Gading, Jakarta Utara
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
