
/* eslint-disable @next/next/no-img-element */

import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { format } from "date-fns";
import { urlFor } from "@/sanity/lib/image";
import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";


export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "post"].slug.current`);

  return slugs.map((slug: string) => ({
    slug,
  }));
}

interface Post {
  title: string;
  author: {
    name: string;
  };
  publishedAt: string;
  categories: {
    _id: string;
    title: string;
  }[];
  mainImage: {
    asset: {
      url: string;
    };
    alt: string;
  };
  body: any;
}

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      ...,
      author->,
      categories[]->
    }`,
    { slug }
  );

  if (!post) {
    notFound();
  }

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundColor: "#faefe0",
        // backgroundColor: "#DEE5D4",
        // background: "linear-gradient(180deg, #faefe0,#fff7ad)",
      }}
    >
      <Navbar />
      <main className="flex-grow mt-16">
        <article className="max-w-4xl mx-auto py-12 px-4">
          <header className="mb-12">
            <h1 className="text-5xl font-bold mb-4 text-gray-800 bg-clip-text">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              {post.author && (
                <span className="mr-4 text-lg">By {post.author.name}</span>
              )}
              {post.publishedAt && (
                <time dateTime={post.publishedAt} className="text-lg">
                  {format(new Date(post.publishedAt), "MMMM d, yyyy")}
                </time>
              )}
            </div>
            {post.categories && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories.map(
                  (category: {
                    _id: Key | null | undefined;
                    title:
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | Iterable<ReactNode>
                      | ReactPortal
                      | Promise<AwaitedReactNode>
                      | Iterable<ReactNode>
                      | null
                      | undefined;
                  }) => (
                    <span
                      key={category._id}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-200 transition-colors duration-300"
                    >
                      {category.title}
                    </span>
                  )
                )}
              </div>
            )}
          </header>
          {post.mainImage && post.mainImage.asset && (
            <div className="mb-12">
              <img
                src={urlFor(post.mainImage).url()}
                alt={post.mainImage.alt || post.title || "Case study image"}
                className="rounded-lg w-full h-auto shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          )}
          <div className="prose prose-lg max-w-none">
            {post.body && (
              <PortableText
                value={post.body}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="mb-6 text-gray-700 leading-relaxed">
                        {children}
                      </p>
                    ),
                    h2: ({ children }) => (
                      <>
                        <div className="w-full border-t border-gray-300 my-8"></div>
                        <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-800 bg-gradient-to-r bg-clip-text text-transparent">
                          {children}
                        </h2>
                      </>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">
                        {children}
                      </h3>
                    ),
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="list-disc pl-6 mb-6 text-gray-700">
                        {children}
                      </ul>
                    ),
                    number: ({ children }) => (
                      <ol className="list-decimal pl-6 mb-6 text-gray-700">
                        {children}
                      </ol>
                    ),
                  },
                  listItem: {
                    bullet: ({ children }) => (
                      <li className="mb-2 hover:text-blue-600 transition-colors duration-300">
                        {children}
                      </li>
                    ),
                  },
                }}
              />
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
