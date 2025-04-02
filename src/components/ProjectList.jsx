import React, { useState, useEffect } from "react";
import ProjectItem from "./ProjectItem";
import NoPicture from "../assets/noPicture.jpeg";

const ProjectList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const selectedRepos = ["Graphic-design-style", "Geography-of-Indonesia", "Milky-way"];
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

  if (loading) {
    return (
      <section className="md:w-3/4 mx-auto bg-primary flex flex-col items-center justify-center pb-10 px-10">
        <h3 className="text-4xl font-lilita bg-linear-to-br/oklch from-secondary to-tersier bg-clip-text md:text-5xl font-extrabold text-transparent mb-16">Project List</h3>
        <p className="text-secondary">Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="md:w-3/4 mx-auto bg-primary flex flex-col items-center justify-center pb-10 px-10">
        <h3 className="text-4xl font-lilita bg-linear-to-br/oklch from-secondary to-tersier bg-clip-text md:text-5xl font-extrabold text-transparent mb-16">Project List</h3>
        <p className="text-secondary">Terjadi kesalahan: {error.message}</p>
      </section>
    );
  }

  if (!repos.length) {
    return (
      <section className="md:w-3/4 mx-auto bg-primary flex flex-col items-center justify-center pb-10 px-10">
        <h3 className="text-4xl font-lilita bg-linear-to-br/oklch from-secondary to-tersier bg-clip-text md:text-5xl font-extrabold text-transparent mb-16">Project List</h3>
        <p className="text-secondary">Tidak ada proyek yang cocok.</p>
      </section>
    );
  }

  return (
    <section className="md:w-3/4 mx-auto bg-primary flex flex-col items-center justify-center pb-10 px-10">
      <h3 className="text-4xl font-lilita bg-linear-to-br/oklch from-secondary to-tersier bg-clip-text md:text-5xl font-extrabold text-transparent mb-16">Project List</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo) => (
          <ProjectItem key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;

// import React from "react";
// import ProjectItem from "./ProjectItem";

// const ProjectList = () => {
//   return (
//     <section className="lg:w-3/4 mx-auto bg-primary flex flex-col items-center justify-center pb-10 px-10">
//       <h3 className="text-4xl font-lilita bg-linear-to-br/oklch from-secondary to-tersier bg-clip-text md:text-5xl font-extrabold text-transparent mb-16">Project List</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         <ProjectItem />
//       </div>
//     </section>
//   );
// };

// export default ProjectList;
