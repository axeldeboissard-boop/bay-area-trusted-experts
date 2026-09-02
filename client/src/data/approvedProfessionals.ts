/**
 * Approved professional roster. Update this single file when the roster changes.
 * Contact data is sourced only from the user-provided roster and its embedded ProVisors profile links.
 */
export const lifeEventTitles = [
  "Buying a Home", "Selling a Home", "Divorce", "Inheritance", "Retirement", "Aging Parents",
  "Starting a Business", "Selling a Business", "Relocation", "Growing a Family", "Investment Property", "Loss of a Loved One",
] as const;

export type LifeEventTitle = (typeof lifeEventTitles)[number];

export type ApprovedProfessional = {
  id: string;
  name: string;
  category: "CPA" | "Financial Advisor" | "Estate Attorney" | "Family Law Attorney" | "Insurance Professional" | "Mortgage Professional";
  firm: string;
  role: string;
  phone?: string;
  email: string;
  specialty: string;
  group: string;
  lifeEvents: LifeEventTitle[];
  keywords: string[];
  photoUrl?: string;
  website?: string;
};

export const approvedProfessionals: ApprovedProfessional[] = [
  { id: "jim-black", name: "Jim Black", category: "Mortgage Professional", firm: "", role: "Mortgage Professional", email: "", specialty: "Mortgage", group: "", lifeEvents: ["Buying a Home", "Selling a Home", "Relocation"], keywords: ["mortgage", "home loan", "home financing", "buying a home", "refinance"], photoUrl: "/manus-storage/jim-black-headshot_304d8f51.jpeg" },
  { id: "michael-bryant", name: "Michael Bryant, CPA", category: "CPA", firm: "BryMar CPA, LLP", role: "Managing Partner", phone: "(831) 227-6565", email: "michael.bryant@brymar.cpa", specialty: "Audits, reviews and privately held businesses", group: "San Jose 3", lifeEvents: ["Starting a Business", "Selling a Business"], keywords: ["audit", "review", "business", "financial statements", "private company"], photoUrl: "/manus-storage/michael-bryant-headshot_34ebd67d.jpg" },
  { id: "nisha-golcha", name: "Nisha Golcha, CPA", category: "CPA", firm: "GHJ Advisors", role: "Tax Partner", phone: "(216) 375-1496", email: "ngolcha@ghjadvisors.com", specialty: "Corporate tax", group: "Santa Clara 2", lifeEvents: ["Starting a Business", "Selling a Business", "Investment Property"], keywords: ["tax", "corporate", "business", "investment"], photoUrl: "/manus-storage/nisha-golcha-headshot_128e2fee.avif", website: "https://www.ghjadvisors.com/about-us/people/nisha-golcha" },
  { id: "kim-le", name: "Kim Le, CPA", category: "CPA", firm: "A2Q2", role: "Founder & CEO", email: "kle@a2q2.com", specialty: "Accounting operations and internal controls", group: "Menlo Park 1", lifeEvents: ["Starting a Business", "Selling a Business"], keywords: ["accounting", "internal controls", "financial reporting", "business", "transaction"], photoUrl: "/manus-storage/kim-le-headshot_bfe0da25.jpg" },
  { id: "sarada-majumder", name: "Sarada Majumder, CPA", category: "CPA", firm: "Sarada Majumder", role: "CPA", phone: "(408) 753-0272", email: "sarada@sfbaycpa.net", specialty: "Business and individual taxation", group: "San Jose 2", lifeEvents: ["Buying a Home", "Selling a Home", "Inheritance", "Retirement", "Starting a Business", "Selling a Business", "Investment Property"], keywords: ["tax", "individual", "business", "home", "property", "retirement", "inheritance"] },
  { id: "kim-gaxiola", name: "Kim Gaxiola", category: "Financial Advisor", firm: "Resilient Wealth Planning LLC", role: "Founding Partner", phone: "(800) 584-3652", email: "kim@resilientplanning.com", specialty: "Concentrated stock and business-owner wealth", group: "Morgan Hill", lifeEvents: ["Retirement", "Inheritance", "Selling a Business"], keywords: ["wealth", "financial planning", "retirement", "business owner", "stock", "inheritance"], photoUrl: "/manus-storage/kim-gaxiola-headshot_1816b8cb.jpg" },
  { id: "mike-lee", name: "Mike Lee", category: "Financial Advisor", firm: "Edward Jones", role: "Financial Advisor", phone: "(669) 279-1475", email: "mike.lee@edwardjones.com", specialty: "Personal financial planning", group: "Santa Clara 2", lifeEvents: ["Buying a Home", "Selling a Home", "Divorce", "Inheritance", "Retirement", "Growing a Family", "Investment Property"], keywords: ["financial planning", "home", "retirement", "divorce", "inheritance", "family", "investment"] },
  { id: "jason-papier", name: "Jason Papier", category: "Financial Advisor", firm: "Werba Rubin Papier Wealth Management", role: "Managing Member", phone: "(408) 217-2000", email: "jpapier@wrpwealth.com", specialty: "Pre-IPO executives and equity compensation", group: "San Jose 2", lifeEvents: ["Starting a Business", "Selling a Business", "Retirement"], keywords: ["equity compensation", "pre-ipo", "stock", "financial planning", "business", "retirement"], photoUrl: "/manus-storage/jason-papier-headshot_e6239b34.jpg" },
  { id: "zach-smith", name: "Zach Smith", category: "Financial Advisor", firm: "Brighton Jones", role: "Senior Financial Advisor", phone: "(650) 618-3401", email: "zach.smith@brightonjones.com", specialty: "Personal-CFO and wealth planning", group: "Palo Alto 2", lifeEvents: ["Retirement", "Inheritance", "Selling a Business", "Growing a Family"], keywords: ["wealth", "personal cfo", "financial planning", "retirement", "inheritance", "family", "business"] },
  { id: "christina-gorokhovsky", name: "Christina Gorokhovsky", category: "Estate Attorney", firm: "The Dayton Law Firm", role: "Trusts & Estates Attorney", phone: "(408) 437-7570", email: "christina@thedaytonlawfirm.com", specialty: "Estate planning, trusts and probate avoidance", group: "Santa Clara 1", lifeEvents: ["Inheritance", "Retirement", "Aging Parents", "Growing a Family", "Loss of a Loved One"], keywords: ["estate", "trust", "probate", "inheritance", "retirement", "aging parents", "family"], photoUrl: "/manus-storage/christina-gorokhovsky-headshot_b185e095.jpg" },
  { id: "sara-hire", name: "Sara Hire", category: "Estate Attorney", firm: "Lathrop GPM LLP", role: "Counsel", phone: "(408) 299-1376", email: "sara.hire@lathropgpm.com", specialty: "Complex and high-net-worth estate planning", group: "Mountain View 1", lifeEvents: ["Inheritance", "Retirement", "Aging Parents", "Growing a Family", "Loss of a Loved One"], keywords: ["estate", "trust", "high-net-worth", "inheritance", "retirement", "aging parents", "family"], photoUrl: "/manus-storage/sara-hire-headshot_5d4f84a8.jpg" },
  { id: "adam-ferguson", name: "Adam Ferguson", category: "Estate Attorney", firm: "Ferguson Law Group, Inc.", role: "Attorney", phone: "(408) 296-3602", email: "adam@ferglawgroup.com", specialty: "Probate and trust litigation", group: "San Jose 2", lifeEvents: ["Inheritance", "Loss of a Loved One"], keywords: ["probate", "trust", "litigation", "inheritance", "estate"], photoUrl: "/manus-storage/adam-ferguson-headshot_841544ac.jpg" },
  { id: "brigitte-binkert", name: "Brigitte Binkert", category: "Estate Attorney", firm: "Binkert Greene LLP", role: "Attorney", phone: "(650) 714-8253", email: "brigitte@binkertgreenelaw.com", specialty: "International estate planning and administration", group: "Santa Clara 2", lifeEvents: ["Inheritance", "Retirement", "Aging Parents", "Growing a Family", "Loss of a Loved One"], keywords: ["estate", "trust", "international", "inheritance", "retirement", "family", "administration"], photoUrl: "/manus-storage/brigitte-binkert-headshot_31fdd128.jpg" },
  { id: "lydia-hsu", name: "Lydia Hsu", category: "Family Law Attorney", firm: "Foster Hsu, LLP", role: "Partner", phone: "(408) 841-7200", email: "lydia@fosterhsu.com", specialty: "Certified specialist and mediator", group: "Campbell 1", lifeEvents: ["Divorce", "Growing a Family"], keywords: ["divorce", "family law", "custody", "mediation", "family"], photoUrl: "/manus-storage/lydia-hsu-headshot_e56c7dcc.png" },
  { id: "meghan-herning", name: "Meghan Herning", category: "Family Law Attorney", firm: "JKZ, LLP", role: "Family Law Attorney", phone: "(415) 515-9148", email: "meghan.herning@jkzllp.com", specialty: "Complex financial cases, custody and domestic violence", group: "Fremont 1", lifeEvents: ["Divorce", "Growing a Family"], keywords: ["divorce", "family law", "custody", "financial", "family"] },
  { id: "patricia-zerbini", name: "Patricia Zerbini", category: "Family Law Attorney", firm: "Hoover Krepelka", role: "Family Law Attorney", phone: "(408) 947-7600", email: "patricia@hooverkrepelka.com", specialty: "High-net-worth divorce and custody", group: "Mountain View 1", lifeEvents: ["Divorce", "Growing a Family"], keywords: ["divorce", "family law", "custody", "high-net-worth", "family"] },
  { id: "kara-foster", name: "Kara Foster", category: "Family Law Attorney", firm: "Foster Hsu, LLP", role: "Partner", phone: "(408) 841-7200", email: "kara@fosterhsu.com", specialty: "Divorce, custody, settlement and litigation", group: "San Jose 3", lifeEvents: ["Divorce", "Growing a Family"], keywords: ["divorce", "family law", "custody", "settlement", "family"] },
  { id: "bau-lin-yueh", name: "Bau-Lin Yueh", category: "Insurance Professional", firm: "New York Life", role: "Insurance Professional", email: "", specialty: "New York Life insurance", group: "Palo Alto 3", lifeEvents: ["Growing a Family", "Retirement", "Loss of a Loved One"], keywords: ["insurance", "life insurance", "family", "retirement"] },
  { id: "ben-jonas", name: "Ben Jonas", category: "Insurance Professional", firm: "HUB International", role: "Senior Vice President", phone: "(831) 428-2965", email: "ben.jonas@hubinternational.com", specialty: "Property and casualty insurance", group: "Menlo Park 1", lifeEvents: ["Buying a Home", "Selling a Home", "Relocation", "Investment Property"], keywords: ["insurance", "property", "casualty", "home", "buying", "selling", "relocation", "investment property"], photoUrl: "/manus-storage/ben-jonas-headshot_57c4b5e6.jpg" },
  { id: "patrick-whitaker", name: "Patrick Whitaker", category: "Insurance Professional", firm: "Whitaker Insurance", role: "CEO & Founder", phone: "(408) 286-3000", email: "patrick@whitakerfs.com", specialty: "Employee benefits", group: "San Jose 3", lifeEvents: ["Starting a Business", "Selling a Business"], keywords: ["insurance", "employee benefits", "business", "employer"], photoUrl: "/manus-storage/patrick-whitaker-headshot_44e0c0dc.jpg" },
  { id: "angelo-desando", name: "Angelo DeSando", category: "Insurance Professional", firm: "DeSando Insurance Services", role: "President", phone: "(408) 268-3333", email: "angelo@desandoins.com", specialty: "Commercial insurance and property risk", group: "Campbell 1", lifeEvents: ["Starting a Business", "Selling a Business", "Investment Property"], keywords: ["insurance", "commercial", "business", "property", "risk", "investment property"] },
];

export function professionalsForLifeEvent(lifeEvent: LifeEventTitle) {
  return approvedProfessionals.filter((professional) => professional.lifeEvents.includes(lifeEvent));
}

const tileSelections: Record<LifeEventTitle, [string, string, string]> = {
  "Buying a Home": ["sarada-majumder", "mike-lee", "ben-jonas"],
  "Selling a Home": ["sarada-majumder", "mike-lee", "ben-jonas"],
  "Divorce": ["lydia-hsu", "meghan-herning", "patricia-zerbini"],
  "Inheritance": ["christina-gorokhovsky", "sara-hire", "brigitte-binkert"],
  "Retirement": ["kim-gaxiola", "zach-smith", "christina-gorokhovsky"],
  "Aging Parents": ["christina-gorokhovsky", "sara-hire", "brigitte-binkert"],
  "Starting a Business": ["michael-bryant", "nisha-golcha", "kim-le"],
  "Selling a Business": ["michael-bryant", "nisha-golcha", "kim-le"],
  "Relocation": ["ben-jonas", "mike-lee", "sarada-majumder"],
  "Growing a Family": ["lydia-hsu", "meghan-herning", "patricia-zerbini"],
  "Investment Property": ["nisha-golcha", "sarada-majumder", "angelo-desando"],
  "Loss of a Loved One": ["christina-gorokhovsky", "sara-hire", "adam-ferguson"],
};

export function professionalsForTile(tile: LifeEventTitle | "Mortgage") {
  const selectedIds = tile === "Mortgage" ? ["jim-black"] : tileSelections[tile];
  return selectedIds.map((id) => approvedProfessionals.find((professional) => professional.id === id)).filter((professional): professional is ApprovedProfessional => Boolean(professional));
}

export function searchApprovedProfessionals(searchTerm: string) {
  const normalized = searchTerm.toLowerCase().trim();
  if (!normalized) return [];

  const queryTerms = normalized.split(/\s+/).filter(Boolean);
  return approvedProfessionals
    .map((professional) => {
      const searchable = [professional.name, professional.category, professional.firm, professional.role, professional.specialty, professional.group, ...professional.lifeEvents, ...professional.keywords].join(" ").toLowerCase();
      const score = queryTerms.reduce((total, term) => total + (searchable.includes(term) ? 1 : 0), 0);
      return { professional, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((first, second) => second.score - first.score || first.professional.name.localeCompare(second.professional.name))
    .map((entry) => entry.professional);
}

export function initialsFor(name: string) {
  return name.replace(/,.*$/, "").split(/\s+/).map((word) => word[0]).join("").slice(0, 2).toUpperCase();
}
