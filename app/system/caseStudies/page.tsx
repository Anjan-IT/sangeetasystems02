/* eslint-disable @next/next/no-img-element */
"use client";

import { client } from "@/sanity/lib/client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Image from "next/image";
import { format } from "date-fns";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { useRouter } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import HyperText from "@/components/ui/HyperText";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.from(heroRef.current.querySelectorAll(".animate-hero"), {
        opacity: 25,
        y: 20,
        duration: 0,
        stagger: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "20% center top",
          toggleActions: "play pause reverse reset",
        },
      });
    }

    const getPosts = async () => {
      const blogPosts = await client.fetch(
        `*[_type == "post"] | order(publishedAt desc)`
      );
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
      }}
    >
      <Navbar />
      <div
        id="smooth-wrapper"
        className="flex-grow container mt-16 py-20 w-full px-8"
      >
        <section
          ref={heroRef}
          className="relative h-[30vh] flex items-center justify-center"
        >
          <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center h-full">
            <HyperText
              className="animate-hero text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-4 max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]"
              text="IT Solutions for Tomorrow"
            />
            <p className="animate-hero text-sm sm:text-base md:text-lg lg:text-xl mb-6 px-2 max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]">
              Empowering businesses with cutting-edge technology
            </p>
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-6xl mx-auto">
          {posts.length > 0 ? (
            posts.map((post: any) => (
              <div
                key={post._id}
                onClick={() => handlePostClick(post.slug.current)}
                className="cursor-pointer rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 w-full"
              >
                {post.mainImage?.asset?.url && (
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                )}
                {post.mainImage && post.mainImage.asset && (
                  <div className="mt-4">
                    <img
                      src={urlFor(post.mainImage).url()}
                      alt={
                        post.mainImage.alt || post.title || "Case study image"
                      }
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                )}
                <div className="pt-4">
                  <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
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
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
