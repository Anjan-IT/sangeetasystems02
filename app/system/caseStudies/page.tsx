/* eslint-disable @next/next/no-img-element */
"use client";

import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { useRouter } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getPosts = async () => {
      const blogPosts = await client.fetch(`*[_type == "post"] | order(publishedAt desc)`);
      setPosts(blogPosts);
    };
    getPosts();
  }, []);

  const handlePostClick = (slug: any) => {
    router.push(`/system/caseStudies/${slug}`);
  };

  return (
    <div
      className="flex flex-col min-h-screen "
      style={{
        backgroundColor: "#faefe0",
        // backgroundColor: "#DEE5D4",
        // background: "linear-gradient(180deg, #faefe0,#fff7ad)",
      }}
    >
      <Navbar />
      <main className="flex-grow container mt-16  mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Our Case Studies
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post: any) => (
              <div
                key={post._id}
                onClick={() => handlePostClick(post.slug.current)}
                className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                {post.mainImage?.asset?.url && (
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                )}
                {post.mainImage && post.mainImage.asset && (
                  <div className="mb-8">
                    <img
                      src={urlFor(post.mainImage).url()}
                      alt={
                        post.mainImage.alt || post.title || "Case study image"
                      }
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-2">
                    {post.publishedAt &&
                      format(new Date(post.publishedAt), "MMMM dd, yyyy")}
                  </p>
                  <p className="text-gray-700 text-sm">{post.author?.name}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">
              No case studies available at the moment.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
