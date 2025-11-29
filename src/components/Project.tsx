import  { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, ExternalLink, Code } from 'lucide-react';
import BlurText from './BlurText';
import image from '../assets/image.png'
import movie from '../assets/movie.png'
import women from '../assets/women.png'
interface Project {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats: {
    metric1: { value: string; label: string };
    metric2: { value: string; label: string };
  };
  tags: string[];
  demoLink: string;
  codeLink: string;
}

interface ProjectProps {
  projects?: Project[];
  autoPlayInterval?: number;
  showSectionHeading?: boolean;
  sectionTitle?: string;
  sectionSubtitle?: string;
}

const defaultProjects: Project[] = [
  {
    id: 1,
    badge: "FULL-STACK PROJECT",
    title: "Ghummakad",
    subtitle: "Smart Trip Planning & Travel Collaboration",
    description:
      "A full-stack travel planning platform where users can create trips, join others' plans, and collaborate as a group. Secure authentication, real-time trip management, CRUD operations, and admin controls included. Integrated Razorpay for seamless travel package payments.",
    image: image,
    stats: {
      metric1: { value: "Razorpay", label: "Payments" },
      metric2: { value: "Full CRUD", label: "Mgmt" }
    },
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay", "JWT Auth"],
    demoLink: "https://trip-planner-react-frontened.vercel.app/",
    codeLink: "https://github.com/priyanshujindal12" // Replace if repo separate
  },
  {
    id: 2,
    badge: "REACT PROJECT",
    title: "Movie Finder",
    subtitle: "Search Any Movie Instantly",
    description:
      "A movie search platform that fetches live data using APIs. Users can explore trending movies, descriptions, ratings, and genres. Fast and minimal UI built purely in React.",
    image: movie,
    stats: {
      metric1: { value: "10000+", label: "Movies" },
      metric2: { value: "Live API", label: "Search" }
    },
    tags: ["React", "REST API", "Hooks", "Tailwind CSS"],
    demoLink: "https://movie-finder-taupe-alpha.vercel.app/",
    codeLink: "https://github.com/priyanshujindal12" 
  },
  {
    id: 3,
    badge: "COMMUNITY SAFETY",
    title: "Guardian Angel",
    subtitle: "Women Safety & Rapid Emergency Alert System",
    description:
      "Guardian Angel empowers women to ensure safety with a single tap SOS trigger. Sends real-time location to emergency contacts and allows instant access to help resources — built to create safer environments for everyone.",
    image: women,
    stats: {
      metric1: { value: "1-Click", label: "SOS Alert" },
      metric2: { value: "Realtime GPS", label: "Location" }
    },
    tags: ["React", "JavaScript", "Geolocation API", "Responsive UI"],
    demoLink: "https://1guardian.netlify.app/home",
    codeLink: "https://github.com/priyanshujindal12" 
  }
];


export default function Project({
  projects = defaultProjects,
  autoPlayInterval = 5000,
  showSectionHeading = true,
  sectionTitle = "Projects",
  sectionSubtitle = "Explore my latest work and side projects"
}: ProjectProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToProject = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    if (isPlaying && projects.length > 1) {
      const interval = setInterval(nextProject, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentIndex, autoPlayInterval, projects.length]);

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="min-h-screen  text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        {showSectionHeading && (
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                <BlurText
                    text={sectionTitle}
                    delay={150}
                    animateBy="words"
                    direction="top"
                    className="flex justify-center text-6xl font-bold text-blue-400 "
                />
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {sectionSubtitle}
            </p>
            <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
          </div>
        )}

        {/* Project Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'}`}>
            <div className="inline-block">
              <span className="px-4 py-2 bg-cyan-500 text-black text-sm font-bold rounded-full">
                {currentProject.badge}
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              {currentProject.title}
            </h1>

            <h2 className="text-2xl text-cyan-400 font-light">
              {currentProject.subtitle}
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              {currentProject.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {currentProject.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm border border-gray-700 hover:border-cyan-500 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-colors">
                <div className="text-4xl font-bold text-cyan-400">
                  {currentProject.stats.metric1.value}
                </div>
                <div className="text-gray-400 mt-2">
                  {currentProject.stats.metric1.label}
                </div>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-colors">
                <div className="text-4xl font-bold text-cyan-400">
                  {currentProject.stats.metric2.value}
                </div>
                <div className="text-gray-400 mt-2">
                  {currentProject.stats.metric2.label}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <a 
                href={currentProject.demoLink}
                className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-all hover:scale-105"
              >
                <ExternalLink size={20} />
                Launch Demo
              </a>
              <a 
                href={currentProject.codeLink}
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg hover:border-cyan-500 transition-all hover:scale-105"
              >
                <Code size={20} />
                View Code
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={`relative transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-x-[20px]' : 'opacity-100 translate-x-0'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 hover:border-cyan-500 transition-colors">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Project Counter */}
              <div className="absolute top-6 right-6 bg-cyan-500 text-black w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                #{currentIndex + 1}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          {/* Previous Button */}
          <button
            onClick={prevProject}
            disabled={isTransitioning}
            className="p-3 bg-gray-800 border border-gray-700 rounded-full hover:border-cyan-500 hover:bg-gray-700 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 bg-gray-800 border border-gray-700 rounded-full hover:border-cyan-500 hover:bg-gray-700 transition-all hover:scale-110"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={24} className="fill-cyan-500" /> : <Play size={24} />}
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                disabled={isTransitioning}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-cyan-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500 w-3'
                } disabled:cursor-not-allowed`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextProject}
            disabled={isTransitioning}
            className="p-3 bg-gray-800 border border-gray-700 rounded-full hover:border-cyan-500 hover:bg-gray-700 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Project Counter Text */}
        <div className="text-center mt-6 text-gray-400">
          Project {currentIndex + 1} of {projects.length}
        </div>
      </div>
    </section>
  );
}