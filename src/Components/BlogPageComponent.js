import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"; // Import Helmet

const BlogPageContent = () => {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=deepikajagdeesh")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, [refresh]); // Refresh when state changes

  const refreshBlogs = () => setRefresh(!refresh);

  useEffect(() => {
    fetch(
      `https://dev.to/api/articles?username=deepikajagdeesh&timestamp=${new Date().getTime()}`
    )
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, [refresh]);

  return (
    <div>
      <div className="bg-gray-100 py-10">
        <Helmet>
          <title>
            Explore a variety of Blogs designed to boost your career in the tech
            industry.{" "}
          </title>
          <meta
            name="description"
            content="Discover insights in AI, Machine Learning, and Data Science with our interactive carousel."
          />
          <meta
            name="keywords"
            content="AI, Machine Learning, Data Science, Predictive Analytics, Artificial Intelligence"
          />
        </Helmet>

        <div className="container mx-auto px-4">
          <h1 style={{ color: "#001a33" }}>This Is Our Blog Posts</h1>

          <div className="responsive-grid">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="bg-white p-4 shadow-md"
                data-aos="fade-up"
                data-aos-delay={100 * (index % 2)}
              >
                <div className="flex flex-row h-full">
                  <figure className="w-1/3">
                    <img
                      src={
                        post.cover_image || "https://via.placeholder.com/150"
                      }
                      alt={post.title}
                      className="w-full h-full object-cover rounded-lg"
                      style={{ width: "290px" }}
                    />
                  </figure>
                  <div className=" flex flex-col justify-between">
                    <h2 className="text-xl font-bold">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600"
                      >
                        {post.title}
                      </a>
                    </h2>
                    <div className="text-sm text-gray-500">
                      <span className="mr-2">
                        📅 {new Date(post.published_at).toDateString()}
                      </span>
                      <span>👤 {post.user?.name || "Unknown Author"}</span>
                    </div>
                    <p className="text-gray-700 mt-2">{post.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={refreshBlogs} className="btn btn-primary mb-2">
            Refresh Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPageContent;
