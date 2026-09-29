import ServicioDetalleClient from '../../components/ServicioDetalleClient';

const serviciosData = {
  '1': {
    title: 'Commercial Vehicle Wraps in New Jersey',
    description:
      'Professional commercial vehicle wraps, fleet graphics, and branding for businesses in New Jersey.',
  },
  '2': {
    title: 'Window Tinting Services in New Jersey',
    description:
      'Premium mobile window tinting and privacy film installation for cars, trucks, and businesses in New Jersey.',
  },
  '3': {
    title: 'Vehicle Color Change Wraps in New Jersey',
    description:
      'Custom color change wraps and specialty finishes to transform the look of your vehicle in New Jersey.',
  },
  '4': {
    title: 'Headlight Tinting & Custom Car Details in New Jersey',
    description:
      'Headlight tinting, custom detailing, and premium auto upgrades for drivers in New Jersey.',
  },
  '5': {
    title: 'Advertising for Businesses: Signs, Wraps & Graphics in New Jersey',
    description:
      'Vehicle graphics, business signage, storefront graphics, banners, and wall murals for local brands in New Jersey.',
  },
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = serviciosData[id] || serviciosData['1'];

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/servicios/${id}`,
    },
  };
}

export default async function ServicioDetallePage({ params }) {
  const { id } = await params;
  return <ServicioDetalleClient currentId={id} />;
}