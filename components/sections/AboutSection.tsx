import { Card, CardContent } from "@/components/ui/Card";

const values = [
  {
    title: "Authenticity",
    description: "Every detail meticulously researched for historical accuracy.",
    icon: "🏛️",
  },
  {
    title: "Innovation",
    description: "Cutting-edge technology meets timeless history.",
    icon: "⚙️",
  },
  {
    title: "Education",
    description: "Making history accessible and engaging for all.",
    icon: "📚",
  },
  {
    title: "Preservation",
    description: "Digital immortalization of our cultural heritage.",
    icon: "💾",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-6 relative bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="absolute inset-0 gradient-dust opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-5xl md:text-6xl font-light tracking-[0.2em] text-foreground mb-4" style={{ fontFamily: 'var(--font-bebas)' }}>
                OUR MISSION
              </h2>
              <div className="h-px w-32 bg-gradient-to-r from-accent/60 to-transparent mb-6"></div>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                At <span className="bg-white text-black px-1">Saltbox Interactive</span>, we believe the past holds invaluable lessons for the future. 
                Through the convergence of historical expertise and cutting-edge technology, we create 
                immersive digital experiences that bring history to life.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our team of historians, technologists, and artists work together to ensure every 
                project maintains the highest standards of historical accuracy while leveraging 
                modern innovations in virtual reality, simulation, and interactive storytelling.
              </p>
              <p className="text-accent/80 text-xl tracking-wider mt-6">
                "The past is never dead. It's not even past."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-black/40 border-accent/20 hover:border-accent/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-3xl mb-4 opacity-60">{value.icon}</div>
                  <h3 className="text-xl font-light tracking-wider text-foreground mb-2" style={{ fontFamily: 'var(--font-bebas)' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}