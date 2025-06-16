import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, Heart } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Quality Education",
    description: "Comprehensive curriculum designed to develop critical thinking and academic excellence.",
  },
  {
    icon: Users,
    title: "Experienced Teachers",
    description: "Dedicated and qualified educators committed to nurturing each child's potential.",
  },
  {
    icon: Award,
    title: "Character Building",
    description: "Focus on moral and spiritual development alongside academic achievement.",
  },
  {
    icon: Heart,
    title: "Caring Environment",
    description: "Safe, supportive atmosphere where every child feels valued and loved.",
  },
]

export function AboutSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Bugema Adventist Primary?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide a holistic education that combines academic excellence with Christian values, preparing students
            for success in life and service to others.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
