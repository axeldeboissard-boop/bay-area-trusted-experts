/**
 * Private member network: access is authorised server-side before any member workspace is rendered.
 * The public site remains intentionally separate at the root route.
 */
import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import { trpc } from "@/lib/trpc";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  CircleUserRound,
  Compass,
  Handshake,
  Home,
  LoaderCircle,
  LogOut,
  Network,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Link } from "wouter";

const teamPathways = [
  { title: "Home Transition", description: "Build relationships around buying, selling, relocating, and inherited property.", icon: Home, roles: ["Real Estate", "Mortgage", "Tax", "Insurance"] },
  { title: "Family & Legacy", description: "Connect around estate planning, aging parents, and life transitions.", icon: Compass, roles: ["Estate", "Financial Planning", "Senior Services", "Legal"] },
  { title: "Business Owner", description: "Develop an advisory circle for launch, growth, ownership change, and exit.", icon: Network, roles: ["Business Law", "Tax", "Banking", "Advisory"] },
];

const standards = [
  "Meaningful professional experience",
  "Strong local reputation and client service",
  "A collaborative, abundance-minded approach",
  "Commitment to educate, introduce, and contribute",
];

export default function MemberNetwork() {
  const { user, loading, logout } = useAuth();
  const memberStatus = trpc.memberNetwork.status.useQuery(undefined, {
    enabled: Boolean(user),
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (loading) {
    return <NetworkLoading />;
  }

  if (!user) {
    return <MemberGate onSignIn={() => startLogin()} />;
  }

  if (memberStatus.isLoading) {
    return <NetworkLoading />;
  }

  if (memberStatus.data?.access !== "active") {
    return <PendingAccess name={user.name ?? "there"} onSignOut={() => void logout()} />;
  }

  return <MemberWorkspace name={user.name ?? "Member"} onSignOut={() => void logout()} />;
}

function Brand() {
  return (
    <Link href="/" className="member-brand" aria-label="Return to Bay Area Trusted Experts public website">
      <img src="/manus-storage/BayAreaTrustedExperts_25237d54.png" alt="Bay Area Trusted Experts seal" />
      <span><strong>Bay Area</strong><small>Trusted Experts</small></span>
    </Link>
  );
}

function NetworkLoading() {
  return (
    <div className="member-load"><LoaderCircle size={25} className="animate-spin" /><span>Opening the member network</span></div>
  );
}

function MemberGate({ onSignIn }: { onSignIn: () => void }) {
  return (
    <main className="member-gate-shell">
      <header className="member-gate-header"><Brand /><Link href="/" className="member-back">Public website <ArrowRight size={15} /></Link></header>
      <section className="member-gate-hero">
        <div className="member-gate-copy">
          <p className="member-eyebrow"><span /> Member network</p>
          <h1>Relationships that make introductions <em>matter.</em></h1>
          <p>Bay Area Trusted Experts is a private professional community for people who serve the same clients, collaborate around life events, and make thoughtful introductions.</p>
          <button type="button" onClick={onSignIn} className="member-gold-button">Sign in to member access <ArrowRight size={17} /></button>
          <p className="member-gate-note"><ShieldCheck size={15} /> This space is available to activated members of the network.</p>
        </div>
        <div className="member-gate-art"><div className="member-gate-photo" /><div className="member-gate-shade" /><div className="member-gate-seal"><img src="/manus-storage/BayAreaTrustedExperts_25237d54.png" alt="" /></div></div>
      </section>
      <section className="member-standard-strip" aria-label="Membership standards"><p>Membership is built around credibility, service, and a willingness to collaborate.</p><div>{standards.map((standard) => <span key={standard}><Check size={15} /> {standard}</span>)}</div></section>
    </main>
  );
}

function PendingAccess({ name, onSignOut }: { name: string; onSignOut: () => void }) {
  return (
    <main className="member-pending-shell">
      <header className="member-pending-header"><Brand /><button type="button" onClick={onSignOut}>Sign out <LogOut size={15} /></button></header>
      <section className="member-pending-card">
        <div className="member-pending-icon"><BadgeCheck size={34} /></div>
        <p className="member-eyebrow"><span /> Member access review</p>
        <h1>Thank you, {name}.</h1>
        <p>Your sign-in is confirmed. Private network access becomes available once the community team has activated your membership.</p>
        <div className="member-pending-list"><span><Check size={16} /> Your public and private experiences remain clearly separated.</span><span><Check size={16} /> When access is active, return here to explore the member network.</span></div>
        <Link href="/" className="member-outline-button">Return to the public site <ArrowRight size={16} /></Link>
      </section>
    </main>
  );
}

function MemberWorkspace({ name, onSignOut }: { name: string; onSignOut: () => void }) {
  return (
    <div className="member-workspace">
      <aside className="member-sidebar">
        <Brand />
        <div className="member-private-label"><ShieldCheck size={14} /> Private member network</div>
        <nav aria-label="Member navigation">
          <a href="#overview" className="active"><CircleUserRound size={17} /> Overview</a>
          <a href="#teams"><UsersRound size={17} /> Life Event Teams</a>
          <a href="#introductions"><Handshake size={17} /> Introductions</a>
          <a href="#education"><BookOpen size={17} /> Education</a>
          <a href="#sessions"><CalendarDays size={17} /> Member sessions</a>
        </nav>
        <div className="member-sidebar-bottom"><Link href="/" className="member-public-link">View public experience <ArrowRight size={15} /></Link><button type="button" onClick={onSignOut}><LogOut size={15} /> Sign out</button></div>
      </aside>
      <main className="member-main" id="overview">
        <header className="member-main-header"><div><p className="member-eyebrow"><span /> Member space</p><h1>Good to see you, <em>{name.split(" ")[0]}.</em></h1></div><div className="member-status"><BadgeCheck size={17} /><span>Member network access</span></div></header>
        <section className="member-intro-panel" id="introductions"><div><p className="member-panel-label">The network philosophy</p><h2>Introduce the right person at the <em>right time.</em></h2><p>Member relationships are organized around the moments clients actually face. Start with the life event, then recognize the trusted professionals who can support the full picture.</p></div><div className="member-intro-symbol"><Handshake size={37} /><span>Trust<br />Connect<br />Refer</span></div></section>
        <section className="member-section" id="teams"><div className="member-section-heading"><div><p className="member-eyebrow"><span /> Relationship pathways</p><h2>Life Event Teams</h2></div><p>Explore the professional circles where a shared client journey creates a natural reason to know one another.</p></div><div className="member-pathway-grid">{teamPathways.map((pathway) => { const Icon = pathway.icon; return <article key={pathway.title}><div><span className="member-pathway-icon"><Icon size={20} /></span><ChevronRight size={17} /></div><h3>{pathway.title}</h3><p>{pathway.description}</p><div className="member-role-tags">{pathway.roles.map((role) => <span key={role}>{role}</span>)}</div><button type="button">Explore relationships <ArrowRight size={15} /></button></article>; })}</div></section>
        <section className="member-bottom-grid"><div className="member-education" id="education"><BookOpen size={22} /><p className="member-panel-label">Educate</p><h3>Share what consumers need to know.</h3><p>Build helpful answers, conversations, and introductions around the client questions that surface before major decisions.</p><button type="button">Explore content opportunities <ArrowRight size={15} /></button></div><div className="member-session" id="sessions"><CalendarDays size={22} /><p className="member-panel-label">Gather</p><h3>Member sessions</h3><p>Private roundtables, cross-profession conversations, and community learning belong here as the program calendar develops.</p><button type="button">View upcoming sessions <ArrowRight size={15} /></button></div></section>
      </main>
    </div>
  );
}
