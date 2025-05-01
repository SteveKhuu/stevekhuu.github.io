import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, ExternalLink, Github, Linkedin, Mail, ChevronRight, Users, Building, Mic } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Steve Khuu</h1>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-[600px]">
                Engineering Leader & Coach | Transforming teams and infrastructure at scale
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="https://github.com/stevekhuu" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/stevekhuu/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                </Link>
                <Link href="mailto:contact@stevekhuu.com">
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="/placeholder.svg?height=280&width=280"
                alt="Steve Khuu"
                width={280}
                height={280}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <Card className="bg-gray-50 dark:bg-gray-900 border-0">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Users className="h-8 w-8 mb-2 text-primary" />
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Professionals Coached</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 dark:bg-gray-900 border-0">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Building className="h-8 w-8 mb-2 text-primary" />
                <h3 className="text-3xl font-bold">5+</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Fortune 500 Companies</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 dark:bg-gray-900 border-0">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Mic className="h-8 w-8 mb-2 text-primary" />
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Conference Talks</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 dark:bg-gray-900 border-0">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Briefcase className="h-8 w-8 mb-2 text-primary" />
                <h3 className="text-3xl font-bold">X</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">EV Stations Deployed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Highlights */}
      <section className="py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Career Highlights</h2>
          <Tabs defaultValue="ford" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="ford">Ford</TabsTrigger>
              <TabsTrigger value="facebook">Facebook</TabsTrigger>
              <TabsTrigger value="shopify">Shopify</TabsTrigger>
              <TabsTrigger value="coaching">Coaching</TabsTrigger>
            </TabsList>
            <TabsContent value="ford" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Transforming EV Infrastructure</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Led the transformation of Ford's electric vehicle infrastructure, implementing innovative solutions
                    that improved efficiency and scalability.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>EV Technology</Badge>
                    <Badge>Infrastructure</Badge>
                    <Badge>Leadership</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="facebook" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Strategic Consulting</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Provided expert consulting services to Facebook, helping to optimize processes and implement best
                    practices for engineering teams.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>Consulting</Badge>
                    <Badge>Process Optimization</Badge>
                    <Badge>Engineering Excellence</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="shopify" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Engineering Leadership</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Drove key initiatives at Shopify, focusing on scaling engineering practices and mentoring teams to
                    achieve exceptional results.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>Team Leadership</Badge>
                    <Badge>Scaling</Badge>
                    <Badge>Mentorship</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="coaching" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Professional Coaching</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Coached hundreds of professionals across various industries, helping them develop leadership skills
                    and advance their careers.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>Career Development</Badge>
                    <Badge>Leadership Training</Badge>
                    <Badge>Skill Enhancement</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Featured Project</h2>
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="md:grid md:grid-cols-2">
              <div className="bg-gray-100 dark:bg-gray-900 p-6 flex items-center justify-center">
                <div className="relative w-full h-[240px]">
                  <Image
                    src="/placeholder.svg?height=240&width=400"
                    alt="EM Toolkit Preview"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <CardContent className="p-6 md:p-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">EM Toolkit</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A comprehensive resource for Engineering Managers, providing frameworks, templates, and best
                    practices to excel in leadership roles.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Leadership</Badge>
                    <Badge variant="outline">Management</Badge>
                    <Badge variant="outline">Engineering</Badge>
                  </div>
                  <div className="pt-4">
                    <Link
                      href="https://www.notion.so/EM-Toolkit-1f4a8acc1dd14b87be2b6ebf6439ee95"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>
                        Explore EM Toolkit
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Personal Philosophy</h2>
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I believe in empowering teams through servant leadership, continuous learning, and data-driven decision
              making. My approach combines technical excellence with human-centered leadership to create sustainable,
              high-performing organizations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                  Influential Resources
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-16 bg-gray-100 dark:bg-gray-800 rounded flex-shrink-0 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">High Output Management</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Andrew Grove's principles on leveraging managerial leverage and focusing on outputs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-16 bg-gray-100 dark:bg-gray-800 rounded flex-shrink-0 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">The Phoenix Project</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        DevOps principles and the importance of systems thinking in technology organizations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-16 bg-gray-100 dark:bg-gray-800 rounded flex-shrink-0 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Radical Candor</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Kim Scott's framework for caring personally while challenging directly
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m2 12 5.45 5.45"></path>
                    <path d="M15.5 7.5a2.5 2.5 0 0 1 0 5"></path>
                    <path d="M17 12h-2"></path>
                    <path d="m2 12 5.45-5.45"></path>
                  </svg>
                  Applied Principles
                </h3>
                <div className="space-y-4">
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-3">
                    <h4 className="font-medium mb-1">Systems Thinking</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      I approach complex problems by understanding the entire system rather than isolated components,
                      leading to more sustainable solutions.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-3">
                    <h4 className="font-medium mb-1">Servant Leadership</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      My leadership style focuses on removing obstacles for my team and creating an environment where
                      everyone can do their best work.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-50 dark:bg-gray-900 p-3">
                    <h4 className="font-medium mb-1">Continuous Improvement</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      I implement regular retrospectives and feedback loops to ensure teams and processes are constantly
                      evolving and improving.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact/CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Let's Connect</h2>
          <p className="text-lg mb-8 max-w-[600px] mx-auto opacity-90">
            Interested in working together? Whether you're looking for coaching, consulting, or just want to chat about
            engineering leadership, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="mailto:contact@stevekhuu.com">
              <Button variant="secondary" size="lg">
                Send an Email
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/stevekhuu/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white hover:bg-white hover:text-primary"
              >
                Connect on LinkedIn
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Steve Khuu. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="https://github.com/stevekhuu" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" />
              </Link>
              <Link href="https://www.linkedin.com/in/stevekhuu/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" />
              </Link>
              <Link href="mailto:contact@stevekhuu.com">
                <Mail className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
