"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useLanguage } from '../../components/LanguageProvider';

const serviciosData = {
  '1': {
    nombre: { es: 'ROTULACIÓN DE FLOTAS', en: 'Fleet Branding & Wraps' },
    slogan: { es: 'Transforma tu flota en una herramienta de marketing en movimiento.', en: 'Turn your fleet into a mobile marketing tool.' },
    descripcion: { es: 'Diseñamos, imprimimos e instalamos rotulación de alta calidad para flotas y vehículos comerciales. Aumenta la visibilidad de tu marca mientras tus vehículos están en movimiento.', en: 'We design, print and install high-quality branding for fleets and commercial vehicles. Increase your brand visibility while your vehicles move.' },
    imgPrincipal: '/wrap-1.jpg',
    galeria: [
      { url: '/wrap-2.jpg', titulo: { es: 'Alineación e Instalación Trasera', en: 'Rear Alignment & Installation' } },
      { url: '/wrap-3.jpg', titulo: { es: 'Aplicación Técnica Lateral', en: 'Side Application Technique' } },
      { url: '/wrap-4.jpg', titulo: { es: 'Rotulado Publicitario en Food Truck / Trailer', en: 'Food Truck / Trailer Advertising' } },
    ],
    beneficios: [
      { es: 'Visibilidad masiva e impactante en calles y carreteras.', en: 'High-impact visibility on streets and roads.' },
      { es: 'Protección adicional para la pintura original del vehículo.', en: 'Additional protection for the original paint.' },
      { es: 'Materiales de alta durabilidad resistentes al sol, lluvia y lavados.', en: 'Durable materials resistant to sun, rain and washes.' },
      { es: 'Diseños personalizados adaptados a la identidad visual de tu empresa.', en: 'Custom designs tailored to your brand identity.' }
    ],
    proceso: [
      { paso: { es: '1. Asesoría y Diseño', en: '1. Consultation & Design' }, desc: { es: 'Analizamos tus necesidades visuales, tomamos medidas exactas del vehículo y adaptamos el arte publicitario.', en: 'We analyze your visual needs, take precise vehicle measurements and adapt the artwork.' } },
      { paso: { es: '2. Impresión y Laminado', en: '2. Printing & Laminating' }, desc: { es: 'Utilizamos tintas de alta resolución y aplicamos una capa protectora UV para evitar la decoloración.', en: 'We use high-resolution inks and apply a UV protective laminate.' } },
      { paso: { es: '3. Descontaminación de Superficie', en: '3. Surface Preparation' }, desc: { es: 'Preparamos la carrocería con limpieza profunda e hidrofóbica para garantizar máxima adherencia.', en: 'We deep-clean and decontaminate the surface for maximum adhesion.' } },
      { paso: { es: '4. Instalación Profesional', en: '4. Professional Installation' }, desc: { es: 'Aplicación técnica con sellado de bordes para prevenir filtraciones de aire o humedad.', en: 'Technical application with edge sealing to prevent air or moisture ingress.' } }
    ],
    faqs: [
      { q: { es: '¿Cuánto tiempo dura el vinil publicitario?', en: 'How long does the vinyl last?' }, a: { es: 'Con los cuidados adecuados, nuestros viniles tienen una vida útil de 3 a 5 años.', en: 'With proper care, our vinyls last typically 3 to 5 years.' } },
      { q: { es: '¿Daña la pintura original al retirarlo?', en: 'Does it damage the original paint when removed?' }, a: { es: 'Para nada. Utilizamos adhesivos removibles de grado automotriz que protegen la pintura base.', en: 'No. We use automotive-grade removable adhesives that protect the base paint.' } }
    ]
  },
  '2': {
    nombre: { es: 'POLARIZADO DE VENTANAS', en: 'Window Tinting' },
    slogan: { es: 'Privacidad, protección y confort al alcance de tu coche.', en: 'Privacy, protection and comfort within reach.' },
    descripcion: { es: 'Aplicamos películas de polarizado profesionales que reducen el calor, bloquean rayos UV y aumentan la privacidad de tu vehículo.', en: 'We apply professional tint films that reduce heat, block UV rays and increase vehicle privacy.' },
    imgPrincipal: '/polarizado-1.jpg',
    galeria: [
      { url: '/polarizado-2.jpg', titulo: { es: 'Acabado en Sedan Blanco', en: 'Finish on White Sedan' } },
      { url: '/polarizado-3.jpg', titulo: { es: 'Vista Trasera / Privacidad 100%', en: 'Rear View / 100% Privacy' } },
      { url: '/polarizado-4.jpg', titulo: { es: 'Protección Solar Lateral', en: 'Side Solar Protection' } },
    ],
    beneficios: [
      { es: 'Reducción de hasta un 99% de rayos ultravioleta (UV).', en: 'Up to 99% UV reduction.' },
      { es: 'Disminución significativa del calor interno y del uso de aire acondicionado.', en: 'Significant interior heat reduction and less AC use.' },
      { es: 'Mayor privacidad para ti y tus pertenencias personales.', en: 'Increased privacy for you and your belongings.' },
      { es: 'Instalación cómoda en tu propio domicilio o centro de trabajo.', en: 'Convenient installation at your home or workplace.' }
    ],
    proceso: [
      { paso: { es: '1. Inspección y Selección de Tono', en: '1. Inspection & Tint Selection' }, desc: { es: 'Revisamos las ventanas y seleccionamos el grado de oscurecimiento según las leyes locales.', en: 'We inspect the windows and select tint level compliant with local laws.' } },
      { paso: { es: '2. Limpieza de Vidrios sin Residuos', en: '2. Spotless Glass Cleaning' }, desc: { es: 'Desinfectamos y descontaminamos los cristales por dentro y fuera.', en: 'We thoroughly clean and decontaminate glass inside and out.' } },
      { paso: { es: '3. Moldeado Térmico', en: '3. Thermal Shaping' }, desc: { es: 'Moldeamos la película a la curvatura exacta de los cristales usando calor controlado.', en: 'We heat-form the film to match the glass curvature precisely.' } },
      { paso: { es: '4. Instalación y Curado', en: '4. Installation & Curing' }, desc: { es: 'Fijamos la película con espátulas de precisión para eliminar burbujas y humedad residual.', en: 'We install and cure the film using precision tools to remove bubbles.' } }
    ],
    faqs: [
      { q: { es: '¿Necesito un garaje o espacio techado?', en: 'Do I need a garage or covered space?' }, a: { es: 'Es recomendable contar con un área protegida del viento fuerte o polvo para asegurar un acabado impecable.', en: 'A protected area is recommended to ensure a flawless finish.' } },
      { q: { es: '¿Cuánto tiempo debo esperar para bajar los vidrios?', en: 'How long before I can roll down the windows?' }, a: { es: 'Recomendamos esperar entre 48 y 72 horas para asegurar el secado completo del adhesivo.', en: 'Wait 48–72 hours to ensure full adhesive curing.' } }
    ]
  },
  '3': {
    nombre: { es: 'CAMBIO DE COLOR', en: 'Full Vehicle Wraps' },
    slogan: { es: 'Cambia el color y acabado de tu vehículo sin pintura.', en: 'Change color and finish without paint.' },
    descripcion: { es: 'Transforma por completo tu vehículo con viniles de alta calidad y una amplia gama de colores y texturas.', en: 'Completely transform your vehicle with high-quality vinyl and a wide range of colors and textures.' },
    imgPrincipal: '/wrap-5.jpg',
    galeria: [
      { url: '/wrap-1.jpg', titulo: { es: 'Cobertura Completa de Carrocería', en: 'Full Body Coverage' } },
      { url: '/wrap-3.jpg', titulo: { es: 'Ajuste Técnico en Bordes', en: 'Edge Technical Adjustment' } },
      { url: '/wrap-5.jpg', titulo: { es: 'Detalle Especial Carbono Forjado', en: 'Forged Carbon Detail' } },
    ],
    beneficios: [
      { es: 'Protección integral de la pintura de fábrica contra rayos UV y pequeños micro-rayones.', en: 'Full protection of factory paint from UV and minor scratches.' },
      { es: 'Amplia variedad de colores, texturas y acabados exclusivos.', en: 'Wide variety of colors, textures and exclusive finishes.' },
      { es: 'Opción 100% reversible que preserva el valor de reventa del auto.', en: '100% reversible option that preserves resale value.' },
      { es: 'Mantenimiento y lavado sencillo.', en: 'Easy maintenance and washing.' }
    ],
    proceso: [
      { paso: { es: '1. Desmontaje Técnico', en: '1. Technical Disassembly' }, desc: { es: 'Desarmamos cuidadosamente manijas, faros y molduras para asegurar un envoltorio impecable.', en: 'We carefully remove handles, lights and trims for a flawless wrap.' } },
      { paso: { es: '2. Preparación de Carrocería', en: '2. Body Preparation' }, desc: { es: 'Lavado, descontaminación con claybar y desengrasado profundo de cada panel.', en: 'Washing, claybar decontamination and deep degreasing of each panel.' } },
      { paso: { es: '3. Envoltorio (Wrapping)', en: '3. Wrapping' }, desc: { es: 'Instalación del vinil panel por panel utilizando pistolas de calor y herramientas de estirado.', en: 'Panel-by-panel vinyl installation using heat guns and stretch tools.' } },
      { paso: { es: '4. Post-calentamiento y Armado', en: '4. Post-heating & Reassembly' }, desc: { es: 'Sellado térmico de bordes a altas temperaturas y reensamblaje del vehículo.', en: 'Heat-sealing edges and reassembling the vehicle.' } }
    ],
    faqs: [
      { q: { es: '¿Cuánto tiempo toma realizar un Wrap completo?', en: 'How long does a full wrap take?' }, a: { es: 'El proceso toma habitualmente entre 3 y 5 días hábiles, asegurando cada detalle.', en: 'Typically 3 to 5 business days, depending on complexity.' } },
      { q: { es: '¿Cómo se lava un auto con vinil?', en: 'How do you wash a wrapped car?' }, a: { es: 'Se recomienda lavado a mano con shampoo neutro y evitar ceras abrasivas.', en: 'Hand wash with mild soap and avoid abrasive waxes.' } }
    ]
  }
  ,
  '4': {
    nombre: { es: 'LUCES Y DETALLES', en: 'Lights & Details' },
    slogan: { es: 'Mejora la estética y funcionalidad con iluminación y detalles personalizados.', en: 'Enhance aesthetics and functionality with custom lighting and details.' },
    descripcion: { es: 'Instalación y personalización de luces, detalles estéticos y pequeños accesorios que realzan el aspecto de tu vehículo.', en: 'Installation and customization of lights, aesthetic details and small accessories to enhance your vehicle.' },
    imgPrincipal: '/detalles-1.jpg',
    galeria: [
      { url: '/detalles-2.jpg', titulo: { es: 'Iluminación LED Moderna', en: 'Modern LED Lighting' } },
      { url: '/detalles-3.jpg', titulo: { es: 'Detalles Cromados y Mate', en: 'Chrome & Matte Details' } },
      { url: '/detalles-4.jpg', titulo: { es: 'Acabados Personalizados', en: 'Custom Finishes' } },
    ],
    beneficios: [
      { es: 'Mejora estética inmediata y moderna.', en: 'Immediate modern aesthetic improvement.' },
      { es: 'Aumenta visibilidad y seguridad con mejores luces.', en: 'Increases visibility and safety with improved lighting.' },
      { es: 'Personalización acorde a tu estilo.', en: 'Customization according to your style.' }
    ],
    proceso: [
      { paso: { es: '1. Asesoría de Estilo', en: '1. Style Consultation' }, desc: { es: 'Definimos el look y las opciones de iluminación y detalles.', en: 'We define the look and lighting/detailing options.' } },
      { paso: { es: '2. Selección de Componentes', en: '2. Component Selection' }, desc: { es: 'Elegimos piezas y acabados que se adapten al vehículo.', en: 'We choose parts and finishes that fit the vehicle.' } },
      { paso: { es: '3. Instalación Profesional', en: '3. Professional Installation' }, desc: { es: 'Instalamos con precisión y probamos funcionamiento.', en: 'We install precisely and test functionality.' } },
      { paso: { es: '4. Ajustes y Entrega', en: '4. Tuning & Handover' }, desc: { es: 'Ajustes finales y entrega con demostración de uso.', en: 'Final adjustments and handover with usage demonstration.' } }
    ],
    faqs: [
      { q: { es: '¿Se afecta la garantía del vehículo?', en: 'Does this affect vehicle warranty?' }, a: { es: 'En la mayoría de los casos no; usamos piezas e instalaciones profesionales que respetan las normas.', en: 'In most cases no; we use professional parts and installations that respect standards.' } }
    ]
  }
};

export default function ServicioDetalle() {
  const params = useParams();
  const { id } = params || { id: '1' };
  const { lang } = useLanguage();

  const servicio = serviciosData[id] || serviciosData['1'];

  return (
    <div className="w-full bg-[#1C1C1C] text-white font-sans min-h-screen">
      <main className="max-w-5xl mx-auto p-6 md:p-12 space-y-10">
        <Link href="/servicios" className="inline-flex items-center text-[#2E86C1] text-sm hover:text-[#F1C40F] font-medium transition">
          {lang === 'es' ? '← Volver a la lista de servicios' : '← Back to services'}
        </Link>

        <section className="space-y-4 border-b border-[#7F8C8D]/30 pb-8">
          <div className="flex items-center gap-4">
            <img src="/logo.jpg" alt="S&L Commercial Wraps Logo" className="w-16 h-16 rounded-xl object-contain bg-[#1C1C1C] border border-[#F1C40F]/50" />
            <div>
              <span className="bg-[#2E86C1]/20 text-[#2E86C1] text-xs font-bold px-3 py-1 rounded-full border border-[#2E86C1]/30 font-[family-name:var(--font-montserrat)] uppercase">
                {lang === 'es' ? `Servicio Especializado #${id}` : `Specialized Service #${id}`}
              </span>
              <h1 className="text-2xl md:text-4xl font-extrabold text-white pt-1 font-[family-name:var(--font-montserrat)]">{servicio.nombre[lang]}</h1>
            </div>
          </div>
          <p className="text-xl text-[#F1C40F] font-medium">{servicio.slogan[lang]}</p>
          <p className="text-[#7F8C8D] text-base md:text-lg leading-relaxed">{servicio.descripcion[lang]}</p>
        </section>

        <section className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#7F8C8D]/40 h-56 sm:h-72 md:h-[450px] bg-black">
          <img src={servicio.imgPrincipal} alt={servicio.nombre[lang]} className="w-full h-full object-cover" />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-montserrat)]">{lang === 'es' ? '¿Por qué elegir este servicio?' : 'Why choose this service?'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {servicio.beneficios.map((b, idx) => (
              <div key={idx} className="bg-[#1C1C1C] border border-[#7F8C8D]/40 p-4 rounded-xl flex items-start space-x-3 shadow-md">
                <span className="text-[#F1C40F] font-bold text-lg">✓</span>
                <p className="text-slate-200 text-sm md:text-base">{b[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-montserrat)]">{lang === 'es' ? 'Proceso de Trabajo Paso a Paso' : 'Step-by-step Process'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicio.proceso.map((item, idx) => (
              <div key={idx} className="bg-[#1C1C1C] border border-[#7F8C8D]/40 p-6 rounded-xl space-y-2 shadow-md">
                <h3 className="text-lg font-bold text-[#F1C40F] font-[family-name:var(--font-montserrat)]">{item.paso[lang]}</h3>
                <p className="text-[#7F8C8D] text-sm leading-relaxed">{item.desc[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-montserrat)]">{lang === 'es' ? 'Galería de Trabajos Reales (S&L Commercial Wraps)' : 'Gallery of Real Work (S&L Commercial Wraps)'}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {servicio.galeria.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="rounded-xl overflow-hidden border border-[#7F8C8D]/40 h-44 sm:h-52 bg-black shadow-md">
                  <img src={item.url} alt={item.titulo[lang]} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
                </div>
                <p className="text-xs text-center text-[#7F8C8D] font-medium">{item.titulo[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Preguntas Frecuentes (FAQ) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-montserrat)]">{lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}</h2>
          <div className="space-y-4">
            {servicio.faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#1C1C1C] border border-[#7F8C8D]/40 p-5 rounded-xl space-y-2 shadow-md">
                <h3 className="font-bold text-white text-base">❓ {faq.q[lang]}</h3>
                <p className="text-[#7F8C8D] text-sm">{faq.a[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#1C1C1C] border border-[#F1C40F]/30 p-6 rounded-2xl text-center space-y-4 shadow-xl">
          <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-montserrat)]">{lang === 'es' ? '¿Listo para transformar tu vehículo?' : 'Ready to transform your vehicle?'}</h2>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <a href="tel:9733326605" className="bg-[#F1C40F] hover:bg-[#d4ac0d] text-[#1C1C1C] font-extrabold py-3 px-6 rounded-xl transition shadow-md uppercase text-sm tracking-wide">📞 973-332-6605</a>
            <a href="mailto:slcommercialwraps@gmail.com" className="bg-[#2E86C1] hover:bg-[#21618C] text-white font-semibold py-3 px-6 rounded-xl transition shadow-md text-sm">✉️ slcommercialwraps@gmail.com</a>
          </div>
        </section>
      </main>
    </div>
  );
}