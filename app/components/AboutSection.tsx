import { Code, Palette, Terminal } from 'lucide-react';
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function AboutSection() {
  const services = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Diseño & Desarrollo Frontend",
      description:
        "Diseño y desarrollo de interfaces modernas y responsivas utilizando Wordpress, React, Next.js, Vue.js y Tailwind CSS.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Desarrollo Backend",
      description:
        "Creación de APIs robustas y escalables con Node.js o Java + Spring Boot y bases de datos SQL/NoSQL.",
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Desarrollo de Software a Medida",
      description:
        "Diseño y programación de aplicaciones personalizadas para resolver problemas específicos.",
    },
  ];

  return (
    <section className="w-full min-h-screen bg-[#1C232E] flex items-center py-16" id='About'>
      <MaxWidthWrapper>
        <div className="flex flex-col  gap-16 lg:gap24">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Stats */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-2 group cursor-default">
                <h3 className="text-4xl lg:text-5xl font-bold text-[#64ffda] transition-transform duration-300 group-hover:scale-110">
                  2+
                </h3>
                <p className="text-sm lg:text-base text-[#a0a0a0] font-medium">Años de experiencia</p>
              </div>
              <div className="space-y-2 group cursor-default">
                <h3 className="text-4xl lg:text-5xl font-bold text-[#64ffda] transition-transform duration-300 group-hover:scale-110">
                  10+
                </h3>
                <p className="text-sm lg:text-base text-[#a0a0a0] font-medium">Proyectos completados</p>
              </div>
              <div className="space-y-2 group cursor-default">
                <h3 className="text-4xl lg:text-5xl font-bold text-[#64ffda] transition-transform duration-300 group-hover:scale-110">
                  3
                </h3>
                <p className="text-sm lg:text-base text-[#a0a0a0] font-medium">Servicios principales</p>
              </div>
            </div>

            {/* About Text */}
            <div className="w-full md:w-1/2 ">
              <p className="text-sm lg:text-base text-[#f5f5f5] leading-relaxed font-inter">
              Desarrollador Jr. full-stack con una gran pasión por la tecnología y el diseño. Desde hace más de 2 años, me dedico a crear aplicaciones modernas y escalables.
              Me motiva el desafío de resolver problemas complejos, encontrar soluciones creativas y aprender constantemente en el proceso.
              
              </p>
              <br />
              <p className="text-sm lg:text-base text-[#f5f5f5] leading-relaxed font-inter">
              Fuera del teclado, el deporte me ayuda a mantener el equilibrio en mi vida y a fortalecer mi mentalidad para abordar nuevos desafíos con energía y enfoque. ¡Crear, resolver y mejorar siempre son parte de mi día a día!
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-[#1E1E1E] rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-[#202127] hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex  p-3 lg:p-4 rounded-xl bg-[#64ffda]/10">
                  <div className="text-[#64ffda]">{service.icon}</div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-merriweather text-[#f5f5f5] group-hover:text-[#64ffda] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#a0a0a0] font-inter text-xs lg:text-sm leading-relaxed w-[70%]">
                    {service.description}
                  </p>
                </div>

                {/* Number */}
                <span
                 className="absolute bottom-4 right-4 lg:bottom-6 lg:right-8 text-5xl lg:text-7xl font-bold opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{
                    WebkitTextStroke: "2px #64ffda",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

