import {
  AboutInfo,
  Brands,
  Categories,
  MainImg,
  OftenQuestions,
  ReadyLinks,
  Slider,
  WeekHit,
} from "@/home-page-sections";

export const HomePage = () => {
  return (
    <main className="w-full">
      <MainImg />
      <Slider />
      <WeekHit />
      <Categories />
      <OftenQuestions />
      <AboutInfo />
      <Brands />
      <ReadyLinks />
    </main>
  );
};
