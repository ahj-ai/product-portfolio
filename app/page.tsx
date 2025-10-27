"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
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
          className="fixed top-4 left-4 z-50 lg:hidden bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg p-2 border border-slate-700 transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <aside
          className={`${
            isSidebarCollapsed ? "w-20" : "w-72"
          } bg-slate-900/50 backdrop-blur-xl border-r border-slate-800/50 transition-all duration-300 flex flex-col relative
          ${
            isMobileMenuOpen ? "fixed inset-y-0 left-0 z-40" : "hidden"
          } lg:flex`}
        >
          {/* Collapse Toggle Button - Desktop Only */}
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

            {/* Get in Touch Button */}
            <Button
              onClick={() => window.open("mailto:ajay@example.com", "_blank")}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/30 transition-all duration-200"
            >
              {isSidebarCollapsed ? <Mail size={20} /> : "Get in Touch"}
            </Button>
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-6 sm:mb-8 mt-12 lg:mt-0">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
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
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                <Card className="lg:col-span-3 border-slate-800/50 bg-gradient-to-br from-blue-600/10 via-slate-900/50 to-purple-600/10 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <img
                        src="/memoji.png"
                        alt="Ajay Nichani"
                        className="w-32 h-32 rounded-full ring-4 ring-blue-500/50 shadow-xl shadow-blue-500/30"
                      />
                      <div className="flex-1 text-center md:text-left">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 text-balance">
                          AI Product Manager & Full-Stack Builder
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-slate-300 mb-4 text-pretty leading-relaxed">
                          I transform complex problems into elegant, AI-powered solutions.
                        </p>
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
                          <Button
                            onClick={() => window.open("mailto:ajay@example.com", "_blank")}
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
                            href="https://linkedin.com/in/ajaynichani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
                          >
                            <Linkedin size={20} />
                            <span className="text-sm">LinkedIn</span>
                          </a>
                          <a
                            href="https://github.com/ajaynichani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
                          >
                            <Github size={20} />
                            <span className="text-sm">GitHub</span>
                          </a>
                          <a
                            href="https://twitter.com/ajaynichani"
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
                  <CardContent className="space-y-4 p-4 sm:p-6">
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
                  <CardContent className="p-4 sm:p-6">
                    <p className="text-slate-300 leading-relaxed">
                      My product philosophy is to build with empathy, iterate with data, and always prioritize the user. I'm driven by a deep curiosity about AI's potential to solve real-world problems. When I'm not building, you can find me exploring new hiking trails or diving into a good sci-fi novel.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <CardHeader>
                    <CardTitle className="text-white">Expertise & Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
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
                  <CardContent className="p-4 sm:p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
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
                  <CardContent className="space-y-4 p-4 sm:p-6">
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
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-white">Case Studies</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 p-4 sm:p-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white"
                      onClick={() => setActiveSection("case-studies")}
                    >
                      Explore All Case Studies
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="lg:col-span-3 border-slate-800/50 bg-slate-900/50 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-white">Career Experience</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-center justify-center">
                      <div className="flex-1 p-6 rounded-lg bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/30">
                        <div className="text-sm text-blue-400 mb-2">2024 - Present</div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">Founder</h4>
                        <h5 className="text-blue-400 mb-3">MathStack AI</h5>
                        <p className="text-sm text-slate-400">
                          Building AI-powered EdTech platform for personalized mathematics learning
                        </p>
                      </div>
                      <div className="flex-1 p-6 rounded-lg bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-purple-500/30">
                        <div className="text-sm text-purple-400 mb-2">2023 - Present</div>
                        <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">Product Lead</h4>
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
              <div className="grid gap-4 sm:gap-6 max-w-5xl">
                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-xl sm:text-2xl text-white">Digital Receipts Product Line</CardTitle>
                    <p className="text-blue-400 font-medium">Shopkick</p>
                  </CardHeader>
                  <CardContent className="space-y-4 p-4 sm:p-6">
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
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-xl sm:text-2xl text-white">HR SaaS Platform</CardTitle>
                    <p className="text-purple-400 font-medium">InterRoom</p>
                  </CardHeader>
                  <CardContent className="space-y-4 p-4 sm:p-6">
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
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-xl sm:text-2xl text-white">Healthcare Technology Solutions</CardTitle>
                    <p className="text-cyan-400 font-medium">NimbleRx</p>
                  </CardHeader>
                  <CardContent className="space-y-4 p-4 sm:p-6">
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
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <img src="/mathstack-logo.png" alt="MathStack AI" className="w-16 h-16 mb-4 rounded-lg" />
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">MathStack AI</h3>
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
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <img src="/picktrckr-logo.png" alt="PickTrckr" className="w-16 h-16 mb-4 rounded-lg" />
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">PickTrckr</h3>
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
              <div className="max-w-5xl space-y-4 sm:space-y-6">
                <Card className="border-slate-800/50 bg-slate-900/50 backdrop-blur-xl">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-1">
                        <div className="text-sm text-blue-400 mb-2">2024 - Present</div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">Founder</h3>
                        <h4 className="text-lg sm:text-xl text-blue-400 mb-4">MathStack AI</h4>
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
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-1">
                        <div className="text-sm text-purple-400 mb-2">2023 - Present</div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">Product Lead</h3>
                        <h4 className="text-lg sm:text-xl text-purple-400 mb-4">InterRoom</h4>
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
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-1">
                        <div className="text-sm text-cyan-400 mb-2">2022</div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">Senior Product Manager</h3>
                        <h4 className="text-lg sm:text-xl text-cyan-400 mb-4">Nimble RX</h4>
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
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-1">
                        <div className="text-sm text-green-400 mb-2">2017 - 2022</div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                          Senior Product Manager / Product Manager
                        </h3>
                        <h4 className="text-lg sm:text-xl text-green-400 mb-4">Shopkick</h4>
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
