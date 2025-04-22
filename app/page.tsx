import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Instagram,
  TrendingUp,
  Lightbulb,
  BarChart2,
  Sparkles,
  Zap,
  Star,
  CheckCircle2,
  Clock,
  Heart,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-1.5 rounded-lg">
              <Instagram className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl">InstaGrowth AI</span>
            <Badge variant="outline" className="ml-2 hidden md:flex">
              Beta
            </Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-pink-600 transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-pink-600 transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-pink-600 transition-colors">
              Pricing
            </Link>
            <Link href="#coming-soon" className="text-sm font-medium hover:text-pink-600 transition-colors">
              Coming Soon
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                size="sm"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0"
              >
                Sign Up Free
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,192,203,0.2),transparent_60%)]"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-pink-100 text-pink-800 hover:bg-pink-100 border-0">
                #1 Creator Growth Tool 🚀
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                Level Up Your Insta Game with AI Magic ✨
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Connect your Instagram profile and let our AI analyze your account to recommend content that will help
                you grow your audience and engagement. <span className="font-medium">No cap!</span>
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/connect-instagram">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 w-full sm:w-auto group"
                  >
                    Get Started Free{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    See How It Works
                  </Button>
                </Link>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>No credit card required</span>
                <span className="mx-2">•</span>
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 shadow-lg relative z-10 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-50 blur-2xl"></div>
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Instagram profile analysis"
                  className="rounded-lg w-full relative z-10"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="font-medium">+43% Growth Potential</span>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-lg rotate-6">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-pink-500" />
                  <span className="text-sm font-medium">2.5x Engagement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100 border-0">Trending Now 🔥</Badge>
            <h2 className="text-3xl font-bold">Content That's Popping Off</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Stay ahead of the curve with these trending content formats that are getting the most engagement right
              now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden group hover:shadow-md transition-all">
              <div className="relative h-64 bg-gradient-to-br from-pink-400 to-purple-400">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Behind the scenes content"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <Badge className="bg-pink-500 hover:bg-pink-600 border-0 mb-2">Trending</Badge>
                    <h3 className="font-bold text-lg">Behind-the-Scenes</h3>
                    <p className="text-sm text-white/80">+127% engagement vs. polished content</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-md transition-all">
              <div className="relative h-64 bg-gradient-to-br from-blue-400 to-purple-400">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Day in the life content"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <Badge className="bg-blue-500 hover:bg-blue-600 border-0 mb-2">Viral Format</Badge>
                    <h3 className="font-bold text-lg">Day in the Life</h3>
                    <p className="text-sm text-white/80">Authentic daily routines are saving</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-md transition-all">
              <div className="relative h-64 bg-gradient-to-br from-orange-400 to-red-400">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Tutorial content"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <Badge className="bg-orange-500 hover:bg-orange-600 border-0 mb-2">High Engagement</Badge>
                    <h3 className="font-bold text-lg">Quick Tutorials</h3>
                    <p className="text-sm text-white/80">Educational content = higher saves</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-100 text-pink-800 hover:bg-pink-100 border-0">Features 💫</Badge>
            <h2 className="text-3xl font-bold">Tools to Make You Go Viral</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform analyzes your Instagram profile to provide actionable insights and content
              recommendations that actually work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-all p-6 rounded-xl">
              <div className="h-12 w-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <BarChart2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Account Analysis</h3>
              <p className="text-gray-600">
                Deep dive into your account metrics, audience demographics, and content performance to identify growth
                opportunities.
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-all p-6 rounded-xl">
              <div className="h-12 w-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content Recommendations</h3>
              <p className="text-gray-600">
                Get AI-generated content ideas tailored to your niche, audience preferences, and trending topics.
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-all p-6 rounded-xl">
              <div className="h-12 w-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Strategy</h3>
              <p className="text-gray-600">
                Receive a personalized growth strategy with posting schedules, hashtag recommendations, and engagement
                tactics.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100 border-0">Testimonials 💬</Badge>
            <h2 className="text-3xl font-bold">Creators Are Obsessed</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what content creators are saying about InstaGrowth AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 rounded-xl">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "This app is literally a game-changer! My engagement went up 78% in just two weeks using the content
                  ideas. The AI somehow knows exactly what my audience wants to see. No cap, best investment for my
                  creator career!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=50&width=50"
                      alt="Testimonial avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Zoe Martinez</h4>
                    <p className="text-sm text-gray-500">@zoe.creates • 124K followers</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 rounded-xl">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "I was struggling to grow my fashion account for months. After using InstaGrowth AI, I got content
                  ideas that actually resonated with my audience. My last post went semi-viral and I gained 2K followers
                  in a day! This tool is fire 🔥"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-blue-300 to-green-300 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=50&width=50"
                      alt="Testimonial avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Tyler Johnson</h4>
                    <p className="text-sm text-gray-500">@tyler.styles • 87K followers</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 rounded-xl">
              <CardContent className="p-0">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">
                  "As a small creator, I was lost on what content to make. The AI recommendations were spot on for my
                  niche! My engagement rate went from 1.2% to 4.8% in a month. The caption suggestions alone are worth
                  the subscription. Obsessed!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-orange-300 to-red-300 rounded-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=50&width=50"
                      alt="Testimonial avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Aisha Williams</h4>
                    <p className="text-sm text-gray-500">@aisha.creates • 32K followers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100 border-0">Reviews 🌟</Badge>
            <h2 className="text-3xl font-bold">What Our Users Think</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We've helped thousands of creators level up their Instagram game. Here's what they have to say.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.9</span>
              <span className="text-gray-500">out of 5</span>
              <span className="text-gray-500 ml-2">(1,247 reviews)</span>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">All Reviews</TabsTrigger>
              <TabsTrigger value="growth">Growth</TabsTrigger>
              <TabsTrigger value="content">Content Ideas</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full overflow-hidden">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Review avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">Jamie K.</h4>
                          <p className="text-xs text-gray-500">Travel Creator</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      "The hashtag recommendations alone doubled my reach. I'm now getting on the explore page regularly
                      and my follower growth is insane. Worth every penny!"
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-gradient-to-br from-blue-300 to-green-300 rounded-full overflow-hidden">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Review avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">Marcus T.</h4>
                          <p className="text-xs text-gray-500">Fitness Influencer</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      "As a fitness creator, I was stuck in a content rut. The AI suggested a 'day in the life' series
                      that my audience loved. My engagement is up 65%!"
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-gradient-to-br from-orange-300 to-red-300 rounded-full overflow-hidden">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Review avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">Sophia R.</h4>
                          <p className="text-xs text-gray-500">Beauty Creator</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      "The analytics are super detailed and helped me understand when my audience is most active. Would
                      love to see more beauty-specific content ideas though."
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full overflow-hidden">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Review avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">Leo J.</h4>
                          <p className="text-xs text-gray-500">Tech Creator</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      "I was skeptical about AI recommendations, but they're surprisingly good. The caption suggestions
                      save me so much time and actually sound like me!"
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="growth" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full overflow-hidden">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Review avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">Jamie K.</h4>
                          <p className="text-xs text-gray-500">Travel Creator</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      "The hashtag recommendations alone doubled my reach. I'm now getting on the explore page regularly
                      and my follower growth is insane. Worth every penny!"
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-gradient-to-br from-green-300 to-blue-300 rounded-full overflow-hidden">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Review avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">Elijah P.</h4>
                          <p className="text-xs text-gray-500">Gaming Creator</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      "Went from 5K to 50K followers in 3 months using the growth strategies. The AI knew exactly what
                      content would resonate with gamers. Absolutely insane results!"
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="content" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-gradient-to-br from-orange-300 to-red-300 rounded-full overflow-hidden">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Review avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">Sophia R.</h4>
                          <p className="text-xs text-gray-500">Beauty Creator</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      "The content ideas are fresh and on-trend. I was running out of ideas for my beauty page, and now
                      I have content planned for months!"
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-gradient-to-br from-blue-300 to-green-300 rounded-full overflow-hidden">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Review avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">Marcus T.</h4>
                          <p className="text-xs text-gray-500">Fitness Influencer</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      "The AI suggested content formats I never would have thought of. The before/after transformation
                      posts are now my highest performing content!"
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full overflow-hidden">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Review avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">Leo J.</h4>
                          <p className="text-xs text-gray-500">Tech Creator</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      "The analytics are so detailed! I can see exactly which content types perform best and when my
                      audience is most active. Game changer!"
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border border-gray-100 shadow-sm p-6 rounded-xl">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full overflow-hidden">
                          <img
                            src="/placeholder.svg?height=40&width=40"
                            alt="Review avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">Mia H.</h4>
                          <p className="text-xs text-gray-500">Lifestyle Creator</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">
                      "The audience insights helped me understand my followers better than Instagram's own analytics.
                      Now I know exactly what content to create!"
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100 border-0">Pricing 💸</Badge>
            <h2 className="text-3xl font-bold">Choose Your Growth Plan</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible plans to help you grow your Instagram presence, no matter your budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all rounded-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <p className="text-gray-600 mb-4">Perfect for new creators</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Basic account analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">3 content ideas per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Limited analytics</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Get Started Free
                </Button>
              </div>
            </Card>

            <Card className="bg-gradient-to-b from-pink-50 to-white border-2 border-pink-500 shadow-md hover:shadow-lg transition-all rounded-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-pink-500 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                Most Popular
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Creator</h3>
                <p className="text-gray-600 mb-4">For serious content creators</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$19</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Advanced account analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Unlimited content ideas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Full analytics dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Caption & hashtag generator</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Weekly growth reports</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0">
                  Start 7-Day Free Trial
                </Button>
              </div>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all rounded-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Influencer</h3>
                <p className="text-gray-600 mb-4">For professional influencers</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Everything in Creator plan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Priority content generation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Competitor analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">Brand partnership suggestions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">1-on-1 growth consultation</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section id="coming-soon" className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-100 border-0">Coming Soon 👀</Badge>
            <h2 className="text-3xl font-bold">New Features Dropping</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We're constantly improving InstaGrowth AI. Check out what's coming next!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-all p-6 rounded-xl">
              <div className="h-12 w-12 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">AI Content Generator</h3>
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 border-0">Soon</Badge>
              </div>
              <p className="text-gray-600">
                Generate complete posts including images, captions, and hashtags with our advanced AI. Just input your
                theme!
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-all p-6 rounded-xl">
              <div className="h-12 w-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">Content Calendar</h3>
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 border-0">Soon</Badge>
              </div>
              <p className="text-gray-600">
                Plan and schedule your content with our AI-powered content calendar. Never miss the best posting times
                again!
              </p>
            </Card>

            <Card className="bg-white border-0 shadow-md hover:shadow-lg transition-all p-6 rounded-xl">
              <div className="h-12 w-12 bg-gradient-to-br from-green-400 to-teal-400 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">Viral Prediction</h3>
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 border-0">Soon</Badge>
              </div>
              <p className="text-gray-600">
                Our AI will analyze your content before posting and predict its viral potential, with suggestions to
                improve!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100 border-0">How It Works 🧠</Badge>
            <h2 className="text-3xl font-bold">Three Simple Steps to Grow</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform makes growing your Instagram account easier than ever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect Instagram</h3>
              <p className="text-gray-600">
                Securely connect your Instagram account to our platform with just a few clicks. No password required!
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes your profile, content, audience, and engagement patterns to understand what works.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Recommendations</h3>
              <p className="text-gray-600">
                Receive personalized content recommendations and growth strategies that actually work for your account.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/connect-instagram">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 group"
              >
                Start Growing Today{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-1.5 rounded-lg">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
                <span className="font-bold text-xl">InstaGrowth AI</span>
              </div>
              <p className="text-gray-400">AI-powered Instagram growth platform for content creators.</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#coming-soon" className="text-gray-400 hover:text-white transition-colors">
                    Coming Soon
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} InstaGrowth AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
