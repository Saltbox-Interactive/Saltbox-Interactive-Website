import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const games = [
  {
    id: 1,
    title: "Project Horizon",
    description: "An epic space exploration adventure where you command your own starship.",
    status: "Coming Soon",
    color: "from-purple-600 to-blue-600",
  },
  {
    id: 2,
    title: "Mystic Realms",
    description: "Immerse yourself in a fantasy world filled with magic and mystery.",
    status: "In Development",
    color: "from-emerald-600 to-cyan-600",
  },
  {
    id: 3,
    title: "Cyber Circuit",
    description: "High-speed racing in a neon-lit cyberpunk metropolis.",
    status: "Early Access",
    color: "from-pink-600 to-orange-600",
  },
];

export default function GamesSection() {
  return (
    <section id="games" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Games</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our collection of innovative and immersive gaming experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <Card key={game.id} variant="interactive">
              <div className={`aspect-video bg-gradient-to-br ${game.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-gray-300">
                  {game.status}
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-3xl font-bold opacity-20">{game.title}</div>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{game.title}</CardTitle>
                <CardDescription>{game.description}</CardDescription>
                <Button variant="outline" className="mt-4 w-full sm:w-auto">
                  Learn More
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}