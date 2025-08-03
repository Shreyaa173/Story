import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Code,
  Heart,
  Users,
  Sparkles,
  Coffee,
  BookOpen,
  Terminal,
  Lightbulb,
  Target,
  Star,
  Globe,
  Database,
  Brain,
  Book, 
  Key
} from "lucide-react";

const Home = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const techStack = [
    { name: "React", color: "bg-blue-500" },
    { name: "Tailwind", color: "bg-cyan-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "TypeScript", color: "bg-sky-600" },
    { name: "HTML", color: "bg-orange-500" },
    { name: "CSS", color: "bg-indigo-400" },
    { name: "Python", color: "bg-green-500" },
    { name: "Node.js", color: "bg-emerald-500" },
    { name: "Express.js", color: "bg-lime-600" },
    { name: "MongoDB", color: "bg-green-700" },
    { name: "MySQL", color: "bg-blue-700" },
    { name: "Render", color: "bg-neutral-700" },
    { name: "Git & GitHub", color: "bg-gray-800" },
    { name: "Selenium", color: "bg-pink-600" },
    { name: "Machine Learning", color: "bg-purple-500" },
    { name: "Vercel", color: "bg-gray-900" },
    { name: "Postman", color: "bg-orange-600" },
  ];

  const projects = [
    {
      title: "Happy Healing",
      description:
        "React-based wellness app delivering personalized health insights",
      icon: <Heart className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      github: "https://github.com/shreyagupta2402/Happy-Healing",
      live: "https://happy-healing.onrender.com",
    },
    {
      title: "AgriPredict",
      description:
        "ML-powered crop recommendation system with 1000+ datapoints",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      github: "https://github.com/shreyagupta2402/AgriPredict",
      live: "https://agripredict.onrender.com",
    },
    {
      title: "DRDO Portal",
      description: "Full-stack internship application system for DSEU",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500",
      github: "https://github.com/shreyagupta2402/DRDO-Internship-Portal",
      live: "https://drdo-internship-portal.onrender.com",
    },
    {
      title: "Pixel Palette",
      description:
        "Color palette generator built with Tailwind, React and Copy-to-Clipboard",
      icon: <Coffee className="w-6 h-6" />,
      color: "from-yellow-500 to-amber-500",
      github: "https://github.com/shreyagupta2402/Pixel-Palette",
      live: "https://pixel-palette.onrender.com",
    },
    {
      title: "CodeBook",
      description:
        "Interactive code learning platform using React, HTML, CSS, and JS",
      icon: <Book className="w-6 h-6" />,
      color: "from-cyan-500 to-sky-500",
      github: "https://github.com/shreyagupta2402/CodeBook",
      live: "https://codebook-learn.netlify.app",
    },
    {
      title: "Tokkn",
      description:
        "Token-based security authentication demo built with React & JWT",
      icon: <Key className="w-6 h-6" />,
      color: "from-gray-700 to-gray-900",
      github: "https://github.com/shreyagupta2402/Tokkn",
      live: "https://tokkn-auth.onrender.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative px-6"
      >
        <div className="text-center z-10 max-w-4xl">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 blur-2xl opacity-30 rounded-full" />
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent relative animate-pulse">
              Hey, I'm Shreya
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            A Computer Science undergrad from{" "}
            <span className="text-pink-400 font-semibold">IGDTUW, Delhi</span> —
            but more importantly, someone who has always been{" "}
            <span className="text-cyan-400 font-semibold">
              curious about how things work
            </span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {techStack.map((tech, idx) => (
              <div
                key={tech.name}
                className={`px-4 py-2 ${tech.color} rounded-full text-sm font-semibold transform hover:scale-110 transition-all duration-300 hover:shadow-lg cursor-pointer`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {tech.name}
              </div>
            ))}
          </div>
          <button
            onClick={() => scrollToSection("childhood")}
            className="group flex items-center gap-2 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span>Explore My Journey</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Childhood Section */}
      <section id="childhood" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.childhood
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <Lightbulb className="w-8 h-8 text-yellow-400" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Where It All Began
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-105">
                  <p className="text-lg leading-relaxed text-gray-300 mb-6">
                    My journey into tech started when I was a kid, endlessly
                    curious about how websites functioned behind the scenes. I
                    didn't know what{" "}
                    <span className="text-cyan-400 font-mono">"HTML"</span> was
                    back then, but I knew I wanted to build things that lived on
                    screens.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300 mb-6">
                    A secondhand computer and a couple of tinkering sessions
                    later, I was hooked. What began with simple edits in browser
                    <span className="text-purple-400 font-mono">
                      {" "}
                      inspect tools
                    </span>{" "}
                    evolved into an obsession with making real, interactive
                    applications — and that spark never left.
                  </p>
                  <div className="flex items-center gap-2 text-pink-400">
                    <Terminal className="w-5 h-5" />
                    <span className="font-semibold">
                      First line of code: Inspect Element magic ✨
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-75"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-150"></div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-blue-400">
                        &lt;div class="
                        <span className="text-yellow-400">curiosity</span>"&gt;
                      </div>
                      <div className="text-gray-300 ml-4">
                        Breaking things to understand them
                      </div>
                      <div className="text-gray-300 ml-4">
                        Fixing them to learn more
                      </div>
                      <div className="text-gray-300 ml-4">
                        Building something new
                      </div>
                      <div className="text-blue-400">&lt;/div&gt;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Path Section */}
      <section id="tech-path" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible["tech-path"]
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <Code className="w-8 h-8 text-blue-400" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  My Path Into Tech
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                To sharpen my curiosity into capability, I took up B.Tech in
                Computer Science at IGDTUW. Along the way, I've explored
                everything from ethical hacking to full-stack development and
                machine learning.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {projects.map((project, idx) => (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={project.title}
                  className={`bg-gradient-to-br ${project.color} p-1 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 h-full">
                    <div className="text-white mb-4">{project.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Achievements */}
            <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3">
                <Star className="w-6 h-6 text-yellow-400" />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Key Milestones
                </span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Selected for Google Girl Hackathon",
                  "Built 6+ impact-driven projects",
                  "Mentored juniors at TechNeeds IGDTUW",
                  "Worked with DRDO and DSEU",
                  "Delivered real-time health insights",
                  "Developed ML-powered platforms",
                ].map((achievement, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-slate-800/30 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outside Tech Section */}
      <section id="hobbies" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.hobbies
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-pink-400" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Outside the Brackets
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                I'm not just about semicolons and syntax. I believe what we
                build is a reflection of who we are.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <BookOpen className="w-8 h-8" />,
                  title: "Creative Writing & Storytelling",
                  description:
                    "I love crafting narratives and simplifying complex topics for others through engaging content.",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Teaching & Mentoring",
                  description:
                    "Conducting workshops, guiding juniors, and sharing knowledge brings me immense joy.",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Behavioral Sciences",
                  description:
                    "Deep-diving into human behavior and decision-making to build more intuitive applications.",
                  color: "from-purple-500 to-pink-500",
                },
              ].map((hobby, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className="p-8">
                    <div
                      className={`inline-flex p-4 rounded-full bg-gradient-to-r ${hobby.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {hobby.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">
                      {hobby.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {hobby.description}
                    </p>
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${hobby.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                </div>
              ))}
            </div>

            <div className="mt-16 text-center bg-gradient-to-br from-slate-800/50 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <Coffee className="w-12 h-12 mx-auto mb-6 text-yellow-400" />
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Let's Connect the Dots
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Whether it's solving DSA problems to prep for placements,
                designing scalable systems, or mentoring young techies — I'm
                always looking to build, collaborate, and grow.
              </p>
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Let's turn curiosity into code and ideas into impact 🚀
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Built with ❤️ using React & Tailwind CSS
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-500">
            <a
              href="https://www.linkedin.com/in/shreya-gupta-a783b9270/"
              className="hover:text-white"
            >
              LinkedIn{" "}
            </a>
            <a
              href="https://github.com/shreyaa173"
              className="hover:text-white"
            >
              GitHub{" "}
            </a>
            <a
              href="https://shreya-portfolio-meta.vercel.app/"
              className="hover:text-white"
            >
              Portfolio{" "}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
