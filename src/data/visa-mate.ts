export const whatsappNumber = "918955229807";
export const whatsappDisplayNumber = "+91 89552 29807";
export const phoneDisplayNumber = "8955229807";
export const contactEmail = "askvisamate@gmail.com";

export const whatsappMessage =
  "Hello Visa Mate, I would like assistance with my USA B1/B2 visa application.";

export function buildWhatsAppLink(message: string = whatsappMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navigationItems = [
  { label: "Payment Structure", href: "/#payment-structure" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
  // { label: "Terms", href: "/terms-and-conditions" },
];

export const heroContent = {
  eyebrow: "USA B1/B2 Visa Consultancy",
  headingLines: ["USA Tourist & Business", "Visa Made Simple."],
  description:
    "Expert guidance for DS-160, Appointment Booking & Visa Interview Preparation.",
  primaryButton: "Apply on WhatsApp",
  secondaryButton: "Free Consultation",
  trustStatement: "100% Transparent Pricing – What You See Is What You Pay.",
};

export type HeroBackgroundImage = {
  src: string;
  alt: string;
};

// Add more entries here to extend the hero's background cycle — no other code changes needed.
export const heroBackgroundImages: HeroBackgroundImage[] = [
  {
    src: "/images/hero/golden-gate-bridge-dusk.png",
    alt: "The Golden Gate Bridge in San Francisco at dusk",
  },
  {
    src: "/images/hero/statue-of-liberty-nyc-skyline.png",
    alt: "The Statue of Liberty with the New York City skyline at dusk",
  },
  {
    src: "/images/hero/manhattan-skyline-dusk.png",
    alt: "The Lower Manhattan skyline and One World Trade Center at dusk",
  },
  {
    src: "/images/hero/us-capitol-washington-dc.png",
    alt: "The U.S. Capitol Building in Washington, D.C. at dusk",
  },
  {
    src: "/images/hero/airport-terminal-dusk.png",
    alt: "A modern airport terminal with aircraft at dusk",
  },
  {
    src: "/images/hero/office-building-us-flags-dusk.png",
    alt: "A modern glass office building with U.S. flags at dusk, representing a professional visa consultancy",
  },
  {
    src: "/images/hero/taj-mahal-dawn.png",
    alt: "The Taj Mahal in India at dawn",
  },
];

export const pricingStatement = {
  label: "Our Promise",
  heading: "100% Transparent Pricing",
  highlighted: "What You See Is What You Pay.",
};

export type PaymentStep = {
  number: string;
  title: string;
  supportingLabel?: string;
  amount: string;
  secondaryAmount: string;
  description: string;
  includes?: string[];
  image: string;
};

export const paymentSection = {
  heading: "USA B1/B2 Visa – Payment Structure",
  subheading: "Simple, transparent and milestone-based payments.",
};

export const paymentSteps: PaymentStep[] = [
  {
    number: "01",
    title: "U.S. Embassy Fee",
    amount: "₹18,130",
    secondaryAmount: "USD 185 – Per Applicant",
    description: "Paid directly to the U.S. Embassy.",
    image: "/images/illustrations/payment-structure/1.jpeg",
  },
  {
    number: "02",
    title: "Visa Mate Case Registration Fee",
    supportingLabel: "Processing Fee",
    amount: "₹2,500",
    secondaryAmount: "One-Time Fee",
    description: "This fee officially activates your visa case with Visa Mate.",
    includes: [
      "Initial Profile Assessment",
      "Case Registration",
      "Dedicated Case Manager Assignment",
      "Personalized Document Checklist",
      "Visa Strategy Consultation",
    ],
    image: "/images/illustrations/payment-structure/2.jpeg",
  },
  {
    number: "03",
    title: "Visa Mate Professional Service Fee",
    amount: "₹20,000",
    secondaryAmount: "Per Applicant",
    description:
      "Payable only after your Early Interview Appointment has been successfully secured.",
    includes: [
      "DS-160 Form Completion & Submission",
      "Documentation Review & Support",
      "Early Appointment Assistance",
      "Mock Interview Preparation",
      "End-to-End Visa Guidance",
    ],
    image: "/images/illustrations/payment-structure/3.png",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  image: string;
};

export const processSection = {
  label: "How It Works",
  heading: "Your visa journey,",
  headingItalic: "simplified.",
  subheading:
    "A clear, milestone-based path from first contact to your visa interview.",
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Reach out on WhatsApp and tell us about your USA travel plans.",
    image: "/images/illustrations/process/1.jpeg",
  },
  {
    number: "02",
    title: "Document Collection",
    description:
      "We guide you through gathering and organizing every required document.",
    image: "/images/illustrations/process/2.jpeg",
  },
  {
    number: "03",
    title: "DS-160 & Appointment",
    description:
      "We complete your DS-160 form and assist with appointment booking.",
    image: "/images/illustrations/process/3.jpeg",
  },
  {
    number: "04",
    title: "Mock Interview & Visa Interview",
    description:
      "Practice with a mock interview, then attend your visa interview prepared.",
    image: "/images/illustrations/process/4.jpeg",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
  isPlaceholder?: boolean;
};

export const faqSection = {
  heading: "Frequently Asked Questions",
  closing: {
    heading: "Still have questions?",
    description: "Our visa experts are here to help.",
    cta: "Chat on WhatsApp",
  },
};

export const faqItems: FaqItem[] = [
  {
    question: "What services does Visa Mate provide?",
    answer:
      "Visa Mate specializes in USA B1/B2 Tourist & Business Visa assistance, including DS-160 application, document guidance, appointment booking support, and interview preparation.",
  },
  {
    question: "Do you guarantee a U.S. visa?",
    answer:
      "No. No agency can guarantee a U.S. visa. The final decision is made solely by the U.S. Embassy or Consulate. Our role is to help you prepare your application professionally.",
  },
  {
    question: "When do I pay Visa Mate's service fee?",
    answer:
      "Our professional service fee is payable only after your visa appointment has been successfully booked. This reflects our commitment to transparency and client trust.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No. We maintain a transparent pricing policy. Any applicable fees are clearly explained before you proceed.",
  },
  {
    question: "Is the U.S. Embassy fee included in your service fee?",
    answer:
      "No. The U.S. Embassy visa application fee is paid separately by the applicant. Our professional service fee is separate from the Embassy fee.",
  },
  {
    question: "What documents are required for a USA B1/B2 Visa?",
    answer:
      "The required documents vary depending on your profile. Our team provides a personalized checklist based on your employment, business, travel history, and purpose of travel.",
  },
  {
    question: "Do you help with the DS-160 application?",
    answer:
      "Yes. We professionally prepare and review your DS-160 application to ensure it is completed accurately.",
  },
  {
    question: "Do you provide interview preparation?",
    answer:
      "Yes. We conduct mock interview sessions and provide guidance on commonly asked U.S. visa interview questions to help you attend your interview with confidence.",
  },
  {
    question: "Can I apply if I have been refused before?",
    answer:
      "Yes. A previous refusal does not automatically prevent you from applying again. We carefully review your previous application and guide you on the best approach for reapplying.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Once your U.S. Embassy fee is paid, we immediately begin working on your application and appointment. We typically aim to secure an appointment within 60 days, and in many cases, appointments are available even earlier. Our professional service fee is payable only after your appointment has been successfully booked.",
  },
  {
    question: "Can I contact Visa Mate through WhatsApp?",
    answer:
      "Yes. Our team is available on WhatsApp to answer your questions, provide updates, and guide you through every step of the process.",
  },
];

export type WhyChoosePoint = {
  slug: string;
  label: string;
  image: string;
  pageTitle: string;
  paragraphs: string[];
};

export const whyChooseSection = {
  label: "Why Visa Mate",
  heading: "Why should I choose Visa Mate?",
  points: [
    {
      slug: "usa-b1-b2-visa-specialists",
      label: "USA B1/B2 Visa Specialists",
      image: "/images/illustrations/why-choose-us/usa-visa-specialists.png",
      pageTitle: "Why We Specialize in USA B1/B2 Visas",
      paragraphs: [
        "At Visa Mate, we focus exclusively on USA B1/B2 Tourist & Business Visas. Rather than working across multiple visa categories, we have built our expertise around one specific visa type.",
        "Every month, we assist numerous applicants with their B1/B2 visa applications. This continuous experience helps us understand common mistakes, documentation requirements, interview expectations, and factors that can strengthen an application.",
        "Our team stays updated with embassy procedures and changing interview trends, allowing us to guide applicants with practical, experience-based advice throughout the process.",
      ],
    },
    {
      slug: "transparent-process",
      label: "Transparent Process",
      image: "/images/illustrations/why-choose-us/transparent-process.png",
      pageTitle: "A Process You Can Trust",
      paragraphs: [
        "Transparency is one of our core values. Every commitment we make—whether during a phone call, WhatsApp chat, email, or consultation—is provided to you in writing whenever applicable.",
        "Before you proceed, you'll receive complete information about the application process, required documents, timelines, and payment structure. We believe every applicant deserves complete clarity before making any decision.",
        "Our goal is to ensure that you always know what to expect at every stage of your visa journey.",
      ],
    },
    {
      slug: "no-hidden-charges",
      label: "No Hidden Charges",
      image: "/images/illustrations/why-choose-us/no-hidden-charges.png",
      pageTitle: "Clear Pricing. No Surprises.",
      paragraphs: [
        "Before your application begins, we clearly explain every applicable fee, including our service charges, processing charges (if applicable), and the U.S. Embassy visa fee.",
        "We never add unexpected charges later in the process. Everything is communicated upfront so you know exactly what you're paying for.",
        "No hidden costs. No last-minute surprises. Just complete pricing transparency.",
      ],
    },
    {
      slug: "pay-after-appointment-confirmation",
      label: "Pay Service Fee After Appointment Confirmation",
      image: "/images/illustrations/why-choose-us/appointment-confirmation.png",
      pageTitle: "Pay Only After Appointment Confirmation",
      paragraphs: [
        "We believe our service should earn your trust before we ask for our service fee.",
        "That's why our professional service fee is collected only after your U.S. Embassy appointment has been successfully confirmed.",
        "This approach reflects our confidence in our process and gives applicants additional peace of mind before making their payment.",
        "It also means you are never asked to commit a significant amount before there is a confirmed appointment to work toward. Our fee structure is designed to move in step with your progress, not ahead of it.",
      ],
    },
    {
      slug: "personalized-guidance",
      label: "Personalized Guidance",
      image: "/images/illustrations/why-choose-us/personalized-guidance.png",
      pageTitle: "Guidance Based on Your Individual Profile",
      paragraphs: [
        "Every applicant has a different travel purpose, employment background, financial situation, and travel history. A one-size-fits-all approach simply doesn't work.",
        "Our team reviews your profile individually and provides guidance tailored to your specific circumstances. From document preparation to interview readiness, our recommendations are based on your unique case.",
        "Our objective is to help you present your application clearly, accurately, and confidently.",
      ],
    },
    {
      slug: "interview-preparation",
      label: "Interview Preparation Included",
      image: "/images/illustrations/why-choose-us/interview-preparation.png",
      pageTitle: "Professional Interview Preparation",
      paragraphs: [
        "Your visa interview is one of the most important steps in the application process.",
        "We provide interview preparation designed around your profile, travel purpose, and likely embassy questions. Our mock interview sessions help applicants understand what to expect and how to answer questions confidently and honestly.",
        "The goal isn't to memorize answers—it's to ensure you're well prepared to communicate your genuine travel plans with confidence.",
        "This preparation is included as part of our professional service, alongside your DS-160 completion and documentation support.",
      ],
    },
  ] satisfies WhyChoosePoint[],
};

export type ReviewItem = {
  name: string;
  timeAgo: string;
  reviewCount: string;
  text: string;
};

export const reviewsSection = {
  label: "Reviews",
  heading: "What our clients say",
  subheading: "Real reviews from applicants we've guided through their USA B1/B2 visa journey.",
};

export const reviews: ReviewItem[] = [
  {
    name: "Komal kok",
    timeAgo: "3 weeks ago",
    reviewCount: "2 reviews",
    text: "Visa mate ki service kafi theek hai agar aap b1b2 visa appointment ke liye dekh rahe hai toh, mujhe inhone 10 days ke andar hi appointment provide kra di thi, payment bhi appointment ke baad liya tha, I'm 100% satisfied with visa mate service",
  },
  {
    name: "naveen jangid",
    timeAgo: "a month ago",
    reviewCount: "3 reviews",
    text: "I am extremely satisfied with the service provided by Visa Mate. Their team was knowledgeable, responsive, and supportive throughout my B1/B2 visa application process. They assisted me with the DS-160 form, document preparation, and interview guidance, ensuring every detail was handled correctly. I highly recommend Visa Mate to anyone looking for reliable and professional visa assistance.",
  },
  {
    name: "Rahul Sharma",
    timeAgo: "a month ago",
    reviewCount: "1 review",
    text: "Excellent Visa Consultancy service in jaipur. The VisaMate team is professional, supportive, and makes the entire visa process smooth and hassle-free.",
  },
  {
    name: "Mannan Khan",
    timeAgo: "5 months ago",
    reviewCount: "1 review",
    text: "Got my USA B1/B2 visa in just 27 days with Visa Mate. Smooth process, clear guidance, no false promises. Extremely happy with the service… and once again thank u so much Aenu sir",
  },
  {
    name: "Puneet Arora",
    timeAgo: "11 months ago",
    reviewCount: "19 reviews",
    text: "I'm Punit Arora from Delhi. I applied for my mother's U.S. visa through Visa Mate, and today I'm so happy to share that her visa got approved! I was nervous in the beginning, but the Visa Mate team handled everything so smoothly and guided me at every step. Their service is phenomenal! If you're planning for a U.S. visa, I highly recommend Visa Mate — you can trust them with your eyes closed!",
  },
  {
    name: "Mohammad Gazi",
    timeAgo: "10 months ago",
    reviewCount: "3 reviews",
    text: "I had an amazing experience with Visa Mate! They guided me step by step through the entire B1/B2 visa process - from filling out the DS-160, preparing documents, to mock interviews. Their team made everything simple and stress-free. Thanks to their support, my visa got approved smoothly. Highly recommend Visa Mate if you want a professional and trustworthy service…",
  },
  {
    name: "Gagandeep Singh",
    timeAgo: "a year ago",
    reviewCount: "3 reviews",
    text: "Commendable services, the team has rescheduled my visa appointment and reduced the waiting time from 1 year to only 1 month. They also provide mock interview preparation that gives confidence and also help in preparing the documentation.",
  },
  {
    name: "Harshit Singhal",
    timeAgo: "9 months ago",
    reviewCount: "1 review",
    text: "Great experience! They helped with DS-160, appointments, and interview prep very nice service",
  },
  {
    name: "Sahil Khan lovely",
    timeAgo: "10 months ago",
    reviewCount: "3 reviews",
    text: "My name is sahil I applied my parents USA visa and Visa got approved. I'm very happy with the Visa Mate service very helpful staff… Thank you Aenu sir",
  },
];

export const finalCtaContent = {
  heading: "Ready to Start Your USA Visa Application?",
  primaryButton: "Apply on WhatsApp",
  secondaryButton: "Free Consultation",
};

export const footerContent = {
  description:
    "Visa Mate is an independent visa consultancy providing USA B1/B2 tourist and business visa guidance, DS-160 preparation, and interview readiness support.",
};

export const legalLinks = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Refund & Cancellation Policy", href: "/refund-and-cancellation" },
];
