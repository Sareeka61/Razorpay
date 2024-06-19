import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

interface NavigationItem {
  id: string;
  title: string;
  url: string;
  onlyMobile?: boolean;
}

export const navigation: NavigationItem[] = [
  {
    id: "0",
    title: "Payments",
    url: "#payments",
  },
  {
    id: "1",
    title: "Banking",
    url: "#banking",
  },
  {
    id: "2",
    title: "Corporate Card",
    url: "#corporate-card",
  },
  {
    id: "3",
    title: "Payroll",
    url: "#payroll",
  },
  {
    id: "4",
    title: "Support",
    url: "#support",
  },
  {
    id: "5",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "6",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons: string[] = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages: string[] = [
  notification4,
  notification3,
  notification2,
];

export const companyLogos: string[] = [
  yourlogo,
  yourlogo,
  yourlogo,
  yourlogo,
  yourlogo,
];

export const brainwaveServices: string[] = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons: string[] = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

interface RoadmapItem {
  id: string;
  title: string;
  text: string;
  date: string;
  status: "done" | "progress";
  imageUrl: string;
  colorful?: boolean;
}

export const roadmap: RoadmapItem[] = [
  {
    id: "0",
    title: "Accept Payments",
    text: "Send payments instantly and securely to bank accounts. UPI IDs and wallets via APIs, Dashboards and file uploads. Connect, automate and integrate your accounts payables and vendor payments workflow under a single platform",
    date: "June 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Start Business Banking",
    text: "Automate banking with top current account for startups, automate escrow money tranfers with total safety and compliance, get efforless foreign funding management with expert support.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Automate Payroll",
    text: "Focus on the problems you want to solve. Leave your employee financial operations on us. Grow your practice by adding Payroll as a new service stream with RazorpayX Payroll. Join our Chartered Accountant partner network today!",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Get Credit & Loans",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText: string =
  "Powering every industry. Powering all disruptors.";

interface CollabContentItem {
  id: string;
  title: string;
  text?: string;
}

export const collabContent: CollabContentItem[] = [
  {
    id: "0",
    title: "E-commerce",
    text: collabText,
  },
  {
    id: "1",
    title: "Freelance",
  },
  {
    id: "2",
    title: "SaaS",
  },
];

interface CollabAppItem {
  id: string;
  title: string;
  icon: string;
  width: number;
  height: number;
}

export const collabApps: CollabAppItem[] = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export interface PricingItem {
  id: string;
  title: string;
  description: string;
  price: string | null;
  features: string[];
}

export const pricing: PricingItem[] = [
  {
    id: "0",
    title: "Basic",
    description: "Start accepting payments and manage business essentials",
    price: "0",
    features: [
      "Accept Payments with multiple payment options",
      "Basic business banking services",
      "Access to the app and essential features at no cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Comprehensive finance platform with advanced support and analytics",
    price: "9.99",
    features: [
      "Advanced payment acceptance options with enhanced security",
      "Detailed analytics dashboard to track transactions and business performance",
      "Priority support for quick issue resolution",
      "Automate Payroll for your employees",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Customized solutions for large businesses with dedicated support",
    price: null,
    features: [
      "Custom payment solutions tailored to your business needs",
      "Advanced business banking with additional services",
      "Dedicated account manager for personalized support",
      "Access to credit and loans to scale your business",
      "Comprehensive analytics and reporting tools",
    ],
  },
];


interface BenefitItem {
  id: string;
  title: string;
  text: string;
  backgroundUrl: string;
  iconUrl: string;
  imageUrl: string;
  light?: boolean;
}

export const benefits: BenefitItem[] = [
  {
    id: "0",
    title: "Integrations",
    text: "Find all popular platform SDKs, plugin, server integrations in our integration stack.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "API Reference",
    text: "Comprehensive documentation to build powerful payment solutions.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Webhooks",
    text: "Receive real-time notifications for all payment related transactions and events.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
];

interface SocialItem {
  id: string;
  title: string;
  iconUrl: string;
  url: string;
}

export const socials: SocialItem[] = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
