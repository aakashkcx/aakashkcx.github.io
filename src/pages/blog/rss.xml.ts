import rss from "@astrojs/rss";
import { type APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const posts = (await getCollection("posts"))
    .filter((post) => post.data.published)
    .toSorted((a, b) => b.data.created.valueOf() - a.data.created.valueOf());

  return rss({
    title: "Aakash Kc / Blog",
    description: "Hi there, I'm Aakash! Welcome to my blog!",
    site: context.site!,
    items: posts.map((post) => {
      const { title, description, created, tags } = post.data;
      return {
        link: `/blog/post/${post.id}`,
        title,
        pubDate: created,
        description,
        categories: tags,
      };
    }),
  });
}
