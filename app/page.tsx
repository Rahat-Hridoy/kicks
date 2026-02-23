import { Hero } from "@/app/(home)/components/Hero";
import { NewDrops } from "@/app/(home)/components/NewDrops";
import { Categories } from "@/app/(home)/components/Categories";
import { Reviews } from "@/app/(home)/components/Reviews";

const page = () => {
  return (
    <main>
      <Hero />
      <NewDrops />
      <Categories />
      <Reviews />
    </main>
  );
};

export default page;
