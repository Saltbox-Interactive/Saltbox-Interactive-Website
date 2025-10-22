import { getAllNewsPosts } from "@/lib/sanity/queries";
import NewsShowcase from "./NewsShowcase";

export default async function NewsShowcaseWrapper() {
  const posts = await getAllNewsPosts();

  return <NewsShowcase posts={posts} />;
}
