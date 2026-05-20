import Timeline from "@/components/Timeline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences, skills } from "@/data/tech";

function Experience() {
  return (
    <section className="w-full pt-24 md:pt-32 mb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="font-bold text-2xl md:text-4xl leading-tight">
            About & Experience
          </h1>
          <h2 className="font-semibold text-xl md:text-3xl leading-tight mt-8">
            Mohit Sadhwani
          </h2>
          <h2 className="opacity-70 text-md md:text-xl leading-tight mt-2">
            Full Stack Engineer - React & Java Spring Boot
          </h2>

          {/* Description */}
          <p className="mt-8 text-base md:text-lg opacity-70 leading-8 max-w-3xl">
            Full-stack Developer with 4+ years of experience building scalable web applications and distributed systems. Specialized in designing robust backend architectures using Java and Spring Boot while developing modern frontend experiences with React and TypeScript. Passionate about clean architecture, microservices, cloud-native development, and high-performance system design using Docker, Kubernetes, and AWS.
          </p>
        </div>

        {/* Core Technologies */}
        <div className="mt-24">
          <p className="text-3xl">Core Technologies</p>
          <span className="mt-4 block w-24 h-1 bg-brand-primary rounded-full"></span>
        </div>

        {/* Tech Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((item) => (
            <Card
              key={item.name}
              className="
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
              hover:border-brand-primary/40
              cursor-pointer
              shadow-md
            "
            >
              <CardHeader>
                <CardTitle>
                  <p className="mt-8">{item.name}</p>
                </CardTitle>
              </CardHeader>

              <CardContent className="flex flex-wrap gap-3">
                {item.tags.map((tag) => (
                  <div
                    key={tag}
                    className="
                    bg-brand-primary/10
                    text-brand-primary
                    text-sm
                    px-4 py-1
                    rounded-full
                    font-medium
                  "
                  >
                    {tag}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Work Experience */}
        <div className="mt-24">
          <p className="text-3xl">Work Experience</p>
          <span className="mt-4 block w-24 h-1 bg-brand-primary rounded-full"></span>
        </div>
        <Timeline experiences={experiences}/>
      </div>
    </section>
  )
}

export default Experience;