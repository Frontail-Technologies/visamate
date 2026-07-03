import {
  FileCheck,
  Globe,
  ListChecks,
  Mail,
  MapPin,
  MessageCircle,
  MessageCircleQuestion,
  Phone,
  Send,
  ShieldCheck,
  Star,
  UserCheck,
  Users,
} from "lucide-react";

export const heroContent = {
  mobileBadge: "Visa Consultation • Interview Prep",
  desktopBadge: "Visa Consultation • Document Support • Interview Prep",
  title: "Start Your Visa Journey With Clear Guidance",
  description:
    "Visa Mate helps you prepare your documents, review your profile, and practice for your interview with simple step-by-step visa consultation.",
  primaryButton: "Book Consultation",
  secondaryButton: "Chat on WhatsApp",
  trustTags: [
    { value: "4.7", label: "Google Rating", Icon: Star },
    { value: "400+", label: "Client Reviews", Icon: MessageCircle },
    { value: "1:1", label: "Consultations", Icon: Users },
    { value: "24/7", label: "Support Guidance", Icon: FileCheck },
  ],
};

export const whyChoosePoints = [
  {
    title: "Honest and practical guidance",
    description:
      "Clear advice focused on preparation, process clarity, and realistic next steps.",
    image: "/images/illustrations/features/Honest and practical guidance.png",
  },
  {
    title: "Clear document support",
    description:
      "Simple document planning so your files stay organized and easier to review.",
    image: "/images/illustrations/features/Clear document support.png",
  },
  {
    title: "Interview preparation help",
    description:
      "Practice common questions and learn how to answer with better confidence.",
    image: "/images/illustrations/features/Interview preparation help.png",
  },
  {
    title: "Personalized consultation",
    description:
      "One-to-one sessions focusing specifically on your travel purpose and profile.",
    image: "/images/illustrations/features/Personalized consultation.png",
  },
  {
    title: "Easy communication support",
    description:
      "Stay informed with practical support throughout the preparation journey.",
    image: "/images/illustrations/features/Easy communication support.png",
  },
  {
    title: "No false promises or guarantees",
    description:
      "We keep the process honest and preparation-focused without approval claims.",
    image: "/images/illustrations/features/No false promises or guarantees.png",
  },
];

export const visaServices = [
  {
    title: "Tourist Visa",
    description:
      "Travel guidance, document checklist, and application support.",
    id: "tourist",
    image: "/images/illustrations/services/tourist%20visa.png",
  },
  {
    title: "Business Visa",
    description:
      "Business documentation, invitation support, and application assistance.",
    id: "business",
    image: "/images/illustrations/services/business%20visa.png",
  },
  {
    title: "Student Visa",
    description:
      "Admission documents, SOP guidance, and interview preparation.",
    id: "student",
    image: "/images/illustrations/services/student%20visa.png",
  },
  {
    title: "Work Visa",
    description:
      "Job-related documentation, eligibility guidance, and process support.",
    id: "work",
    image: "/images/illustrations/services/work%20visa.png",
  },
  {
    title: "Family Visa",
    description:
      "Invitation support, relationship documents, and application help.",
    id: "family",
    image: "/images/illustrations/services/family%20visa.png",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "We understand your profile, travel purpose, and visa type.",
    image: "/images/illustrations/process/Consultation.png",
  },
  {
    number: "02",
    title: "Visa Selection",
    description: "We suggest the right country and visa category for you.",
    image: "/images/illustrations/process/Country%20%26%20Visa%20Selection.png",
  },
  {
    number: "03",
    title: "Documentation",
    description: "We help you prepare a complete document checklist.",
    image: "/images/illustrations/process/Documentation.png",
  },
  {
    number: "04",
    title: "Forms & Appointment",
    description: "We assist with application forms and booking appointments.",
    image:
      "/images/illustrations/process/Form%20Filling%20%26%20Appointment.png",
  },
  {
    number: "05",
    title: "Interview Prep",
    description: "We prepare you for common interview questions and process.",
    image: "/images/illustrations/process/Interview%20Preparation.png",
  },
  {
    number: "06",
    title: "Submission & Tracking",
    description: "We guide you during submission and tracking updates.",
    image: "/images/illustrations/process/Submission%20%26%20Tracking.png",
  },
  {
    number: "07",
    title: "Final Decision",
    description: "We support you after the final visa decision.",
    image: "/images/illustrations/process/Visa%20Decision%20%26%20Guidance.png",
  },
];

export const clientReviews = [
  {
    name: "Priya Sharma",
    title: "Student Visa - Canada",
    rating: "5.0",
    date: "12 Mar, 2026",
    review:
      "Visa Mate made the entire process clear. Their SOP and document checklist guidance helped me understand exactly where to start.",
    initials: "PS",
  },
  {
    name: "Mohammed Al-Rashid",
    title: "Business Visa - UK",
    rating: "5.0",
    date: "18 Mar, 2026",
    review:
      "Very honest team. They explained the documents I needed and what to expect during preparation without making false promises.",
    initials: "MA",
  },
  {
    name: "Anita Rodrigues",
    title: "Tourist Visa - Schengen",
    rating: "5.0",
    date: "22 Mar, 2026",
    review:
      "The interview preparation session helped me feel calmer and more confident about how to present my travel purpose.",
    initials: "AR",
  },
  {
    name: "Rajan Mehta",
    title: "Work Visa - USA",
    rating: "5.0",
    date: "02 Apr, 2026",
    review:
      "The consultation was detailed and personalised. They reviewed my profile and helped me understand what needed improvement.",
    initials: "RM",
  },
  {
    name: "Sarah Kim",
    title: "Student Visa - Australia",
    rating: "5.0",
    date: "08 Apr, 2026",
    review:
      "Excellent document support. The checklist was simple, organized, and easy to follow throughout the preparation stage.",
    initials: "SK",
  },
  {
    name: "Farhan Chowdhury",
    title: "Family Visa - New Zealand",
    rating: "5.0",
    date: "16 Apr, 2026",
    review:
      "The team was patient and answered my questions clearly. They made the family visa process easier to understand.",
    initials: "FC",
  },
];

export const faqCategories = ["General", "Documents", "Interview", "Process"];

export const faqs = [
  {
    category: "General",
    question: "What exactly does Visa Mate do?",
    answer:
      "Visa Mate provides visa consultation services. We help you understand the visa process, review your profile, prepare your document checklist, guide you through form filling, and help you prepare for your visa interview. We do not guarantee visa approvals, we support your preparation.",
  },
  {
    category: "General",
    question: "Do you guarantee that my visa will be approved?",
    answer:
      "No. Visa decisions are made by the respective embassies and consulates. We provide honest, practical guidance to help you prepare the best possible application, but we do not make promises or guarantees about outcomes.",
  },
  {
    category: "Process",
    question: "Which visas do you provide guidance for?",
    answer:
      "We provide guidance for Tourist Visas, Business Visas, Student Visas, Work Visas, and Family Visas. During your consultation, we'll help identify the most suitable visa category for your purpose.",
  },
  {
    category: "Process",
    question: "How does the consultation work?",
    answer:
      "You can book a consultation through our website or WhatsApp. During the session, we'll review your profile, travel purpose, and visa requirements, and provide personalised guidance on next steps.",
  },
  {
    category: "Process",
    question: "How long does the visa process take?",
    answer:
      "Processing times vary by country and visa type. We'll give you an estimated timeline during your consultation based on the specific visa you're applying for.",
  },
  {
    category: "Documents",
    question: "What documents will I need?",
    answer:
      "Required documents depend on your visa type and destination country. As part of our service, we provide you with a detailed, customised document checklist based on your specific situation.",
  },
  {
    category: "Interview",
    question: "Can you help me prepare for the visa interview?",
    answer:
      "Yes. We offer interview preparation sessions where we walk you through common interview questions, explain what visa officers typically look for, and help you practise answering clearly and confidently.",
  },
  {
    category: "General",
    question: "How do I get started?",
    answer:
      "Simply click 'Book Consultation' or reach out via WhatsApp. Our team will get in touch to understand your requirements and schedule your first session.",
  },
];

export const meetConsultantHighlights = [
  "Honest, no-guarantee guidance",
  "Personalized for your profile",
  "Document & interview support",
  "Clear step-by-step process",
];

export const contactItems = [
  {
    label: "Phone",
    value: "+91 98765 43210",
    Icon: Phone,
  },
  {
    label: "Email",
    value: "hello@visamate.com",
    Icon: Mail,
  },
  {
    label: "Address",
    value: "New Delhi, India",
    Icon: MapPin,
  },
  {
    label: "WhatsApp",
    value: "Message us",
    Icon: MessageCircle,
  },
];

export const socialLinks = [
  { label: "WhatsApp", href: "#", Icon: MessageCircle },
  { label: "Website", href: "#", Icon: Globe },
  { label: "Telegram", href: "#", Icon: Send },
];

export const trustCards = [
  {
    title: "Personal Consultation",
    description:
      "One-to-one guidance based on your travel purpose and profile.",
    Icon: UserCheck,
  },
  {
    title: "Document Support",
    description:
      "Simple checklist and document planning to keep your application organized.",
    Icon: FileCheck,
  },
  {
    title: "Interview Preparation",
    description: "Practice common questions and prepare with confidence.",
    Icon: MessageCircle,
  },
  {
    title: "Step-by-Step Process",
    description: "Clear guidance from consultation to final preparation.",
    Icon: ListChecks,
  },
];

export const supportCards = [
  {
    number: "01",
    title: "Personal Consultation",
    description: "Get one-to-one guidance based on your travel purpose, profile, and visa requirement.",
    Icon: UserCheck,
  },
  {
    number: "02",
    title: "Profile Review",
    description: "Understand your current profile clearly before moving ahead with the visa process.",
    Icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Document Planning",
    description: "Prepare and organize your important documents with a simple checklist.",
    Icon: FileCheck,
  },
  {
    number: "04",
    title: "Interview Preparation",
    description: "Practice common questions and learn how to answer with clarity and confidence.",
    Icon: MessageCircleQuestion,
  },
];
