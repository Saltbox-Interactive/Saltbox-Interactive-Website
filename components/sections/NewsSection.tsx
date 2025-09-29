import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

const newsItems = [
  {
    id: 1,
    title: "Project Horizon Alpha Test Begins",
    date: "December 15, 2024",
    excerpt: "We're excited to announce that alpha testing for Project Horizon has officially begun. Selected testers will get early access to explore the vast universe we've created.",
    category: "Announcement",
  },
  {
    id: 2,
    title: "Mystic Realms Development Update",
    date: "December 10, 2024",
    excerpt: "Check out the latest screenshots and gameplay footage from Mystic Realms. The magic system is coming together beautifully!",
    category: "Development",
  },
  {
    id: 3,
    title: "Join Us at Game Developers Conference 2025",
    date: "December 5, 2024",
    excerpt: "We'll be showcasing our upcoming titles at GDC 2025. Stop by our booth to play demos and meet the team!",
    category: "Events",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Latest News</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest developments from Saltbox Interactive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} variant="interactive">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">{item.date}</span>
                  <span className="text-sm px-3 py-1 bg-gray-700 rounded-full text-gray-300">
                    {item.category}
                  </span>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-3">{item.excerpt}</CardDescription>
                <a href="#" className="text-white hover:text-gray-300 mt-4 inline-block font-medium">
                  Read More →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}