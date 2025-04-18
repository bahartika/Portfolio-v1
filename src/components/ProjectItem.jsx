import React from "react";
import NoPicture from "../assets/noPicture.jpeg";

const ProjectItem = ({ repo }) => {
  return (
    <div data-aos="zoom-in">
      <div className="flex flex-col justify-between border-2 border-secondary text-secondary w-full h-full p-4 font-quicksand rounded-lg hover:-translate-y-2 hover:-translate-x-2 transition-all shadow-md hover:shadow-lg">
        <div>
          <picture>
            <img src={repo.thumbnail} alt={repo.name} className="rounded-sm h-30 w-full object-cover object-top" onError={(e) => (e.target.src = NoPicture)} />
          </picture>
          <h3 className="font-bold my-2 text-lg">{typeof repo.name === "string" ? repo.name.replace(/-/g, " ") : "Nama Tidak Tersedia"}</h3>
          <p className="text-sm mb-4">{repo.description || "There is no description"}</p>
        </div>

        <div>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="bg-secondary w-fit rounded-lg text-primary px-4 py-2 text-sm font-bold hover:bg-primary hover:text-tersier transition">
              View Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
