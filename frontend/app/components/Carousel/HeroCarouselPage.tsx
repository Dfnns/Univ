import HeroCarouselClient from './HeroCarouselClient';

async function getHero() {
  const res = await fetch('http://127.0.0.1:8000/api/hero-sections', {
    cache: 'no-store',
  });

  const data = await res.json();

  return data;
}

export default async function HeroCarouselPage() {
  const hero = await getHero();

  return <HeroCarouselClient hero={hero} />;
}