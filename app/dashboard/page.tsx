import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Instagram,
  BarChart2,
  Users,
  TrendingUp,
  Calendar,
  MessageSquare,
  Heart,
  ImageIcon,
  Video,
  Lightbulb,
  RefreshCw,
  Sparkles,
  ArrowRight,
  Clock,
  FlameIcon as Fire,
} from "lucide-react"

export default function Dashboard() {
  // Mock data for the dashboard
  const profileData = {
    username: "creativecontent",
    followers: 5432,
    following: 876,
    posts: 124,
    engagement: 3.2,
    growth: 1.8,
  }

  const contentRecommendations = [
    {
      id: 1,
      type: "image",
      title: "Lifestyle Photography Series",
      description: "Create a series showcasing your daily creative process with behind-the-scenes content.",
      potential: 87,
      trending: true,
    },
    {
      id: 2,
      type: "video",
      title: "Tutorial Content",
      description: "Share your expertise with step-by-step tutorials on creative techniques.",
      potential: 92,
    },
    {
      id: 3,
      type: "carousel",
      title: "Before/After Transformations",
      description: "Show the evolution of your projects from concept to completion.",
      potential: 78,
      trending: true,
    },
  ]

  const insights = [
    {
      title: "Best Posting Time",
      value: "Tuesdays & Thursdays, 6-8 PM",
      icon: <Calendar className="h-5 w-5 text-pink-600" />,
    },
    {
      title: "Top Content Type",
      value: "Carousel Posts (+42% engagement)",
      icon: <ImageIcon className="h-5 w-5 text-pink-600" />,
    },
    {
      title: "Audience Activity",
      value: "Most active on weekday evenings",
      icon: <Users className="h-5 w-5 text-pink-600" />,
    },
    {
      title: "Engagement Rate",
      value: "3.2% (Above average)",
      icon: <Heart className="h-5 w-5 text-pink-600" />,
    },
  ]

  const trendingTopics = [
    "Day in the Life",
    "Behind the Scenes",
    "Quick Tips",
    "Transformation Tuesday",
    "Creator Collabs",
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-pink-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-1.5 rounded-lg">
              <Instagram className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl">InstaGrowth AI</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-white">CC</span>
              </div>
              <span className="text-sm font-medium">@{profileData.username}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold">Hey Creator! 👋</h1>
              <p className="text-gray-600">Here's your Instagram growth dashboard</p>
            </div>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0">
              <RefreshCw className="h-4 w-4 mr-2" /> Refresh Analysis
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <CardDescription>Followers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">{profileData.followers.toLocaleString()}</div>
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-xs text-green-600 mt-1 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" /> +{profileData.growth}% this month
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <CardDescription>Posts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">{profileData.posts}</div>
                  <ImageIcon className="h-5 w-5 text-gray-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <CardDescription>Engagement Rate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">{profileData.engagement}%</div>
                  <Heart className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-xs text-green-600 mt-1">Above average for your niche</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <CardDescription>Growth Potential</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">High</div>
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </div>
                <div className="text-xs text-gray-600 mt-1">Based on content analysis</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Trending Now 🔥</CardTitle>
                    <Badge variant="outline" className="bg-pink-100 text-pink-800 hover:bg-pink-100 border-0">
                      Hot Topics
                    </Badge>
                  </div>
                  <CardDescription>Content formats that are performing well in your niche</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-xl border border-pink-100">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Fire className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">Day in the Life</div>
                          <div className="text-sm text-gray-600 mt-1">
                            Authentic daily routines are getting 2.4x more engagement than posed content
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Video className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">Tutorial Videos</div>
                          <div className="text-sm text-gray-600 mt-1">
                            Educational content is getting 78% more saves and shares than other formats
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 rounded-xl border border-green-100">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 bg-gradient-to-br from-green-400 to-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                          <ImageIcon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">Before/After</div>
                          <div className="text-sm text-gray-600 mt-1">
                            Transformation posts are getting 3.1x more engagement in your niche
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-xl border border-orange-100">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Sparkles className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">Behind the Scenes</div>
                          <div className="text-sm text-gray-600 mt-1">
                            Raw, authentic content showing your process is trending up 127%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all h-full">
                <CardHeader>
                  <CardTitle>Trending Hashtags</CardTitle>
                  <CardDescription>Popular hashtags in your niche</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "#dayinthelife",
                        "#behindthescenes",
                        "#creativeminds",
                        "#contentcreator",
                        "#growthtips",
                        "#creatorsoftiktok",
                        "#instagramtips",
                        "#creativecommunity",
                      ].map((hashtag, index) => (
                        <Badge
                          key={index}
                          className={`bg-gradient-to-r ${
                            index % 3 === 0
                              ? "from-pink-100 to-purple-100 text-pink-800"
                              : index % 3 === 1
                                ? "from-blue-100 to-purple-100 text-blue-800"
                                : "from-green-100 to-blue-100 text-green-800"
                          } hover:bg-opacity-90 border-0`}
                        >
                          {hashtag}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="text-sm font-medium mb-2">Trending Topics</h4>
                      <ul className="space-y-2">
                        {trendingTopics.map((topic, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <span className="h-2 w-2 rounded-full bg-pink-500"></span>
                            {topic}
                            {index < 2 && (
                              <Badge
                                variant="outline"
                                className="ml-auto text-[10px] py-0 h-4 bg-pink-100 text-pink-800 border-0"
                              >
                                Hot
                              </Badge>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Tabs defaultValue="recommendations" className="mb-8">
            <TabsList className="mb-6 bg-white p-1 rounded-lg">
              <TabsTrigger
                value="recommendations"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-md"
              >
                Content Recommendations
              </TabsTrigger>
              <TabsTrigger
                value="insights"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-md"
              >
                Account Insights
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-md"
              >
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="recommendations">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contentRecommendations.map((rec) => (
                  <Card
                    key={rec.id}
                    className="bg-white border-0 shadow-sm hover:shadow-md transition-all overflow-hidden"
                  >
                    <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {rec.type === "image" && <ImageIcon className="h-5 w-5 text-pink-600" />}
                          {rec.type === "video" && <Video className="h-5 w-5 text-pink-600" />}
                          {rec.type === "carousel" && <ImageIcon className="h-5 w-5 text-pink-600" />}
                          <CardTitle className="text-lg">{rec.title}</CardTitle>
                        </div>
                        {rec.trending && (
                          <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-100 border-0">Trending</Badge>
                        )}
                      </div>
                      <CardDescription>{rec.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">Growth Potential</div>
                        <div className="flex items-center">
                          <span className="font-medium text-green-600">{rec.potential}%</span>
                          <TrendingUp className="h-4 w-4 ml-1 text-green-600" />
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0">
                        <Lightbulb className="h-4 w-4 mr-2" /> Get Content Ideas
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link href="/content-ideas">
                  <Button variant="outline" className="group">
                    View All Content Ideas{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </TabsContent>

            <TabsContent value="insights">
              <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle>Account Insights</CardTitle>
                  <CardDescription>Key metrics and insights about your Instagram account</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {insights.map((insight, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-xl border border-pink-100"
                      >
                        <div className="h-10 w-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                          {insight.icon}
                        </div>
                        <div>
                          <div className="font-medium">{insight.title}</div>
                          <div className="text-sm text-gray-600">{insight.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                  <CardDescription>Detailed analytics about your Instagram performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg">
                    <div className="text-center">
                      <BarChart2 className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Analytics charts will appear here</p>
                      <Button variant="outline" size="sm" className="mt-4">
                        <RefreshCw className="h-4 w-4 mr-2" /> Load Analytics
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all mb-8 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>AI Content Analysis</CardTitle>
                <Badge className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 hover:bg-opacity-90 border-0">
                  <Sparkles className="h-3 w-3 mr-1" /> AI Powered
                </Badge>
              </div>
              <CardDescription>Our AI has analyzed your content and audience to provide these insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border border-pink-100">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Content Theme Analysis</div>
                      <p className="text-sm text-gray-600 mt-1">
                        Your audience responds best to authentic behind-the-scenes content that showcases your creative
                        process. Consider creating more tutorial-style content and sharing your expertise.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border border-pink-100">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Caption Strategy</div>
                      <p className="text-sm text-gray-600 mt-1">
                        Your most engaging posts have captions that tell a story and include a clear call-to-action. Try
                        asking questions to boost comments and engagement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border border-pink-100">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">Audience Insights</div>
                      <p className="text-sm text-gray-600 mt-1">
                        Your audience is primarily interested in creative inspiration and learning new techniques. They
                        are most active on weekday evenings and Sunday afternoons.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 group">
                  <Lightbulb className="h-4 w-4 mr-2" /> Generate Detailed Content Plan
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Coming Soon</CardTitle>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-0">
                  <Clock className="h-3 w-3 mr-1" /> New Features
                </Badge>
              </div>
              <CardDescription>New features dropping soon to help you grow even faster</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Content Calendar</div>
                      <div className="text-sm text-gray-600 mt-1">
                        Plan and schedule your content with our AI-powered content calendar
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border border-pink-100">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 bg-gradient-to-br from-pink-400 to-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">AI Content Generator</div>
                      <div className="text-sm text-gray-600 mt-1">
                        Generate complete posts including images and captions with our AI
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="py-6 border-t bg-white mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} InstaGrowth AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
