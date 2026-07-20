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
  label: string;
  image: string;
};

export const whyChooseSection = {
  label: "Why Visa Mate",
  heading: "Why should I choose Visa Mate?",
  points: [
    {
      label: "USA B1/B2 Visa Specialists",
      image: "/images/illustrations/why-choose-us/usa-visa-specialists.png",
    },
    {
      label: "Transparent Process",
      image: "/images/illustrations/why-choose-us/transparent-process.png",
    },
    {
      label: "No Hidden Charges",
      image: "/images/illustrations/why-choose-us/no-hidden-charges.png",
    },
    {
      label: "Pay Service Fee After Appointment Confirmation",
      image: "/images/illustrations/why-choose-us/appointment-confirmation.png",
    },
    {
      label: "Personalized Guidance",
      image: "/images/illustrations/why-choose-us/personalized-guidance.png",
    },
    {
      label: "Interview Preparation Included",
      image: "/images/illustrations/why-choose-us/interview-preparation.png",
    },
  ] satisfies WhyChoosePoint[],
};

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
