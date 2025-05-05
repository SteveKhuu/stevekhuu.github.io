import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Banknote, Smile, ExternalLink, Github, Linkedin, Send, ChevronRight, Users, Building } from "lucide-react"
import { GoogleAnalytics } from "@/components/ui/google-analytics"
import { Suspense } from "react"

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
                Engineering Leader & Coach | Transforming teams at scale
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
                <Link href="https://t.me/stevekhuu">
                  <Button variant="outline" size="sm">
                    <Send className="h-4 w-4 mr-2" />
                    Telegram
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative w-[280px] h-[280px] rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="/photo.jpg?height=280&width=280"
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
                <Banknote className="h-8 w-8 mb-2 text-primary" />
                <h3 className="text-3xl font-bold">$2B+</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">New $ARR Created</p>
              </CardContent>
            </Card>
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
                <h3 className="text-3xl font-bold">20+</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Companies Advised</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-50 dark:bg-gray-900 border-0">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Smile className="h-8 w-8 mb-2 text-primary" />
                <h3 className="text-3xl font-bold">∞</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Happy Moments</p>
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
              <TabsTrigger value="homebase">Homebase</TabsTrigger>
              <TabsTrigger value="shopify">Shopify</TabsTrigger>
              <TabsTrigger value="ford">Ford</TabsTrigger>
              <TabsTrigger value="coaching">Coaching</TabsTrigger>
            </TabsList>
            <TabsContent value="homebase" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Leading Fintech Scaling</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Over 4% of American households-representing more than 5.6 million families-remain unbanked, 
                    while more than half are unable to afford a $400 emergency expense, highlighting persistent disparities 
                    in financial access and security. 
                    <br />
                    <br />
                    To address this gap, I led the development and scaling of Homebase Cash Out, 
                    an earned wage access solution that empowers employees to access their pay as they earn it, 
                    reducing reliance on predatory lending and providing critical financial flexibility. 
                    <br />
                    <br />
                    From a hackathon project with 0 users, we enrolled over 900,000 users, advanced $1 billion in funds, and increased average employee retention by over six months.
                    Leveraging machine learning, we optimized risk management and profitability in a high-risk environment, 
                    ensuring sustainable growth while delivering a vital benefit to underserved workers.
                    <br />
                    <br />
                    <Link 
                      href="https://www.joinhomebase.com/cashout" 
                      target="_blank"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                      rel="noopener noreferrer">
                        Learn more here
                    </Link>
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>Fintech</Badge>
                    <Badge>Machine Learning</Badge>
                    <Badge>Operational Excellence</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="shopify" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Brick-and-Mortar Breakthrough</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Shopify built its reputation empowering online entrepreneurs, but brick-and-mortar businesses faced unique challenges that existing tools couldn’t solve. 
                    As the founding engineering leader for Shopify POS Pro, I architected and launched a comprehensive, 
                    feature-rich solution designed specifically for physical retailers-covering everything from intuitive onboarding and staff education to seamless in-store interactions. 
                    <br/>
                    <br/>
                    This new business line enabled brick-and-mortar merchants to operate out-of-the-box, 
                    bridging the gap between digital and physical commerce. In just two years, POS Pro scaled to over $100 million in annual recurring revenue, with more than $20 million ARR in its first year, 
                    and today represents roughly 1% of Shopify's total revenue. This product not only expanded Shopify's market reach but also established a new standard for unified commerce, 
                    empowering thousands of local businesses to thrive in an omnichannel world
                  </p>
                  <Link 
                    href="https://www.shopify.com/ca/pos/pricing" 
                    target="_blank"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                    rel="noopener noreferrer">
                      Learn more here
                  </Link>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>Product Leadership</Badge>
                    <Badge>Small Businesses</Badge>
                    <Badge>Market-expanding</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ford" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Transforming EV Infrastructure</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    Ford set out to build a digital marketplace for telematics and connected vehicle services, 
                    but the project quickly evolved into a foundational platform that transformed the company's 
                    approach to software and electrification. 
                    <br />
                    <br />
                    By integrating software update capabilities directly into the assembly line and 
                    enabling over-the-air updates across the fleet, 
                    I helped architect the network that now powers Ford's digital product ecosystem. 
                    <br />
                    <br />
                    This infrastructure not only allowed for seamless distribution of new features and services to all vehicles-including third-party 
                    makes-but also became the critical enabler for Ford's electric vehicle (EV) strategy. Without this unified digital backbone, Ford's rapid EV innovation and market expansion would not have been possible, 
                    positioning the company as a leader in connected and electrified mobility.
                  </p>
                  <Link 
                    href="https://www.fordpro.ca/en-ca/intelligence/" 
                    target="_blank"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                    rel="noopener noreferrer">
                      Learn more here
                  </Link>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>EV Technology</Badge>
                    <Badge>Infrastructure</Badge>
                    <Badge>Digital Transformation</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="coaching" className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Professional Coaching</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    As a coach, I’ve empowered executives and founders across private equity and VC-backed companies-from pre-seed startups to post-Series A 
                    scale-ups-to build resilient, high-performing organizations. 
                    <br/>
                    <br/>
                    I’ve guided businesses through the unprecedented challenges of COVID, 
                    helped leaders scale talent and nurture future leaders, and supported individuals in achieving career breakthroughs, 
                    from promotions and entrepreneurship to landing their first tech jobs in Canada. 
                    <br/>
                    <br/>
                    Whether assisting professionals in transitioning into tech or helping those on performance improvement plans regain their footing, 
                    my coaching focuses on unlocking potential, driving growth, and enabling lasting success at every stage of the journey.
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
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Resources for Aspiring Leaders</h2>
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="md:grid md:grid-cols-2">
              <div className="bg-gray-100 dark:bg-gray-900 p-6 flex items-center justify-center">
                <div className="relative w-full h-[240px]">
                  <Image
                    src="/Engineering_Manager_Toolkit.png?height=240&width=400"
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
                      <Link 
                        href="https://www.amazon.ca/Measure-What-Matters-John-Doerr/dp/024134848X/ref=sr_1_1?crid=2NMXP7IJIRO3M&keywords=measure+what+matters&qid=1675978024&sprefix=Measure+What+Matters,aps,90&sr=8-1"
                        target="_blank"
                        >
                        <h4 className="font-medium">Measure What Matters</h4>
                      </Link>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Measure What Matters gives entrepreneurs a proven framework-OKRs-to set clear goals, align teams, and drive rapid business growth
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
                      <Link 
                        href="https://www.amazon.ca/Continuous-Discovery-Habits-Discover-Products/dp/1736633309/ref=sr_1_1?crid=F6MNZZUYF1ZU&keywords=Continuous+Discovery+Habits&qid=1675978038&sprefix=continuous+discovery+habits%2Caps%2C91&sr=8-1"
                        target="_blank"
                        >
                        <h4 className="font-medium">Continous Discovery Habits</h4>
                      </Link>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Continuous Discovery Habits gives entrepreneurs a practical framework for continuously engaging customers, testing ideas, and building products that truly solve real problems
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
                      <Link 
                        href="https://www.amazon.ca/Five-Dysfunctions-Team-Leadership-Fable/dp/0787960756/ref=sr_1_1?crid=3HIBN6W3IM9UT&dib=eyJ2IjoiMSJ9.m-S3In8lXHSPxHFwaOT8Tc02zw7IcGxTr1PqQzSdt5Y_l10GKLw6kWlFSp3_oeB_0tOEKiRPTAiC_FWeDi5B_iWkht7bCd31j7F2ALrdNPGUEZEXRM59cqFYbxMfqNqyhMRwds52sjv14F7trWWLmnWaBifa5j7uW2AC_29zeT8NtZCBiSgx53EcBMRCccHr7DOAzagcK2LY92Y8gnyMHPcFBRIA8tsr_y3jp-G4sRHjh5ofjh-xcxrLDR3I-0-c5ooRw5ouea6HWBhkXqadto6jbEr91FYukbCE7tplGF4.9ISQam2irYkglkH3p0Cb4-ZNCFPjexsSeLI00ukox-U&dib_tag=se&keywords=five+dysfunctions&qid=1746128447&sprefix=fiev+dysfunctions%2Caps%2C81&sr=8-1"
                        target="_blank"
                        >
                          <h4 className="font-medium">Five Dysfunctions of a Team</h4>
                      </Link>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Lencioni's work reveals the root causes of team dysfunction and offers a clear, actionable model for building trust, fostering healthy conflict, and achieving collective results-essential reading for anyone looking to turn a group of individuals into a high-performing team.
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
                    <h4 className="font-medium mb-1">Growth Engineering</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      I help companies uncover their distinctive strengths and systematically build on them to drive meaningful, exponential growth over the long term.
                    </p>
                  </div>
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
            <Link href="https://t.me/stevekhuu">
              <Button variant="secondary" size="lg">
                Send me a Telegram
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
              <Link href="https://t.me/stevekhuu">
                <Send className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300" />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <Suspense fallback={<>Loading...</>}>
        <GoogleAnalytics/>
      </Suspense>
    </div>
  )
}
