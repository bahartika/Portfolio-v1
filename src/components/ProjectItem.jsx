import React from "react";
import NoPicture from "../assets/noPicture.jpeg";

const ProjectItem = ({ repo }) => {
  return (
    <div className="border-2 border-secondary text-secondary w-full p-4 font-quicksand rounded-md hover:-translate-y-2 hover:-translate-x-2 transition-all">
      <picture>
        <img src={repo.thumbnail} alt={repo.name} className="rounded-sm h-30 w-full object-cover object-top" onError={(e) => (e.target.src = NoPicture)} />
      </picture>
      <h3 className="font-bold my-2 text-lg">{repo.name}</h3>
      <p className="text-sm">{repo.description || "Tidak ada deskripsi"}</p>
      {/* <p className="text-sm">Bahasa: {repo.language || "Tidak diketahui"}</p> */}
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block text-sm">
        Lihat di GitHub
      </a>
    </div>
  );
};

export default ProjectItem;

// import React, { useState, useEffect } from "react";
// import Project1 from "../assets/project1.png";

// const ProjectItem = () => {
//   const [repos, setRepos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const selectedRepos = ["Graphic-design-style", "Geography-of-Indonesia", "Milky-way"];
//   const username = "bahartika";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://api.github.com/users/${username}/repos`);
//         if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
//         const data = await response.json();
//         const filteredRepos = data.filter((repo) => selectedRepos.includes(repo.name));

//         // Ambil README untuk setiap repo
//         const reposWithThumbnails = await Promise.all(
//           filteredRepos.map(async (repo) => {
//             const readmeResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/readme`);
//             if (readmeResponse.ok) {
//               const readmeData = await readmeResponse.json();
//               const readmeContent = atob(readmeData.content); // Decode base64
//               const imageMatch = readmeContent.match(/!\[.*?\]\((.*?)\)/); // Ekstrak URL gambar pertama
//               const imageUrl = imageMatch ? imageMatch[1] : null;
//               return { ...repo, thumbnail: imageUrl ? `https://raw.githubusercontent.com/${username}/${repo.name}/main/${imageUrl}` : Project1 };
//             }
//             return { ...repo, thumbnail: Project1 };
//           })
//         );

//         setRepos(reposWithThumbnails);
//         setLoading(false);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading)
//     return (
//       <div className="border-2 border-secondary text-secondary w-full p-4 font-quicksand rounded-md">
//         <p>Memuat proyek...</p>
//       </div>
//     );
//   if (error)
//     return (
//       <div className="border-2 border-secondary text-secondary w-full p-4 font-quicksand rounded-md">
//         <p>Terjadi kesalahan: {error.message}</p>
//       </div>
//     );
//   if (!repos.length)
//     return (
//       <div className="border-2 border-secondary text-secondary w-full p-4 font-quicksand rounded-md">
//         <p>Tidak ada proyek yang cocok.</p>
//       </div>
//     );

//   return (
//     <div className="flex flex-wrap gap-6 justify-center">
//       {repos.map((repo) => (
//         <div key={repo.id} className="border-2 border-secondary text-secondary w-[280px] p-4 font-quicksand rounded-md hover:-translate-y-2 hover:-translate-x-2 transition-all">
//           <picture>
//             <img src={repo.thumbnail} alt={repo.name} className="rounded-sm" style={{ maxWidth: "100%", height: "auto" }} onError={(e) => (e.target.src = Project1)} />
//           </picture>
//           <h3 className="font-bold my-2 text-lg">{repo.name}</h3>
//           <p className="text-sm">{repo.description || "Tidak ada deskripsi"}</p>
//           <p className="text-sm">Bahasa: {repo.language || "Tidak diketahui"}</p>
//           <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block text-sm">
//             Lihat di GitHub
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProjectItem;

// import React from "react";
// import Project1 from "../assets/project1.png";

// const ProjectItem = () => {
//   return (
//     <div className="border-2 border-secondary text-secondary w-70 p-4 font-quicksand rounded-md hover:-translate-y-2 hover:-translate-x-2 transition-all">
//       <picture>
//         <img src={Project1} alt="" className="rounded-sm" />
//       </picture>
//       <h3 className="font-bold my-2 text-lg">Indonesia Geography</h3>
//       <p className="text-sm">The Geography of Indonesia website is an educational platform providing comprehensive information about Indonesia's geography.</p>
//     </div>
//   );
// };

// const ProjectItem = ({ image, title, description }) => {
//   return (
//     <div>
//       <picture>
//         <img src={image} alt="" />
//       </picture>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// };

// export default ProjectItem;
