"use client";

import { Send } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useRef, useState } from "react";
import { toast } from "sonner";
import Spline from '@splinetool/react-spline';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null); // Referencia al formulario HTML
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita que el formulario se envíe inmediatamente

    // Llenar el formulario con los valores del estado
    if (formRef.current) {
      if (formRef.current) {
        const nameInput = formRef.current.elements.namedItem("name") as HTMLInputElement | null;
        const emailInput = formRef.current.elements.namedItem("email") as HTMLInputElement | null;
        const messageInput = formRef.current.elements.namedItem("message") as HTMLTextAreaElement | null;

        if (nameInput) nameInput.value = formData.name;
        if (emailInput) emailInput.value = formData.email;
        if (messageInput) messageInput.value = formData.message;
      }
    }

    toast.success("Mensaje enviado correctamente");
    setFormData({ name: "", email: "", message: "" });

    // Enviar el formulario manualmente
    formRef.current?.submit();
  };

  return (
    <section className="bg-[#1c232e] text-white py-16" id="Contacto">
      <MaxWidthWrapper className="px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 max-w-md">
          <h2 className="text-2xl font-merriweather mb-3">¿Tienes una idea interesante en mente? 💡</h2>
          <p className="text-[#a0a0a0] font-inter mb-4">Si tienes una pregunta, proyecto o idea, envíame un mensaje.</p>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              action="https://formsubmit.co/7e45ea286b97b6025a7462323ce85d44"
              method="POST"
              className="space-y-4 mt-8"
            >
              <input type="text" name="_honey" className="hidden" />
              <input type="hidden" name="_subject" value="Propuesta trabajo Portfolio" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#a0a0a0]">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2a3441] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all duration-300 text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#a0a0a0]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2a3441] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all duration-300 text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#a0a0a0]">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[#2a3441] rounded-md focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all duration-300 text-white resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#64ffda] text-gray-900 rounded-md font-medium hover:bg-[#64ffda]/90 transition-colors flex items-center justify-center gap-2 text-lg"
              >
                Enviar mensaje
                <Send size={18} />
              </button>
            </form>
            <div className="mt-8">
              <p className="text-[#a0a0a0] font-inter mb-4">También puedes encontrarme o contactarme en:</p>
              <div className="flex space-x-4">
                <a href="https://github.com/Hags97" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#64ffda] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/hugo-garay-saravia/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#64ffda] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://www.instagram.com/hugoags/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#64ffda] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>
          </div>
          <div  className="w-full lg:w-3/5 h-[400px] lg:h-[600px]">
            <div className="w-full h-full bg-[#1C232E] rounded-lg overflow-hidden">
              <Spline scene="https://prod.spline.design/242BAmHIu44a-bRz/scene.splinecode" />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
