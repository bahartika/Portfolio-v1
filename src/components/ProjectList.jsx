import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import NoPicture from "../assets/noPicture.jpeg";

const ProjectList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const selectedRepos = ["Masjid-Alkandari", "Graphic-design-style", "Geography-of-Indonesia", "Milky-way", "pnc-room-workers", "Self-photo-website", "Notes-App", "Bookshelf-App", "spa-notes-app"];
  const username = "bahartika";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        const filteredRepos = data.filter((repo) => selectedRepos.includes(repo.name));

        // Ambil README untuk setiap repo
        const reposWithThumbnails = await Promise.all(
          filteredRepos.map(async (repo) => {
            const readmeResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/readme`);
            if (readmeResponse.ok) {
              const readmeData = await readmeResponse.json();
              const readmeContent = atob(readmeData.content);
              const imageMatch = readmeContent.match(/!\[.*?\]\((.*?)\)/);
              const imageUrl = imageMatch ? imageMatch[1] : null;
              return {
                ...repo,
                thumbnail: imageUrl ? `https://raw.githubusercontent.com/${username}/${repo.name}/main/${imageUrl}` : NoPicture,
              };
            }
            return { ...repo, thumbnail: NoPicture };
          })
        );

        setRepos(reposWithThumbnails);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let content;

  if (loading) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {Array(selectedRepos.length)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="border-2 border-secondary bg-primary text-secondary w-full p-4 font-quicksand rounded-md animate-pulse">
              <div className="h-30 w-full bg-gray-300 rounded-sm mb-4"></div>
              <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-blue-300 rounded w-1/4 mt-2"></div>
            </div>
          ))}
      </div>
    );
  } else if (error) {
    content = <p className="text-secondary font-quicksand">Error: {error.message}</p>;
  } else if (!repos.length) {
    content = <p className="text-secondary font-quicksand">No matching projects.</p>;
  } else {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <ProjectItem key={repo.id} repo={repo} />
        ))}
      </div>
    );
  }

  return (
    <section className="w-full md:w-3/4 mx-auto bg-primary flex flex-col items-center justify-center pt-20 pb-10 px-10" id="project">
      <div data-aos="fade-up" className="w-full">
        <h3 className="text-4xl font-lilita bg-linear-to-br/oklch from-secondary to-tersier bg-clip-text md:text-5xl font-extrabold text-transparent mb-10 py-1.5 text-center md:text-left">My Projects</h3>
      </div>
      {content}
    </section>
  );
};

export default ProjectList;
