import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, BarChart, Crosshair, Layers, Target, CheckCircle2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Assets
import heroImage from "@/assets/images/hero-abstract.jpg";
import aboutImage from "@/assets/images/about-team.jpg";
import frameworkImage from "@/assets/images/framework-data.jpg";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Framework", id: "framework" },
    { name: "Expertise", id: "expertise" },
  ];

  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-white">
      {/* Navigation */}
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div 
            className="text-2xl font-bold font-display cursor-pointer flex items-center gap-2"
            onClick={() => scrollToSection("hero")}
            data-testid="link-home"
          >
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white text-xl leading-none">S</span>
            </div>
            SocialKreu.
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-primary/70 transition-colors"
                data-testid={`link-${link.id}`}
              >
                {link.name}
              </button>
            ))}
            <Button 
              className="rounded-full px-6" 
              onClick={() => scrollToSection("contact")}
              data-testid="button-nav-contact"
            >
              Let's Talk
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left font-medium text-lg py-2 border-b border-border/50 hover:text-primary"
                data-testid={`link-mobile-${link.id}`}
              >
                {link.name}
              </button>
            ))}
            <Button 
              className="mt-4" 
              onClick={() => scrollToSection("contact")}
              data-testid="button-mobile-contact"
            >
              Let's Talk
            </Button>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-secondary/30"></div>
          {/* Decorative blur */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-40">
             <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-secondary blur-[120px]" />
             <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
          </div>

          <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-semibold text-sm mb-6 border border-primary/10">
                We Don’t Do "Just Posting."
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-balance text-primary">
                We Build Brands That <span className="relative">
                  Actually Grow.
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary fill-current" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,0 100,5 Q50,10 0,5 Z" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 mb-4 font-medium">
                If your current marketing plan is "post & pray," we need to talk.
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                SocialKreu partners with brands that are done with random content, confused ads, and inconsistent growth. We build structured digital ecosystems that turn scrolls into strategy and attention into revenue.
              </p>
              
              <div className="text-lg font-bold font-display text-primary mb-8">
                Growth isn’t luck. It’s engineered.
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="rounded-full text-base h-14 px-8 shadow-lg shadow-primary/20 group"
                  onClick={() => scrollToSection("contact")}
                  data-testid="button-hero-cta"
                >
                  Let’s Build Your Growth System
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full text-base h-14 px-8 border-primary/20 hover:bg-secondary/50 group"
                  onClick={() => scrollToSection("framework")}
                  data-testid="button-hero-secondary"
                >
                  See How We Think
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
                </Button>
              </div>
            </div>

            <div className="relative lg:h-[600px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl" />
              <img 
                src={heroImage} 
                alt="Digital Strategy Abstract" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-primary/10 border border-white/20"
                data-testid="img-hero"
              />
              {/* Floating element */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-border/50 max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                    <BarChart size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Performance</div>
                    <div className="text-sm text-muted-foreground">Over Vanity Metrics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="py-10 border-y border-border/50 bg-secondary/30">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 md:gap-x-24 text-center font-bold text-foreground/70 uppercase tracking-wider text-sm">
              <span>Strategy-First Marketing</span>
              <span>Organic + Paid Growth</span>
              <span>Conversion-Focused Systems</span>
              <span>Performance Over Vanity</span>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                  <img 
                    src={aboutImage} 
                    alt="SocialKreu Team Strategy" 
                    className="w-full h-full object-cover"
                    data-testid="img-about"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary rounded-full -z-10 blur-2xl" />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full -z-10 blur-3xl" />
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="uppercase tracking-widest text-sm font-bold text-primary/60 mb-4">About SocialKreu</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">Not Another Agency. <br/>A Growth Partner.</h2>
                
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Most brands don’t struggle because they lack effort. They struggle because their marketing lacks structure.</strong>
                  </p>
                  <p>
                    Posting regularly without a positioning strategy. Running ads without a clear funnel. Creating content without aligning it to business objectives.
                  </p>
                  <p>
                    At SocialKreu, we focus on building clarity first — then designing systems that support sustainable growth.
                  </p>
                  <p className="pl-6 border-l-4 border-primary font-medium text-foreground italic py-2">
                    "We don’t believe in 'doing more marketing.' We believe in doing the right marketing — strategically and consistently."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES / HOW WE SCALE */}
        <section id="services" className="py-24 md:py-32 bg-secondary/20">
          <div className="container mx-auto px-6 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="uppercase tracking-widest text-sm font-bold text-primary/60 mb-4">How We Scale Brands</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Structured Growth Pillars</h2>
              <p className="text-lg text-muted-foreground">We approach digital growth holistically, aligning every effort across four core pillars to build sustainable ecosystems.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Pillar 1 */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">1. Brand Positioning</h3>
                <div className="font-medium text-primary mb-4">Before growth comes clarity.</div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We refine your messaging, define your target audience, sharpen your differentiation, and align your brand voice with market expectations. Strong positioning makes every marketing effort more effective.
                </p>
                <div className="text-sm font-bold bg-secondary/50 inline-block px-3 py-1 rounded">When your brand is clear, your growth becomes focused.</div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Layers size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">2. Content Systems</h3>
                <div className="font-medium text-primary mb-4">Content should support strategy.</div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We design structured content ecosystems aligned with authority-building and conversion goals. From short-form content strategies to long-form narratives and platform-specific distribution, every piece serves a defined role.
                </p>
                <div className="text-sm font-bold bg-secondary/50 inline-block px-3 py-1 rounded">No random posting. No disconnected messaging.</div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <BarChart size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">3. Paid Growth & Performance</h3>
                <div className="font-medium text-primary mb-4">Advertising without strategy wastes budget.</div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We build structured paid media campaigns across Meta and Google platforms, focusing on audience targeting, funnel alignment, retargeting layers, and continuous optimization.
                </p>
                <div className="text-sm font-bold bg-secondary/50 inline-block px-3 py-1 rounded">Prioritizing measurable performance and scalability.</div>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all group">
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Crosshair size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">4. Conversion Infrastructure</h3>
                <div className="font-medium text-primary mb-4">Traffic alone does not grow a business.</div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We design landing pages, funnel pathways, automation workflows, and conversion-focused systems that turn attention into leads and leads into revenue.
                </p>
                <div className="text-sm font-bold bg-secondary/50 inline-block px-3 py-1 rounded">Marketing works best when infrastructure is aligned.</div>
              </div>
            </div>
          </div>
        </section>

        {/* GROWTH FRAMEWORK */}
        <section id="framework" className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
          {/* Subtle grid pattern for dark bg */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="uppercase tracking-widest text-sm font-bold text-secondary/80 mb-4">Our Growth Framework</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-white">Growth becomes predictable when the system is intentional.</h2>
                <p className="text-xl text-white/70 mb-12">
                  This structured approach ensures growth is strategic — not reactive.
                </p>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[1.375rem] before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                  {[
                    {
                      step: "01",
                      title: "Audit & Analysis",
                      desc: "We assess your current digital presence, messaging gaps, funnel inefficiencies, and audience behavior to identify growth opportunities."
                    },
                    {
                      step: "02",
                      title: "Strategic System Design",
                      desc: "We create a structured roadmap — positioning strategy, content architecture, paid media plan, and conversion pathways tailored to your objectives."
                    },
                    {
                      step: "03",
                      title: "Execution & Optimization",
                      desc: "We implement campaigns, monitor data, refine messaging, and optimize continuously based on performance insights."
                    },
                    {
                      step: "04",
                      title: "Scale & Expansion",
                      desc: "Once the foundation proves effective, we scale what works and build authority that compounds over time."
                    }
                  ].map((item, i) => (
                    <div key={i} className="relative flex items-start gap-6">
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary font-bold shadow-[0_0_0_4px_rgba(45,30,62,1)] md:h-11 md:w-11">
                        {item.step}
                      </div>
                      <div className="pt-2">
                        <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                        <p className="text-white/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="aspect-square rounded-full bg-secondary/10 absolute -inset-10 blur-3xl" />
                <img 
                  src={frameworkImage} 
                  alt="Framework Systems" 
                  className="relative z-10 w-full rounded-3xl object-cover shadow-2xl shadow-black/50 aspect-[4/5] opacity-90 mix-blend-luminosity"
                  data-testid="img-framework"
                />
              </div>
            </div>
          </div>
        </section>

        {/* EXPERTISE & AUDIENCE */}
        <section id="expertise" className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Experience */}
              <div>
                <div className="uppercase tracking-widest text-sm font-bold text-primary/60 mb-4">Experience</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Expertise & Execution</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  SocialKreu is built on hands-on experience across diverse digital ecosystems and growth-driven environments. We understand both creative storytelling and performance analytics — and how to align the two.
                </p>
                
                <ul className="space-y-4">
                  {[
                    "Managing multi-platform brand accounts",
                    "Developing organic and paid growth strategies",
                    "Structuring content funnels aligned with revenue",
                    "Running performance-focused advertising",
                    "Audience segmentation and behavioral targeting",
                    "Conversion optimization and funnel refinement"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 shrink-0" size={20} />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who We Work With */}
              <div className="bg-secondary p-10 md:p-12 rounded-3xl">
                <div className="uppercase tracking-widest text-sm font-bold text-primary/60 mb-4">Target Audience</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Who We Work With</h2>
                <p className="text-foreground/80 mb-8 text-lg">
                  SocialKreu partners with brands that value clarity, structure, and long-term growth over short-term visibility.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Founders building scalable brands",
                    "Personal brands establishing authority",
                    "D2C and e-commerce businesses",
                    "Coaches and educators",
                    "Startups preparing for expansion",
                    "Businesses seeking performance marketing"
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl shadow-sm font-medium border border-border/30">
                      {item}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-primary/10 font-bold text-primary">
                  If your goal is sustainable growth, we’re aligned.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WHY WE EXIST / PHILOSOPHY */}
        <section className="py-24 md:py-32 bg-foreground text-white text-center px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">Why SocialKreu Exists</h2>
            
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 font-medium">
              After working within fast-moving digital environments, one pattern became clear: <span className="text-white">Many brands invest heavily in marketing but lack alignment between strategy and execution.</span>
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-16">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="text-secondary font-bold mb-2">The Problem</div>
                <div className="text-white/70">They produce content but lack positioning.</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="text-secondary font-bold mb-2">The Problem</div>
                <div className="text-white/70">They run ads but lack funnel clarity.</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                <div className="text-secondary font-bold mb-2">The Problem</div>
                <div className="text-white/70">They generate traffic but struggle with conversion.</div>
              </div>
            </div>

            <p className="text-lg text-white/70 mb-16 max-w-2xl mx-auto">
              SocialKreu was created to bridge that gap. We combine strategic thinking, creative execution, and performance optimization into one cohesive growth system. Our focus is not on activity — it’s on outcomes.
            </p>

            <div className="bg-secondary text-primary p-10 md:p-16 rounded-[3rem] text-left relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="uppercase tracking-widest text-sm font-bold text-primary/60 mb-6">Our Philosophy</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-8">
                Clarity before content.<br/>
                Strategy before spending.<br/>
                Systems before scaling.
              </h3>
              <p className="text-xl font-medium mb-6">
                Digital growth should feel engineered, not improvised.
              </p>
              <p className="text-lg opacity-80 max-w-2xl">
                When your positioning is strong, your messaging resonates. When your funnel is structured, your ads perform. When your systems are aligned, growth compounds. That alignment is what we build.
              </p>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="contact" className="py-24 md:py-32">
          <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Ready to Build a Strategic Growth System?</h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              If you’re looking for tactical posting support, we may not be the right fit. If you’re looking for a structured, performance-driven partnership designed to scale your brand intentionally — let’s start the conversation.
            </p>

            <div className="inline-block bg-secondary text-primary font-bold px-6 py-3 rounded-full mb-12">
              We do not offer generic packages. We build tailored growth partnerships.
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full h-16 px-10 text-lg shadow-xl shadow-primary/20" data-testid="button-cta-apply">
                Apply to Work With SocialKreu
              </Button>
              <Button variant="outline" size="lg" className="rounded-full h-16 px-10 text-lg border-2" data-testid="button-cta-book">
                Book Your Growth Call
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-background py-12 border-t border-border">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-md">
            <div className="text-2xl font-bold font-display flex items-center gap-2 mb-4 justify-center md:justify-start">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-white text-sm leading-none">S</span>
              </div>
              SocialKreu.
            </div>
            <p className="text-sm text-muted-foreground">
              SocialKreu is a strategy-first digital growth partner helping brands turn visibility into authority and structured systems into scalable growth.
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground/60 font-medium">
            © {new Date().getFullYear()} SocialKreu. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}