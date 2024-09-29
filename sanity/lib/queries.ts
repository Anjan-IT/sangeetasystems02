// import client from "@/sanity/lib/client";

import { client } from "./client";

// GROQ Query to fetch blog posts
const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  author->{
    name,
    image
  },
  mainImage,
  categories[]->{
    title
  },
  publishedAt,
  body
}`;

export const fetchPosts = async () => {
  const posts = await client.fetch(query);
  return posts;
};

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;
  try {
    const post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]`,
      { slug }
    );

    if (!post) {
      return { notFound: true };
    }

    return {
      props: { post },
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      notFound: true,
    };
  }
}