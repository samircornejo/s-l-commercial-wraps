"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useLanguage } from '../../components/LanguageProvider';

const serviciosData = {
  '1': {
    nombre: { es: 'Publicidad para Vehículos de Compañías', en: 'Commercial Vehicle Branding' },
    slogan: { es: 'Transforma tu flota vehicular en la mejor herramienta de marketing itinerante.', en: 'Turn your fleet into the best mobile marketing tool.' },
    descripcion: { es: 'Diseñamos, imprimimos e instalamos viniles publicitarios de alta calidad para empresas y negocios locales en New Jersey. Destaca tu marca en las calles, genera presencia y atrae nuevos clientes las 24 horas del día.', en: 'We design, print and install high-quality vehicle vinyl graphics for businesses in New Jersey. Stand out on the streets and attract customers around the clock.' },
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
    nombre: { es: 'Polarizados Profesional a Domicilio', en: 'Mobile Professional Window Tinting' },
    slogan: { es: 'Privacidad, protección solar y confort sin moverte de tu casa u oficina.', en: 'Privacy, sun protection and comfort at your home or office.' },
    descripcion: { es: 'Llevamos nuestro taller móvil directamente hasta tu ubicación en New Jersey. Aplicamos películas de polarizado de alta tecnología que reducen el calor interior, filtran los rayos UV dañinos y brindan un look elegante a tu auto.', en: 'We bring our mobile workshop to your location in New Jersey, applying high-tech tint films that reduce heat, block UV and give a sleek look.' },
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
    nombre: { es: 'Cambio de Color (Vehicle Wrap) & Acabados Especiales', en: 'Full Vehicle Wraps & Special Finishes' },
    slogan: { es: 'Renueva la apariencia de tu auto con estilo único y personalizado.', en: 'Refresh your car with a unique, personalized style.' },
    descripcion: { es: 'Cambia la estética de tu vehículo por completo o añade detalles exclusivos (como fibra de carbono, capós especiales o tonos mate) sin alterar la pintura original. Una alternativa moderna, reversible y protectora.', en: 'Completely change your vehicle’s look or add exclusive details (carbon fiber, special hoods, matte finishes) without affecting the original paint.' },
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
  },
  '4': {
    nombre: { es: 'Luces y Detalles Personalizados', en: 'Customized Lights and Details' },
    slogan: { es: 'Estilo, iluminación y acabados únicos que marcan la diferencia.', en: 'Style, lighting and unique finishes that set you apart.' },
    descripcion: { es: 'Instalación de luces, detalles estéticos y acabados que marcan la diferencia. Estilo y funcionalidad en cada proyecto.', en: 'Installation of lights, aesthetic details and finishes that make a difference. Style and functionality in every project.' },
    imgPrincipal: '/wrap-5.jpg',
    galeria: [
      { url: '/wrap-8.jpg', titulo: { es: 'Detalles Estéticos y Faros', en: 'Aesthetic Details & Headlights' } },
      { url: '/wrap-9.jpg', titulo: { es: 'Acabados de Carbono Forjado', en: 'Forged Carbon Finishes' } },
      { url: '/wrap-10.jpg', titulo: { es: 'Personalización de Molduras', en: 'Trim Customization' } },
    ],
    beneficios: [
      { es: 'Iluminación de alto rendimiento y mejor visibilidad nocturna.', en: 'High-performance lighting and better night visibility.' },
      { es: 'Detalles exclusivos que destacan la personalidad de tu vehículo.', en: 'Exclusive details highlighting your car character.' },
      { es: 'Protección adicional para faros contra impactos y desgaste por el clima.', en: 'Extra protection for headlights against chips and weather wear.' },
      { es: 'Instalación limpia y cableado totalmente profesional.', en: 'Clean installation and professional wiring.' }
    ],
    proceso: [
      { paso: { es: '1. Evaluación y Diseño', en: '1. Evaluation & Design' }, desc: { es: 'Revisamos el sistema eléctrico o la zona a personalizar para seleccionar las mejores piezas y materiales.', en: 'We inspect the electrical system or customization area to choose top components.' } },
      { paso: { es: '2. Preparación de Zona', en: '2. Area Preparation' }, desc: { es: 'Limpiamos y desmontamos faros o molduras con herramientas especializadas sin dañar fijaciones.', en: 'We clean and detach headlights or trims using specialized non-damaging tools.' } },
      { paso: { es: '3. Instalación de Luces / Vinil', en: '3. Lights / Vinyl Installation' }, desc: { es: 'Montamos los kits de luces o aplicamos vinilo termoformable en faros y molduras.', en: 'We mount light kits or apply heat-formed vinyl to headlights and trims.' } },
      { paso: { es: '4. Pruebas y Sellado', en: '4. Testing & Sealing' }, desc: { es: 'Verificamos la alineación de luces y garantizamos el sellado hermético contra agua y humedad.', en: 'We check light alignment and guarantee airtight sealing against water.' } }
    ],
    faqs: [
      { q: { es: '¿Afecta el sistema eléctrico de mi vehículo?', en: 'Does it affect my vehicle electrical system?' }, a: { es: 'No. Todas las instalaciones se realizan respetando los diagramas eléctricos y conectores de fábrica.', en: 'No. All installations strictly respect factory wiring and connectors.' } },
      { q: { es: '¿El vinil para faros reduce la iluminación?', en: 'Does headlight vinyl reduce light output?' }, a: { es: 'Utilizamos películas ópticas especializadas diseñadas para proteger sin perder visibilidad.', en: 'We use specialized optical films designed to protect without compromising light output.' } }
    ]
  },
  '5': {
    nombre: { es: 'Publicidad para negocios', en: 'Advertising for businesses' },
    slogan: { es: 'Maximiza el impacto de tu marca con una inversión económica y focalizada.', en: 'Maximize brand impact with a cost-effective and targeted investment.' },
    descripcion: { es: 'Colocación de vinil publicitario en áreas clave del vehículo como puertas, ventanas traseras o maletero. Una opción excelente para empresas que desean proyectar una imagen profesional sin cubrir todo el vehículo.', en: 'Targeted vehicle branding on strategic areas such as doors, rear windows, or tailgates. Perfect for businesses aiming for a professional look without full vehicle coverage.' },
    imgPrincipal: '/wrap-13.jpg',
    galeria: [
      { url: '/wrap-12.jpg', titulo: { es: 'Rotulación de Puertas y Paneles Lateral', en: 'Door & Side Panel Graphics' } },
      { url: '/wrap-11.jpg', titulo: { es: 'Logos y Texto en Cristal Trasero', en: 'Rear Window Logos & Text' } },
      { url: '/wrap-13.jpg', titulo: { es: 'Gráficos Parciales en Vans', en: 'Partial Van Graphics' } },
    ],
    beneficios: [
      { es: 'Menor costo en comparación con un rotulado completo.', en: 'Lower cost compared to a full wrap.' },
      { es: 'Enfoque directo en la información de contacto y logotipo clave.', en: 'Direct focus on contact info and key logos.' },
      { es: 'Instalación rápida para no detener la operación de tu negocio.', en: 'Fast installation to keep your business operating.' },
      { es: 'Viniles de alta resistencia aptos para intemperie.', en: 'Weather-resistant high-performance vinyls.' }
    ],
    proceso: [
      { paso: { es: '1. Diseño y Escalado', en: '1. Design & Scaling' }, desc: { es: 'Dimensionamos el logotipo y los datos de contacto a la sección exacta del vehículo.', en: 'We scale logos and contact details to fit the vehicle area precisely.' } },
      { paso: { es: '2. Impresión o Corte de Vinil', en: '2. Printing & Vinyl Cutting' }, desc: { es: 'Procesamos los gráficos en vinil impreso o vinil de corte de alta definición.', en: 'Graphics are output on high-definition printed or cut vinyl.' } },
      { paso: { es: '3. Limpieza y Desengrasado', en: '3. Cleaning & Degreasing' }, desc: { es: 'Preparamos únicamente los paneles seleccionados con soluciones desengrasantes.', en: 'Selected panels are prepared using degreasing solutions.' } },
      { paso: { es: '4. Aplicación y Alineación', en: '4. Application & Alignment' }, desc: { es: 'Colocamos y alineamos milimétricamente el gráfico asegurando un acabado limpio.', en: 'Graphics are placed and aligned with precision for a seamless look.' } }
    ],
    faqs: [
      { q: { es: '¿Es posible combinar vinil impreso con vinil de corte?', en: 'Can printed vinyl be combined with cut vinyl?' }, a: { es: 'Sí, podemos combinar ambos materiales para lograr un diseño más dinámico y llamativo.', en: 'Yes, both materials can be combined for a dynamic and eye-catching design.' } },
      { q: { es: '¿Cuánto tiempo toma la instalación?', en: 'How long does installation take?' }, a: { es: 'Por lo general se realiza en 1 solo día laboral.', en: 'It is typically completed in just 1 business day.' } }
    ]
  }
};

export default function ServicioDetalle() {
  const params = useParams();
  
  // Extraer adecuadamente el ID de la URL
  const currentId = params?.id ? String(params.id) : '1';

  // Obtener la información del servicio exacto
  const servicio = serviciosData[currentId] || serviciosData['1'];
  const { lang } = useLanguage();

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
                {lang === 'es' ? `Servicio Especializado #${currentId}` : `Specialized Service #${currentId}`}
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