"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Mail,
  LayoutGrid,
  Briefcase,
  BrainCircuit,
  History,
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  Linkedin,
  Github,
  Twitter,
  ExternalLink,
  Menu,
  X,
} from "lucide-react"

export default function DashboardPortfolio() {
  const [activeSection, setActiveSection] = useState("overview")
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const navItems = [
    { id: "overview", label: "Overview", icon: LayoutGrid },
    { id: "case-studies", label: "Case Studies", icon: Briefcase },
    { id: "ai-projects", label: "AI Projects", icon: BrainCircuit },
    { id: "experience", label: "Experience", icon: History },
  ]

  return (
    <div className={`min-h-screen font-sans ${isDarkMode ? "dark" : ""}`}>
      <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden fixed top-4 left-4 z-50 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg p-2 border border-slate-700 transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <aside
          className={`${
            isSidebarCollapsed ? "w-20" : "w-72"
          } ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:relative z-40 bg-slate-900/50 backdrop-blur-xl border-r border-slate-800/50 transition-all duration-300 flex flex-col h-full`}
        >
          {/* Collapse Toggle Button */}
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="hidden lg:block absolute -right-3 top-8 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full p-1 border border-slate-700 transition-colors z-10"
          >
            {isSidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 pt-8">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setActiveSection(item.id)
                        setIsMobileMenuOpen(false)
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                        activeSection === item.id
                          ? "bg-blue-600/20 text-blue-400 shadow-lg shadow-blue-500/20"
                          : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                      }`}
                    >
                      <Icon
                        size={20}
                        className={
                          activeSection === item.id ? "text-blue-400" : "text-slate-500 group-hover:text-slate-300"
                        }
                      />
                      {!isSidebarCollapsed && <span className="font-medium">{item.label}</span>}
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className="p-4 border-t border-slate-800/50 space-y-4">
            {/* Dark Mode Toggle */}
            {!isSidebarCollapsed && (
              <div className="flex items-center justify-between px-4 py-2 bg-slate-800/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <Sun className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm text-slate-400">Theme</span>
                </div>
                <div className="flex items-center gap-2">
                  <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
                  <Moon className="h-4 w-4 text-slate-300" />
                </div>
              </div>
            )}

            <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
              <DialogTrigger asChild>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/30 transition-all duration-200">
                  {isSidebarCollapsed ? <Mail size={20} /> : "Get in Touch"}
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-slate-800">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-white">Get in Touch</DialogTitle>
                  <DialogDescription className="text-slate-400">
                    Let's connect! Choose your preferred way to reach out.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <a
                    href="mailto:me@ajaynichani.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                      <Mail className="text-blue-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-sm text-slate-400">me@ajaynichani.com</p>
                    </div>
                    <ExternalLink className="text-slate-500 group-hover:text-blue-400 transition-colors" size={20} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ajay-nichani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                      <Linkedin className="text-blue-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">LinkedIn</h4>
                      <p className="text-sm text-slate-400">Connect professionally</p>
                    </div>
                    <ExternalLink className="text-slate-500 group-hover:text-blue-400 transition-colors" size={20} />
                  </a>

                  <a
                    href="https://github.com/ahj-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                      <Github className="text-purple-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">GitHub</h4>
                      <p className="text-sm text-slate-400">Check out my code</p>
                    </div>
                    <ExternalLink className="text-slate-500 group-hover:text-purple-400 transition-colors" size={20} />
                  </a>

                  <a
                    href="https://x.com/aHj_builds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center group-hover:bg-cyan-600/30 transition-colors">
                      <Twitter className="text-cyan-400" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">Twitter</h4>
                      <p className="text-sm text-slate-400">Follow my journey</p>
                    </div>
                    <ExternalLink className="text-slate-500 group-hover:text-cyan-400 transition-colors" size={20} />
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto lg:ml-0">
          <div className="p-4 lg:p-8 pt-16 lg:pt-8">
            {/* Header */}
            <div className="mb-6 lg:mb-8">
              <h1 className="text-2xl lg:text-4xl font-bold text-white mb-2">
                {activeSection === "overview" && "Welcome"}
                {activeSection === "case-studies" && "Case Studies"}
                {activeSection === "ai-projects" && "AI Projects"}
                {activeSection === "experience" && "Experience Timeline"}
              </h1>
              <p className="text-slate-400">
                {activeSection === "overview" && "Building the future of AI products"}
                {activeSection === "case-studies" && "Explore detailed case studies and product outcomes"}
                {activeSection === "ai-projects" && "AI-powered projects and prototypes"}
                {activeSection === "experience" && "Professional journey and career milestones"}
              </p>
            </div>

            {/* Overview Section */}
            {activeSection === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                <Card className="lg:col-span-3 border-slate-800/50 bg-gradient-to-br from-blue-600/10 via-slate-900/50 to-purple-600/10 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8">
                      <img
                        src="/memoji.png"
                        alt="Ajay Nichani"
                        className="w-24 h-24 lg:w-32 lg:h-32 rounded-full ring-4 ring-blue-500/50 shadow-xl shadow-blue-500/30"
                      />
                      <div className="flex-1 text-center md:text-left">
                        <h2 className="text-xl lg:text-3xl font-bold text-white mb-2 text-balance">
                          AI Product Manager & Full-Stack Builder
                        </h2>
                        <p className="text-base lg:text-lg text-slate-300 mb-4 text-pretty leading-relaxed">
                          I transform complex problems into elegant, AI-powered solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-3 lg:gap-4 mb-6">
                          <Button
                            onClick={() => window.open("mailto:me@ajaynichani.com", "_blank")}
                            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/30"
                          >
                            <Mail className="mr-2 h-4 w-4" />
                            Get in Touch
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setActiveSection("case-studies")}
                            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
                          >
                            View Case Studies
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                          <a
                            href="https://www.linkedin.com/in/ajay-nichani/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
                          >
                            <Linkedin size={20} />
                            <span className="text-sm">LinkedIn</span>
                          </a>
                          <a
                            href="https://github.com/ahj-ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
                          >
                            <Github size={20} />
                            <span className="text-sm">GitHub</span>
                          </a>
                          <a
                            href="https://x.com/aHj_builds"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
                          >
                            <Twitter size={20} />
                            <span className="text-sm">Twitter</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <CardHeader>
                    <CardTitle className="text-white">Key Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-blue-400">1000+</div>
                      <div className="text-sm text-slate-400">Hours of Product Management</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-400">$50M+</div>
                      <div className="text-sm text-slate-400">in Revenue Generated</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-400">10+</div>
                      <div className="text-sm text-slate-400">AI Products Shipped</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <CardHeader>
                    <CardTitle className="text-white">About Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 leading-relaxed">
                      My product philosophy is to build with empathy, iterate with data, and always prioritize the user. I'm driven by a deep curiosity about AI's potential to solve real-world problems. When I'm not building, you can find me exploring new hiking trails or diving into a good sci-fi novel.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <CardHeader>
                    <CardTitle className="text-white">Expertise & Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 hover:bg-blue-600/30">
                        AI Product Strategy
                      </Badge>
                      <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 hover:bg-purple-600/30">
                        0→1 Product Development
                      </Badge>
                      <Badge className="bg-green-600/20 text-green-400 border-green-500/30 hover:bg-green-600/30">
                        Growth & Monetization
                      </Badge>
                      <Badge className="bg-cyan-600/20 text-cyan-400 border-cyan-500/30 hover:bg-cyan-600/30">
                        Full-Stack Prototyping
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <CardHeader>
                    <CardTitle className="text-white">Professional Toolkit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center">
                          <img src="/figma-logo.png" alt="Figma" className="w-6 h-6" />
                        </div>
                        <span className="text-xs text-slate-400">Figma</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center">
                          <img src="/notion-logo.png" alt="Notion" className="w-6 h-6" />
                        </div>
                        <span className="text-xs text-slate-400">Notion</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center">
                          <img src="/gemini-ai-logo.jpg" alt="Gemini" className="w-6 h-6" />
                        </div>
                        <span className="text-xs text-slate-400">Gemini</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center">
                          <img src="/openai-logo-inspired-abstract.png" alt="OpenAI" className="w-6 h-6" />
                        </div>
                        <span className="text-xs text-slate-400">OpenAI</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center">
                          <img src="/supabase-logo.png" alt="Supabase" className="w-6 h-6" />
                        </div>
                        <span className="text-xs text-slate-400">Supabase</span>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center">
                          <img src="/jira-logo.png" alt="Jira" className="w-6 h-6" />
                        </div>
                        <span className="text-xs text-slate-400">Jira</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <CardHeader>
                    <CardTitle className="text-white">AI Projects</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-600/20 flex items-center justify-center">
                        <BrainCircuit className="text-green-400" size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">TutorOps</h4>
                        <p className="text-sm text-slate-400">Operations platform for tutoring businesses</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <img src="/mathstack-logo.png" alt="MathStack AI" className="w-10 h-10 rounded-lg" />
                      <div>
                        <h4 className="text-white font-semibold">MathStack AI</h4>
                        <p className="text-sm text-slate-400">AI-powered EdTech platform</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <img src="/picktrckr-logo.png" alt="PickTrckr" className="w-10 h-10 rounded-lg" />
                      <div>
                        <h4 className="text-white font-semibold">PickTrckr</h4>
                        <p className="text-sm text-slate-400">NFL pick'em competition app</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
                      onClick={() => setActiveSection("ai-projects")}
                    >
                      View All Projects
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="lg:col-span-2 border-slate-800/50 bg-slate-900/50 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <CardHeader>
                    <CardTitle className="text-white">Case Studies</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
                        <h4 className="text-white font-semibold mb-2">Shopkick</h4>
                        <p className="text-sm text-slate-400 mb-3">
                          Digital Receipts product line driving $10M ARR and 30% YoY conversion increase
                        </p>
                        <Badge className="bg-green-600/20 text-green-400 border-green-500/30">$10M ARR</Badge>
                      </div>
                      <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
                        <h4 className="text-white font-semibold mb-2">InterRoom</h4>
                        <p className="text-sm text-slate-400 mb-3">
                          HR SaaS platform reducing time-to-hire by 40% for enterprise clients
                        </p>
                        <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30">40% Faster</Badge>
                      </div>
                      <div className="p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
                        <h4 className="text-white font-semibold mb-2">NimbleRx</h4>
                        <p className="text-sm text-slate-400 mb-3">
                          Healthcare technology improving patient satisfaction by 40%
                        </p>
                        <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30">40% Satisfaction</Badge>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/20"
                      onClick={() => setActiveSection("case-studies")}
                    >
                      Explore All Case Studies
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="lg:col-span-3 border-slate-800/50 bg-slate-900/50 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <CardHeader>
                    <CardTitle className="text-white">Career Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center justify-center">
                      <div className="flex-1 p-6 rounded-lg bg-gradient-to-br from-green-600/10 to-emerald-600/10 border border-green-500/30">
                        <div className="text-sm text-green-400 mb-2">2025 - Present</div>
                        <h4 className="text-xl font-semibold text-white mb-1">Founder</h4>
                        <h5 className="text-green-400 mb-3">
                          <a
                            href="https://tutorops.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline inline-flex items-center gap-1"
                          >
                            TutorOps
                            <ExternalLink size={14} />
                          </a>
                        </h5>
                        <p className="text-sm text-slate-400">
                          Building operations platform for tutoring businesses to streamline scheduling and payments
                        </p>
                      </div>
                      <div className="flex-1 p-6 rounded-lg bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/30">
                        <div className="text-sm text-blue-400 mb-2">2024 - Present</div>
                        <h4 className="text-xl font-semibold text-white mb-1">Founder</h4>
                        <h5 className="text-blue-400 mb-3">MathStack AI</h5>
                        <p className="text-sm text-slate-400">
                          Building AI-powered EdTech platform for personalized mathematics learning
                        </p>
                      </div>
                      <div className="flex-1 p-6 rounded-lg bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-purple-500/30">
                        <div className="text-sm text-purple-400 mb-2">2023 - Present</div>
                        <h4 className="text-xl font-semibold text-white mb-1">Product Lead</h4>
                        <h5 className="text-purple-400 mb-3">InterRoom</h5>
                        <p className="text-sm text-slate-400">
                          Leading HR SaaS platform development with 40% reduction in time-to-hire
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white bg-transparent"
                      onClick={() => setActiveSection("experience")}
                    >
                      View Full Timeline
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            )}

            {/* Case Studies Section */}
            {activeSection === "case-studies" && (
              <div className="grid gap-6 max-w-5xl">
                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Digital Receipts Product Line</CardTitle>
                    <p className="text-blue-400 font-medium">Shopkick</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-300">
                      Led the development of a major new feature to drive user engagement by rewarding users for any
                      purchase.
                    </p>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Problem</h4>
                      <p className="text-slate-400">
                        Users wanted more ways to earn rewards, and the business needed a scalable way to validate
                        purchases from any store.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Impact</h4>
                      <div className="flex flex-wrap gap-3">
                        <Badge className="bg-green-600/20 text-green-400 border-green-500/30">
                          30% YoY Conversion Increase
                        </Badge>
                        <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30">25% Increase in WAU</Badge>
                        <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30">$10M ARR</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">HR SaaS Platform</CardTitle>
                    <p className="text-purple-400 font-medium">InterRoom</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-300">
                      Led product development for a comprehensive HR SaaS platform featuring a client portal and job
                      tracker.
                    </p>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Problem</h4>
                      <p className="text-slate-400">
                        Enterprise HR teams were struggling with fragmented systems, leading to inefficient hiring
                        processes.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Impact</h4>
                      <div className="flex flex-wrap gap-3">
                        <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30">
                          40% Reduced Time-to-Hire
                        </Badge>
                        <Badge className="bg-green-600/20 text-green-400 border-green-500/30">
                          95% User Satisfaction
                        </Badge>
                        <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30">$500k Seed Funding</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Healthcare Technology Solutions</CardTitle>
                    <p className="text-cyan-400 font-medium">NimbleRx</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-300">
                      Managed product development for healthcare technology solutions focused on improving patient
                      experience.
                    </p>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Problem</h4>
                      <p className="text-slate-400">
                        Healthcare providers needed better technology solutions to improve patient experience and
                        streamline operations.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Impact</h4>
                      <div className="flex flex-wrap gap-3">
                        <Badge className="bg-cyan-600/20 text-cyan-400 border-cyan-500/30">
                          40% Patient Satisfaction
                        </Badge>
                        <Badge className="bg-green-600/20 text-green-400 border-green-500/30">20% Cost Reduction</Badge>
                        <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30">3 Major Features</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* AI Projects Section */}
            {activeSection === "ai-projects" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl hover:border-green-500/50 transition-all duration-300">
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-16 h-16 mb-4 rounded-lg bg-green-600/20 flex items-center justify-center">
                      <BrainCircuit className="text-green-400" size={32} />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">TutorOps</h3>
                    <p className="text-slate-400 mb-6">
                      An operations platform for tutoring businesses that streamlines scheduling, payments, and business
                      management with intelligent automation and analytics.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-green-600/20 text-green-400 border-green-500/30">SaaS</Badge>
                      <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30">Operations</Badge>
                      <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30">Full-Stack</Badge>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
                      onClick={() => window.open("https://tutorops.app", "_blank")}
                    >
                      Visit Project
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300">
                  <CardContent className="p-6 lg:p-8">
                    <img src="/mathstack-logo.png" alt="MathStack AI" className="w-16 h-16 mb-4 rounded-lg" />
                    <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">MathStack AI</h3>
                    <p className="text-slate-400 mb-6">
                      An AI-powered EdTech platform for mathematics learning that personalizes the educational
                      experience using advanced machine learning algorithms.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30">AI/ML</Badge>
                      <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30">EdTech</Badge>
                      <Badge className="bg-green-600/20 text-green-400 border-green-500/30">Next.js</Badge>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600"
                      onClick={() => window.open("https://mathstackai.app", "_blank")}
                    >
                      Visit Project
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300">
                  <CardContent className="p-6 lg:p-8">
                    <img src="/picktrckr-logo.png" alt="PickTrckr" className="w-16 h-16 mb-4 rounded-lg" />
                    <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4">PickTrckr</h3>
                    <p className="text-slate-400 mb-6">
                      A web application for friends to compete in NFL weekly pick'em pools, featuring real-time scoring
                      and social competition.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30">Web App</Badge>
                      <Badge className="bg-cyan-600/20 text-cyan-400 border-cyan-500/30">Full-Stack</Badge>
                      <Badge className="bg-green-600/20 text-green-400 border-green-500/30">Stripe</Badge>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600"
                      onClick={() => window.open("https://v0-nfl-betting-app-beta.vercel.app/", "_blank")}
                    >
                      Visit Project
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Experience Section */}
            {activeSection === "experience" && (
              <div className="max-w-5xl space-y-4 lg:space-y-6">
                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-start gap-4 lg:gap-6">
                      <div className="flex-1">
                        <div className="text-sm text-green-400 mb-2">2025 - Present</div>
                        <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">Founder</h3>
                        <h4 className="text-lg lg:text-xl text-green-400 mb-4">
                          <a
                            href="https://tutorops.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline inline-flex items-center gap-2"
                          >
                            TutorOps
                            <ExternalLink size={16} />
                          </a>
                        </h4>
                        <ul className="space-y-2 text-slate-400">
                          <li>• Building operations platform for tutoring businesses</li>
                          <li>• Streamlining scheduling, payments, and business management</li>
                          <li>• Developing end-to-end product strategy and technical implementation</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-start gap-4 lg:gap-6">
                      <div className="flex-1">
                        <div className="text-sm text-blue-400 mb-2">2024 - Present</div>
                        <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">Founder</h3>
                        <h4 className="text-lg lg:text-xl text-blue-400 mb-4">MathStack AI</h4>
                        <ul className="space-y-2 text-slate-400">
                          <li>• Founded an AI-powered EdTech platform focused on mathematics learning</li>
                          <li>• Developed innovative AI-driven solutions for personalized learning experiences</li>
                          <li>• Built end-to-end product strategy and technical implementation</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-start gap-4 lg:gap-6">
                      <div className="flex-1">
                        <div className="text-sm text-purple-400 mb-2">2023 - Present</div>
                        <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">Product Lead</h3>
                        <h4 className="text-lg lg:text-xl text-purple-400 mb-4">InterRoom</h4>
                        <ul className="space-y-2 text-slate-400">
                          <li>• Leading product development for HR SaaS platform with client portal and job tracker</li>
                          <li>• Driving user-centric design and feature development</li>
                          <li>• Managing cross-functional teams to deliver enterprise solutions</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-start gap-4 lg:gap-6">
                      <div className="flex-1">
                        <div className="text-sm text-cyan-400 mb-2">2022</div>
                        <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">Senior Product Manager</h3>
                        <h4 className="text-lg lg:text-xl text-cyan-400 mb-4">Nimble RX</h4>
                        <ul className="space-y-2 text-slate-400">
                          <li>• Managed product development for healthcare technology solutions</li>
                          <li>• Focused on improving patient experience and operational efficiency</li>
                          <li>• Collaborated with healthcare professionals to define product requirements</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl">
                  <CardContent className="p-6 lg:p-8">
                    <div className="flex items-start gap-4 lg:gap-6">
                      <div className="flex-1">
                        <div className="text-sm text-green-400 mb-2">2017 - 2022</div>
                        <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                          Senior Product Manager / Product Manager
                        </h3>
                        <h4 className="text-lg lg:text-xl text-green-400 mb-4">Shopkick</h4>
                        <ul className="space-y-2 text-slate-400">
                          <li>
                            • Led development of Digital Receipts product line, increasing purchase conversion by 30%
                            YoY
                          </li>
                          <li>• Built Targeted Video Advertising platform generating $10M ARR</li>
                          <li>• Managed end-to-end product lifecycle from conception to launch</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
