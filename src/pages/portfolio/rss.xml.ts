import rss from "@astrojs/rss";
import { type APIContext } from "astro";
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const projects = (await getCollection("projects"))
    .filter((project) => project.data.published)
    .toSorted((a, b) => b.data.created.valueOf() - a.data.created.valueOf());

  return rss({
    title: "Aakash Kc / Portfolio",
    description: "Hi there, I'm Aakash! Welcome to my portfolio!",
    site: context.site!,
    items: projects.map((project) => {
      const { title, description, created, tags } = project.data;
      return {
        link: `/portfolio/project/${project.id}`,
        title,
        pubDate: created,
        description,
        categories: tags,
      };
    }),
  });
}
