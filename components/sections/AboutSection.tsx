import { Card, CardContent } from "@/components/ui/Card";

const values = [
  {
    title: "Innovation",
    description: "We push boundaries and explore new possibilities in game design.",
    icon: "💡",
  },
  {
    title: "Quality",
    description: "Every game we create is crafted with attention to detail and polish.",
    icon: "✨",
  },
  {
    title: "Community",
    description: "We build games that bring people together and create lasting memories.",
    icon: "🤝",
  },
  {
    title: "Passion",
    description: "Gaming is our passion, and it shows in everything we create.",
    icon: "❤️",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Saltbox Interactive
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Founded with a vision to create unforgettable gaming experiences, Saltbox Interactive 
              is an independent game studio dedicated to pushing the boundaries of interactive entertainment.
            </p>
            <p className="text-lg text-gray-300">
              Our team of passionate developers, artists, and designers work together to craft 
              games that not only entertain but inspire. We believe in the power of games to 
              tell stories, build communities, and create lasting memories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}