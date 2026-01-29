export function AboutSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* About Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              About RepliCode
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              We believe learning to code shouldn't be boring or disconnected from real-world applications. RepliCode is built on the principle that the best way to learn programming is by building actual projects that matter.
            </p>
          </div>

          {/* Mission */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground text-pretty mb-4">
              To empower developers of all skill levels by providing hands-on, project-based learning experiences that bridge the gap between theory and practice. We focus on real projects that teach industry-standard practices and build a portfolio worth showing to employers.
            </p>
          </div>

          {/* Values */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Values</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="font-semibold text-foreground mb-2">Learning by Doing</h3>
                <p className="text-muted-foreground">
                  The best way to learn is by building. We focus on practical, hands-on projects that teach real skills.
                </p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="font-semibold text-foreground mb-2">Quality Content</h3>
                <p className="text-muted-foreground">
                  Every project is carefully curated and reviewed to ensure it teaches industry best practices and current technologies.
                </p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="font-semibold text-foreground mb-2">Community First</h3>
                <p className="text-muted-foreground">
                  We believe in building a supportive community where developers help each other grow and succeed together.
                </p>
              </div>
            </div>
          </div>

          {/* Why RepliCode */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose RepliCode?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/50 p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Real Projects</h3>
                <p className="text-sm text-muted-foreground">
                  Build projects that you can add to your portfolio and showcase to potential employers.
                </p>
              </div>
              <div className="bg-card/50 p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Expert Guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Learn from detailed instructions and best practices used by professional developers.
                </p>
              </div>
              <div className="bg-card/50 p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Progressive Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Start simple and gradually build up your skills with increasingly complex projects.
                </p>
              </div>
              <div className="bg-card/50 p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Always Updated</h3>
                <p className="text-sm text-muted-foreground">
                  We continuously update our projects to reflect the latest technologies and industry trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
