import ServiciosPageClient from '../components/ServiciosPageClient';

export const metadata = {
  title: 'Commercial Wraps, Tinting & Signage Services in New Jersey',
  description:
    'Explore S&L Commercial Wraps services including vehicle wraps, storefront graphics, window tinting, and commercial signage in New Jersey.',
  alternates: {
    canonical: '/servicios',
  },
};

export default function ServiciosPage() {
  return <ServiciosPageClient />;
}