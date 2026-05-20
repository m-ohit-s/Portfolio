import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { featuredProjects, technologies } from "@/data/tech";

function Home() {
  return (
    <section className="w-full pt-24 md:pt-32 mb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        <div className="max-w-3xl">

          {/* Heading */}
          <h1 className="font-bold text-2xl md:text-4xl leading-tight">
            Building robust, scalable full-stack applications
          </h1>

          {/* Description */}
          <p className="mt-8 text-base md:text-lg opacity-70 leading-8 max-w-3xl">
            I build scalable full-stack applications and distributed systems
            using modern monolithic and microservice architectures with React,
            TypeScript, Spring Boot, Docker, Kubernetes, and AWS.
          </p>
        </div>

        {/* Core Technologies */}
        <div className="mt-24">
          <p className="text-3xl">Core Technologies</p>
          <span className="mt-4 block w-24 h-1 bg-brand-primary rounded-full"></span>
        </div>
        {/* Tech Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((item) => (
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
                  <item.icon size={24} />
                  <p className="mt-8">{item.name}</p>
                </CardTitle>

                <CardDescription className="mt-3 leading-7">
                  {item.desc}
                </CardDescription>
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

          {/* Featured Work */}
          <div className="mt-24">
            <p className="text-3xl">Featured Work</p>
            <span className="mt-4 block w-24 h-1 bg-brand-primary rounded-full"></span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {
            featuredProjects.map((item) => (
              <Card key={item.name} className="relative mx-auto w-full max-w-sm pt-0">
                <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
                <img
                  src={item.image}
                  alt={item.name}
                  className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                    <Badge variant="secondary">Featured</Badge>
                  </CardAction>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>
                    {item.desc}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full cursor-pointer" onClick={() => {window.open(item.repoUrl, "_blank")}}>View Repository</Button>
                </CardFooter>
              </Card>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Home;