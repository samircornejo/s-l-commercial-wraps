import HomePageClient from './components/HomePageClient';

export const metadata = {
  title: 'Vehicle Wraps, Window Tinting & Commercial Graphics in New Jersey',
  description:
    'S&L Commercial Wraps provides commercial vehicle wraps, fleet graphics, storefront signage, and window tinting in New Jersey for businesses and vehicle owners.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomePageClient />;
}