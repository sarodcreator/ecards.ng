import { HeroTitle } from "@/sections/HeroSection/components/HeroTitle";
import { CategoryGrid } from "@/sections/HeroSection/components/CategoryGrid";
import { MagicCardBanner } from "@/sections/HeroSection/components/MagicCardBanner";

export const HeroSection = () => {
  return (
    <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
      <HeroTitle />
      <CategoryGrid />
      <MagicCardBanner />
      <h2 className="text-4xl font-medium box-border caret-transparent leading-[43.2px] text-center pt-6 md:text-[47px] md:leading-[56.4px] md:pt-12">
        Find your perfect match
      </h2>
      <div className="box-border caret-transparent mt-24 mx-4 md:mx-0">
        <div className="box-border caret-transparent flex justify-center">
          <div className="relative box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] border-orange-100 mb-20 mx-4 rounded-3xl border-2 border-solid md:flex-row md:mb-40 md:rounded-[48px] after:md:accent-auto after:md:bg-white after:md:bottom-[-52px] after:md:box-border after:md:caret-transparent after:md:text-zinc-800 after:md:block after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-[50px] after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:absolute after:md:text-left after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:z-[11] after:md:border-separate after:md:left-0 after:md:font-generalsans">
            <div className="box-border caret-transparent flex flex-col h-auto max-w-[600px] min-h-[auto] min-w-[auto] order-2 w-[337.5px] mt-6 mb-8 px-4 md:h-[507px] md:max-w-none md:order-1 md:w-[568px] md:my-0 md:px-12">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] w-full my-auto md:w-auto">
                <h3 className="text-[32px] font-medium box-border caret-transparent leading-[41.6px] mb-6 md:text-4xl md:leading-[46.8px]">
                  Birthday
                </h3>
                <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
                  <a
                    href="/cards/birthday"
                    className="items-center bg-zinc-100 box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full pl-4 pr-2 py-2 rounded-3xl md:w-[48%]"
                  >
                    <div className="font-medium box-border caret-transparent min-h-[auto] min-w-[auto]">
                      All Birthday
                    </div>
                    <div className="bg-orange-400 box-border caret-transparent flex min-h-[auto] min-w-[auto] p-1.5 rounded-[50%]">
                      <img
                        src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-32.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 w-5"
                      />
                    </div>
                  </a>
                  <a
                    href="/cards/birthday/kids"
                    className="items-center bg-zinc-100 box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full pl-4 pr-2 py-2 rounded-3xl md:w-[48%]"
                  >
                    <div className="font-medium box-border caret-transparent min-h-[auto] min-w-[auto]">
                      Kids
                    </div>
                    <div className="bg-orange-400 box-border caret-transparent flex min-h-[auto] min-w-[auto] p-1.5 rounded-[50%]">
                      <img
                        src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-33.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 w-5"
                      />
                    </div>
                  </a>
                  <a
                    href="/cards/birthday/add-a-photo"
                    className="items-center bg-zinc-100 box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full pl-4 pr-2 py-2 rounded-3xl md:w-[48%]"
                  >
                    <div className="font-medium box-border caret-transparent min-h-[auto] min-w-[auto]">
                      Add a photo
                    </div>
                    <div className="bg-orange-400 box-border caret-transparent flex min-h-[auto] min-w-[auto] p-1.5 rounded-[50%]">
                      <img
                        src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-34.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 w-5"
                      />
                    </div>
                  </a>
                  <a
                    href="/cards/birthday/funny"
                    className="items-center bg-zinc-100 box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full pl-4 pr-2 py-2 rounded-3xl md:w-[48%]"
                  >
                    <div className="font-medium box-border caret-transparent min-h-[auto] min-w-[auto]">
                      Funny
                    </div>
                    <div className="bg-orange-400 box-border caret-transparent flex min-h-[auto] min-w-[auto] p-1.5 rounded-[50%]">
                      <img
                        src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-35.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 w-5"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative aspect-[350_/_306] bg-orange-100 box-border caret-transparent h-auto max-w-[600px] min-h-[auto] min-w-[auto] order-1 w-[337.5px] rounded-br-none rounded-t-[21px] md:aspect-auto md:h-[507px] md:max-w-none md:order-2 md:w-[568px] md:rounded-tl-none md:rounded-r-[45px]">
              <img
                alt="Your majesty - happy birthday card"
                src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/24.jpg"
                sizes="(min-width:992px) 699px ,326px"
                className="absolute text-transparent text-[0px] box-border leading-[0px] max-w-full top-[-7%] rotate-[-6.999981529840809deg] w-[31%] z-10 border border-gray-200 rounded-bl rounded-br rounded-tl rounded-tr border-solid left-[7%]"
              />
              <div className="absolute box-border caret-transparent w-[48%] z-10 right-[4%] top-[9%] before:accent-auto before:bg-zinc-400 before:bg-no-repeat before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[13px] before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-left before:no-underline before:indent-[0px] before:normal-case before:top-[-3px] before:rotate-[-1.999999842926156deg] before:visible before:z-[-1] before:rounded-tr before:border-separate before:left-0.5 before:right-2.5 before:font-generalsans">
                <img
                  alt="This just in - happy birthday card"
                  src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/25.jpg"
                  sizes="(min-width:992px) 699px ,326px"
                  className="text-transparent text-[0px] box-border inline leading-[0px] max-w-full border border-gray-200 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                />
              </div>
              <div className="absolute box-border caret-transparent h-[48%] rotate-[-6.999981529840809deg] w-[31%] z-10 left-[9%] bottom-[0%] before:accent-auto before:bg-zinc-400 before:bg-no-repeat before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-2.5 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-left before:no-underline before:indent-[0px] before:normal-case before:top-[-3px] before:rotate-[-4.000001701562398deg] before:visible before:z-[-1] before:rounded-tr before:border-separate before:left-[3px] before:right-2.5 before:font-generalsans">
                <img
                  alt="Flora & fauna - happy birthday card"
                  src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/41.jpg"
                  sizes="(min-width:992px) 699px ,326px"
                  className="text-transparent text-[0px] box-border inline leading-[0px] max-w-full border border-gray-200 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                />
              </div>
              <img
                src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-36.svg"
                alt="Icon"
                className="absolute box-border caret-transparent h-[109%] left-[-0.4%] top-[-9%] w-[101%] md:h-[106%] md:w-[100.2%] md:left-0"
              />
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent flex justify-center">
          <div className="relative box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] border-green-200 mb-20 mx-4 rounded-3xl border-2 border-solid md:flex-row md:mb-40 md:rounded-[48px] after:md:accent-auto after:md:bg-white after:md:bottom-[-52px] after:md:box-border after:md:caret-transparent after:md:text-zinc-800 after:md:block after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-[50px] after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:absolute after:md:text-left after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:z-[11] after:md:border-separate after:md:left-0 after:md:font-generalsans">
            <div className="relative aspect-[350_/_306] bg-green-200 box-border caret-transparent h-auto max-w-[600px] min-h-[auto] min-w-[auto] w-[337.5px] rounded-t-[21px] rounded-bl-none md:aspect-auto md:h-[507px] md:max-w-none md:w-[568px] md:rounded-tr-none md:rounded-l-[45px]">
              <img
                alt="Delicate blooms - thank you card for teacher"
                src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/38.jpg"
                sizes="(min-width:992px) 699px ,326px"
                className="absolute text-transparent text-[0px] box-border leading-[0px] max-w-full w-[35%] z-10 border border-gray-200 rounded-bl rounded-br rounded-tl rounded-tr border-solid left-[7%] top-[6%]"
              />
              <div className="absolute box-border caret-transparent top-[-5%] w-[47%] z-10 right-[4%] before:accent-auto before:bg-zinc-400 before:bg-no-repeat before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[13px] before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-left before:no-underline before:indent-[0px] before:normal-case before:top-[-3px] before:rotate-[-1.999999842926156deg] before:visible before:z-[-1] before:rounded-tr before:border-separate before:left-0.5 before:right-2.5 before:font-generalsans">
                <img
                  alt="Flowers in the night - thank you card"
                  src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/40.jpg"
                  sizes="(min-width:992px) 699px ,326px"
                  className="text-transparent text-[0px] box-border inline leading-[0px] max-w-full border border-gray-200 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                />
              </div>
              <div className="absolute box-border caret-transparent h-[32%] w-[41%] z-10 overflow-hidden left-[12%] bottom-0">
                <img
                  alt="Happy stationery wares - thank you card for teacher"
                  src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/29.jpg"
                  sizes="(min-width:992px) 699px ,326px"
                  className="text-transparent text-[0px] box-border inline leading-[0px] max-w-full border border-gray-200 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                />
              </div>
              <img
                src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-37.svg"
                alt="Icon"
                className="absolute box-border caret-transparent h-[112%] left-[-2.6px] top-[-9%] w-[101%] md:h-[111%] md:left-[-0.1%] md:w-full"
              />
            </div>
            <div className="box-border caret-transparent flex flex-col h-auto max-w-[600px] min-h-[auto] min-w-[auto] order-2 w-[337.5px] mt-6 mb-8 px-4 md:h-[507px] md:max-w-none md:order-1 md:w-[568px] md:my-0 md:px-12">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] w-full my-auto md:w-auto">
                <h3 className="text-[32px] font-medium box-border caret-transparent leading-[41.6px] mb-6 md:text-4xl md:leading-[46.8px]">
                  Thank you
                </h3>
                <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
                  <a
                    href="/cards/thank-you"
                    className="items-center bg-zinc-100 box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full pl-4 pr-2 py-2 rounded-3xl md:w-[48%]"
                  >
                    <div className="font-medium box-border caret-transparent min-h-[auto] min-w-[auto]">
                      All
                    </div>
                    <div className="bg-emerald-500 box-border caret-transparent flex min-h-[auto] min-w-[auto] p-1.5 rounded-[50%]">
                      <img
                        src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-38.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 w-5"
                      />
                    </div>
                  </a>
                  <a
                    href="/cards/thank-you/teacher-appreciation"
                    className="items-center bg-zinc-100 box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full pl-4 pr-2 py-2 rounded-3xl md:w-[48%]"
                  >
                    <div className="font-medium box-border caret-transparent min-h-[auto] min-w-[auto]">
                      Teacher appreciation
                    </div>
                    <div className="bg-emerald-500 box-border caret-transparent flex min-h-[auto] min-w-[auto] p-1.5 rounded-[50%]">
                      <img
                        src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-39.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 w-5"
                      />
                    </div>
                  </a>
                  <a
                    href="/cards/thank-you/birthday"
                    className="items-center bg-zinc-100 box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full pl-4 pr-2 py-2 rounded-3xl md:w-[48%]"
                  >
                    <div className="font-medium box-border caret-transparent min-h-[auto] min-w-[auto]">
                      Birthday
                    </div>
                    <div className="bg-emerald-500 box-border caret-transparent flex min-h-[auto] min-w-[auto] p-1.5 rounded-[50%]">
                      <img
                        src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-32.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 w-5"
                      />
                    </div>
                  </a>
                  <a
                    href="/cards/thank-you/wedding"
                    className="items-center bg-zinc-100 box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full pl-4 pr-2 py-2 rounded-3xl md:w-[48%]"
                  >
                    <div className="font-medium box-border caret-transparent min-h-[auto] min-w-[auto]">
                      Wedding
                    </div>
                    <div className="bg-emerald-500 box-border caret-transparent flex min-h-[auto] min-w-[auto] p-1.5 rounded-[50%]">
                      <img
                        src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-40.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 w-5"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent flex justify-center">
          <div className="relative box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] border-indigo-200 mb-20 mx-4 rounded-3xl border-2 border-solid md:flex-row md:mb-40 md:rounded-[48px] after:md:accent-auto after:md:bg-white after:md:bottom-[-52px] after:md:box-border after:md:caret-transparent after:md:text-zinc-800 after:md:block after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-[50px] after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:absolute after:md:text-left after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:z-[11] after:md:border-separate after:md:left-0 after:md:font-generalsans">
            <div className="box-border caret-transparent flex flex-col h-auto max-w-[600px] min-h-[auto] min-w-[auto] order-2 w-[337.5px] mt-6 mb-8 px-4 md:h-[507px] md:max-w-none md:order-1 md:w-[568px] md:my-0 md:px-12">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] w-full my-auto md:w-auto">
                <h3 className="text-[32px] font-medium box-border caret-transparent leading-[41.6px] mb-6 md:text-4xl md:leading-[46.8px]">
                  Events &amp; occasions
                </h3>
                <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
                  <a
                    href="/cards/events-and-occasions/graduation"
                    className="items-center bg-zinc-100 box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full pl-4 pr-2 py-2 rounded-3xl md:w-[48%]"
                  >
                    <div className="font-medium box-border caret-transparent min-h-[auto] min-w-[auto]">
                      Graduation
                    </div>
                    <div className="bg-indigo-500 box-border caret-transparent flex min-h-[auto] min-w-[auto] p-1.5 rounded-[50%]">
                      <img
                        src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-41.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 w-5"
                      />
                    </div>
                  </a>
                  <a
                    href="/cards/events-and-occasions/retirement"
                    className="items-center bg-zinc-100 box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full pl-4 pr-2 py-2 rounded-3xl md:w-[48%]"
                  >
                    <div className="font-medium box-border caret-transparent min-h-[auto] min-w-[auto]">
                      Retirement
                    </div>
                    <div className="bg-indigo-500 box-border caret-transparent flex min-h-[auto] min-w-[auto] p-1.5 rounded-[50%]">
                      <img
                        src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-42.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 w-5"
                      />
                    </div>
                  </a>
                  <a
                    href="/cards/events-and-occasions/new-home"
                    className="items-center bg-zinc-100 box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full pl-4 pr-2 py-2 rounded-3xl md:w-[48%]"
                  >
                    <div className="font-medium box-border caret-transparent min-h-[auto] min-w-[auto]">
                      New home
                    </div>
                    <div className="bg-indigo-500 box-border caret-transparent flex min-h-[auto] min-w-[auto] p-1.5 rounded-[50%]">
                      <img
                        src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-43.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 w-5"
                      />
                    </div>
                  </a>
                  <a
                    href="/cards/events-and-occasions/engagement"
                    className="items-center bg-zinc-100 box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full pl-4 pr-2 py-2 rounded-3xl md:w-[48%]"
                  >
                    <div className="font-medium box-border caret-transparent min-h-[auto] min-w-[auto]">
                      Engagement
                    </div>
                    <div className="bg-indigo-500 box-border caret-transparent flex min-h-[auto] min-w-[auto] p-1.5 rounded-[50%]">
                      <img
                        src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-44.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 w-5"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative aspect-[350_/_306] bg-indigo-200 box-border caret-transparent h-auto max-w-[600px] min-h-[auto] min-w-[auto] order-1 w-[337.5px] rounded-br-none rounded-t-[21px] md:aspect-auto md:h-[507px] md:max-w-none md:order-2 md:w-[568px] md:rounded-tl-none md:rounded-r-[45px]">
              <div className="absolute box-border caret-transparent rotate-[-4.000001701562398deg] w-[48%] z-10 left-[9%] top-[11%] before:accent-auto before:bg-zinc-400 before:bg-no-repeat before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-2.5 before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-left before:no-underline before:indent-[0px] before:normal-case before:top-[-3px] before:rotate-[-1.999999842926156deg] before:visible before:z-[-1] before:rounded-tr before:border-separate before:left-[3px] before:right-2.5 before:font-generalsans">
                <img
                  alt="Flowers graduation hat - graduation card"
                  src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/39.jpg"
                  sizes="(min-width:992px) 699px ,326px"
                  className="text-transparent text-[0px] box-border inline leading-[0px] max-w-full border border-gray-200 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                />
              </div>
              <div className="absolute box-border caret-transparent top-[-8%] w-[31%] z-10 right-[5%] before:accent-auto before:bg-zinc-400 before:bg-no-repeat before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[13px] before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-left before:no-underline before:indent-[0px] before:normal-case before:rotate-[-1.999999842926156deg] before:visible before:z-[-1] before:rounded-tr before:border-separate before:left-0.5 before:right-2.5 before:-top-0.5 before:font-generalsans">
                <img
                  alt="Calls for bubbles - congratulations card"
                  src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/43.jpg"
                  sizes="(min-width:992px) 699px ,326px"
                  className="text-transparent text-[0px] box-border inline leading-[0px] max-w-full border border-gray-200 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                />
              </div>
              <img
                alt="Floral golden key - new home card"
                src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/42.jpg"
                sizes="(min-width:992px) 699px ,326px"
                className="absolute text-transparent text-[0px] bottom-[-26px] box-border leading-[0px] max-w-full rotate-[4.999996052434918deg] w-[31%] z-10 border border-gray-200 rounded-bl rounded-br rounded-tl rounded-tr border-solid right-[5%]"
              />
              <img
                src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-45.svg"
                alt="Icon"
                className="absolute box-border caret-transparent h-[110%] left-[-0.4%] top-[-10%] w-[101%] md:h-[112%] md:top-[-9%] md:w-full md:left-0"
              />
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent flex justify-center">
          <div className="relative box-border caret-transparent flex flex-col min-h-[auto] min-w-[auto] border-rose-200 mb-[50px] mx-4 rounded-3xl border-2 border-solid md:flex-row md:rounded-[48px] after:md:accent-auto after:md:bg-white after:md:bottom-[-52px] after:md:box-border after:md:caret-transparent after:md:text-zinc-800 after:md:block after:md:text-base after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-[50px] after:md:tracking-[normal] after:md:leading-6 after:md:list-outside after:md:list-none after:md:pointer-events-none after:md:absolute after:md:text-left after:md:no-underline after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:z-[11] after:md:border-separate after:md:left-0 after:md:font-generalsans">
            <div className="relative aspect-[350_/_306] bg-rose-200 box-border caret-transparent h-auto max-w-[600px] min-h-[auto] min-w-[auto] w-[337.5px] rounded-t-[21px] rounded-bl-none md:aspect-auto md:h-[507px] md:max-w-none md:w-[568px] md:rounded-tr-none md:rounded-l-[45px]">
              <div className="absolute box-border caret-transparent top-[-6%] w-[38%] z-10 left-[4%] before:accent-auto before:bg-zinc-400 before:bg-no-repeat before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[13px] before:tracking-[normal] before:leading-6 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-left before:no-underline before:indent-[0px] before:normal-case before:rotate-[-1.999999842926156deg] before:visible before:z-[-1] before:rounded-tr before:border-separate before:left-0.5 before:right-2.5 before:-top-0.5 before:font-generalsans">
                <img
                  alt="Nature’s palette - love card"
                  src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/31.jpg"
                  sizes="(min-width:992px) 699px ,326px"
                  className="text-transparent text-[0px] box-border inline leading-[0px] max-w-full border border-gray-200 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                />
              </div>
              <img
                alt="Blooming cheerfulness - farewell card"
                src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/33.jpg"
                sizes="(min-width:992px) 699px ,326px"
                className="absolute text-transparent text-[0px] box-border leading-[0px] max-w-full rotate-[1.999999842926156deg] w-[47%] z-10 border border-gray-200 rounded-bl rounded-br rounded-tl rounded-tr border-solid right-[6%] top-[9%]"
              />
              <div className="absolute box-border caret-transparent h-[39%] w-[32%] z-10 overflow-hidden left-[7%] bottom-0">
                <img
                  alt="Cup of comfort - sympathy & condolences card"
                  src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/30.jpg"
                  sizes="(min-width:992px) 699px ,326px"
                  className="text-transparent text-[0px] box-border inline leading-[0px] max-w-full border border-gray-200 rounded-bl rounded-br rounded-tl rounded-tr border-solid"
                />
              </div>
              <img
                src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-46.svg"
                alt="Icon"
                className="absolute box-border caret-transparent h-[109%] left-[-1.4%] top-[-9%] w-[101%] md:left-[-0.4%] md:top-[-8%] md:w-full"
              />
            </div>
            <div className="box-border caret-transparent flex flex-col h-auto max-w-[600px] min-h-[auto] min-w-[auto] order-2 w-[337.5px] mt-6 mb-8 px-4 md:h-[507px] md:max-w-none md:order-1 md:w-[568px] md:my-0 md:px-12">
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto] w-full my-auto md:w-auto">
                <h3 className="text-[32px] font-medium box-border caret-transparent leading-[41.6px] mb-6 md:text-4xl md:leading-[46.8px]">
                  Thoughts &amp; feelings
                </h3>
                <div className="box-border caret-transparent gap-x-2 flex flex-wrap gap-y-2">
                  <a
                    href="/cards/thoughts-and-feelings/congratulations"
                    className="items-center bg-zinc-100 box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full pl-4 pr-2 py-2 rounded-3xl md:w-[48%]"
                  >
                    <div className="font-medium box-border caret-transparent min-h-[auto] min-w-[auto]">
                      Congratulations
                    </div>
                    <div className="bg-rose-400 box-border caret-transparent flex min-h-[auto] min-w-[auto] p-1.5 rounded-[50%]">
                      <img
                        src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-47.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 w-5"
                      />
                    </div>
                  </a>
                  <a
                    href="/cards/thoughts-and-feelings/love-and-romance"
                    className="items-center bg-zinc-100 box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full pl-4 pr-2 py-2 rounded-3xl md:w-[48%]"
                  >
                    <div className="font-medium box-border caret-transparent min-h-[auto] min-w-[auto]">
                      Love and romance
                    </div>
                    <div className="bg-rose-400 box-border caret-transparent flex min-h-[auto] min-w-[auto] p-1.5 rounded-[50%]">
                      <img
                        src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-48.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 w-5"
                      />
                    </div>
                  </a>
                  <a
                    href="/cards/thoughts-and-feelings/sorry"
                    className="items-center bg-zinc-100 box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full pl-4 pr-2 py-2 rounded-3xl md:w-[48%]"
                  >
                    <div className="font-medium box-border caret-transparent min-h-[auto] min-w-[auto]">
                      Sorry
                    </div>
                    <div className="bg-rose-400 box-border caret-transparent flex min-h-[auto] min-w-[auto] p-1.5 rounded-[50%]">
                      <img
                        src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-49.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 w-5"
                      />
                    </div>
                  </a>
                  <a
                    href="/cards/thoughts-and-feelings/good-luck/farewell-and-goodbye"
                    className="items-center bg-zinc-100 box-border caret-transparent flex justify-between min-h-[auto] min-w-[auto] w-full pl-4 pr-2 py-2 rounded-3xl md:w-[48%]"
                  >
                    <div className="font-medium box-border caret-transparent min-h-[auto] min-w-[auto]">
                      Goodbye &amp; farewell
                    </div>
                    <div className="bg-rose-400 box-border caret-transparent flex min-h-[auto] min-w-[auto] p-1.5 rounded-[50%]">
                      <img
                        src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-50.svg"
                        alt="Icon"
                        className="box-border caret-transparent h-5 w-5"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent px-4">
        <div className="box-border caret-transparent flex flex-col justify-center max-w-none text-center w-full mx-auto py-8 md:max-w-[1140px] md:py-16">
          <p className="text-4xl font-medium box-border caret-transparent leading-[43.2px] min-h-[auto] min-w-[auto] mb-8 md:text-[47px] md:leading-[56.4px] md:mb-12">
            See how others celebrate with us
          </p>
          <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto]">
            <iframe
              title="Customer reviews powered by Trustpilot"
              src="https://widget.trustpilot.com/trustboxes/54ad5defc6454f065c28af8b/index.html?templateId=54ad5defc6454f065c28af8b&businessunitId=5d76b40315b6ca0001d8c8e0#locale=en-US&styleHeight=240px&styleWidth=100%25&stars=5&reviewLanguages=en"
              className="relative box-border caret-transparent h-60 align-baseline w-full"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent text-center mb-12 md:mb-16">
        <div className="box-border caret-transparent px-6">
          <h2 className="text-4xl font-medium box-border caret-transparent leading-[43.2px] mt-12 mb-4 md:text-[47px] md:leading-[56.4px] md:mt-9">
            Endless ways to spread the joy
          </h2>
          <div className="box-border caret-transparent">
            Design it once, share it everywhere!
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent gap-x-6 flex flex-wrap justify-center max-w-[1064px] gap-y-6 mx-auto pb-24 px-6 md:gap-x-16 md:flex-nowrap md:gap-y-16 md:px-8">
        <div className="box-border caret-transparent max-w-[380px] min-h-[auto] min-w-[auto] text-center w-full md:max-w-none md:w-[33.33%]">
          <img
            src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-51.svg"
            alt="Icon"
            className="box-border caret-transparent inline h-[41px] w-[41px]"
          />
          <div className="text-[21px] font-medium box-border caret-transparent leading-[29.4px] mt-6 mb-4">
            Download
          </div>
          <div className="box-border caret-transparent">
            Download your card as a printable PDF or shareable image to your
            device.
          </div>
        </div>
        <div className="box-border caret-transparent max-w-[380px] min-h-[auto] min-w-[auto] text-center w-full md:max-w-none md:w-[33.33%]">
          <img
            src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-52.svg"
            alt="Icon"
            className="box-border caret-transparent inline h-[41px] w-[41px]"
          />
          <div className="text-[21px] font-medium box-border caret-transparent leading-[29.4px] mt-6 mb-4">
            Print
          </div>
          <div className="box-border caret-transparent">
            Download a high-quality PDF and print at home, or let us do the
            printing!
          </div>
        </div>
        <div className="box-border caret-transparent max-w-[380px] min-h-[auto] min-w-[auto] text-center w-full md:max-w-none md:w-[33.33%]">
          <img
            src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-53.svg"
            alt="Icon"
            className="box-border caret-transparent inline h-[41px] w-[41px]"
          />
          <div className="text-[21px] font-medium box-border caret-transparent leading-[29.4px] mt-6 mb-4">
            Share
          </div>
          <div className="box-border caret-transparent">
            Share your eCard easily via social media, text message, or email.
          </div>
        </div>
      </div>
      <hr className="box-border caret-transparent opacity-25 border-gray-200 mb-6 mx-8 border-solid md:mb-16" />
      <div className="box-border caret-transparent max-w-[760px] mx-4 md:mx-auto">
        <div className="relative box-border caret-transparent max-h-[268px] max-w-[760px] overflow-hidden mx-auto md:max-h-[142px]">
          <h2 className="text-[27px] font-medium box-border caret-transparent leading-[37.8px] mb-4">
            Online card maker by Greetings Island
          </h2>
          <p className="box-border caret-transparent tracking-[0.4px] leading-[25.6px] mb-4">
            Create custom-designed greeting cards with our free online card
            maker. Whether you&#39;re crafting a heartfelt message for a loved
            one or a playful note for a friend, our tool makes it simple and
            fun. Choose from thousands of designs, themes, templates, colors,
            and fonts, or upload your own images to create something truly
            unique. No more searching for the right card at the store—with our
            online card maker, you have the freedom to express exactly what you
            want. It&#39;s completely free and there&#39;s no sign-up required.
          </p>
          <p className="box-border caret-transparent tracking-[0.4px] leading-[25.6px] mb-4">
            From birthday cards to Christmas cards, our easy-to-use platform
            allows you to design and share the perfect card in just a few
            clicks. Present your message in a personalized greeting using our
            extensive gallery of online card templates. Print your card at home
            or share it using several of our convenient options.
          </p>
          <h3 className="text-[21px] font-medium box-border caret-transparent leading-[29.4px] mb-4">
            Easy and Convenient Sharing
          </h3>
          <p className="box-border caret-transparent tracking-[0.4px] leading-[25.6px] mb-4">
            Whether your card will be shared digitally, hand-delivered, or
            posted with a stamp, we&#39;ve got all the sharing options you need.
          </p>
          <p className="box-border caret-transparent tracking-[0.4px] leading-[25.6px] mb-4">
            Here are all the ways you can share your creation with our online
            card maker:
          </p>
          <ol className="box-border caret-transparent leading-[25.6px] ml-3.5 mb-4 pl-0">
            <li className="box-border caret-transparent tracking-[0.4px] list-decimal mb-4 pl-[3px]">
              <strong className="font-medium box-border caret-transparent">
                Share
              </strong>
              your eCard instantly on social media, text, messaging apps, or by
              email.
            </li>
            <li className="box-border caret-transparent tracking-[0.4px] list-decimal mb-4 pl-[3px]">
              <strong className="font-medium box-border caret-transparent">
                Print
              </strong>
              your custom invitation at home on any paper.
            </li>
            <li className="box-border caret-transparent tracking-[0.4px] list-decimal mb-4 pl-[3px]">
              <strong className="font-medium box-border caret-transparent">
                Download
              </strong>
              a high-quality PDF or image to take to a local print shop or
              office supply store.
            </li>
          </ol>
          <h3 className="text-[21px] font-medium box-border caret-transparent leading-[29.4px] mb-4">
            Design and Share from Anywhere
          </h3>
          <p className="box-border caret-transparent tracking-[0.4px] leading-[25.6px] mb-4">
            Our online card maker puts creativity in your hands. Select a
            template and our easy-to-use design tool walks you through the
            simple process of personalizing your card, step by step.
          </p>
          <p className="box-border caret-transparent tracking-[0.4px] leading-[25.6px] mb-4">
            Better yet, you can even design and share using our free mobile
            app—available on{" "}
            <a
              href="https://itunes.apple.com/us/app/greetings-island-card-maker/id1329922018"
              className="text-emerald-500 box-border caret-transparent"
            >
              iOS
            </a>
            and{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.greetingsisland.sam"
              className="text-emerald-500 box-border caret-transparent"
            >
              Android
            </a>
            . Sign in on the app with the same email &amp; password used on the
            website for a seamless experience! Access Saved drafts, favorites
            &amp; your premium subscription.
          </p>
          <p className="box-border caret-transparent tracking-[0.4px] leading-[25.6px] mb-4">
            Create a one-of-a-kind greeting with all of our customizable
            options:
          </p>
          <ul className="box-border caret-transparent list-item leading-[25.6px] ml-[17px] pl-0">
            <li className="box-border caret-transparent tracking-[0.4px] list-disc mb-4">
              Personalize: Add names, dates, and custom messages to customize
              your cards.
            </li>
            <li className="box-border caret-transparent tracking-[0.4px] list-disc mb-4">
              Add Photos: Upload personal photos, logos, or monograms to create
              a greeting card that is exclusively yours.
            </li>
            <li className="box-border caret-transparent tracking-[0.4px] list-disc mb-4">
              Choose Fonts: Along with selecting different font styles, you can
              also change the font colors and add special text effects like
              glitter and foil to create an elevated card design.
            </li>
            <li className="box-border caret-transparent tracking-[0.4px] list-disc mb-4">
              Select messages: If you&#39;re searching for the right thing to
              say, we offer pre-written messages to make creating your eCard
              even easier.
            </li>
            <li className="box-border caret-transparent tracking-[0.4px] list-disc mb-4">
              Add stickers: Choose from over 15 different sticker themes, like
              floral, seasons, or birthday, to add even more personality to your
              greeting card.
            </li>
          </ul>
          <h3 className="text-[21px] font-medium box-border caret-transparent leading-[29.4px] mb-4">
            Create Cards for Every Occasion
          </h3>
          <p className="box-border caret-transparent tracking-[0.4px] leading-[25.6px] mb-4">
            Our broad collection of printable cards includes popular themes
            like:
          </p>
          <p className="box-border caret-transparent tracking-[0.4px] leading-[25.6px] mb-4">
            <strong className="font-medium box-border caret-transparent">
              Birthday cards
            </strong>
            <br className="box-border caret-transparent" />
            Choose from over 1,000 free printable birthday cards. Whether
            you&#39;re looking for something fun and playful, elegant and
            classic, or quirky and unique, our diverse collection has the
            perfect design for every personality and style. Customizing your
            card is simple – choose a template, add{" "}
            <a
              href="https://www.greetingsisland.com/blog/60-ways-to-wish-happy-birthday-to-the-one-you-love/"
              className="text-emerald-500 box-border caret-transparent"
            >
              personal messages to say happy birthday
            </a>
            , and make it uniquely yours with different fonts, colors, and
            images.
          </p>
          <p className="box-border caret-transparent tracking-[0.4px] leading-[25.6px] mb-4">
            <strong className="font-medium box-border caret-transparent">
              Christmas cards
            </strong>
            <br className="box-border caret-transparent" />
            Celebrate the holiday season with custom Christmas cards made just
            for your friends and family. With over 300 beautiful templates to
            choose from, our card maker makes it easy to create free Christmas
            cards that capture the spirit of the season. Add{" "}
            <a
              href="https://www.greetingsisland.com/blog/100-merry-christmas-wishes-messages-quotes/"
              className="text-emerald-500 box-border caret-transparent"
            >
              warm holiday messages and wishes
            </a>
            , family photos, and finishing touches to make it truly
            one-of-a-kind.
          </p>
          <p className="box-border caret-transparent tracking-[0.4px] leading-[25.6px] mb-4">
            <strong className="font-medium box-border caret-transparent">
              Thank you cards
            </strong>
            <br className="box-border caret-transparent" />
            Choose from a variety of customizable thank you card templates for
            any occasion. We have teacher appreciation cards, wedding thank you
            cards, graduation thank yous, and more. Just add your personal
            message, and design a card that reflects your gratitude. Whether for
            a gift, event, or kind gesture, our card maker helps you create
            thoughtful thank you cards in minutes.
          </p>
          <p className="box-border caret-transparent tracking-[0.4px] leading-[25.6px] mb-4">
            <strong className="font-medium box-border caret-transparent">
              Anniversary cards
            </strong>
            <br className="box-border caret-transparent" />
            Celebrate love with personalized anniversary cards made just for
            them. Choose from a wide selection of customizable templates, add
            your heartfelt message, and design a card that perfectly captures
            the special bond you share. Whether you&#39;re creating a card for a
            special couple in your life or your own significant other, our
            easy-to-use card maker lets you create thoughtful, memorable
            anniversary cards in just a few clicks.
          </p>
          <p className="box-border caret-transparent tracking-[0.4px] leading-[25.6px] mb-4">
            <strong className="font-medium box-border caret-transparent">
              Holiday Cards for All Occasions
            </strong>
            <br className="box-border caret-transparent" />
            Our card maker helps you design cards for every holiday—not just
            Christmas. Consider creating personalized cards throughout the year
            for some of the most celebrated holidays.
          </p>
          <p className="box-border caret-transparent tracking-[0.4px] leading-[25.6px] mb-4">
            <strong className="font-medium box-border caret-transparent">
              Valentine&#39;s Day cards
            </strong>
            with elegant designs, vibrant colors, and customizable templates to
            create a card that perfectly captures your feelings.
          </p>
          <p className="box-border caret-transparent tracking-[0.4px] leading-[25.6px] mb-4">
            <strong className="font-medium box-border caret-transparent">
              Mother&#39;s Day Cards
            </strong>
            featuring thoughtful designs, soft color palettes, and warm messages
            that celebrate the love and care of every mom.
          </p>
          <p className="box-border caret-transparent tracking-[0.4px] leading-[25.6px] mb-4">
            <strong className="font-medium box-border caret-transparent">
              Father&#39;s Day Cards
            </strong>
            to celebrate the strength, wisdom, and love of every dad—using bold
            designs, strong typography, and themes to match your dad&#39;s
            personality.
          </p>
          <div className="box-border caret-transparent leading-[25.6px]">
            <h3 className="text-[21px] font-medium box-border caret-transparent leading-[29.4px] mb-4">
              Card Maker FAQ
            </h3>
            <div className="box-border caret-transparent">
              <h4 className="font-semibold box-border caret-transparent">
                What size cards can I create with the online card maker?
              </h4>
              <div className="box-border caret-transparent">
                <p className="box-border caret-transparent tracking-[0.4px] mb-4">
                  Our card maker supports three standard size options—easy for
                  printing at home or a professional print shop: Portrait
                  (5x7&quot;), Landscape (7x5&quot;), and Square (5x5&quot;).
                </p>
              </div>
            </div>
            <div className="box-border caret-transparent">
              <h4 className="font-semibold box-border caret-transparent">
                Are the cards folded or flat?
              </h4>
              <div className="box-border caret-transparent">
                <p className="box-border caret-transparent tracking-[0.4px] mb-4">
                  We offer both! Flat cards are great for sharing digitally,
                  while folded cards work well for printing or animated previews
                  via email. Choose your preferred layout on the card category
                  pages.
                </p>
              </div>
            </div>
            <div className="box-border caret-transparent">
              <h4 className="font-semibold box-border caret-transparent">
                What should I write in my custom greeting card?
              </h4>
              <div className="box-border caret-transparent">
                <p className="box-border caret-transparent tracking-[0.4px] mb-4">
                  You can write your own message or use one of our Suggested
                  Messages in the editor. We also provide resources like
                  birthday wishes, anniversary messages, and graduation quotes
                  to help inspire you.
                </p>
              </div>
            </div>
            <div className="box-border caret-transparent">
              <h4 className="font-semibold box-border caret-transparent">
                What kind of paper is best for printing cards at home?
              </h4>
              <div className="box-border caret-transparent">
                <p className="box-border caret-transparent tracking-[0.4px] mb-4">
                  Heavyweight cardstock is ideal (80 lb to 110 lb). However, 65
                  lb cardstock or high-quality printer paper can also work well,
                  depending on your printer and preference.
                </p>
              </div>
            </div>
            <div className="box-border caret-transparent">
              <h4 className="font-semibold box-border caret-transparent">
                Can I save my card design and edit it later?
              </h4>
              <div className="box-border caret-transparent">
                <p className="box-border caret-transparent tracking-[0.4px] mb-4">
                  Yes! Our card maker automatically lets you save drafts and
                  return to them later. You can even name your drafts to keep
                  track of multiple designs.
                </p>
              </div>
            </div>
            <div className="box-border caret-transparent">
              <h4 className="font-semibold box-border caret-transparent">
                Can I preview my eCard before finalizing it?
              </h4>
              <div className="box-border caret-transparent">
                <p className="box-border caret-transparent tracking-[0.4px] mb-4">
                  Yes, you&#39;ll be able to preview an animated version before
                  sharing it. For printed cards, you can also preview how the
                  design will appear on paper before downloading or printing.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bg-[linear-gradient(rgba(255,255,255,0),rgb(255,255,255))] box-border caret-transparent h-[50px] leading-[25.6px] pointer-events-none w-full left-0 bottom-0"></div>
        </div>
        <div className="box-border caret-transparent pb-14">
          <div className="text-sm font-medium box-border caret-transparent tracking-[0.7px] leading-[21px] mt-4">
            Read more
          </div>
          <div className="text-sm font-medium box-border caret-transparent hidden tracking-[0.7px] leading-[21px] mt-4">
            Read less
          </div>
        </div>
      </div>
    </div>
  );
};
