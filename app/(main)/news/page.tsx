import Hero from "@/components/sections/Hero";
import EmailSubscribe from "@/components/sections/EmailSubscribe";
import NewsCard from "@/components/ui/NewsCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { getAllNewsPosts } from "@/lib/sanity/queries";

export default async function BlogPage() {
  // Fetch all posts from Sanity
  const allNewsPosts = await getAllNewsPosts();

  // Get 2 most recent posts for "Latest News"
  const recentPosts = allNewsPosts.slice(0, 2);

  // Get remaining posts for "All News"
  const allPosts = allNewsPosts.slice(2);

  return (
    <>
      <Hero
        title="News & Updates"
        subtitle="Latest news from Saltbox Interactive"
        backgroundImage="/images/temp/dod-temp-12.jpg"
        pageName="News"
      />

      <section className="relative py-20 bg-black">
        {/* Horizontal line */}
        <div className="px-16 mb-6">
          <div className="h-px w-full bg-white/30"></div>
        </div>

        {/* Latest News Section */}
        <div className="px-16 mb-20">
          <div className="flex items-start gap-12">
            {/* Section Title */}
            <div className="flex-shrink-0">
              <SectionTitle>Latest News</SectionTitle>
            </div>

            {/* News Cards Container */}
            <div className="flex-1 relative overflow-hidden">
              <div className="flex gap-6">
                {recentPosts.map((post) => (
                  <div key={post._id} className="flex-shrink-0 w-[calc(50%-12px)]">
                    <NewsCard
                      slug={post.slug.current}
                      title={post.title}
                      coverImage={post.coverImage}
                      date={post.date}
                      category={post.category}
                      project={post.project}
                      author={post.author}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal line */}
        <div className="px-16 mb-6">
          <div className="h-px w-full bg-white/30"></div>
        </div>

        {/* All News Section */}
        <div className="px-16">
          {/* Section Title */}
          <div className="mb-12">
            <SectionTitle>All News</SectionTitle>
          </div>

          {/* News Cards Grid */}
          <div className="grid grid-cols-3 gap-6">
            {allPosts.map((post) => (
              <div key={post._id} className="w-full">
                <NewsCard
                  slug={post.slug.current}
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  category={post.category}
                  project={post.project}
                  author={post.author}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Subscribe Section */}
      <div className="relative bg-black">
        <EmailSubscribe />
      </div>
    </>
  );
}
