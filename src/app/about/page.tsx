import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const skills = [
  "Public Speaking", "Interpersonal Communication", "Content Creation", 
  "Event Management", "Team Leadership", "Social Media Strategy",
  "Problem Solving", "Critical Thinking"
];

const experiences = [
  {
    title: "Organizational Involvement: President, University Communications Club",
    description: "Led a team of 20+ members, organized workshops, and managed club communications, increasing engagement by 40%."
  },
  {
    title: "MC Experience: Annual Tech Conference 2023",
    description: "Hosted a major tech conference with over 500 attendees, ensuring smooth transitions and engaging the audience throughout the event."
  },
  {
    title: "Volunteer Coordinator: Local Charity Drive",
    description: "Managed and coordinated over 50 volunteers for a successful city-wide charity drive, exceeding donation goals by 25%."
  }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">About Me</h1>
        <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto text-balance">
          Discover the story behind my passion for communication and the experiences that have shaped my professional journey.
        </p>
      </header>

      <div className="space-y-12">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">My Background</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90 leading-relaxed text-balance">
              From a young age, I've been fascinated by the power of words and the art of connection. My academic journey in Communications, coupled with diverse hands-on experiences, has equipped me with a robust understanding of how to build bridges through effective dialogue. I believe that clear, empathetic communication is the cornerstone of success in any endeavor, whether it's leading a team, engaging an audience, or driving a project forward. My approach is rooted in creativity, strategic thinking, and a genuine desire to understand and connect with people.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Communication Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center space-x-2 text-foreground/90">
                  <CheckCircle className="h-5 w-5 text-accent-foreground flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Key Experiences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-foreground mb-1">{exp.title}</h3>
                <p className="text-foreground/80 leading-relaxed text-balance">{exp.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
