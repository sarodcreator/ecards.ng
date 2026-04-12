import { FooterCategory } from "@/sections/Footer/components/FooterCategory";
import { FooterCompanyLinks } from "@/sections/Footer/components/FooterCompanyLinks";

export const FooterLinks = () => {
  return (
    <div className="box-border caret-transparent gap-x-[normal] block justify-normal min-h-[auto] min-w-[auto] gap-y-[normal] w-full py-0 md:gap-x-8 md:flex-row md:justify-between md:gap-y-8 md:pt-6 md:pb-12">
      <div className="[align-items:normal] box-border caret-transparent gap-x-2 flex flex-row flex-wrap justify-center min-h-[auto] min-w-[auto] gap-y-2 py-4 md:items-start md:flex-col md:justify-start md:py-0">
        <div className="[align-items:normal] box-border caret-transparent gap-x-2 flex flex-row min-h-[auto] min-w-[auto] gap-y-2 md:items-start md:flex-col">
          <a
            href="/invitations"
            className="text-sm font-semibold items-center bg-white box-border caret-transparent flex h-10 justify-center tracking-[0.7px] leading-10 min-h-[auto] min-w-[auto] px-3 rounded-[40px]"
          >
            <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] mx-2">
              Invitations
            </span>
          </a>
          <a
            href="/cards"
            className="text-sm font-semibold items-center bg-white box-border caret-transparent flex h-10 justify-center tracking-[0.7px] leading-10 min-h-[auto] min-w-[auto] px-3 rounded-[40px]"
          >
            <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] mx-2">
              {" "}
              Cards
            </span>
          </a>
          <a
            href="/online-rsvp"
            className="text-sm font-semibold items-center bg-white box-border caret-transparent flex h-10 justify-center tracking-[0.7px] leading-10 min-h-[auto] min-w-[auto] px-3 rounded-[40px]"
          >
            <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] mx-2">
              RSVP
            </span>
          </a>
          <a
            href="/ai-invitation-generator"
            className="text-sm font-semibold items-center bg-white box-border caret-transparent flex h-10 justify-center tracking-[0.7px] leading-10 min-h-[auto] min-w-[auto] px-3 rounded-[40px]"
          >
            <span className="box-border caret-transparent block min-h-[auto] min-w-[auto] mx-2">
              AI
            </span>
          </a>
        </div>
      </div>
      <div className="bg-transparent box-border caret-transparent hidden basis-auto shrink min-h-0 min-w-0 md:bg-gray-200 md:block md:basis-px md:shrink-0 md:min-h-[auto] md:min-w-[auto]"></div>
      <div className="box-border caret-transparent basis-0 grow-0 min-h-[auto] min-w-[auto] px-2 md:grow md:px-0">
        <FooterCategory
          title="Wedding"
          links={[
            { href: "/invitations/wedding", label: "Wedding invites" },
            { href: "/announcements/save-the-date", label: "Save the date" },
            {
              href: "/invitations/wedding/engagement-party",
              label: "Engagement party",
            },
            {
              href: "/invitations/wedding/bridal-shower",
              label: "Bridal shower",
            },
            {
              href: "/invitations/wedding/response-and-rsvp-cards",
              label: "RSVP cards",
            },
            {
              href: "/invitations/wedding/bachelorette-party",
              label: "Bachelorette Party",
            },
          ]}
        />
      </div>
      <FooterCategory
        title="Birthday"
        links={[
          { href: "/invitations/birthday", label: "Birthday invites" },
          { href: "/cards/birthday", label: "Birthday cards" },
          { href: "/invitations/birthday/milestone", label: "Milestone" },
          { href: "/invitations/birthday/1st-birthday", label: "1st Birthday" },
          { href: "/invitations/birthday/kids", label: "Kids" },
          { href: "/invitations/birthday/theme-surprise", label: "Surprise" },
        ]}
        wrapperClassName="box-border caret-transparent basis-0 grow-0 min-h-[auto] min-w-[auto] px-2 md:grow md:px-0"
      />
      <FooterCategory
        title="Baby & Kids"
        links={[
          { href: "/invitations/baby-shower", label: "Baby shower" },
          {
            href: "/invitations/baby-shower/gender-reveal",
            label: "Gender Reveal",
          },
          {
            href: "/invitations/baptism-and-christening",
            label: "Baptism & Christening",
          },
          {
            href: "/invitations/baby-shower/baby-sprinkle",
            label: "Baby sprinkle",
          },
          { href: "/announcements/birth", label: "Birth announcements" },
          { href: "/invitations/communion", label: "Communion" },
        ]}
        wrapperClassName="box-border caret-transparent basis-0 grow-0 min-h-[auto] min-w-[auto] px-2 md:grow md:px-0"
      />
      <FooterCategory
        title="Party"
        links={[
          { href: "/invitations/party/housewarming", label: "Housewarming" },
          {
            href: "/invitations/party/graduation-party",
            label: "Graduation Party",
          },
          { href: "/invitations/party/dinner-party", label: "Dinner Party" },
          { href: "/invitations/party/anniversary", label: "Anniversary" },
          {
            href: "/invitations/party/retirement-and-farewell",
            label: "Retirement & Farewell",
          },
          {
            href: "/invitations/professional-events",
            label: "Professional Events",
          },
        ]}
        wrapperClassName="box-border caret-transparent basis-0 grow-0 min-h-[auto] min-w-[auto] px-2 md:grow md:px-0"
      />
      <FooterCategory
        title="Greeting cards"
        links={[
          { href: "/cards/birthday", label: "Birthday cards" },
          { href: "/cards/thank-you", label: "Thank you" },
          {
            href: "/cards/events-and-occasions/anniversary",
            label: "Anniversary",
          },
          { href: "/cards/holidays", label: "Holidays" },
          { href: "/cards/thoughts-and-feelings/get-well", label: "Get well" },
          { href: "/cards/events-and-occasions/new-baby", label: "New baby" },
        ]}
        wrapperClassName="box-border caret-transparent basis-0 grow-0 min-h-[auto] min-w-[auto] px-2 md:grow md:px-0"
      />
      <div className="bg-transparent box-border caret-transparent hidden basis-auto shrink min-h-0 min-w-0 md:bg-gray-200 md:block md:basis-px md:shrink-0 md:min-h-[auto] md:min-w-[auto]"></div>
      <FooterCompanyLinks />
    </div>
  );
};
