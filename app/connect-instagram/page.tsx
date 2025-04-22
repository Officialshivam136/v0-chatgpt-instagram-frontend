import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Instagram, Lock, Shield, CheckCircle2 } from "lucide-react"

export default function ConnectInstagram() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-pink-50">
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
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-md w-full mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Connect Your Instagram Account</h1>
            <p className="mt-2 text-gray-600">
              Connect your Instagram account to get personalized content recommendations.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-6 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-50 blur-2xl"></div>

            <div className="flex justify-center mb-6 relative z-10">
              <div className="h-20 w-20 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <Instagram className="h-10 w-10 text-white" />
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                <Shield className="h-4 w-4 text-green-500" />
                <span>We never post without your permission</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                <Lock className="h-4 w-4 text-green-500" />
                <span>Your data is secure and encrypted</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Cancel or disconnect anytime</span>
              </div>
            </div>

            <div className="mt-8 relative z-10">
              <Link href="/dashboard">
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0">
                  Connect with Instagram
                </Button>
              </Link>
              <p className="text-xs text-center text-gray-500 mt-4">
                By connecting, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-gray-600 hover:text-pink-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-6 border-t bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} InstaGrowth AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
