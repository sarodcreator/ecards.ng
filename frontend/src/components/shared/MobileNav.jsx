import { MobileNavItem } from "@/components/shared/MobileNavItem";
import { MobileNavFooter } from "@/components/shared/MobileNavFooter";

export const MobileNav = () => {
  return (
    <div className="fixed bg-white box-border caret-transparent w-full z-[300] overflow-hidden top-14 bottom-full">
      <nav className="relative box-border caret-transparent h-full w-full overflow-scroll pt-6">
        <div className="box-border caret-transparent mx-4 pb-3">
          <a className="items-center box-border caret-transparent flex" href='#'>
            <img
              src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-19.svg"
              alt="Icon"
              className="box-border caret-transparent h-6 w-[25px]"
            />
            <div className="text-violet-500 font-semibold box-border caret-transparent min-h-[auto] min-w-[auto] pl-2">
              Go Premium
            </div>
          </a>
        </div>
        <div className="sticky items-center bg-white box-border caret-transparent hidden pt-4 pb-3 px-5 top-0">
          <img
            src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-20.svg"
            alt="Icon"
            className="box-border caret-transparent inline h-6 w-[25px]"
          />
          <span className="font-semibold box-border caret-transparent ml-1">
            All
          </span>
        </div>
        <ul className="box-border caret-transparent list-item pl-0">
          <MobileNavItem
            iconSrc="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-21.svg"
            label="Wedding"
            sections={[
              {
                title: "Wedding invites",
                titleHref: "/invitations/wedding",
                items: [
                  { label: "AI", href: "/invitations/wedding/theme-ai" },
                  {
                    label: "Elegant",
                    href: "/invitations/wedding/theme-elegant",
                  },
                  {
                    label: "Floral & Botanical",
                    href: "/invitations/wedding/theme-floral",
                  },
                  {
                    label: "Rustic",
                    href: "/invitations/wedding/theme-rustic",
                  },
                  {
                    label: "Simple",
                    href: "/invitations/wedding/theme-simple",
                  },
                  {
                    label: "Modern",
                    href: "/invitations/wedding/theme-modern",
                  },
                  {
                    label: "Indian",
                    href: "/invitations/wedding/theme-indian",
                  },
                  {
                    label: "Vintage",
                    href: "/invitations/wedding/theme-vintage",
                  },
                  { label: "Beach", href: "/invitations/wedding/theme-beach" },
                  { label: "Photo", href: "/invitations/wedding/theme-photo" },
                  {
                    label: "Destination",
                    href: "/invitations/wedding/theme-destination",
                  },
                  {
                    label: "Premium",
                    href: "/invitations/wedding/theme-premium",
                  },
                ],
              },
              {
                title: "Save the date",
                titleHref: "/announcements/save-the-date",
                items: [
                  {
                    label: "Rustic",
                    href: "/announcements/save-the-date/theme-rustic",
                  },
                  {
                    label: "Simple",
                    href: "/announcements/save-the-date/theme-simple",
                  },
                  {
                    label: "Destination",
                    href: "/announcements/save-the-date/theme-destination",
                  },
                  {
                    label: "Photo",
                    href: "/announcements/save-the-date/theme-photo",
                  },
                ],
              },
              {
                title: "Party",
                items: [
                  {
                    label: "Engagement party",
                    href: "/invitations/wedding/engagement-party",
                  },
                  {
                    label: "Bridal shower",
                    href: "/invitations/wedding/bridal-shower",
                  },
                  {
                    label: "Bachelor party",
                    href: "/invitations/wedding/bachelor-party",
                  },
                  {
                    label: "Bachelorette party",
                    href: "/invitations/wedding/bachelorette-party",
                  },
                  {
                    label: "Rehearsal dinner",
                    href: "/invitations/wedding/rehearsal-dinner",
                  },
                ],
              },
              {
                title: "Stationery",
                items: [
                  {
                    label: "RSVP cards",
                    href: "/invitations/wedding/response-and-rsvp-cards",
                  },
                  {
                    label: "Bridesmaid cards",
                    href: "/cards/events-and-occasions/bridesmaid",
                  },
                  {
                    label: "Engagement announcements",
                    href: "/announcements/engagement",
                  },
                  {
                    label: "Wedding announcements",
                    href: "/announcements/wedding",
                  },
                ],
              },
              {
                title: "Greetings",
                titleHref: "/cards/events-and-occasions/wedding",
                items: [
                  {
                    label: "Wedding",
                    href: "/cards/events-and-occasions/wedding",
                  },
                  { label: "Thank you", href: "/cards/thank-you/wedding" },
                  {
                    label: "Engagement",
                    href: "/cards/events-and-occasions/engagement",
                  },
                ],
              },
            ]}
            bottomActions={[
              {
                href: "/invitations/upload-your-own",
                iconSrc:
                  "https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-23.svg",
                label: "Upload your own",
              },
            ]}
          />
          <MobileNavItem
            iconSrc="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-24.svg"
            label="Birthday"
            sections={[
              {
                title: "Birthday invites",
                titleHref: "/invitations/birthday",
                items: [
                  { label: "Kids", href: "/invitations/birthday/kids" },
                  { label: "Women's", href: "/invitations/birthday/womens" },
                  {
                    label: "Add a photo",
                    href: "/invitations/birthday/add-a-photo",
                  },
                  { label: "Men's", href: "/invitations/birthday/mens" },
                  { label: "Babies", href: "/invitations/birthday/babies" },
                  { label: "Teens", href: "/invitations/birthday/teen" },
                  {
                    label: "Save the date",
                    href: "/invitations/birthday/theme-save_the_date",
                  },
                  {
                    label: "Surprise",
                    href: "/invitations/birthday/theme-surprise",
                  },
                ],
              },
              {
                title: "Kids milestones",
                items: [
                  {
                    label: "1st birthday",
                    href: "/invitations/birthday/1st-birthday",
                  },
                  {
                    label: "2nd Birthday",
                    href: "/invitations/birthday/babies/2nd-birthday",
                  },
                  {
                    label: "10th Birthday",
                    href: "/invitations/birthday/milestone/10th-birthday",
                  },
                  {
                    label: "13th Birthday",
                    href: "/invitations/birthday/milestone/13th-birthday",
                  },
                  {
                    label: "Sweet 16",
                    href: "/invitations/birthday/milestone/sweet-16-birthday",
                  },
                  {
                    label: "Quinceañera",
                    href: "/invitations/birthday/milestone/quinceanera",
                  },
                  {
                    label: "Bar & bat mitzvah",
                    href: "/invitations/party/bar-mitzvah-and-bat-mitzvah",
                  },
                ],
              },
              {
                title: "Adult milestones",
                titleHref: "/invitations/birthday/milestone",
                items: [
                  {
                    label: "18th birthday",
                    href: "/invitations/birthday/milestone/18th-birthday",
                  },
                  {
                    label: "21st birthday",
                    href: "/invitations/birthday/milestone/21st-birthday",
                  },
                  {
                    label: "25th birthday",
                    href: "/invitations/birthday/milestone/25th-birthday",
                  },
                  {
                    label: "30th birthday",
                    href: "/invitations/birthday/milestone/30th-birthday",
                  },
                  {
                    label: "40th birthday",
                    href: "/invitations/birthday/milestone/40th-birthday",
                  },
                  {
                    label: "50th birthday",
                    href: "/invitations/birthday/milestone/50th-birthday",
                  },
                  {
                    label: "60th birthday",
                    href: "/invitations/birthday/milestone/60th-birthday",
                  },
                  {
                    label: "70th birthday",
                    href: "/invitations/birthday/milestone/70th-birthday",
                  },
                  {
                    label: "80th birthday",
                    href: "/invitations/birthday/milestone/80th-birthday",
                  },
                  {
                    label: "90th birthday",
                    href: "/invitations/birthday/milestone/90th-birthday",
                  },
                ],
              },
              {
                title: "Invite themes",
                titleHref: "/invitations/birthday",
                items: [
                  { label: "AI", href: "/invitations/birthday/theme-ai" },
                  {
                    label: "Princess",
                    href: "/invitations/birthday/theme-princess",
                  },
                  {
                    label: "Animal",
                    href: "/invitations/birthday/theme-animal",
                  },
                  {
                    label: "Unicorn",
                    href: "/invitations/birthday/theme-unicorn",
                  },
                  {
                    label: "Butterfly",
                    href: "/invitations/birthday/theme-butterfly",
                  },
                  { label: "Sleepover", href: "/invitations/party/sleepover" },
                  {
                    label: "Dinosaur",
                    href: "/invitations/birthday/theme-dinosaur",
                  },
                  {
                    label: "Rainbow",
                    href: "/invitations/birthday/theme-rainbow",
                  },
                  {
                    label: "Mermaid",
                    href: "/invitations/birthday/theme-mermaid",
                  },
                  {
                    label: "Gaming",
                    href: "/invitations/birthday/theme-gaming",
                  },
                ],
              },
              {
                title: "Birthday cards",
                titleHref: "/cards/birthday",
                items: [
                  { label: "Kids", href: "/cards/birthday/kids" },
                  { label: "Add a photo", href: "/cards/birthday/add-a-photo" },
                  { label: "Funny", href: "/cards/birthday/funny" },
                  { label: "Milestone", href: "/cards/birthday/milestone" },
                  { label: "Thank you", href: "/cards/thank-you/birthday" },
                  { label: "Belated", href: "/cards/birthday/belated" },
                  { label: "Family", href: "/cards/birthday/family" },
                  { label: "Cards for her", href: "/cards/birthday/for-her" },
                  { label: "Cards for him", href: "/cards/birthday/for-him" },
                ],
              },
            ]}
            bottomActions={[
              {
                href: "/invitations/upload-your-own",
                iconSrc:
                  "https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-23.svg",
                label: "Upload your own",
              },
            ]}
          />
          <MobileNavItem
            iconSrc="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-25.svg"
            label="Baby & Kids"
            sections={[
              {
                title: "Baby",
                titleHref: "/invitations/baby-shower",
                items: [
                  { label: "Baby shower", href: "/invitations/baby-shower" },
                  {
                    label: "Gender reveal",
                    href: "/invitations/baby-shower/gender-reveal",
                  },
                  {
                    label: "Baby sprinkle",
                    href: "/invitations/baby-shower/baby-sprinkle",
                  },
                  {
                    label: "Sip & See",
                    href: "/invitations/baby-shower/sip-and-see",
                  },
                ],
              },
              {
                title: "Baby shower themes",
                titleHref: "/invitations/baby-shower",
                items: [
                  {
                    label: "Floral",
                    href: "/invitations/baby-shower/theme-floral",
                  },
                  {
                    label: "Woodland",
                    href: "/invitations/baby-shower/theme-woodland",
                  },
                  {
                    label: "Butterfly",
                    href: "/invitations/baby-shower/theme-butterfly",
                  },
                  {
                    label: "Safari",
                    href: "/invitations/baby-shower/theme-safari",
                  },
                  {
                    label: "Princess",
                    href: "/invitations/baby-shower/theme-princess",
                  },
                  {
                    label: "Rustic",
                    href: "/invitations/baby-shower/theme-rustic",
                  },
                  {
                    label: "Elephant",
                    href: "/invitations/baby-shower/theme-elephant",
                  },
                  {
                    label: "Rainbow",
                    href: "/invitations/baby-shower/theme-rainbow",
                  },
                  {
                    label: "Dinosaur",
                    href: "/invitations/baby-shower/theme-dinosaur",
                  },
                  {
                    label: "Fiesta",
                    href: "/invitations/baby-shower/theme-fiesta",
                  },
                ],
              },
              {
                title: "Announcements",
                titleHref: "/announcements/birth",
                items: [
                  { label: "Birth", href: "/announcements/birth" },
                  { label: "Pregnancy", href: "/announcements/pregnancy" },
                ],
              },
              {
                title: "Religious",
                titleHref: "/invitations/baptism-and-christening",
                items: [
                  {
                    label: "Baptism & Christening",
                    href: "/invitations/baptism-and-christening",
                  },
                  {
                    label: "Bar & Bat Mitzvah",
                    href: "/invitations/party/bar-mitzvah-and-bat-mitzvah",
                  },
                  { label: "First communion", href: "/invitations/communion" },
                ],
              },
              {
                title: "Birthday invites",
                titleHref: "/invitations/birthday",
                items: [
                  { label: "Kids", href: "/invitations/birthday/kids" },
                  {
                    label: "1st birthday",
                    href: "/invitations/birthday/1st-birthday",
                  },
                  {
                    label: "Sweet 16",
                    href: "/invitations/birthday/milestone/sweet-16-birthday",
                  },
                  {
                    label: "Quinceanera",
                    href: "/invitations/birthday/milestone/quinceanera",
                  },
                ],
              },
            ]}
            bottomActions={[
              {
                href: "/invitations/upload-your-own",
                iconSrc:
                  "https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-23.svg",
                label: "Upload your own",
              },
            ]}
          />
          <MobileNavItem
            iconSrc="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-26.svg"
            label="Party"
            sections={[
              {
                title: "Celebrations",
                titleHref: "/invitations/party",
                items: [
                  { label: "AI", href: "/invitations/party/theme-ai" },
                  {
                    label: "Graduation party",
                    href: "/invitations/party/graduation-party",
                  },
                  {
                    label: "Anniversary",
                    href: "/invitations/party/anniversary",
                  },
                  {
                    label: "Retirement & Farewell",
                    href: "/invitations/party/retirement-and-farewell",
                  },
                  {
                    label: "Engagement party",
                    href: "/invitations/wedding/engagement-party",
                  },
                  { label: "Baby shower", href: "/invitations/baby-shower" },
                  {
                    label: "Rehearsal dinner",
                    href: "/invitations/wedding/rehearsal-dinner",
                  },
                  {
                    label: "Bridal shower",
                    href: "/invitations/wedding/bridal-shower",
                  },
                  {
                    label: "Bachelor party",
                    href: "/invitations/wedding/bachelor-party",
                  },
                  { label: "Memorial", href: "/announcements/memorial" },
                  {
                    label: "Save the date",
                    href: "/invitations/party/theme-save_the-date",
                  },
                ],
              },
              {
                title: "Gatherings",
                titleHref: "/invitations/party",
                items: [
                  {
                    label: "Housewarming",
                    href: "/invitations/party/housewarming",
                  },
                  {
                    label: "Dinner party",
                    href: "/invitations/party/dinner-party",
                  },
                  {
                    label: "Cocktail party",
                    href: "/invitations/party/cocktail-party",
                  },
                  {
                    label: "Lunch & Brunch",
                    href: "/invitations/party/brunch",
                  },
                  {
                    label: "Family reunion",
                    href: "/invitations/party/family-reunion",
                  },
                  {
                    label: "Back to school",
                    href: "/invitations/party/back-to-school",
                  },
                  { label: "Sleepover", href: "/invitations/party/sleepover" },
                  { label: "BBQ", href: "/invitations/party/bbq" },
                  {
                    label: "Potluck",
                    href: "/invitations/party/dinner-party/potluck",
                  },
                  {
                    label: "Summer & Pool",
                    href: "/invitations/party/summer-and-pool-party",
                  },
                  {
                    label: "Luau",
                    href: "/invitations/party/summer-and-pool-party/luau",
                  },
                  {
                    label: "Sports & Games",
                    href: "/invitations/party/sports-and-games",
                  },
                  { label: "Picnic", href: "/invitations/party/theme-picnic" },
                ],
              },
              {
                title: "Holidays",
                titleHref: "/invitations/holidays",
                items: [
                  { label: "Easter", href: "/invitations/holidays/easter" },
                  {
                    label: "4th of July",
                    href: "/invitations/holidays/4th-of-july",
                  },
                  {
                    label: "Labor day",
                    href: "/invitations/holidays/labor-day",
                  },
                  {
                    label: "Rosh Hashanah",
                    href: "/invitations/holidays/rosh-hashanah",
                  },
                  {
                    label: "Halloween",
                    href: "/invitations/holidays/halloween",
                  },
                  { label: "Diwali", href: "/invitations/holidays/diwali" },
                  {
                    label: "Christmas",
                    href: "/invitations/holidays/christmas",
                  },
                  {
                    label: "Thanksgiving",
                    href: "/invitations/holidays/thanksgiving",
                  },
                ],
              },
              {
                title: "Religious",
                items: [
                  {
                    label: "Baptism & Christening",
                    href: "/invitations/baptism-and-christening",
                  },
                  {
                    label: "Bar & Bat Mitzvah",
                    href: "/invitations/party/bar-mitzvah-and-bat-mitzvah",
                  },
                  { label: "First communion", href: "/invitations/communion" },
                ],
              },
              {
                title: "Business events",
                titleHref: "/invitations/professional-events",
                items: [
                  {
                    label: "Gala",
                    href: "/invitations/professional-events/gala",
                  },
                  {
                    label: "Grand opening",
                    href: "/invitations/professional-events/grand-opening",
                  },
                  {
                    label: "Open house",
                    href: "/invitations/professional-events/open-house",
                  },
                  {
                    label: "Cocktail party",
                    href: "/invitations/party/cocktail-party",
                  },
                  {
                    label: "Dinner party",
                    href: "/invitations/party/dinner-party",
                  },
                  {
                    label: "Retirement",
                    href: "/invitations/party/retirement-and-farewell",
                  },
                  {
                    label: "Save the date",
                    href: "/invitations/professional-events/theme-save_the-date",
                  },
                ],
              },
            ]}
            bottomActions={[
              {
                href: "/invitations/upload-your-own",
                iconSrc:
                  "https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-23.svg",
                label: "Upload your own",
              },
            ]}
          />
          <MobileNavItem
            iconSrc="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-27.svg"
            label="Greeting cards"
            sections={[
              {
                title: "Birthday",
                titleHref: "/cards/birthday",
                items: [
                  { label: "AI", href: "/cards/birthday/theme-ai" },
                  { label: "Kids", href: "/cards/birthday/kids" },
                  { label: "Funny", href: "/cards/birthday/funny" },
                  { label: "Milestone", href: "/cards/birthday/milestone" },
                  { label: "Belated", href: "/cards/birthday/belated" },
                  { label: "Add a photo", href: "/cards/birthday/add-a-photo" },
                  { label: "Family", href: "/cards/birthday/family" },
                  { label: "For her", href: "/cards/birthday/for-her" },
                  { label: "For him", href: "/cards/birthday/for-him" },
                ],
              },
              {
                title: "Events & Occasions",
                titleHref: "/cards/events-and-occasions",
                items: [
                  {
                    label: "New baby",
                    href: "/cards/events-and-occasions/new-baby",
                  },
                  {
                    label: "Graduation",
                    href: "/cards/events-and-occasions/graduation",
                  },
                  {
                    label: "Wedding",
                    href: "/cards/events-and-occasions/wedding",
                  },
                  {
                    label: "Anniversary",
                    href: "/cards/events-and-occasions/anniversary",
                  },
                  {
                    label: "Retirement",
                    href: "/cards/events-and-occasions/retirement",
                  },
                  {
                    label: "Engagement",
                    href: "/cards/events-and-occasions/engagement",
                  },
                  {
                    label: "Bar Mitzvah",
                    href: "/cards/events-and-occasions/bar-mitzvah",
                  },
                  {
                    label: "New home",
                    href: "/cards/events-and-occasions/new-home",
                  },
                ],
              },
              {
                title: "Thank you",
                titleHref: "/cards/thank-you",
                items: [
                  { label: "General", href: "/cards/thank-you" },
                  { label: "Graduation", href: "/cards/thank-you/graduation" },
                  {
                    label: "Teacher appreciation",
                    href: "/cards/thank-you/teacher-appreciation",
                  },
                  {
                    label: "For support",
                    href: "/cards/thank-you/for-support",
                  },
                  { label: "Wedding", href: "/cards/thank-you/wedding" },
                  { label: "Birthday", href: "/cards/thank-you/birthday" },
                  { label: "Baby", href: "/cards/thank-you/baby" },
                  { label: "Baptism", href: "/cards/thank-you/baptism" },
                ],
              },
              {
                title: "Thoughts & Feelings",
                titleHref: "/cards/thoughts-and-feelings",
                items: [
                  {
                    label: "Get well",
                    href: "/cards/thoughts-and-feelings/get-well",
                  },
                  {
                    label: "Sympathy",
                    href: "/cards/thoughts-and-feelings/sympathy",
                  },
                  {
                    label: "Love & Romance",
                    href: "/cards/thoughts-and-feelings/love-and-romance",
                  },
                  {
                    label: "Congratulations",
                    href: "/cards/thoughts-and-feelings/congratulations",
                  },
                  {
                    label: "Good luck",
                    href: "/cards/thoughts-and-feelings/good-luck",
                  },
                  {
                    label: "Sorry",
                    href: "/cards/thoughts-and-feelings/sorry",
                  },
                  {
                    label: "Miss you",
                    href: "/cards/thoughts-and-feelings/miss-you",
                  },
                  {
                    label: "Farewell & goodbye",
                    href: "/cards/thoughts-and-feelings/good-luck/farewell-and-goodbye",
                  },
                ],
              },
              {
                title: "Holidays",
                titleHref: "/cards/holidays",
                items: [
                  { label: "Passover", href: "/cards/holidays/passover" },
                  { label: "Easter", href: "/cards/holidays/easter" },
                  {
                    label: "Cinco De Mayo",
                    href: "/cards/holidays/cinco-de-mayo",
                  },
                  {
                    label: "Mother's day",
                    href: "/cards/holidays/mothers-day",
                  },
                  {
                    label: "Father's day",
                    href: "/cards/holidays/fathers-day",
                  },
                  { label: "4th of July", href: "/cards/holidays/4th-of-july" },
                  {
                    label: "Rosh Hashanah",
                    href: "/cards/holidays/rosh-hashanah",
                  },
                  {
                    label: "Grandparents day",
                    href: "/cards/holidays/grandparents-day",
                  },
                ],
              },
              {
                title: "Announcements",
                items: [
                  { label: "Graduation", href: "/announcements/graduation" },
                  { label: "Memorial", href: "/announcements/memorial" },
                  {
                    label: "Save the date",
                    href: "/announcements/save-the-date",
                  },
                  { label: "Engagement", href: "/announcements/engagement" },
                  { label: "Wedding", href: "/announcements/wedding" },
                  { label: "Pregnancy", href: "/announcements/pregnancy" },
                  { label: "Birth", href: "/announcements/birth" },
                  { label: "Moving", href: "/announcements/moving" },
                ],
              },
            ]}
            bottomActions={[
              {
                href: "/envelopes",
                iconSrc:
                  "https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-28.svg",
                label: "Envelopes",
              },
              {
                href: "/cards/upload-your-own",
                iconSrc:
                  "https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-23.svg",
                label: "Upload your own",
              },
            ]}
          />
          <MobileNavItem
            iconSrc="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-29.svg"
            label="Trending"
            isTrending
            trendingCards={[
              {
                href: "/cards/holidays/easter",
                bgColor: "bg-violet-200",
                imageSrc: "https://c.animaapp.com/mnmuvo0mFLk49O/assets/34.jpg",
                imageTitle: "Easter cards",
                label: "Easter cards",
              },
              {
                href: "/invitations/party/graduation-party",
                bgColor: "bg-violet-200",
                imageSrc: "https://c.animaapp.com/mnmuvo0mFLk49O/assets/35.jpg",
                imageTitle: "Graduation parties",
                label: "Graduation parties",
              },
            ]}
            trendingLinks={[
              { href: "/invitations/party/brunch", label: "Brunch invites" },
              {
                href: "/invitations/party/graduation-party",
                label: "Graduation Parties",
              },
              { href: "/cards/holidays/easter", label: "Easter cards" },
              {
                href: "/invitations/wedding/bridal-shower?sort=1",
                label: "Bridal shower",
              },
            ]}
          />
        </ul>
        <MobileNavFooter />
      </nav>
      <div className="absolute bg-white border-b-zinc-800 border-l-zinc-800 border-r-zinc-800 border-t-gray-200 box-border caret-transparent hidden pt-4 pb-6 px-4 border-t bottom-0 inset-x-0">
        <p className="box-border caret-transparent text-center mb-2">
          Create a card with AI
        </p>
        <a
          href="#"
          className="text-base items-center bg-[linear-gradient(84deg,rgb(73,104,208)_0.2%,rgb(127,73,208)_32.02%,rgb(255,89,133)_91.4%)] box-border caret-transparent gap-x-2 flex h-12 justify-center leading-[48px] gap-y-2 w-full mb-3 px-4 rounded-[40px]"
        >
          <img
            src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-30.svg"
            alt="Icon"
            className="box-border caret-transparent h-6 w-6"
          />
          <span className="text-white box-border caret-transparent block mx-2">
            Magic card
          </span>
        </a>
        <div className="items-center box-border caret-transparent gap-x-1 flex flex-col gap-y-1">
          <span className="box-border caret-transparent block">
            Compose a beautiful message
          </span>
          <a
            href="/wishes-generator"
            className="items-center box-border caret-transparent gap-x-2 flex gap-y-2"
          >
            <img
              src="https://c.animaapp.com/mnmuvo0mFLk49O/assets/icon-31.svg"
              alt="Icon"
              className="box-border caret-transparent h-6 w-6"
            />
            <span className="bg-clip-text bg-[linear-gradient(85deg,rgb(73,104,208)_-16.26%,rgb(141,81,231)_19.11%,rgb(255,89,133)_85.15%)] box-border caret-transparent block">
              Magic wish
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
