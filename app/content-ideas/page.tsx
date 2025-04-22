import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Instagram,
  ImageIcon,
  Video,
  Lightbulb,
  Download,
  Share2,
  BookmarkPlus,
  ArrowLeft,
  Sparkles,
  FlameIcon as Fire,
  TrendingUp,
} from "lucide-react"

export default function ContentIdeas() {
  // Mock data for content ideas
  const contentIdeas = [
    {
      id: 1,
      type: "image",
      title: "Behind-the-Scenes Workspace Tour",
      description:
        "Share your creative workspace and tools you use daily. This humanizes your brand and shows the real process behind your content.",
      hashtags: ["#behindthescenes", "#creativespace", "#workfromhome", "#creatorlife"],
      caption:
        "Where the magic happens ✨ This is where I spend most of my days creating content for you all. What does your creative space look like? Drop a comment below! #behindthescenes",
      trending: true,
    },
    {
      id: 2,
      type: "carousel",
      title: "5-Step Creative Process",
      description:
        "Create a carousel post showing your step-by-step process from idea to finished product. Educational content performs well with your audience.",
      hashtags: ["#creativetutorial", "#stepbystep", "#learnwithme", "#creativetips"],
      caption:
        "My creative process broken down into 5 simple steps! Swipe to see how I go from concept to finished piece. Which step do you find most challenging? #creativetutorial",
    },
    {
      id: 3,
      type: "video",
      title: "Quick Tip Tuesday",
      description:
        "Short-form video sharing a quick creative tip or hack that your audience can implement immediately.",
      hashtags: ["#quicktip", "#creativehack", "#learnontiktok", "#creativetutorial"],
      caption:
        "Here's a game-changing tip that took me years to discover! 💡 Save this for later and tag a friend who needs to see this! #quicktip",
      trending: true,
    },
    {
      id: 4,
      type: "image",
      title: "Before/After Transformation",
      description:
        "Show the evolution of a project from start to finish. This demonstrates your skills and process in a visually compelling way.",
      hashtags: ["#beforeandafter", "#transformation", "#creativeprogress", "#processvideo"],
      caption:
        "Swipe to see the transformation! It's amazing what a little time and creativity can do. What project are you working on right now? #beforeandafter",
    },
    {
      id: 5,
      type: "video",
      title: "Day in the Life",
      description:
        "Create a vlog-style video showing your typical day as a creator. This helps followers connect with you on a personal level.",
      hashtags: ["#dayinthelife", "#creatorroutine", "#vlogstyle", "#contentcreatorlife"],
      caption:
        "Ever wonder what my day looks like? Here's a peek into my creator routine! What surprised you most? #dayinthelife",
      trending: true,
    },
    {
      id: 6,
      type: "carousel",
      title: "Content Creation Tools",
      description:
        "Share your favorite tools, apps, and equipment that help you create content. This provides value to aspiring creators in your audience.",
      hashtags: ["#creatortoolkit", "#contenttools", "#creatorgear", "#techessentials"],
      caption:
        "My top 5 essential tools that revolutionized my content creation! These have been game-changers for my workflow. Which one are you most interested in trying? #creatortoolkit",
    },
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
              <span className="text-sm font-medium">@creativecontent</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-2 mb-8">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="group">
                <ArrowLeft className="h-4 w-4 mr-1 transition-transform group-hover:-translate-x-1" /> Back to Dashboard
              </Button>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold">AI-Generated Content Ideas ✨</h1>
              <p className="text-gray-600">Personalized content suggestions based on your account analysis</p>
            </div>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0">
              <Sparkles className="h-4 w-4 mr-2" /> Generate More Ideas
            </Button>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-6 bg-white p-1 rounded-lg">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-md"
              >
                All Ideas
              </TabsTrigger>
              <TabsTrigger
                value="images"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-md"
              >
                Images
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-md"
              >
                Videos
              </TabsTrigger>
              <TabsTrigger
                value="carousels"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-md"
              >
                Carousels
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contentIdeas.map((idea) => (
                  <Card
                    key={idea.id}
                    className="bg-white border-0 shadow-sm hover:shadow-md transition-all overflow-hidden"
                  >
                    <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {idea.type === "image" && <ImageIcon className="h-5 w-5 text-pink-600" />}
                          {idea.type === "video" && <Video className="h-5 w-5 text-pink-600" />}
                          {idea.type === "carousel" && <ImageIcon className="h-5 w-5 text-pink-600" />}
                          <CardTitle className="text-lg">{idea.title}</CardTitle>
                        </div>
                        {idea.trending && (
                          <Badge className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 hover:bg-opacity-90 border-0">
                            <Fire className="h-3 w-3 mr-1" /> Trending
                          </Badge>
                        )}
                      </div>
                      <CardDescription>{idea.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="text-sm font-medium mb-1">Suggested Caption:</div>
                        <div className="text-sm p-3 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border border-pink-100">
                          {idea.caption}
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm font-medium mb-1">Recommended Hashtags:</div>
                        <div className="flex flex-wrap gap-2">
                          {idea.hashtags.map((hashtag, index) => (
                            <span
                              key={index}
                              className={`text-xs ${
                                index % 3 === 0
                                  ? "bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800"
                                  : index % 3 === 1
                                    ? "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800"
                                    : "bg-gradient-to-r from-green-100 to-blue-100 text-green-800"
                              } px-2 py-1 rounded-full`}
                            >
                              {hashtag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1 group">
                          <BookmarkPlus className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" /> Save
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 group">
                          <Share2 className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" /> Share
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 group"
                        >
                          <Download className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" /> Export
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="images">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contentIdeas
                  .filter((idea) => idea.type === "image")
                  .map((idea) => (
                    <Card
                      key={idea.id}
                      className="bg-white border-0 shadow-sm hover:shadow-md transition-all overflow-hidden"
                    >
                      <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <ImageIcon className="h-5 w-5 text-pink-600" />
                            <CardTitle className="text-lg">{idea.title}</CardTitle>
                          </div>
                          {idea.trending && (
                            <Badge className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 hover:bg-opacity-90 border-0">
                              <Fire className="h-3 w-3 mr-1" /> Trending
                            </Badge>
                          )}
                        </div>
                        <CardDescription>{idea.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <div className="text-sm font-medium mb-1">Suggested Caption:</div>
                          <div className="text-sm p-3 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border border-pink-100">
                            {idea.caption}
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="text-sm font-medium mb-1">Recommended Hashtags:</div>
                          <div className="flex flex-wrap gap-2">
                            {idea.hashtags.map((hashtag, index) => (
                              <span
                                key={index}
                                className={`text-xs ${
                                  index % 3 === 0
                                    ? "bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800"
                                    : index % 3 === 1
                                      ? "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800"
                                      : "bg-gradient-to-r from-green-100 to-blue-100 text-green-800"
                                } px-2 py-1 rounded-full`}
                              >
                                {hashtag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm" className="flex-1 group">
                            <BookmarkPlus className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" /> Save
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 group">
                            <Share2 className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" /> Share
                          </Button>
                          <Button
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 group"
                          >
                            <Download className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" /> Export
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contentIdeas
                  .filter((idea) => idea.type === "video")
                  .map((idea) => (
                    <Card
                      key={idea.id}
                      className="bg-white border-0 shadow-sm hover:shadow-md transition-all overflow-hidden"
                    >
                      <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Video className="h-5 w-5 text-blue-600" />
                            <CardTitle className="text-lg">{idea.title}</CardTitle>
                          </div>
                          {idea.trending && (
                            <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:bg-opacity-90 border-0">
                              <Fire className="h-3 w-3 mr-1" /> Trending
                            </Badge>
                          )}
                        </div>
                        <CardDescription>{idea.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <div className="text-sm font-medium mb-1">Suggested Caption:</div>
                          <div className="text-sm p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-100">
                            {idea.caption}
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="text-sm font-medium mb-1">Recommended Hashtags:</div>
                          <div className="flex flex-wrap gap-2">
                            {idea.hashtags.map((hashtag, index) => (
                              <span
                                key={index}
                                className="text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-2 py-1 rounded-full"
                              >
                                {hashtag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm" className="flex-1 group">
                            <BookmarkPlus className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" /> Save
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 group">
                            <Share2 className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" /> Share
                          </Button>
                          <Button
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 group"
                          >
                            <Download className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" /> Export
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="carousels">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contentIdeas
                  .filter((idea) => idea.type === "carousel")
                  .map((idea) => (
                    <Card
                      key={idea.id}
                      className="bg-white border-0 shadow-sm hover:shadow-md transition-all overflow-hidden"
                    >
                      <div className="h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <ImageIcon className="h-5 w-5 text-green-600" />
                            <CardTitle className="text-lg">{idea.title}</CardTitle>
                          </div>
                          {idea.trending && (
                            <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 hover:bg-opacity-90 border-0">
                              <TrendingUp className="h-3 w-3 mr-1" /> Trending
                            </Badge>
                          )}
                        </div>
                        <CardDescription>{idea.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <div className="text-sm font-medium mb-1">Suggested Caption:</div>
                          <div className="text-sm p-3 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg border border-green-100">
                            {idea.caption}
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="text-sm font-medium mb-1">Recommended Hashtags:</div>
                          <div className="flex flex-wrap gap-2">
                            {idea.hashtags.map((hashtag, index) => (
                              <span
                                key={index}
                                className="text-xs bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-2 py-1 rounded-full"
                              >
                                {hashtag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm" className="flex-1 group">
                            <BookmarkPlus className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" /> Save
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 group">
                            <Share2 className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" /> Share
                          </Button>
                          <Button
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white border-0 group"
                          >
                            <Download className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" /> Export
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-all mb-8 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-pink-500 to-purple-500"></div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Need More Ideas?</CardTitle>
                <Badge className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 hover:bg-opacity-90 border-0">
                  <Sparkles className="h-3 w-3 mr-1" /> AI Powered
                </Badge>
              </div>
              <CardDescription>Let our AI generate custom content ideas based on your specific needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border border-pink-100 mb-6">
                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium">Custom Content Generation</div>
                    <p className="text-sm text-gray-600 mt-1">
                      Tell us what type of content you want to create, and our AI will generate personalized ideas
                      tailored to your audience and niche.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0">
                <Sparkles className="h-4 w-4 mr-2" /> Generate Custom Content Ideas
              </Button>
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
