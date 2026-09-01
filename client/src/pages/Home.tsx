/**
 * Golden Gate Ledger design: Navy-and-Brass editorial credibility applied to a growth-focused,
 * life-event discovery homepage. The supplied Bay Area Trusted Experts seal remains primary.
 */
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Check,
  CircleHelp,
  Compass,
  HeartHandshake,
  Home,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Search,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { ApprovedProfessional, initialsFor, LifeEventTitle, professionalsForTile, searchApprovedProfessionals } from "../data/approvedProfessionals";

const lifeEvents = [
  { title: "Buying a Home", icon: Home, professionals: "Mortgage · Real Estate · Insurance" },
  { title: "Selling a Home", icon: Building2, professionals: "Real Estate · Tax · Financial Planning" },
  { title: "Divorce", icon: HeartHandshake, professionals: "Family Law · Financial Planning · Mortgage" },
  { title: "Inheritance", icon: Landmark, professionals: "Estate Planning · Tax · Real Estate" },
  { title: "Retirement", icon: Compass, professionals: "Financial Planning · Tax · Estate Planning" },
  { title: "Aging Parents", icon: UsersRound, professionals: "Senior Services · Estate Planning · Care" },
  { title: "Starting a Business", icon: BriefcaseBusiness, professionals: "Business Law · Tax · Banking" },
  { title: "Selling a Business", icon: ArrowRight, professionals: "Business Advisory · Tax · Legal" },
  { title: "Relocation", icon: MapPin, professionals: "Real Estate · Mortgage · Financial Planning" },
  { title: "Growing a Family", icon: Sparkles, professionals: "Estate Planning · Insurance · Financial Planning" },
  { title: "Investment Property", icon: Building2, professionals: "Real Estate · Tax · Insurance" },
  { title: "Loss of a Loved One", icon: HeartHandshake, professionals: "Estate Planning · Tax · Senior Services" },
  { title: "Mortgage", icon: Landmark, professionals: "Mortgage Professional" },
];

const professions = [
  "Real Estate", "Mortgage", "Financial Planning", "CPA & Tax", "Estate Planning", "Family Law",
  "Business Law", "Insurance", "Business Advisory", "Senior Services", "Home Services", "Wealth Management",
];

const teams = [
  { name: "Home Transition", copy: "Buying, selling, relocating, or helping a loved one move.", roles: ["Real Estate", "Mortgage", "Tax", "Insurance"], accent: "gold" },
  { name: "Retirement", copy: "Bring your plans, assets, and next chapter into one conversation.", roles: ["Financial Planning", "Tax", "Estate", "Senior Living"], accent: "mist" },
  { name: "Inheritance", copy: "A steadier way to understand what comes next for people and property.", roles: ["Estate Planning", "Tax", "Real Estate", "Financial Planning"], accent: "sand" },
  { name: "Business Owner", copy: "The professionals to know as you launch, lead, grow, or exit.", roles: ["Business Law", "Tax", "Banking", "Advisory"], accent: "navy" },
];

const questions = [
  "Should I buy before selling my home?",
  "What should I do after inheriting a house?",
  "When should I update my estate plan?",
  "What professionals do I need when retiring?",
];

const cities = ["San Francisco", "San Jose", "Palo Alto", "Los Gatos", "Oakland", "Berkeley", "Walnut Creek", "Santa Cruz"];

export default function HomePage() {
  const [flippedTile, setFlippedTile] = useState<string | null>(() => {
    const requestedTile = new URLSearchParams(window.location.search).get("tile");
    return lifeEvents.some((event) => event.title === requestedTile) ? requestedTile : null;
  });
  const [search, setSearch] = useState(() => new URLSearchParams(window.location.search).get("search") ?? "");
  const searchResults = searchApprovedProfessionals(search);

  const onSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = search.trim();
    if (!query) {
      toast("Tell us what you are trying to accomplish", { description: "For example: buy a home, plan for retirement, or start a business." });
      return;
    }
    if (!searchResults.length) {
      toast("No exact match in the current approved roster", { description: "Try a broader need such as home, tax, estate, divorce, retirement, or insurance." });
      return;
    }
    document.getElementById("expert-results")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  const actionToast = (topic: string) => {
    setSearch(topic);
    document.getElementById("expert-results")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <div className="bate-site min-h-screen">
      <header className="bate-header">
        <a href="#top" className="bate-brand" aria-label="Bay Area Trusted Experts home">
          <img src="/manus-storage/BayAreaTrustedExperts_25237d54.png" alt="Bay Area Trusted Experts seal" />
          <span><strong>Bay Area</strong><small>Trusted Experts</small></span>
        </a>
        <nav className="bate-nav" aria-label="Primary navigation">
          <a href="#life-events">Life events</a>
          <a href="#experts">Find experts</a>
          <a href="#teams">Expert teams</a>
          <a href="#insights">Insights</a>
          <a href="#join">About</a>
        </nav>
        <a href="/members" className="bate-header-button">Member access <ArrowRight size={15} /></a>
      </header>

      <main id="top">
        <section className="bate-hero" aria-labelledby="hero-title">
          <div className="bate-hero-copy">
            <p className="bate-kicker"><span /> A trusted professional community</p>
            <h1 id="hero-title">Trusted Experts for <em>Life’s Biggest Decisions.</em></h1>
            <p className="bate-hero-summary">Connect with proven Bay Area professionals in real estate, mortgage, financial planning, legal, insurance, business advisory, and other services that matter when life changes.</p>
            <div className="bate-hero-actions">
              <a href="#experts" className="bate-button bate-button-gold">Find an expert <ArrowRight size={17} /></a>
              <a href="/members" className="bate-text-link">Member access <ArrowRight size={16} /></a>
            </div>
            <div className="bate-hero-trust"><Check size={15} /> Find the people who can help you move forward well.</div>
          </div>
          <div className="bate-hero-art" aria-label="Bay Area professional overlooking San Francisco Bay">
            <div className="bate-hero-photo" />
            <div className="bate-hero-overlay" />
            <p className="bate-serving"><MapPin size={14} /> Serving the Bay Area</p>
            <div className="bate-hero-seal"><img src="/manus-storage/BayAreaTrustedExperts_25237d54.png" alt="" /></div>
            <div className="bate-hero-arc" />
          </div>
        </section>

        <section className="bate-life-section" id="life-events" aria-labelledby="life-title">
          <div className="bate-section-lead">
            <div>
              <p className="bate-kicker"><span /> Start with what is happening</p>
              <h2 id="life-title">Life happens.<br /><em>Know who to call.</em></h2>
            </div>
            <p>Important decisions rarely involve just one question or one professional. Begin with the moment you are navigating, then see the kinds of expertise that may belong in the conversation.</p>
          </div>
          <div className="bate-event-grid">
            {lifeEvents.map((item, index) => {
              const Icon = item.icon;
              const isFlipped = flippedTile === item.title;
              const professionals = professionalsForTile(item.title as LifeEventTitle | "Mortgage");
              return (
                <button key={item.title} type="button" className={isFlipped ? "bate-flip-tile is-flipped" : "bate-flip-tile"} onClick={() => setFlippedTile(isFlipped ? null : item.title)} aria-pressed={isFlipped} aria-label={`${item.title}. ${isFlipped ? "Hide" : "Show"} relevant approved professionals`}>
                  <span className="bate-flip-inner">
                    <span className="bate-flip-face bate-flip-front">
                      <span className="bate-event-number">{String(index + 1).padStart(2, "0")}</span>
                      <Icon size={22} strokeWidth={1.5} />
                      <span className="bate-event-title">{item.title}</span>
                      <ArrowRight size={17} className="bate-event-arrow" />
                      <span className="bate-tile-prompt">Hover or tap to meet the team</span>
                    </span>
                    <span className="bate-flip-face bate-flip-back">
                      <span className="bate-tile-back-label">{item.title === "Mortgage" ? "Mortgage professional" : "Relevant approved professionals"}</span>
                      <span className="bate-tile-people">
                        {professionals.map((professional) => <TileProfessional key={professional.id} professional={professional} />)}
                      </span>
                      <span className="bate-tile-back-hint">Tap to return <ArrowRight size={13} /></span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
          <p className="bate-event-caption"><CircleHelp size={15} /> Hover over a tile, or tap it on mobile, to meet the relevant professionals from the current approved roster.</p>
        </section>

        <section className="bate-find-section" id="experts" aria-labelledby="find-title">
          <div className="bate-find-copy">
            <p className="bate-kicker bate-kicker-light"><span /> Search by need or profession</p>
            <h2 id="find-title">What do you need help <em>with?</em></h2>
            <p>Start with a goal, a concern, or a profession. Bay Area Trusted Experts is designed to make the next conversation more informed.</p>
          </div>
          <form className="bate-search-card" onSubmit={onSearch}>
            <label htmlFor="expert-search">What are you trying to accomplish?</label>
            <div className="bate-search-control">
              <Search size={20} />
              <input id="expert-search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="For example, plan for retirement" />
              <button type="submit" aria-label="Search for an expert"><ArrowRight size={20} /></button>
            </div>
            <p>Search by life event, question, or profession.</p>
          </form>
          <div className="bate-professions" aria-label="Professional categories">
            {professions.map((profession) => <button type="button" onClick={() => actionToast(profession)} key={profession}>{profession}<ArrowRight size={14} /></button>)}
          </div>
          {search && <ExpertReveal title={`Relevant approved professionals for “${search}”`} professionals={searchResults} mode="search" />}
        </section>

        <section className="bate-teams-section" id="teams" aria-labelledby="teams-title">
          <div className="bate-section-lead bate-team-lead">
            <div>
              <p className="bate-kicker"><span /> Better together</p>
              <h2 id="teams-title">The right team for the <em>whole picture.</em></h2>
            </div>
            <p>Life events often call for professionals who understand how their work connects. These pathways make that collaborative thinking easier to find.</p>
          </div>
          <div className="bate-team-grid">
            {teams.map((team, index) => (
              <article className={`bate-team bate-team-${team.accent}`} key={team.name}>
                <p className="bate-team-index">0{index + 1} <UsersRound size={17} /></p>
                <h3>{team.name} Team</h3>
                <p>{team.copy}</p>
                <div>{team.roles.map((role) => <span key={role}>{role}</span>)}</div>
                <button type="button" onClick={() => actionToast(`${team.name} Team`)}>Explore this team <ArrowRight size={16} /></button>
              </article>
            ))}
          </div>
        </section>

        <section className="bate-insights-section" id="insights" aria-labelledby="insights-title">
          <div className="bate-insights-photo" role="img" aria-label="Golden Gate Bridge detail in Bay Area coastal fog"><div><BookOpen size={22} /><span>Local insight for the questions that come next.</span></div></div>
          <div className="bate-insights-copy">
            <p className="bate-kicker"><span /> Ask a trusted expert</p>
            <h2 id="insights-title">Questions about a major <em>life decision?</em></h2>
            <p>Build a clearer point of view before you reach out. The future insights library will connect common questions with the professional categories that can help.</p>
            <div className="bate-question-list">
              {questions.map((question, index) => <button type="button" key={question} onClick={() => actionToast("Ask a Trusted Expert")}><span>{String(index + 1).padStart(2, "0")}</span>{question}<ArrowRight size={16} /></button>)}
            </div>
            <a href="#join" className="bate-text-link bate-navy-link">Explore expert insights <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="bate-locations-section" aria-labelledby="locations-title">
          <div className="bate-location-mark"><MapPin size={34} /><span>Bay Area<br />local authority</span></div>
          <div>
            <p className="bate-kicker"><span /> Find experts near you</p>
            <h2 id="locations-title">Built for the places you <em>call home.</em></h2>
          </div>
          <div className="bate-city-list">{cities.map((city) => <button type="button" onClick={() => actionToast(`${city} directory`)} key={city}>{city}<ArrowRight size={15} /></button>)}</div>
        </section>

        <section className="bate-join-section" id="join" aria-labelledby="join-title">
          <div className="bate-join-brand">
            <img src="/manus-storage/BayAreaTrustedExperts_25237d54.png" alt="Bay Area Trusted Experts" />
            <p className="bate-kicker bate-kicker-light"><span /> Passionate professionals</p>
            <h2 id="join-title">A stronger professional community starts with <em>service.</em></h2>
            <p>Join Bay Area Trusted Experts at no cost and build visibility, credibility, professional relationships, and referral opportunities while helping consumers find trusted people when life changes.</p>
          </div>
          <div className="bate-member-card">
            <p className="bate-member-label">Membership includes</p>
            <ul>
              <li><Check size={16} /> Professional directory profile</li>
              <li><Check size={16} /> Local and life-event placement</li>
              <li><Check size={16} /> Trusted Expert member badge</li>
              <li><Check size={16} /> Member introductions and events</li>
              <li><Check size={16} /> Expert questions and media opportunities</li>
            </ul>
            <a href="/members" className="bate-button bate-button-gold">Explore member access <ArrowRight size={17} /></a>
            <p className="bate-member-note">For experienced professionals who lead with expertise, collaboration, and care for the Bay Area community.</p>
          </div>
        </section>
      </main>

      <footer className="bate-footer">
        <div className="bate-footer-brand"><img src="/manus-storage/bate-bridge-mark_97ce37ec.png" alt="Bay Area Trusted Experts bridge mark" /><span><strong>Bay Area Trusted Experts</strong><small>Trusted Experts for Life’s Biggest Decisions</small></span></div>
        <p>Trust · Expertise · Service · Relationships · Community · Passion</p>
        <span>© 2026</span>
      </footer>
    </div>
  );
}

function ExpertReveal({ title, professionals, mode }: { title: string; professionals: ApprovedProfessional[]; mode: "life-event" | "search" }) {
  const limitedProfessionals = professionals.slice(0, 6);
  return (
    <section className={`bate-expert-reveal bate-expert-reveal-${mode}`} id={mode === "search" ? "expert-results" : undefined} aria-live="polite">
      <div className="bate-expert-reveal-heading">
        <div><p className="bate-kicker"><span /> Approved professional roster</p><h3>{title}</h3></div>
        <p>{professionals.length ? `Here are ${professionals.length > 6 ? "the first six" : "the"} relevant professionals from the current approved roster.` : "No exact match is in the current approved roster. Try a broader search or choose another life event."}</p>
      </div>
      {Boolean(limitedProfessionals.length) && <div className="bate-expert-card-grid">
        {limitedProfessionals.map((professional) => <ProfessionalCard key={professional.id} professional={professional} />)}
      </div>}
    </section>
  );
}

function ProfessionalCard({ professional }: { professional: ApprovedProfessional }) {
  return (
    <article className="bate-expert-card">
      <div className="bate-expert-avatar" aria-hidden="true">{initialsFor(professional.name)}</div>
      <div className="bate-expert-card-copy"><p className="bate-expert-category">{professional.category}</p><h4>{professional.name}</h4>{professional.firm && <p className="bate-expert-firm">{professional.firm}</p>}<p className="bate-expert-specialty">{professional.specialty}</p></div>
      <div className="bate-expert-contact">
        {professional.phone && <a href={`tel:${professional.phone.replace(/[^+\d]/g, "")}`} aria-label={`Call ${professional.name}`}><Phone size={14} /> {professional.phone}</a>}
        {professional.email && <a href={`mailto:${professional.email}`} aria-label={`Email ${professional.name}`}><Mail size={14} /> Email {professional.name.replace(/,.*$/, "").split(" ")[0]}</a>}
      </div>
    </article>
  );
}

function TileProfessional({ professional }: { professional: ApprovedProfessional }) {
  return <span className="bate-tile-person"><span className="bate-tile-avatar" aria-hidden="true">{initialsFor(professional.name)}</span><span><strong>{professional.name}</strong><small>{professional.category}</small></span></span>;
}
