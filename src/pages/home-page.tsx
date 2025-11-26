import {
  AboutInfo,
  Brands,
  Categories,
  MainImg,
  ReadyLinks,
  Slider,
  WeekHit,
} from "@/home-page-sections";

export const HomePage = () => {
  return (
    <main className="w-full">
      <MainImg />
      <Slider />
      <Categories />
      <WeekHit />
      <AboutInfo />
      <Brands />
      <ReadyLinks />
    </main>
  );
};
