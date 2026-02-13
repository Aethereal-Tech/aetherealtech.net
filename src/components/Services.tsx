import {
  Boxes,
  Brain,
  Cloud,
  Code,
  Monitor,
  Palette,
  Sparkles,
  TestTube2
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Implementation of all types of web applications with cutting-edge technologies, combining scalable APIs with responsive interfaces.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Palette,
    title: "Web & Mobile Design",
    description:
      "Attractive and highly-customized design concepts built on extensive research of your domain and needs.",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Intelligent AI solutions that automate processes, provide insights, and transform your business operations.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: Cloud,
    title: "DevOps & Solutions Architecture",
    description:
      "Cloud architecture expertise with certifications across major providers, from traditional n-tier to hyper-scalable serverless solutions.",
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-50",
  },
  {
    icon: TestTube2,
    title: "QA & Testing",
    description:
      "Manual and automation testing consultancy with full CI/CD integration using cutting-edge technologies.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Monitor,
    title: "Desktop Application Development",
    description:
      "Proven technologies delivering desktop applications with rich visual elements and necessary integration.",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
  },
  {
    icon: Boxes,
    title: "Project Management",
    description:
      "SCRUM and ITIL certified management with expertise in Agile methodologies and release process organization.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Sparkles,
    title: "Branding & Logo Design",
    description:
      "Complete branding concepts and unique logo design, working closely with clients to turn ideas into reality.",
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-50",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-emerald-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end software development services designed to bring your
            vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>
              <div
                className={`relative w-14 h-14 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`}
                ></div>
                <service.icon className="w-7 h-7 text-gray-700 group-hover:text-white relative z-10 transition-colors duration-300" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 relative">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed relative">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
