const faqData = [
  {
    question: "How does the billing work?",
    answer:
      "Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.",
  },
  {
    question: "Can I get a refund for my subscription?",
    answer:
      "We offer a 30-day money-back guarantee for most subscription plans. If you are not satisfied within the first 30 days, you can request a full refund.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Log in to your account and navigate to the subscription management page to cancel your subscription and stop future billing.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "We offer a free trial for a limited time with access to selected features without charges.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can contact support by submitting a request through the website or emailing support@ourwebsite.com.",
  },
  {
    question: "Do you offer discounts or promotions?",
    answer:
      "We may offer discounts occasionally. Stay updated by subscribing to our newsletter or following us on social media.",
  },
];

const FAQ = () => {
  return (
    <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
      <div className="mx-auto px-5">
        
        {/* Header */}
        <div className="flex flex-col items-center">
          <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
            FAQ
          </h2>
          <p className="mt-3 text-lg text-neutral-500 md:text-xl">
            Frequently asked questions
          </p>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          {faqData.map((item, index) => (
            <div key={index} className="py-5">
              <details className="group">
                
                {/* Question */}
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>{item.question}</span>

                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>

                {/* Answer */}
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  {item.answer}
                </p>
              </details>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQ;