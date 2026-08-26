/**
 * Golden Gate Ledger design: a consumer-first editorial directory using Bridge Navy,
 * California Brass, restrained coastal photography, and left-aligned ledger layouts.
 */
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Compass,
  Home as HomeIcon,
  Landmark,
  MapPin,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const services = [
  {
    number: "01",
    title: "Real estate & mortgage",
    description: "Make your next move with the right local perspective.",
    icon: HomeIcon,
    tone: "gold",
  },
  {
    number: "02",
    title: "Financial planning",
    description: "Build clarity around the choices that shape your future.",
    icon: Landmark,
    tone: "navy",
  },
  {
    number: "03",
    title: "Legal & estate",
    description: "Put thoughtful plans in place for the people who matter.",
    icon: Scale,
    tone: "fog",
  },
  {
    number: "04",
    title: "Insurance & risk",
    description: "Protect the life and assets you have worked to build.",
    icon: ShieldCheck,
    tone: "sand",
  },
  {
    number: "05",
    title: "Business advisory",
    description: "Bring a steady hand to a venture or important transition.",
    icon: BriefcaseBusiness,
    tone: "mist",
  },
];

const considerations = [
  "I’m making a real-estate decision",
  "I’m planning for my financial future",
  "I’m thinking about estate or legal matters",
  "I’m reviewing insurance or risk",
  "I’m navigating a business decision",
];

export default function Home() {
  const [selected, setSelected] = useState(considerations[0]);

  const handleConnect = () => {
    toast("Your introduction pathway is being prepared", {
      description:
        "This preview illustrates the consumer intake experience. Connection details can be added when you are ready.",
    });
  };

  return (
    <div className="site-shell min-h-screen bg-[#f8f3e8] text-[#061f41]">
      <header className="site-header">
        <a href="#top" className="brand-lockup" aria-label="Bay Area Trusted Experts home">
          <img
            src="/manus-storage/BayAreaTrustedExperts_25237d54.png"
            alt="Bay Area Trusted Experts seal"
            className="brand-seal"
          />
          <span className="brand-copy">
            <strong>Bay Area</strong>
            <span>Trusted Experts</span>
          </span>
        </a>

        <nav aria-label="Primary navigation" className="main-nav">
          <a href="#services">Explore services</a>
          <a href="#approach">How it works</a>
          <a href="#connect">Start here</a>
        </nav>

        <a className="header-cta" href="#connect">
          Find an expert <ArrowRight size={15} strokeWidth={2.2} />
        </a>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-content">
            <div className="eyebrow hero-eyebrow"><span /> Bay Area guidance, thoughtfully connected</div>
            <h1 id="hero-title">The right expert for the <em>decision</em> in front of you.</h1>
            <p className="hero-intro">
              A clear place to begin when life calls for trusted support. Explore local expertise across the decisions that shape your home, family, future, and business.
            </p>
            <div className="hero-actions">
              <a href="#connect" className="button button-primary">
                Tell us what you’re working through <ArrowRight size={18} />
              </a>
              <a href="#services" className="text-action">
                Browse areas of expertise <ChevronDown size={18} />
              </a>
            </div>
            <div className="hero-note">
              <Compass size={18} />
              <span>Five disciplines. One considered local starting point.</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="A Bay Area professional overlooking the bay">
            <div className="hero-image" />
            <div className="hero-fade" />
            <div className="hero-location"><MapPin size={15} /> Serving the Bay Area</div>
            <div className="hero-seal-wrap">
              <img src="/manus-storage/BayAreaTrustedExperts_25237d54.png" alt="" className="hero-seal" />
            </div>
            <div className="hero-arc" />
          </div>
        </section>

        <section className="signal-strip" aria-label="Guidance statement">
          <p>Important decisions deserve more than a search result.</p>
          <div className="signal-rule"><span /></div>
          <p className="signal-muted">Start with a conversation that respects the full picture.</p>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-title">
          <div className="section-heading services-heading">
            <div>
              <p className="eyebrow"><span /> Areas of expertise</p>
              <h2 id="services-title">Choose the path that<br /><em>meets your moment.</em></h2>
            </div>
            <p className="heading-sidecopy">Your question may be specific. The decision around it rarely is. Start with the area that is most present for you now.</p>
          </div>

          <div className="service-route" aria-hidden="true"><span>Begin here</span><i /><i /><i /><i /><i /></div>
          <div className="service-list">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <a href="#connect" className={`service-row service-${service.tone}`} key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <span className="service-icon"><Icon size={26} strokeWidth={1.45} /></span>
                  <span className="service-copy"><strong>{service.title}</strong><span>{service.description}</span></span>
                  <span className="service-arrow"><ArrowRight size={21} /></span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="approach-section" id="approach" aria-labelledby="approach-title">
          <div className="approach-photo" role="img" aria-label="Golden Gate Bridge detail in morning fog">
            <div className="approach-photo-tint" />
            <div className="photo-caption">A local point of view<br />changes the conversation.</div>
          </div>
          <div className="approach-copy">
            <p className="eyebrow"><span /> A more considered introduction</p>
            <h2 id="approach-title">Local insight, without the <em>runaround.</em></h2>
            <p className="approach-intro">The best introductions begin with context. Bay Area Trusted Experts offers an unhurried way to orient the conversation before you choose who to call.</p>
            <ol className="approach-steps">
              <li><span>1</span><div><strong>Name the decision</strong><p>Begin with the matter on your mind, large or small.</p></div></li>
              <li><span>2</span><div><strong>Bring the full picture</strong><p>Consider the people, property, plans, and questions that surround it.</p></div></li>
              <li><span>3</span><div><strong>Move forward well</strong><p>Explore the relevant professional path with a clearer point of view.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="connect-section" id="connect" aria-labelledby="connect-title">
          <div className="connect-heading">
            <div className="eyebrow eyebrow-light"><span /> Find your starting point</div>
            <h2 id="connect-title">What are you<br /><em>working through?</em></h2>
            <p>Choose the closest fit. You can refine the conversation from there.</p>
            <div className="connect-meta"><Check size={16} /> No pressure. Just a more useful next step.</div>
          </div>

          <div className="connect-card">
            <p className="form-label">Your primary consideration</p>
            <div className="consideration-list" role="radiogroup" aria-label="Primary consideration">
              {considerations.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="radio"
                  aria-checked={selected === item}
                  onClick={() => setSelected(item)}
                  className={selected === item ? "consideration selected" : "consideration"}
                >
                  <span className="radio-dot" />
                  <span>{item}</span>
                </button>
              ))}
            </div>
            <button type="button" onClick={handleConnect} className="button button-connect">
              Continue with this topic <ArrowRight size={18} />
            </button>
            <p className="form-footnote">This initial selection does not create an engagement or constitute professional advice.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <img src="/manus-storage/bate-bridge-mark_97ce37ec.png" alt="Bay Area Trusted Experts bridge mark" />
          <span><strong>Bay Area Trusted Experts</strong><small>A considered local starting point.</small></span>
        </div>
        <p>Real estate & mortgage · Financial planning · Legal & estate · Insurance & risk · Business advisory</p>
        <span className="footer-year">© 2026</span>
      </footer>
    </div>
  );
}
