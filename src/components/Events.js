import React from "react";
import useFetchStrapi from "./hooks/useFetchStrapi";
import { EventsCardLoading } from "./EventsCardLoading";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export const Events = () => {
  const { data: posts } = useFetchStrapi("posts?populate=%2A");

  return (
    <section
      id="events"
      className="max-w-5xl py-24 mx-auto bg-transparent md:pt-32"
    >
      <div className="container px-4 mx-auto">
        <div className="text-left">
          <span className="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
            Annoucements
          </span>
          <h3 className="mb-6 text-3xl font-bold leading-snug tracking-tight text-gray-900 md:text-5xl lg:text-7xl md:leading-snug lg:leading-snug">
            News and Events
          </h3>
        </div>{" "}
        <div className="flex flex-wrap w-full pt-12 -mx-4 justify-left">
          {posts ? (
            posts.data.map((post, idx) => (
              <div className="w-1/2 px-4 mb-4 max-w-prose" key={idx}>
                <div className="h-full group">
                  <div className="relative h-full px-8 pt-16 pb-8 transition duration-200 bg-white rounded-sm shadow-sm hover:shadow-md">
                    <h3 className="mb-4 text-xl font-bold leading-7 text-gray-900">
                      {post.attributes.Title}
                    </h3>
                    <ReactMarkdown
                      className="mb-12 font-medium text-gray-500 transition duration-200 group-hover:text-gray-600"
                      rehypePlugins={[rehypeRaw]}
                      children={post.attributes.Body}
                      linkTarget={"_blank"}
                    />
                    {post.attributes.Media.data && (
                      <img
                        className="mx-auto"
                        src={
                          process.env.REACT_APP_HOST +
                          post.attributes.Media.data.attributes.formats.small
                            .url
                        }
                        alt="Event and annoucement img"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              {Array(3)
                .fill("")
                .map((obj, idx) => (
                  <EventsCardLoading key={idx} />
                ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
