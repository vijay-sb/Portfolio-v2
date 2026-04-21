import { Navbar } from "@/src/components/sidebar"
import { Footer } from "@/src/components/footer"
import { Download, FileText, Code, Server, Database } from "lucide-react"

export default function SkillsPage() {
  const commingSoon = false; // Set to true to show "Coming Soon" message
  return (
    <main className="min-h-screen bg-[#050510]">
      <Navbar />
      {commingSoon ? (
        <div className="pt-48 pb-32 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>
          <p className="text-gray-400 text-lg">
            Resume section is under development. Stay tuned for updates!
          </p>
        </div>
      ) :( 
    
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Skills & Resume</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
         Get a closer look at my skills and experience — download my resume below.
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-8 mb-8">
          <div className="text-center mb-8">
            <div className="relative w-24 h-24 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 blur-md animate-pulse" />
              <div className="relative rounded-full overflow-hidden border-2 border-white/20 w-full h-full">
                <img src="/Vijay.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-2">Vijay</h2>
            <p className="text-xl text-purple-400 mb-6">Software Engineer || Full Stack Developer || AI Engineering</p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-8">
            {/* Quick Skills Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <Code className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Frontend</h3>
                <p className="text-gray-400 text-sm">Next.js, React.js, TailwindCSS, TypeScript</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <Server className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Backend</h3>
                <p className="text-gray-400 text-sm">Node.js, Express, Go, Python, Flask</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <Database className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Database & Cloud</h3>
                <p className="text-gray-400 text-sm">PostgreSQL, Redis, AWS, GCP, Docker</p>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                <FileText className="w-5 h-5" />
                View Online
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 text-center">Get In Touch</h3>
          <div className="flex flex-wrap gap-6 justify-center text-gray-400">
            <div className="flex items-center gap-2">
              <span>Email:</span>
              <a href="mailto:vijaysb6306@gmail.com" className="text-blue-400 hover:underline">
               vijaysb6306@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>Location:</span>
              <span>Coimbatore, India</span>
            </div>
            {/* <div className="flex items-center gap-2">
              <span>Website:</span>
              <a
                href="https://yourwebsite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                yourwebsite.com
              </a>
            </div> */}
          </div>
        </div>
      </div>
      )}
      <Footer />
    </main>
  )
}
