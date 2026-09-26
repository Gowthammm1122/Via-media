import Image from "next/image";
import Link from "next/link";

export interface Project {
  id: string;
  title: string;
  slug: string;
  categories: string[];
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block w-full">
      {/* Project Image Container with subtle hover zoom */}
      <div className="relative w-full aspect-[850/567] overflow-hidden bg-zinc-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      {/* Project Details */}
      <div className="mt-4 space-y-1">
        <h3 className="text-xl sm:text-2xl font-medium text-black group-hover:text-zinc-700 transition-colors">
          {project.title}
        </h3>
        <p className="text-base sm:text-lg text-neutral-500 font-normal flex items-center flex-wrap gap-2">
          {project.categories.map((category, index) => (
            <span key={category} className="inline-flex items-center gap-2">
              <span>{category}</span>
              {index < project.categories.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-neutral-400" />
              )}
            </span>
          ))}
        </p>
      </div>
    </Link>
  );
}
