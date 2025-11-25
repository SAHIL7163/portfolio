import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Server,
  Database,
  Terminal,
  Cpu,
  Globe,
  ChevronDown,
  Menu,
  X,
  Award,
  Briefcase,
  User,
  GraduationCap,
  MessageSquare,
  Send,
  Sparkles,
  Bot,
  Loader2,
  XCircle,
  Trophy,
  Target,
  Sword,
  ChefHat,
  Binary,
  Calendar,
  Building2,
  CheckCircle2,
  BookOpenText,
  Sun, // Sun icon for light mode
  Moon,
  Download, // Moon icon for dark mode
} from "lucide-react";

import resumePdf from "./sahil_dhameja_resume (13).pdf";
import { ReactTyped } from "react-typed";

// Animation Helper Component
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });
    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);
    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Portfolio = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    return "dark";
  });
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // AI Chat State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      role: "model",
      text: "Hi! I'm Sahil's AI Resume Bot. Ask me anything about his skills, projects, or experience!",
    },
  ]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Email Drafter State
  const [emailIntent, setEmailIntent] = useState("");
  const [isDrafting, setIsDrafting] = useState(false);

  // Theme Toggle Logic
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }, []);

  // Theme Classes Helper
  const getThemeClasses = (element) => {
    const isDark = theme === "dark";

    const colors = {
      // Main Body/Background
      body: isDark
        ? "bg-slate-950 text-slate-200 selection:bg-cyan-500"
        : "bg-slate-50 text-slate-800 selection:bg-cyan-600",
      // Navbar/Header
      nav: isDark
        ? "bg-slate-950/90 shadow-cyan-900/10"
        : "bg-white/95 shadow-slate-300/50",
      navText: isDark
        ? "text-slate-400 hover:text-cyan-400"
        : "text-slate-600 hover:text-cyan-600",
      navActive: isDark ? "text-cyan-400" : "text-cyan-600",
      // Section Backgrounds
      sectionDark: isDark ? "bg-slate-900/20" : "bg-slate-100",
      // Card Backgrounds
      card: isDark
        ? "bg-slate-900/50 border-slate-800 hover:border-cyan-500/30"
        : "bg-white border-slate-300 hover:border-cyan-500/50",
      // Text Colors
      mainText: isDark ? "text-white" : "text-slate-900",
      subText: isDark ? "text-slate-400" : "text-slate-600",
      // Input Fields
      input: isDark
        ? "bg-slate-950 border-slate-700 text-slate-300 placeholder:text-slate-600 focus:border-cyan-500"
        : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-cyan-600",
      // Button/Interactive elements
      githubButton: isDark
        ? "bg-slate-800 hover:bg-slate-700 text-white border-slate-700"
        : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300",
    };

    return colors[element] || "";
  };

  // Resume Data (kept constant)
  const portfolioData = {
    name: "Sahil Dhameja",
    role: "Software Developer",
    contact: {
      email: "sahildhameja13@gmail.com",
      phone: "+91 9724747163",
      linkedin: "https://linkedin.com/in/sahil-dhameja",
      code: "https://github.com/SAHIL7163",
      location: "Mumbai, Maharashtra",
    },
    about:
      "I am a Software Engineer at ASQI, Mumbai, graduated from NIT Surat in 2025. I build scalable full-stack systems using Python, Django REST Framework, React, PostgreSQL, Redis, Celery, Kafka, and Docker. At ASQI, I’ve delivered production features reaching 5,000+ farmers, including multilingual WhatsApp weather alerts, large-scale soil data crawlers (30K+ records), and 40% faster database performance. I also built Talksy — a real-time video platform with Kafka-backed messaging (120ms → 30ms latency) and a RAG-powered AI assistant. With 850+ LeetCode problems solved and a peak rating of 1840, I’m passionate about clean architecture and shipping impactful code.",
    education: [
      {
        id: 1,
        type: "Formal",
        title: "Secondary School (10th Grade)",
        institution: "Shree Swaminarayan Gurukul, Bhavnagar",
        period: "2018 - 2019",
        score: "96%",
      },
      {
        id: 2,
        type: "Formal",
        title: "Higher Secondary School (12th Grade)",
        institution: "Vidhyadhish VidhyaSankul, Bhavnagar",
        period: "2019 - 2021",
        score: "90% ",
      },
      {
        id: 3,
        type: "Degree",
        title: "Bachelor of Technology",
        institution:
          "Sardar Vallabhbhai National Institute of Technology, Surat",
        period: "2021 - 2025",
        score: "CGPA: 8.19/10",
      },

      {
        id: 4,
        type: "Certification",
        title: "Full Stack Generative and Agentic AI with Python",
        institution: "Udemy",
        period: "2025",
        score: "Certificate of Completion",
      },
    ],
    skills: [
      {
        category: "Languages",
        icon: <Code size={20} />,
        items: ["JavaScript", "Python", "C/C++", "Java", "SQL"],
      },
      {
        category: "Frontend",
        icon: <Globe size={20} />,
        items: [
          "React.js",
          "Redux",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Bootstrap",
        ],
      },
      {
        category: "Backend",
        icon: <Server size={20} />,
        items: [
          "Node.js",
          "Express.js",
          "Django REST Framework",
          "WebSockets",
          "Apache Kafka",
          "Docker",
          "Celery",
          "NGINX",
        ],
      },
      {
        category: "DataBase & Tools",
        icon: <Database size={20} />,
        items: [
          "PostgreSQL",
          "MongoDB",
          "Redis (Pub/Sub)",
          "Git/GitHub",
          "Scrapy",
          "AWS S3",
          "VsCode",
          "Postman",
        ],
      },
    ],
    competitive: {
      description:
        "Skilled in competitive programming, consistently delivering optimized solutions in coding challenges and contests. I thrive on solving complex algorithmic problems under time constraints.",
      languages: ["C++", "Python", "Java"],
      stats: [
        {
          label: "Problems Solved",
          value: "1000+",
          icon: <Target className="text-red-500" />,
        },
        {
          label: "Max Rating",
          value: "1840",
          icon: <Trophy className="text-yellow-500" />,
        },
        {
          label: "Global Rank",
          value: "881",
          icon: <Globe className="text-blue-500" />,
        },
      ],
      profiles: [
        {
          name: "LeetCode",
          icon: <Code />,
          url: "https://leetcode.com/sahil7163/",
          color: "text-yellow-500",
        },
        {
          name: "Coding Ninjas",
          icon: <Sword />,
          url: "https://www.naukri.com/code360/profile/sahil_12",
          color: "text-orange-500",
        },
        {
          name: "GeeksForGeeks",
          icon: <Binary />,
          url: "https://www.geeksforgeeks.org/user/sahildhameja13/",
          color: "text-green-500",
        },
        {
          name: "Codolio",
          icon: <ChefHat />,
          url: "https://codolio.com/profile/yVCcK2Nu",
          color: "text-amber-700",
        },
      ],
    },
    experience: [
      {
        id: 1,
        role: "Associate Software Developer",
        company: "ASQI (FarmApp)",
        period: "Jan 2025 - Present",
        location: "Mumbai, Maharashtra",
        tech: [
          "React",
          "Python",
          "Django",
          "PostgreSQL",
          "Redis",
          "Celery",
          "Docker",
        ],
        description: [
          "Developed a subscription-based weather alert system serving 5,000+ users across 8 languages.",
          "Automated alerts using Celery & Scrapy, integrating WhatsApp webhooks.",
          "Optimized PostgreSQL performance by 40% by resolving N+1 query issues.",
          "Designed a web crawler to extract 30,000+ soil health records.",
        ],
      },
      {
        id: 2,
        role: "Full Stack Developer Intern",
        company: "ASQI (FarmApp)",
        period: "Jul 2024 - Dec 2024",
        location: "Mumbai, Maharashtra",
        tech: ["React", "Python", "Django", "PostgreSQL"],
        description: [
          "Implemented soft delete & password reset, reducing account recovery time by 50%.",
          "Developed RBAC (Role-Based Access Control) for farmer profile management.",
          "Created a biochar interest management dashboard with advanced filtering.",
        ],
      },
    ],
    projects: [
      {
        id: 1,
        title: "Talksy",
        subtitle: "Real-Time Social Video Platform",
        tech: [
          "React",
          "Node.js",
          "Python",
          "FastApi",
          "Kafka",
          "Redis",
          "Docker",
          "AWS S3",
          "Microservices",
          "Redis Pub/Sub",
          "NGINX",
          "OpenAI",
          "RAG",
          "LangChain",
          "Tailwind CSS",
        ],
        description: [
          "Designed Dockerized microservices architecture with NGINX reverse proxy for routing",
          "Reduced message latency from 120ms to 30ms using Apache Kafka for real-time message delivery",
          "Synchronized multiple backend servers using Redis Pub/Sub mechanism",
          "Developed user authentication, friend requests, threaded discussions, video calls, file sharing, profile management, and 32 customizable themes.",
          "Integrated AWS S3 with presigned URLs for secure file, image, and audio uploads",
          "Implemented RAG-based AI assistant using OpenAI, Kafka, and vector DB for contextual responses",
        ],

        links: {
          demo: "https://talksy-frontend.vercel.app/",
          code: "https://github.com/SAHIL7163/talksy-microservices",
        },
        featured: true,
      },
      {
        id: 2,
        title: "Daily Dose Blog",
        subtitle: "Blogging Platform",
        tech: [
          "React",
          "Node.js",
          "Mongodb",
          "Express",
          "JWT",
          "Stripe",
          "Google Auth",
          "Multer",
          "Cloudinary",
          "JWT",
        ],
        description: [
          "Built a responsive blogging platform with secure JWT authentication   (acessToken + RefreshToken) for user access",
          "Added Google Sign-In and persistent login to improve authentication experience",
          "Implemented RBAC allowing admins to add, edit, update, and soft-delete blog posts",
          "Used Multer + Cloudinary for secure media uploads with automatic optimization",
          "Enabled user interaction with likes, dislikes, and threaded comments across posts",
          "Integrated Stripe to unlock premium content and enable paid monetization features",
        ],

        links: {
          demo: "https://blogsite-3gsy.onrender.com/",
          code: "https://github.com/SAHIL7163/DailyDoseBlog",
        },
        featured: false,
      },
    ],
    achievements: [
      {
        title: "LeetCode Max Rating",
        value: "1840",
        icon: <Award className="text-yellow-400" />,
      },
      {
        title: "Problems Solved",
        value: "850+",
        icon: <Code className="text-green-400" />,
      },
      {
        title: "Global Rank (Contest)",
        value: "881",
        icon: <Globe className="text-blue-400" />,
      },
    ],
  };

  // --- GEMINI API HELPERS ---
  const callGemini = async (prompt, systemInstruction = "") => {
    const apiKey = process.env.REACT_APP_API_URL;
    if (!apiKey) {
      console.warn("API Key missing");
      return "I'm currently in demo mode. Please configure the API key to chat!";
    }

    try {
      // Exponential backoff retry logic could go here
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: { parts: [{ text: systemInstruction }] },
          }),
        }
      );

      if (!response.ok) throw new Error("Gemini API Error");
      const data = await response.json();
      return (
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't process that."
      );
    } catch (error) {
      console.error(error);
      return "I'm having trouble connecting to the AI brain right now. Please try again in a moment.";
    }
  };

  // Handle Chat Submission
  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = chatInput;
    setChatInput("");
    setChatHistory((prev) => [...prev, { role: "user", text: userMsg }]);
    setIsChatLoading(true);

    // Create a simplified version of data for AI context (removes React components/icons)
    const cleanData = {
      name: portfolioData.name,
      role: portfolioData.role,
      contact: portfolioData.contact,
      about: portfolioData.about,
      education: portfolioData.education,
      experience: portfolioData.experience,
      projects: portfolioData.projects.map((p) => ({
        title: p.title,
        subtitle: p.subtitle,
        tech: p.tech,
        description: p.description,
      })),
      skills: portfolioData.skills.map((s) => ({
        category: s.category,
        items: s.items,
      })),
      achievements: portfolioData.achievements.map((a) => ({
        title: a.title,
        value: a.value,
      })),
      competitive: {
        description: portfolioData.competitive.description,
        languages: portfolioData.competitive.languages,
        stats: portfolioData.competitive.stats.map((s) => ({
          label: s.label,
          value: s.value,
        })),
        profiles: portfolioData.competitive.profiles.map((p) => ({
          name: p.name,
          url: p.url,
        })),
      },
    };

    const systemPrompt = `You are Sahil Dhameja's portfolio assistant. 
    Here is his data: ${JSON.stringify(cleanData)}. 
    Your goal is to answer questions about Sahil's experience, skills, and projects in a friendly, professional, and slightly enthusiastic tone. 
    Keep answers concise (under 3 sentences) unless asked for details. 
    If asked a question not related to Sahil's professional life, politely steer it back to his portfolio.
    If asked for contact info, provide his email: ${
      portfolioData.contact.email
    }.
    Highlight his expertise in Distributed Systems, Kafka, and React.`;

    const aiResponse = await callGemini(userMsg, systemPrompt);

    setChatHistory((prev) => [...prev, { role: "model", text: aiResponse }]);
    setIsChatLoading(false);
  };

  // Handle Email Draft
  const handleEmailDraft = async () => {
    if (!emailIntent.trim()) return;
    setIsDrafting(true);

    const systemPrompt = `You are a professional email assistant. 
    Draft a concise, professional inquiry email to Sahil Dhameja (${portfolioData.contact.email}) based on the user's intent. 
    User Intent: "${emailIntent}".
    The email should be from a potential recruiter or collaborator.
    Include a subject line and the body. 
    Return the response as JSON: { "subject": "...", "body": "..." }`;

    const rawResponse = await callGemini(
      "Generate the email JSON now.",
      systemPrompt
    );

    setIsDrafting(false);

    try {
      // Simple parsing to extract JSON if markdown fences are present
      const jsonStr = rawResponse
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();
      const emailData = JSON.parse(jsonStr);

      const mailtoLink = `mailto:${
        portfolioData.contact.email
      }?subject=${encodeURIComponent(
        emailData.subject
      )}&body=${encodeURIComponent(emailData.body)}`;
      window.open(mailtoLink, "_blank");
    } catch (e) {
      alert("Could not auto-draft. Opening default mail client.");
      window.open(`mailto:${portfolioData.contact.email}`, "_blank");
    }
  };

  // Scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isChatOpen]);

  // Define Nav Items
  const navItems = [
    "About",
    "Experience",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "experience",
        "skills",
        "competitive",
        "projects",
        "education",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Helper to get the correct icon based on education type
  const getEducationIcon = (type) => {
    switch (type) {
      case "Degree":
      case "Formal":
        return <GraduationCap size={18} className="text-cyan-400" />;
      case "Certification":
        return <BookOpenText size={18} className="text-purple-400" />;
      default:
        return <Building2 size={18} className="text-cyan-400" />;
    }
  };

  return (
    <div
      className={`min-h-screen font-sans overflow-x-hidden transition-colors duration-500 ${getThemeClasses(
        "body"
      )}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? `${getThemeClasses("nav")} backdrop-blur-md shadow-lg py-3`
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            className="text-2xl font-bold tracking-tighter cursor-pointer group flex items-center"
            onClick={() => scrollToSection("home")}
          >
            <span
              className={`text-cyan-400 group-hover:${getThemeClasses(
                "mainText"
              )} transition-colors`}
            >
              &lt;
            </span>
            <span className={getThemeClasses("mainText")}>Sahil</span>
            <span
              className={`text-cyan-400 group-hover:${getThemeClasses(
                "mainText"
              )} transition-colors`}
            >
              /&gt;
            </span>
          </div>

          {/* Desktop Menu & Theme Switcher */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium tracking-wide transition-colors ${getThemeClasses(
                  "navText"
                )} ${
                  activeSection === item.toLowerCase()
                    ? getThemeClasses("navActive")
                    : ""
                }`}
              >
                {item}
              </button>
            ))}

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                theme === "dark"
                  ? "bg-slate-800 text-yellow-400 hover:bg-slate-700"
                  : "bg-slate-200 text-yellow-600 hover:bg-slate-300"
              }`}
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                theme === "dark"
                  ? "text-yellow-400 hover:bg-slate-800"
                  : "text-yellow-600 hover:bg-slate-200"
              }`}
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            >
              {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              className={`${getThemeClasses("mainText")} hover:text-cyan-400`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden absolute top-full left-0 w-full ${
              theme === "dark"
                ? "bg-slate-900 border-b border-slate-800"
                : "bg-white border-b border-slate-200"
            } animate-fadeIn`}
          >
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-left py-2 border-b ${
                    theme === "dark"
                      ? "border-slate-800/50 text-slate-300 hover:text-cyan-400"
                      : "border-slate-200/50 text-slate-700 hover:text-cyan-600"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      >
        {/* Abstract Background Shapes */}
        <div className="absolute top-20 left-[-10%] w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse-slow delay-1000"></div>

        <div className="mx-auto px-6 z-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-3/5 space-y-6">
              <FadeIn delay={100}>
                <div
                  className={`inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider uppercase rounded-full border ${
                    theme === "dark"
                      ? "text-cyan-400 bg-cyan-900/30 border-cyan-800"
                      : "text-cyan-600 bg-cyan-100 border-cyan-300"
                  }`}
                >
                  Available for opportunities
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <h1
                  className={`text-5xl md:text-7xl font-bold leading-tight ${getThemeClasses(
                    "mainText"
                  )}`}
                >
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 inline-block whitespace-nowrap">
                    <ReactTyped
                      strings={[portfolioData.name]}
                      typeSpeed={70}
                      backSpeed={40}
                      showCursor={true}
                      cursorChar="|"
                      loop={false}
                    />
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={300}>
                <h2
                  className={`text-2xl md:text-3xl font-light ${getThemeClasses(
                    "subText"
                  )}`}
                >
                  {portfolioData.role}
                </h2>
              </FadeIn>

              <FadeIn delay={500}>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                  <a
                    href={portfolioData.contact.code}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all transform hover:-translate-y-1 font-semibold border ${getThemeClasses(
                      "githubButton"
                    )}`}
                  >
                    <Github size={20} /> GitHub
                  </a>
                  <a
                    href={portfolioData.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/30 font-semibold"
                  >
                    <Linkedin size={20} /> LinkedIn
                  </a>
                  <button
                    onClick={() => setIsChatOpen(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-cyan-900/30 font-semibold"
                  >
                    <Sparkles size={20} className="animate-pulse" /> Ask My AI
                    Twin
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Hero Profile Photo */}
            <div className="md:w-2/5 relative group flex justify-center align-items-center mt-10 md:mt-10">
              <FadeIn delay={300}>
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full rotate-6 opacity-50 group-hover:rotate-12 transition-transform duration-500 blur-2xl"></div>
                  <div
                    className={`absolute inset-2 ${
                      theme === "dark" ? "bg-slate-950" : "bg-slate-50"
                    } rounded-full z-10`}
                  ></div>
                  <div
                    className={`absolute inset-3 rounded-full overflow-hidden border-2 ${
                      theme === "dark" ? "border-slate-700" : "border-slate-300"
                    } z-20`}
                  >
                    {/* Using GitHub avatar as placeholder - Replace src with your actual photo URL if needed */}
                    <img
                      src="https://github.com/SAHIL7163.png"
                      alt="Sahil Dhameja"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src =
                          "https://api.dicebear.com/7.x/avataaars/svg?seed=Sahil";
                      }}
                    />
                  </div>

                  {/* Floating badge */}
                  {/* <div
                    className={`absolute -bottom-4 -right-4 ${
                      theme === "dark"
                        ? "bg-slate-900 border-slate-700"
                        : "bg-white border-slate-300"
                    } p-4 rounded-xl shadow-xl z-30 animate-bounce-slow hidden md:block`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500/20 p-2 rounded-lg">
                        <Code className="text-green-500" size={24} />
                      </div>
                      <div>
                        <div
                          className={`text-xs ${getThemeClasses("subText")}`}
                        >
                          LeetCode Rating
                        </div>
                        <div
                          className={`font-bold ${getThemeClasses("mainText")}`}
                        >
                          {portfolioData.competitive.stats[1].value}
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </FadeIn>
            </div>
          </div>

          <div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <ChevronDown
              className={theme === "dark" ? "text-slate-500" : "text-slate-400"}
              size={30}
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 relative flex items-center">
        <div className="mx-auto px-6">
          <FadeIn>
            <div>
              <div className="flex justify-center">
                <h2
                  className={`text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3 ${getThemeClasses(
                    "mainText"
                  )} text-align-center `}
                >
                  <User
                    className={
                      theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                    }
                  />{" "}
                  About Me
                </h2>
              </div>

              <p
                className={`leading-8 text-lg mb-6 max-w-4xl ${getThemeClasses(
                  "subText"
                )} textt-align-center md:text-left`}
              >
                {portfolioData.about}
              </p>

              <div className="flex justify-center">
                <a
                  href={resumePdf}
                  download
                  className="group inline-flex items-center gap-2 text-cyan-400 font-medium text-lg 
               hover:text-cyan-300 transition-all duration-300"
                >
                  Download Resume
                  <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1 group-hover:text-cyan-300" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-20 relative ${getThemeClasses("sectionDark")}`}
      >
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2
              className={`text-3xl md:text-4xl font-bold mb-12 text-center flex justify-center items-center gap-3 ${getThemeClasses(
                "mainText"
              )}`}
            >
              <Briefcase className="text-purple-400" /> Experience
            </h2>
          </FadeIn>

          <div className="max-w-5xl mx-auto relative">
            {/* Gradient Timeline Line */}
            <div
              className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 ${
                theme === "dark" ? "opacity-50" : "opacity-70"
              }`}
            ></div>

            {portfolioData.experience.map((exp, index) => (
              <FadeIn key={exp.id} delay={index * 200}>
                <div
                  className={`relative mb-16 flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } items-start`}
                >
                  {/* Timeline Node - Glowing Pulse */}
                  <div
                    className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center z-10 rounded-full border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.6)] ${
                      theme === "dark" ? "bg-slate-950" : "bg-slate-50"
                    }`}
                  >
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[45%] pl-20 md:pl-0 ${
                      index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                    }`}
                  >
                    <div
                      className={`${getThemeClasses(
                        "card"
                      )} p-6 rounded-2xl border transition-all duration-300 shadow-xl relative overflow-hidden`}
                    >
                      {/* Top Accent Gradient */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>

                      {/* Title + Company + Period (Below) */}
                      <div className="mb-4">
                        <h3
                          className={`text-xl font-bold group-hover:${
                            theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                          } transition-colors ${getThemeClasses("mainText")}`}
                        >
                          {exp.role}
                        </h3>

                        <div className="flex items-center gap-2 text-purple-400 font-medium mt-1">
                          <Building2 size={16} />
                          <span>{exp.company}</span>
                        </div>

                        {/* Period Badge Below */}
                        <span
                          className={`mt-3 inline-flex px-3 py-1 text-xs font-bold ${
                            theme === "dark"
                              ? "text-white bg-slate-800 border-slate-700"
                              : "text-slate-800 bg-slate-200 border-slate-300"
                          } rounded-full border items-center gap-2`}
                        >
                          <Calendar size={12} className="text-cyan-400" />
                          {exp.period}
                        </span>
                      </div>

                      {/* Description */}
                      <ul className="space-y-3 mb-6">
                        {exp.description.map((desc, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-3 text-sm leading-relaxed ${getThemeClasses(
                              "subText"
                            )}`}
                          >
                            <CheckCircle2
                              className={
                                theme === "dark"
                                  ? "text-cyan-500 mt-1 flex-shrink-0"
                                  : "text-cyan-600 mt-1 flex-shrink-0"
                              }
                              size={16}
                            />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Badges */}
                      {exp.tech && (
                        <div
                          className={`pt-4 mt-4 ${
                            theme === "dark"
                              ? "border-t border-slate-800"
                              : "border-t border-slate-200"
                          }`}
                        >
                          <p
                            className={`text-xs font-semibold uppercase tracking-wider mb-3 ${getThemeClasses(
                              "subText"
                            )}`}
                          >
                            Technologies Used
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((t, i) => (
                              <span
                                key={i}
                                className={`px-2 py-1 text-xs font-medium rounded-md ${
                                  theme === "dark"
                                    ? "text-cyan-200 bg-cyan-900/20 border border-cyan-800/50"
                                    : "text-cyan-800 bg-cyan-100 border border-cyan-300"
                                }`}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2
              className={`text-3xl md:text-4xl font-bold mb-16 text-center ${getThemeClasses(
                "mainText"
              )}`}
            >
              Technologies & Tools
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolioData.skills.map((skillGroup, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div
                  className={`${getThemeClasses(
                    "card"
                  )} p-6 rounded-2xl border transition-all group hover:-translate-y-2 duration-300`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 rounded-lg text-cyan-400 transition-all duration-300 group-hover:scale-110 ${
                        theme === "dark"
                          ? "bg-slate-800 group-hover:text-white group-hover:bg-cyan-600"
                          : "bg-slate-200 group-hover:text-white group-hover:bg-cyan-600"
                      }`}
                    >
                      {skillGroup.icon}
                    </div>
                    <h3
                      className={`text-xl font-semibold ${getThemeClasses(
                        "mainText"
                      )}`}
                    >
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-md text-sm font-mono border ${
                          theme === "dark"
                            ? "bg-slate-800 text-slate-300 border-slate-700/50 group-hover:border-slate-600"
                            : "bg-slate-100 text-slate-700 border-slate-300/50 group-hover:border-slate-400"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Programming Section */}
      <section
        id="competitive"
        className={`py-20 relative ${getThemeClasses("sectionDark")}`}
      >
        <div className="absolute left-0 top-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 text-center flex justify-center items-center gap-3 ${getThemeClasses(
                "mainText"
              )}`}
            >
              <Trophy className="text-yellow-500" /> Competitive Excellence
            </h2>
            <p
              className={`text-center mb-16 max-w-2xl mx-auto ${getThemeClasses(
                "subText"
              )}`}
            >
              {portfolioData.competitive.description}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Col: Stats */}
            <div className="lg:col-span-4 space-y-6">
              {portfolioData.competitive.stats.map((stat, idx) => (
                <FadeIn key={idx} delay={idx * 100}>
                  <div
                    className={`${getThemeClasses(
                      "card"
                    )} p-6 rounded-xl border flex items-center justify-between hover:border-cyan-500/30 transition-all`}
                  >
                    <div>
                      <p
                        className={`text-sm uppercase tracking-wider font-semibold ${getThemeClasses(
                          "subText"
                        )}`}
                      >
                        {stat.label}
                      </p>
                      <p
                        className={`text-3xl font-bold mt-1 ${getThemeClasses(
                          "mainText"
                        )}`}
                      >
                        {stat.value}
                      </p>
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        theme === "dark" ? "bg-slate-800" : "bg-slate-200"
                      }`}
                    >
                      {stat.icon}
                    </div>
                  </div>
                </FadeIn>
              ))}

              <FadeIn delay={400}>
                <div
                  className={`p-6 rounded-xl border ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-cyan-500/20"
                      : "bg-gradient-to-r from-cyan-50/50 to-purple-50/50 border-cyan-200/50"
                  }`}
                >
                  <p
                    className={`text-sm font-semibold mb-3 uppercase tracking-wide ${
                      theme === "dark" ? "text-cyan-400" : "text-cyan-700"
                    }`}
                  >
                    Primary Languages
                  </p>
                  <div className="flex gap-3">
                    {portfolioData.competitive.languages.map((lang, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded text-sm font-mono border ${
                          theme === "dark"
                            ? "bg-slate-800 text-white border-slate-700"
                            : "bg-white text-slate-800 border-slate-300"
                        }`}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Col: Profiles Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                {portfolioData.competitive.profiles.map((profile, idx) => (
                  <FadeIn key={idx} delay={200 + idx * 100}>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`group h-full block p-6 rounded-xl border ${getThemeClasses(
                        "card"
                      )} transition-all relative overflow-hidden`}
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
                        {React.cloneElement(profile.icon, {
                          size: 80,
                          className: profile.color,
                        })}
                      </div>

                      <div className="relative z-10 flex flex-col h-full justify-between">
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className={`p-3 rounded-lg ${
                              theme === "dark" ? "bg-slate-950" : "bg-slate-100"
                            } ${profile.color}`}
                          >
                            {profile.icon}
                          </div>
                          <h3
                            className={`text-xl font-bold ${getThemeClasses(
                              "mainText"
                            )}`}
                          >
                            {profile.name}
                          </h3>
                        </div>

                        <div
                          className={`flex items-center text-cyan-400 text-sm font-medium group-hover:translate-x-2 transition-transform ${
                            theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                          }`}
                        >
                          View Profile{" "}
                          <ExternalLink size={14} className="ml-1" />
                        </div>
                      </div>
                    </a>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 text-center ${getThemeClasses(
                "mainText"
              )}`}
            >
              Featured Projects
            </h2>
            <p
              className={`text-center mb-16 max-w-2xl mx-auto ${getThemeClasses(
                "subText"
              )}`}
            >
              A selection of projects demonstrating complex problem solving and
              full-stack development capabilities.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {portfolioData.projects.map((project, index) => (
              <FadeIn key={project.id} delay={index * 200}>
                <div
                  className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 ${getThemeClasses(
                    "card"
                  )} ${
                    theme === "dark"
                      ? "hover:shadow-2xl hover:shadow-cyan-900/20"
                      : "hover:shadow-xl hover:shadow-cyan-200/50"
                  }`}
                >
                  {/* Decorative glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/20 transition-all duration-500"></div>

                  <div className="p-8 relative z-10 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3
                          className={`text-2xl font-bold mb-1 transition-colors ${getThemeClasses(
                            "mainText"
                          )} group-hover:${
                            theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p className="text-purple-400 text-sm font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <a
                          href={project.links.code}
                          target="_blank"
                          rel="noreferrer"
                          className={`p-2 rounded-full transition-colors hover:scale-110 duration-300 ${
                            theme === "dark"
                              ? "bg-slate-800 hover:bg-white hover:text-slate-900"
                              : "bg-slate-200 hover:bg-slate-900 hover:text-white"
                          }`}
                          title="View Code"
                        >
                          <Github size={18} />
                        </a>
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          className={`p-2 rounded-full transition-colors hover:scale-110 duration-300 ${
                            theme === "dark"
                              ? "bg-slate-800 hover:bg-cyan-400 hover:text-slate-900"
                              : "bg-slate-200 hover:bg-cyan-600 hover:text-white"
                          }`}
                          title="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>

                    {/* <p
                      className={`mb-6 flex-grow leading-relaxed ${getThemeClasses(
                        "subText"
                      )}`}
                    >
                      {project.description}
                    </p> */}

                    <ul className="space-y-3 mb-6">
                      {project.description.map((desc, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-3 text-sm leading-relaxed ${getThemeClasses(
                            "subText"
                          )}`}
                        >
                          <CheckCircle2
                            className={
                              theme === "dark"
                                ? "text-cyan-500 mt-1 flex-shrink-0"
                                : "text-cyan-600 mt-1 flex-shrink-0"
                            }
                            size={16}
                          />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className={`px-2 py-1 text-xs font-mono rounded border ${
                              theme === "dark"
                                ? "text-cyan-200 bg-cyan-950/50 border-cyan-900/50"
                                : "text-cyan-700 bg-cyan-100 border-cyan-300"
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="mt-12 text-center">
              <a
                href={portfolioData.contact.code}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 transition-colors border-b border-transparent pb-1 ${
                  theme === "dark"
                    ? "text-slate-400 hover:text-white hover:border-white"
                    : "text-slate-600 hover:text-slate-900 hover:border-slate-900"
                }`}
              >
                View more projects on GitHub <ExternalLink size={16} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className={`py-20 relative ${getThemeClasses("sectionDark")}`}
      >
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2
              className={`text-3xl md:text-4xl font-bold mb-12 text-center flex justify-center items-center gap-3 ${getThemeClasses(
                "mainText"
              )}`}
            >
              <GraduationCap className="text-purple-400" /> Education &
              Certifications
            </h2>
          </FadeIn>

          <div className="max-w-4xl mx-auto relative space-y-20">
            <div
              className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 ${
                theme === "dark" ? "opacity-50" : "opacity-70"
              }`}
            ></div>

            {portfolioData.education
              .slice()
              .reverse()
              .map((edu, idx) => (
                <FadeIn key={edu.id} delay={idx * 200}>
                  <div
                    className={`relative flex flex-col md:flex-row items-start ${
                      idx % 2 === 0 ? "md:flex-row-reverse" : ""
                    } items-start`}
                  >
                    {/* Timeline Dot (Same Style as Experience) */}
                    <div
                      className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center z-10 rounded-full border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.6)] ${
                        theme === "dark" ? "bg-slate-950" : "bg-slate-50"
                      }`}
                    >
                      <div
                        className={`
                    w-5 h-5 rounded-full bg-purple-400/60 
                    flex items-center justify-center  shadow-[0_0_12px_rgba(168,85,247,0.7)]
                    ${theme === "dark" ? "text-cyan-300" : "text-cyan-600"}
                  `}
                      >
                        {getEducationIcon(edu.type)}
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className={`w-full md:w-[45%] pl-20 md:pl-0 ${
                        idx % 2 === 0 ? "md:pl-12" : "md:pr-12"
                      }`}
                    >
                      <div
                        className={`${getThemeClasses(
                          "card"
                        )} p-6 rounded-2xl border transition-all duration-300 shadow-xl relative overflow-hidden`}
                      >
                        {/* Top Accent Gradient */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>

                        <h3
                          className={`text-xl font-bold ${
                            edu.type === "Certification"
                              ? "text-purple-300"
                              : getThemeClasses("mainText")
                          }`}
                        >
                          {edu.title}
                        </h3>

                        <div
                          className={`flex items-center gap-2 text-purple-400 font-medium mt-1`}
                        >
                          <Building2 size={16} />
                          <span>{edu.institution}</span>
                        </div>

                        {/* Period + Score */}
                        <div className="flex flex-wrap gap-4 mt-4 text-xs font-bold">
                          <span
                            className={`inline-flex px-3 py-1 items-center gap-2 rounded-full border ${
                              theme === "dark"
                                ? "text-white bg-slate-800 border-slate-700"
                                : "text-slate-800 bg-slate-200 border-slate-300"
                            }`}
                          >
                            <Calendar size={12} className="text-purple-400" />
                            {edu.period}
                          </span>

                          <span
                            className={`inline-flex px-3 py-1 items-center gap-2 rounded-full border ${
                              theme === "dark"
                                ? "text-white bg-slate-800 border-slate-700"
                                : "text-slate-800 bg-slate-200 border-slate-300"
                            }`}
                          >
                            <Award size={12} className="text-yellow-400" />
                            {edu.score}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section - WITH AI EMAIL DRAFTER */}
      <section
        id="contact"
        className={`py-20 relative overflow-hidden ${
          theme === "dark"
            ? "bg-gradient-to-b from-slate-950 to-black"
            : "bg-gradient-to-b from-slate-50 to-white"
        }`}
      >
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-cyan-500/5 blur-[120px] pointer-events-none`}
        ></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 ${getThemeClasses(
                "mainText"
              )}`}
            >
              Ready to Collaborate?
            </h2>
            <p
              className={`mb-8 max-w-xl mx-auto ${getThemeClasses("subText")}`}
            >
              I am currently open to full-time software developer roles. Let's
              build something amazing together.
            </p>

            {/* Smart Contact Form */}
            <div
              className={`max-w-md mx-auto p-6 rounded-2xl border shadow-2xl backdrop-blur-sm mb-16 ${
                theme === "dark"
                  ? "bg-slate-900/80 border-slate-800"
                  : "bg-white/80 border-slate-200"
              }`}
            >
              <h3
                className={`text-sm font-semibold uppercase tracking-widest mb-4 flex items-center justify-center gap-2 ${
                  theme === "dark" ? "text-cyan-400" : "text-cyan-600"
                }`}
              >
                <Sparkles size={14} /> Smart AI Email Drafter
              </h3>
              <textarea
                value={emailIntent}
                onChange={(e) => setEmailIntent(e.target.value)}
                placeholder="E.g., I want to hire you for a React project. We are a startup in Bangalore."
                className={`w-full border rounded-lg p-3 text-sm focus:outline-none mb-4 h-24 resize-none ${getThemeClasses(
                  "input"
                )}`}
              />
              <button
                onClick={handleEmailDraft}
                disabled={isDrafting || !emailIntent.trim()}
                className="w-full py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-purple-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isDrafting ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <Mail size={18} />
                )}
                {isDrafting ? "Drafting..." : "Draft & Open Email"}
              </button>
              <p
                className={`text-xs mt-3 ${
                  theme === "dark" ? "text-slate-600" : "text-slate-400"
                }`}
              >
                Powered by Gemini AI • Drafts professionally & opens your mail
                app.
              </p>
            </div>
          </FadeIn>

          {/* <div
            className={`pt-10 flex flex-col md:flex-row justify-between items-center text-sm ${
              theme === "dark"
                ? "border-t border-slate-800 text-slate-500"
                : "border-t border-slate-200 text-slate-600"
            }`}
          >
            <div className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Sahil Dhameja. All rights
              reserved.
            </div>
            <div className="flex gap-6">
              <a
                href={portfolioData.contact.linkedin}
                className={
                  theme === "dark"
                    ? "hover:text-cyan-400 transition-colors"
                    : "hover:text-cyan-600 transition-colors"
                }
              >
                LinkedIn
              </a>
              <a
                href={portfolioData.contact.code}
                className={
                  theme === "dark"
                    ? "hover:text-cyan-400 transition-colors"
                    : "hover:text-cyan-600 transition-colors"
                }
              >
                GitHub
              </a>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className={
                  theme === "dark"
                    ? "hover:text-cyan-400 transition-colors"
                    : "hover:text-cyan-600 transition-colors"
                }
              >
                Email
              </a>
            </div>
          </div> */}
        </div>
      </section>

      {/* Floating Chat Widget */}
      <div
        className={`fixed bottom-8 right-8 sm:bottom-8 sm:right-8 z-50 transition-all duration-300 ${
          isChatOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div
          className={`w-80 md:w-96 sm:w-[90%] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[500px] ${
            theme === "dark"
              ? "bg-slate-900 border border-slate-700"
              : "bg-white border border-slate-300"
          }`}
        >
          {/* Header */}
          <div
            className={`p-4 border-b flex justify-between items-center ${
              theme === "dark"
                ? "bg-gradient-to-r from-slate-800 to-slate-900 border-slate-700"
                : "bg-slate-100 border-slate-300"
            }`}
          >
            <div className="flex items-center gap-2">
              <Bot
                className={theme === "dark" ? "text-cyan-400" : "text-cyan-600"}
                size={20}
              />
              <span className={`font-semibold ${getThemeClasses("mainText")}`}>
                Sahil's chatbot
              </span>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className={
                theme === "dark"
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }
            >
              <XCircle size={20} />
            </button>
          </div>

          {/* Messages */}
          <div
            className={`flex-1 p-4 overflow-y-auto space-y-4 h-80 ${
              theme === "dark" ? "bg-slate-950/50" : "bg-slate-50/50"
            }`}
          >
            {chatHistory.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === "user"
                      ? "bg-cyan-600 text-white rounded-br-none"
                      : `${
                          theme === "dark"
                            ? "bg-slate-800 text-slate-200 border-slate-700"
                            : "bg-slate-200 text-slate-800 border-slate-300"
                        } rounded-bl-none border`
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isChatLoading && (
              <div className="flex justify-start">
                <div
                  className={`p-3 rounded-2xl rounded-bl-none flex items-center gap-2 ${
                    theme === "dark"
                      ? "bg-slate-800 border-slate-700"
                      : "bg-slate-200 border-slate-300"
                  } border`}
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleChatSubmit}
            className={`p-3 border-t flex gap-2 ${
              theme === "dark"
                ? "bg-slate-900 border-slate-700"
                : "bg-white border-slate-200"
            }`}
          >
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask about my skills..."
              className={`flex-1 rounded-lg px-3 py-2 text-sm focus:outline-none ${getThemeClasses(
                "input"
              )}`}
            />
            <button
              type="submit"
              disabled={isChatLoading}
              className="p-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Floating Action Button (Toggle Chat) */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className={`fixed bottom-8 p-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full shadow-lg shadow-cyan-900/20 hover:scale-110 transition-all duration-300 z-50 animate-bounce-slow ${
            scrolled ? "right-20 sm:right-20" : "right-3 sm:right-6"
          }`}
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* Scroll Top Button */}
      {!isChatOpen && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-8 right-2 sm:right-6 p-3 rounded-full shadow-lg transition-all duration-300 z-50 border ${
            scrolled
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          } ${
            theme === "dark"
              ? "bg-slate-800 text-slate-300 hover:text-white border-slate-700"
              : "bg-slate-200 text-slate-700 hover:text-slate-900 border-slate-300"
          }`}
        >
          <ChevronDown size={24} className="transform rotate-180" />
        </button>
      )}
    </div>
  );
};

export default Portfolio;
