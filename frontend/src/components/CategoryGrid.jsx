import { CategoryCard } from "@/components/CategoryCard";

export const CategoryGrid = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(2,minmax(160px,260px))] grid-rows-none justify-center max-w-[1236px] gap-y-4 mx-auto my-8 px-4 md:grid-cols-[repeat(5,minmax(160px,260px))] md:grid-rows-[auto_auto_auto] md:my-12 md:px-8">
      <CategoryCard
        href="/cards/birthday"
        imageUrl="https://c.animaapp.com/mnmuvo0mFLk49O/assets/32.jpg"
        imageAlt="Birthday cards"
        label="Birthday"
        cardClassName="bg-orange-100"
      />
      <CategoryCard
        href="/cards/thank-you"
        imageUrl="https://c.animaapp.com/mnmuvo0mFLk49O/assets/28.jpg"
        imageAlt="Thank you cards"
        label="Thank you"
        cardClassName="bg-green-200 md:bg-emerald-500"
        innerDivClassName="before:md:text-white"
        labelClassName="md:text-white"
      />
      <CategoryCard
        href="/cards/events-and-occasions/anniversary"
        imageUrl="https://c.animaapp.com/mnmuvo0mFLk49O/assets/26.jpg"
        imageAlt="Anniversary cards"
        label="Anniversary"
        cardClassName="bg-teal-100"
      />
      <CategoryCard
        href="/cards/events-and-occasions/wedding"
        imageUrl="https://c.animaapp.com/mnmuvo0mFLk49O/assets/23.jpg"
        imageAlt="Wedding congratulations cards"
        label="Wedding"
        cardClassName="bg-rose-200"
      />
      <CategoryCard
        href="/cards/thoughts-and-feelings/get-well"
        imageUrl="https://c.animaapp.com/mnmuvo0mFLk49O/assets/22.jpg"
        imageAlt="Get well soon cards"
        label="Get well"
        cardClassName="bg-amber-100"
      />
      <CategoryCard
        href="/cards/events-and-occasions/new-baby"
        imageUrl="https://c.animaapp.com/mnmuvo0mFLk49O/assets/36.jpg"
        imageAlt="Baby shower cards"
        label="New baby"
        cardClassName="bg-teal-100"
      />
      <CategoryCard
        href="/cards/thoughts-and-feelings/sympathy"
        imageUrl="https://c.animaapp.com/mnmuvo0mFLk49O/assets/21.jpg"
        imageAlt="Sympathy & Condolences Cards"
        label="Sympathy"
        cardClassName="bg-rose-200"
      />
      <CategoryCard
        href="/cards/thoughts-and-feelings/good-luck"
        imageUrl="https://c.animaapp.com/mnmuvo0mFLk49O/assets/20.jpg"
        imageAlt="Good luck cards"
        label="Good luck"
        cardClassName="bg-violet-200"
      />
      <CategoryCard
        href="/cards/thoughts-and-feelings/good-luck/farewell-and-goodbye"
        imageUrl="https://c.animaapp.com/mnmuvo0mFLk49O/assets/37.jpg"
        imageAlt="Farewell & Goodbye Cards"
        label="Farewell"
        cardClassName="bg-green-200"
      />
      <CategoryCard
        href="/cards/birthday/theme-ai"
        imageUrl="https://c.animaapp.com/mnmuvo0mFLk49O/assets/27.jpg"
        imageAlt="Birthday cards"
        label="AI Magic photo"
        cardClassName="bg-orange-100"
      />
    </div>
  );
};
