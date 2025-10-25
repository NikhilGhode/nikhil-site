import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/nikhil-profile.jpg";
import { Chatbot } from "@/components/Chatbot";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  Code2,
  Brain,
  Workflow,
  ChevronRight,
} from "lucide-react";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Gradient Background */}
      <div
        className="fixed inset-0 z-0 opacity-40"
        style={{ background: "var(--gradient-overlay)" }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-card/80 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Nikhil Ghode</h2>
            <div className="hidden md:flex gap-6">
              {[
                "Home",
                "About",
                "Portfolio",
                "Skills",
                "Services",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 min-h-screen flex items-center overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in order-2 md:order-1">
              <div className="relative w-72 h-72 mx-auto md:w-96 md:h-96">
                {/* Decorative rings */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-accent/20 animate-ping"
                  style={{ animationDuration: "3s" }}
                />
                <div className="absolute inset-4 rounded-full border border-accent/30" />

                {/* Profile image */}
                <img
                  src={profileImage}
                  alt="Nikhil Ghode profile photo"
                  className="rounded-full w-full h-full object-cover relative z-10 ring-4 ring-card"
                  style={{
                    boxShadow: "0 25px 50px -12px hsl(186 94% 55% / 0.3)",
                  }}
                />

                {/* Floating badge */}
                <div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 animate-slide-up"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="bg-card px-6 py-3 rounded-full shadow-lg border-2 border-accent/20 backdrop-blur-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for collaboration
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-up space-y-6 order-1 md:order-2">
              {/* Location badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">
                  Nagpur, Maharashtra, India
                </span>
              </div>

              {/* Main heading with gradient */}
              <div className="space-y-3">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Nikhil{" "}
                  <span className="inline-block bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                    Ghode
                  </span>
                </h1>
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-accent rounded-full" />
                  <p className="text-2xl md:text-3xl font-semibold text-foreground">
                    Agentic AI Developer
                  </p>
                </div>
              </div>

              {/* Description with better formatting */}
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Former game developer now building{" "}
                <span className="text-foreground font-semibold">
                  automated agents
                </span>{" "}
                that solve real business problems using cutting-edge AI
                technologies.
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Python", "PyTorch", "n8n", "Langraph", "Crewai"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  onClick={() => scrollToSection("portfolio")}
                >
                  View Projects
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 hover:border-accent hover:text-accent transition-all"
                  onClick={() => scrollToSection("contact")}
                >
                  Get in Touch
                </Button>
              </div>

              {/* Social links with hover effects */}
              <div className="flex gap-3 pt-6">
                {[
                  { icon: Github, href: "https://github.com/NikhilGhode", label: "GitHub" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/nikhilghode9/",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:contact@nikhilghode.com",
                    label: "Email",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={
                      social.label !== "Email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group relative p-3 rounded-full bg-card border border-border hover:border-accent transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-foreground/60 group-hover:text-accent transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">About</h2>
            <Card className="animate-scale-in">
              <CardContent className="p-8 space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Biography</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Bachelor of Engineering in Computer Science, RTMNU
                    University, 2018
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My journey through technology has been diverse and
                    enriching. I bring a pragmatic, reproducible, and
                    community-minded approach to engineering, always focusing on
                    solving real business problems with automated intelligent
                    agents.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6">
                    Career Timeline
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                      <div>
                        <h4 className="font-semibold">Game Developer</h4>
                        <p className="text-sm text-muted-foreground">
                          Day Dreamz Studio
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                      <div>
                        <h4 className="font-semibold">Game Developer</h4>
                        <p className="text-sm text-muted-foreground">
                          Bornmonkie
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                      <div>
                        <h4 className="font-semibold">Trading and Investing</h4>
                        <p className="text-sm text-muted-foreground">
                          Personal Growth Phase
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                      <div>
                        <h4 className="font-semibold">Agentic AI Developer</h4>
                        <p className="text-sm text-muted-foreground">
                          Current Focus - Building intelligent automation
                          systems
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full md:w-auto">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Skills & Tech
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Python",
                  description:
                    "Core language for AI development and automation",
                  icon: Code2,
                  level: 5,
                },
                {
                  name: "PyTorch",
                  description: "Model training and custom agent policies",
                  icon: Brain,
                  level: 4,
                },
                {
                  name: "n8n",
                  description: "Workflow automation and webhooks",
                  icon: Workflow,
                  level: 5,
                },
                {
                  name: "Langraph",
                  description: "LLM orchestration and retrieval workflows",
                  icon: Brain,
                  level: 4,
                },
                {
                  name: "Crewai",
                  description: "Multi-agent system design and coordination",
                  icon: Brain,
                  level: 4,
                },
              ].map((skill, index) => (
                <Card
                  key={skill.name}
                  className="hover:shadow-lg transition-all animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-accent/10">
                        <skill.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded ${
                            i < skill.level ? "bg-accent" : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative z-10 py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Portfolio</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="md:col-span-2 hover:shadow-xl transition-all animate-fade-in">
                <CardContent className="p-8 space-y-4">
                  <Badge className="bg-accent text-accent-foreground">
                    Featured Project
                  </Badge>
                  <h3 className="text-2xl font-bold">
                    AI Chatbot for Candidate Information
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    An intelligent chatbot system that answers recruiter
                    questions based on candidate information. Built with Python
                    backend, utilizing Langraph for retrieval and LLM
                    orchestration, and n8n for workflow triggers and
                    integration. The system provides instant, contextual
                    responses while maintaining data accuracy and security.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Langraph</Badge>
                    <Badge variant="outline">n8n</Badge>
                    <Badge variant="outline">LLM Integration</Badge>
                    <Badge variant="outline">Workflow Automation</Badge>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <Button className="bg-accent hover:bg-accent/90">
                      View Details
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline">View Demo</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">
                    Game Development at Day Dreamz Studio
                  </h3>
                  <p className="text-muted-foreground">
                    Developed engaging game mechanics and interactive
                    experiences using modern game development frameworks.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Game Dev</Badge>
                    <Badge variant="outline">Unity</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">
                    Game Development at Bornmonkie
                  </h3>
                  <p className="text-muted-foreground">
                    Created immersive gaming experiences with focus on user
                    engagement and performance optimization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Game Dev</Badge>
                    <Badge variant="outline">C#</Badge>
                  </div>
                </CardContent>
              </Card>


              <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">
                    Echoes of Insight: A Deep Research Companion
                  </h3>
                  <p className="text-muted-foreground">
                    An intelligent research assistant that echoes your curiosity and returns clarity. 
		    Designed for structured exploration and source-backed synthesis.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">OpenAi SDK</Badge>
                    <Badge variant="outline">Cursor</Badge>
                  </div>
                </CardContent>
              </Card>

	      <Card className="hover:shadow-lg transition-all">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">
                    Sentient Signals: Autonomous Equity Trading Agents
                  </h3>
                  <p className="text-muted-foreground">
                    A multi-agent system that reads market signals, executes trades, and adapts in real time. 
		    Built for precision, autonomy, and strategic evolution.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">MCP Server</Badge>
                    <Badge variant="outline">LangGraph</Badge>
                  </div>
                </CardContent>
              </Card>

		
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Services & Offering</h2>
            <Card className="animate-scale-in">
              <CardContent className="p-8 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently focused on learning and building innovative agentic
                  AI solutions. I'm open to collaboration, knowledge-sharing,
                  and discussing interesting projects.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-left pt-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-semibold mb-2">
                      Collaboration Opportunities
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Joint projects on agentic AI workflows and automation
                      systems
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-semibold mb-2">Knowledge Sharing</h4>
                    <p className="text-sm text-muted-foreground">
                      Discussions on n8n orchestration, PyTorch, Langraph, and
                      Crewai
                    </p>
                  </div>
                </div>
                <Button
                  className="bg-accent hover:bg-accent/90 text-accent-foreground mt-6"
                  onClick={() => scrollToSection("contact")}
                >
                  Discuss Collaboration
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="animate-fade-in">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-semibold">Get in Touch</h3>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Name" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Input placeholder="Subject" />
                    </div>
                    <div>
                      <Textarea placeholder="Message" rows={6} />
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Send Message
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground text-center">
                    Typically replies within 3-5 business days
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card
                  className="animate-fade-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold mb-4">
                      Contact Details
                    </h3>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground">
                        contact@nikhilghode.com
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground">
                        Nagpur, Maharashtra, India
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Connect</h3>
                    <div className="flex gap-4">
                      <a
                        href="https://github.com/NikhilGhode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-accent/10 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/nikhilghode9/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-accent/10 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Agentic AI workflows and reproducible engineering
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 Nikhil Ghode. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <Chatbot />
    </div>
  );
};

export default Index;
