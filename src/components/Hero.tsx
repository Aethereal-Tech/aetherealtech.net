import { ArrowRight, CheckCircle2 } from "lucide-react";

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Hero({ onNavigate, currentPage }: NavbarProps) {
  const handleNavigation = (page: string, sectionId?: string) => {
    if (page === "home" && sectionId) {
      onNavigate("home");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      onNavigate(page);
    }
  };

  const scrollToSection = (id: string) => {
    if (currentPage !== "home") {
      handleNavigation("home", id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="home"
      className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute inset-0 bg-linear-to-b from-emerald-50/50 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 right-0 w-150 h-150 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto w-full text-center">
        <div className="inline-flex items-center gap-2 mb-8">
          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
          <span className="text-sm text-gray-600">
            Available for new projects
          </span>
        </div>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-gray-900 mb-8 leading-[0.95] tracking-tight">
          Software that
          <br />
          <span className="italic font-light text-emerald-400">matters</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
          We partner with ambitious teams to design, develop, and deploy
          exceptional digital products
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <button
            onClick={() => {
              scrollToSection("contact");
            }}
            className="cursor-pointer bg-gray-900 text-white px-10 py-5 rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-3 group text-lg"
          >
            Start a conversation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12 border-t border-gray-200">
          <div className="text-left">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  Collaborative Process
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We work as an extension of your team, not just a vendor
                </p>
              </div>
            </div>
          </div>

          <div className="text-left">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  Modern Technology
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Built with cutting-edge tools that ensure longevity
                </p>
              </div>
            </div>
          </div>

          <div className="text-left">
            <div className="flex items-start gap-3 mb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
              <div>
                <h3 className="font-medium text-gray-900 mb-1">
                  Measurable Results
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Data-driven decisions that impact your bottom line
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
