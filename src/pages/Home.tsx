import { useEffect } from "react";
import mehulPhoto from "@/assets/mehul-sunset.jpg";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Briefcase,
  GraduationCap,
  Trophy,
  Users,
  MessageSquare,
  Clock,
  Brain,
  Target,
  Zap,
  Layers,
  Wrench,
  FileText,
  Sparkles,
  Download,
  Globe,
} from "lucide-react";

const LINKS = {
  resume: "/Mehul_Dangda_Resume.pdf",
  github: "https://github.com/mehuldangda",
  linkedin: "https://linkedin.com/in/mehuldangda",
  leetcode: "https://leetcode.com/u/mehuldangda/",
  email: "mailto:mehuldangda@gmail.com",
  emailPlain: "mehuldangda@gmail.com",
  phonePlain: "+91 75686 80810",
  phone: "tel:+917568680810",
};

const NAV = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const MARQUEE = [
  "Machine Learning",
  "B.Tech Information Technology",
  "Python & Scikit-learn",
  "Streamlit & NLP",
  "Data Structures & Algorithms",
  "Top 5 · JECRC Health Hackathon",
  "2× NPTEL Star Performer",
  "Certified SOC Analyst (CSA)",
  "Open to Opportunities",
  "Continuous Learner",
];

const PROJECTS = [
  {
    no: "01",
    title: "DiagnoWise",
    role: "ML · Disease Prediction & Decision Support",
    year: "2025",
    desc: "ML-based disease prediction and clinical decision-support system trained on 5,000+ Kaggle records with ~92% accuracy using Decision Tree, Random Forest, and Gradient Boosting. Evaluates 130+ symptoms across 41 disease categories, with top-3 differential diagnosis predictions and precautions deployed via Streamlit.",
    tech: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    live: "https://github.com/mehuldangda",
    repo: "https://github.com/mehuldangda",
  },
  {
    no: "02",
    title: "ResumeIQ",
    role: "NLP · Resume Screening & Candidate Matching",
    year: "2026",
    desc: "NLP-powered resume screening system built on 2,400+ resumes across 8+ professional categories. Employs TF-IDF vectorization and cosine similarity for candidate-job matching, and a Logistic Regression classifier achieving ~89% accuracy with automated skill-gap analysis and job recommendations.",
    tech: ["Python", "NLP", "TF-IDF", "Scikit-learn", "Streamlit"],
    live: "https://github.com/mehuldangda",
    repo: "https://github.com/mehuldangda",
  },
];

const STACK = [
  { icon: Code2, label: "Programming Languages", items: ["Python", "C++", "SQL"] },
  {
    icon: Brain,
    label: "Libraries & Frameworks",
    items: ["Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Streamlit"],
  },
  {
    icon: Layers,
    label: "CS Fundamentals",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS"],
  },
  { icon: Wrench, label: "Tools & Platforms", items: ["Git", "GitHub", "Jupyter Notebook"] },
  { icon: Sparkles, label: "Databases & Core", items: ["MySQL", "Machine Learning", "NLP"] },
];

const SOFT_SKILLS = [
  { icon: Users, label: "Teamwork" },
  { icon: MessageSquare, label: "Communication" },
  { icon: Clock, label: "Pressure Handling" },
  { icon: Target, label: "Ownership" },
  { icon: Zap, label: "Fast Learner" },
  { icon: Brain, label: "Problem Solving" },
];

const ACHIEVEMENTS = [
  {
    emoji: "🏆",
    title: "Top 5 in 80+ Teams · Health Hackathon",
    desc: "Secured Top 5 among 80+ competing teams at the Health Hackathon hosted by JECRC University, designing an ML-driven healthcare solution.",
  },
  {
    emoji: "🌟",
    title: "2× NPTEL Star for Academic Excellence",
    desc: "Recognized as a 2× NPTEL Star for outstanding performance across multiple certification programs, earning additional credits toward B.Tech Honours.",
  },
  {
    emoji: "🛡️",
    title: "EC-Council Certified SOC Analyst (CSA)",
    desc: "Earned the industry-recognized cybersecurity certification with an exam score of 91/100, demonstrating security operations and threat analysis proficiency.",
  },
  {
    emoji: "🎨",
    title: "Graphics Lead · SKIT SnT Club",
    desc: "Served as Graphics Lead at SKIT's Science & Technology Club, leading design initiatives and conducting UI/UX workshops for 100+ students.",
  },
  {
    emoji: "🎓",
    title: "8.07 CGPA · Academic Consistency",
    desc: "Consistently maintaining strong academic standing throughout B.Tech in Information Technology (Honours) at SKIT Jaipur.",
  },
  {
    emoji: "🚀",
    title: "End-to-End ML Applications",
    desc: "Hands-on experience building and deploying end-to-end ML/NLP applications, including DiagnoWise (~92% accuracy) and ResumeIQ (~89% accuracy).",
  },
];

const EXPERIENCE = [
  {
    role: "Data Science Intern",
    org: "AvikaSoft",
    when: "May 2026 – Jul 2026",
    note: "Engineered a Customer Churn Prediction model on 10,000+ records using Python, Pandas, NumPy, and Scikit-learn. Executed data preprocessing and feature engineering, and trained 4+ classification models (Random Forest, Decision Tree, Logistic Regression, Naive Bayes) with GridSearchCV hyperparameter optimization.",
  },
];

const COURSEWORK = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems (DBMS)",
  "SQL & Database Design",
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".fade-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function Index() {
  useReveal();

  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <div className="bg-paper relative min-h-screen text-foreground">
      <div className="starfield" />

      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            md<span className="text-accent">.</span>
          </a>
          <nav
            className="glass hidden items-center gap-1 rounded-full px-2 py-1.5 text-sm md:flex"
            aria-label="Main navigation"
          >
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full px-4 py-1.5 text-muted-foreground transition hover:bg-foreground/5 hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={LINKS.resume}
            download="Mehul_Dangda_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Download Mehul Dangda Resume (PDF)"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#ee6c3a] via-[#f0833a] to-[#ee6c3a] bg-[length:200%_100%] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-[#ee6c3a]/30 ring-1 ring-white/20 transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-[#ee6c3a]/40"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            <FileText size={14} className="relative" />
            <span className="relative">Resume</span>
            <Download
              size={12}
              className="relative opacity-80 transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main id="main-content">
        {/* HERO */}
        <section
          id="top"
          className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-4 pt-28 sm:px-6"
        >
          <div className="fade-up mb-6 text-center font-serif text-2xl italic text-muted-foreground sm:text-3xl">
            Hey there, I&apos;m
          </div>

          <h1 className="fade-up font-display text-center text-[16vw] font-extrabold leading-[0.85] tracking-[-0.05em] sm:text-[14vw] md:text-[12vw] lg:text-[10.5vw]">
            mehul <span className="font-serif italic font-normal">dangda</span>
            <span className="text-accent">.</span>
          </h1>

          <div className="fade-up mt-6 text-center">
            <span className="font-display text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              Curious <span className="text-accent">by</span>{" "}
              <span className="font-serif italic font-normal">Default</span>
            </span>
          </div>

          <div className="fade-up tilt glass relative mx-auto mt-10 w-full max-w-md rounded-3xl p-5 shadow-2xl">
            <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>B.Tech IT Undergrad</span>
              <span>Machine Learning</span>
            </div>
            <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-full ring-1 ring-foreground/10">
              <img
                src={mehulPhoto}
                alt="Mehul Dangda - B.Tech Information Technology student &amp; Machine Learning enthusiast"
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="384"
                height="384"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-muted-foreground">
                Based in Jaipur, India <span className="font-mono text-[10px]">IN</span>
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                Open to Opportunities
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 avail-dot" />
              </span>
            </div>
          </div>

          <div className="relative mt-16 w-full overflow-hidden border-y border-foreground/10 py-4">
            <div className="marquee-track whitespace-nowrap font-display text-2xl font-medium tracking-tight sm:text-3xl">
              {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((m, i) => (
                <span key={i} className="mx-8 inline-flex items-center gap-8">
                  {m}
                  <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* INTRO LINE */}
        <section className="mx-auto max-w-5xl px-6 py-28">
          <p className="fade-up font-display text-3xl font-medium leading-[1.2] tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-muted-foreground">I&apos;m a </span>
            <span className="font-serif italic text-accent">B.Tech IT</span>
            <span className="text-muted-foreground"> student at SKIT Jaipur, exploring </span>
            <span className="font-serif italic text-accent">Machine Learning</span>
            <span className="text-muted-foreground">
              {" "}
              and software development — building intelligent applications that solve real-world
              problems.
            </span>
          </p>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="fade-up font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                About
              </div>
              <h2 className="fade-up mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                A little bit
                <br />
                <span className="font-serif italic">about me.</span>
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="fade-up space-y-5 text-[17px] leading-relaxed text-muted-foreground">
                <p>
                  I&apos;m an Information Technology undergraduate at Swami Keshvanand Institute of
                  Technology (SKIT), Jaipur with a strong foundation in Data Structures &amp;
                  Algorithms, OOP, DBMS, and SQL. My core focus lies at the intersection of Machine
                  Learning and Software Development.
                </p>
                <p>
                  I have hands-on experience building and deploying end-to-end ML/NLP systems
                  including <span className="text-foreground">DiagnoWise</span> (~92% accuracy) and{" "}
                  <span className="text-foreground">ResumeIQ</span> (~89% accuracy), alongside
                  completing a Data Science internship at{" "}
                  <span className="text-foreground">AvikaSoft</span> focused on customer churn
                  prediction and model optimization.
                </p>
                <p>
                  Beyond coursework, I am recognized as a{" "}
                  <span className="text-foreground">2× NPTEL Star</span> for academic excellence, a
                  Top 5 finalist at the JECRC Health Hackathon, and hold an{" "}
                  <span className="text-foreground">EC-Council Certified SOC Analyst (CSA)</span>{" "}
                  credential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
          <div className="fade-up font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Skills / Toolkit
          </div>
          <h2 className="fade-up mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Tools of the <span className="font-serif italic">trade.</span>
          </h2>
          <div className="fade-up mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {STACK.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="glass group rounded-2xl p-5 transition hover:-translate-y-1 hover:border-accent"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-foreground/[0.05] text-accent">
                      <Icon size={16} />
                    </div>
                    <div className="font-display text-base font-semibold">{s.label}</div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.items.map((t) => (
                      <span key={t} className="pill font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="fade-up mt-10 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Beyond code
          </div>
          <div className="fade-up mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {SOFT_SKILLS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="glass flex flex-col items-center gap-2 rounded-2xl p-4 text-center transition hover:-translate-y-0.5 hover:border-accent"
                >
                  <Icon size={18} className="text-accent" />
                  <div className="text-xs font-medium">{s.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mx-auto max-w-6xl px-6 py-20">
          <div className="fade-up mb-12 flex items-end justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Selected Work / 2025 – 2026
              </div>
              <h2 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-6xl">
                Things I&apos;ve built.
              </h2>
            </div>
          </div>

          <div className="divide-y divide-foreground/10 border-y border-foreground/10">
            {PROJECTS.map((p) => (
              <article
                key={p.no}
                className="fade-up group grid grid-cols-12 items-center gap-4 py-8 transition hover:bg-foreground/[0.03] sm:py-10"
              >
                <div className="col-span-1 font-mono text-xs text-muted-foreground">{p.no}</div>
                <div className="col-span-11 sm:col-span-4">
                  <h3 className="font-display text-2xl font-semibold tracking-tight transition group-hover:translate-x-1 sm:text-3xl">
                    {p.title}
                  </h3>
                  <div className="mt-1 text-sm text-muted-foreground">{p.role}</div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="pill font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="col-span-12 text-sm text-muted-foreground sm:col-span-4">
                  {p.desc}
                </div>
                <div className="col-span-12 flex flex-wrap items-center gap-2 sm:col-span-3 sm:justify-end">
                  <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
                    {p.year}
                  </span>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Preview ${p.title}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background transition hover:opacity-90"
                  >
                    Preview <ExternalLink size={12} />
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${p.title} source code`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 px-3 py-1.5 text-xs font-medium hover:border-accent hover:text-accent transition"
                  >
                    Code <Github size={12} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="fade-up font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Experience
          </div>
          <h2 className="fade-up mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Where I&apos;ve worked.
          </h2>
          <div className="mt-10 divide-y divide-foreground/10 border-y border-foreground/10">
            {EXPERIENCE.map((e) => (
              <div key={e.role} className="fade-up grid grid-cols-12 gap-4 py-8">
                <div className="col-span-12 sm:col-span-2 font-mono text-xs text-muted-foreground">
                  {e.when}
                </div>
                <div className="col-span-12 sm:col-span-5">
                  <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                  <div className="text-sm text-muted-foreground">{e.org}</div>
                </div>
                <div className="col-span-12 text-sm text-muted-foreground sm:col-span-5">
                  {e.note}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="mx-auto max-w-6xl px-6 py-20">
          <div className="fade-up font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground flex items-center gap-2">
            <Trophy size={14} /> Certifications &amp; Achievements
          </div>
          <h2 className="fade-up mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            A few <span className="font-serif italic">small wins.</span>
          </h2>
          <div className="fade-up mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ACHIEVEMENTS.map((a, i) => (
              <div
                key={a.title}
                className="group relative overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.02] to-foreground/[0.06] p-6 transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl opacity-0 transition group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background text-2xl shadow-sm ring-1 ring-foreground/10">
                    {a.emoji}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="relative mt-5 font-display text-lg font-semibold tracking-tight leading-snug">
                  {a.title}
                </div>
                <div className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {a.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="fade-up font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground flex items-center gap-2">
                <GraduationCap size={14} /> Education
              </div>
              <h2 className="fade-up mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Academic <span className="font-serif italic">journey.</span>
              </h2>
            </div>
            <div className="md:col-span-7 space-y-5">
              <div className="fade-up glass rounded-2xl p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    2023 — 2027
                  </div>
                  <Briefcase size={14} className="text-accent" />
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold">
                  Swami Keshvanand Institute of Technology (SKIT), Jaipur
                </h3>
                <div className="text-sm">B.Tech in Information Technology (Honours)</div>
                <div className="mt-1 text-xs text-muted-foreground">CGPA: 8.07 / 10</div>

                <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Relevant Coursework
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {COURSEWORK.map((c) => (
                    <span key={c} className="pill font-mono">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="fade-up glass rounded-2xl p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    2020 — 2022
                  </div>
                  <GraduationCap size={14} className="text-accent" />
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold">
                  Central Academy School, Chittorgarh
                </h3>
                <div className="text-sm">Senior Secondary (Class XII, 2022) — 69.20%</div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Secondary (Class X, 2020) — 90.00%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
          <div className="fade-up font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Contact / My Coordinates
          </div>
          <h2 className="fade-up mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            My <span className="font-serif italic">Coordinates.</span>
          </h2>

          <div className="fade-up relative mt-10 overflow-hidden rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.02] via-background to-accent/[0.06] p-6 shadow-2xl sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-foreground/10 blur-3xl"
            />

            <div className="relative grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5 flex flex-col justify-between gap-8">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700">
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 avail-dot" />
                    Available for Opportunities
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl">
                    Reach out — I usually
                    <br />
                    <span className="font-serif italic">reply within a day.</span>
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    Open to internships, entry-level engineering roles, and machine learning
                    opportunities that challenge me to grow.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.04] px-3 py-1 text-[11px] font-medium text-muted-foreground">
                    <Globe size={12} className="text-accent" />
                    Open to relocate · anywhere in India
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <a
                    href={LINKS.email}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
                    aria-label="Send an email to Mehul Dangda"
                  >
                    <Mail size={14} /> Send an email
                  </a>
                  <a
                    href={LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent"
                    aria-label="View Mehul Dangda's LinkedIn profile"
                  >
                    <Linkedin size={14} /> LinkedIn
                  </a>
                </div>
              </div>

              <div className="md:col-span-7">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  — Coordinates
                </div>
                <div className="mt-4 divide-y divide-foreground/10 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur">
                  {[
                    { Icon: Mail, label: "Email", value: LINKS.emailPlain, href: LINKS.email },
                    { Icon: Phone, label: "Phone", value: LINKS.phonePlain, href: LINKS.phone },
                    {
                      Icon: MapPin,
                      label: "Location",
                      value: "Jaipur, Rajasthan · India",
                      href: undefined as string | undefined,
                    },
                    {
                      Icon: Linkedin,
                      label: "LinkedIn",
                      value: "in/mehuldangda",
                      href: LINKS.linkedin,
                    },
                    { Icon: Github, label: "GitHub", value: "@mehuldangda", href: LINKS.github },
                    {
                      Icon: Code2,
                      label: "LeetCode",
                      value: "u/mehuldangda",
                      href: LINKS.leetcode,
                    },
                  ].map(({ Icon, label, value, href }) => {
                    const Wrapper: React.ElementType = href ? "a" : "div";
                    const wrapperProps = href
                      ? {
                          href,
                          target: href.startsWith("http") ? "_blank" : undefined,
                          rel: href.startsWith("http") ? "noreferrer" : undefined,
                          "aria-label": `${label}: ${value}`,
                        }
                      : {};
                    return (
                      <Wrapper
                        key={label}
                        {...wrapperProps}
                        className="group flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-foreground/[0.03]"
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="grid h-10 w-10 place-items-center rounded-xl bg-foreground/[0.05] text-accent group-hover:bg-accent/15 transition">
                            <Icon size={16} />
                          </div>
                          <div className="min-w-0">
                            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                              {label}
                            </div>
                            <div className="truncate font-display text-sm font-semibold">
                              {value}
                            </div>
                          </div>
                        </div>
                        {href && (
                          <ArrowUpRight
                            size={16}
                            className="shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                          />
                        )}
                      </Wrapper>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative mx-auto max-w-7xl px-6 pb-10 pt-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <h3 className="font-display text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl">
              What&apos;s
              <br />
              <span className="font-serif italic">Next?</span>
            </h3>
            <a
              href={LINKS.email}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
              aria-label="Start a conversation with Mehul Dangda"
            >
              Start a conversation <ArrowRight size={16} />
            </a>
          </div>
          <div className="md:col-span-7">
            <a
              href={LINKS.email}
              className="email-link group block break-words font-display text-[12vw] font-extrabold leading-[0.95] tracking-[-0.04em] hover:text-accent transition sm:text-[8vw] md:text-[5.5vw]"
              aria-label="Email Mehul Dangda"
            >
              {LINKS.emailPlain}
              <span className="arrow inline-block ml-1 align-top">↗</span>
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5 flex items-end gap-3">
            {[
              { href: LINKS.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: LINKS.github, Icon: Github, label: "GitHub" },
              { href: LINKS.leetcode, Icon: Code2, label: "LeetCode" },
              { href: LINKS.email, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={`Mehul Dangda's ${label}`}
                className="grid h-10 w-10 place-items-center rounded-lg bg-foreground/[0.06] text-muted-foreground transition hover:bg-accent/15 hover:text-accent"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <div className="md:col-span-7 grid grid-cols-3 gap-x-6 gap-y-3 text-sm font-medium">
            <a href="#top" className="hover:text-accent underline-offset-4 hover:underline">
              Home
            </a>
            <a href="#about" className="hover:text-accent underline-offset-4 hover:underline">
              About
            </a>
            <a href="#work" className="hover:text-accent underline-offset-4 hover:underline">
              Projects
            </a>
            <a href="#contact" className="hover:text-accent underline-offset-4 hover:underline">
              Contact
            </a>
            <a
              href={LINKS.resume}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent underline-offset-4 hover:underline"
            >
              Resume
            </a>
            <a
              href="#achievements"
              className="hover:text-accent underline-offset-4 hover:underline"
            >
              Achievements
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-foreground/10 pt-6 grid gap-3 text-xs text-muted-foreground sm:grid-cols-3 sm:items-center">
          <div>B.Tech IT Undergrad · SKIT Jaipur</div>
          <div className="sm:text-center">© 2026 Mehul Dangda</div>
          <div className="sm:text-right">
            Crafted with curiosity, code &amp; chai <span className="text-accent">✦</span>
          </div>
        </div>

        <div className="mt-10 overflow-hidden">
          <div className="font-display font-extrabold leading-[0.85] tracking-[-0.05em] text-[26vw] sm:text-[22vw] md:text-[20vw]">
            Mehul <span className="font-serif italic font-normal">D</span>
            <span className="text-accent">.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
