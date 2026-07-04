import { useEffect, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import { cn } from "@/utils/cn";
import styles from "./ProjectTile.module.scss";

const ProjectTile = ({ project, classes, isDesktop }) => {
  const { name, image, blurImage, description, gradient, url, tech } = project;
  const projectCard = useRef(null);
  let additionalClasses = "";
  if (classes) {
    additionalClasses = classes;
  }

  const options = {
    max: 10,
    speed: 400,
    glare: true,
    "max-glare": 0.15,
    gyroscope: false,
  };

  useEffect(() => {
    const node = projectCard.current;
    if (!node) {
      return undefined;
    }

    VanillaTilt.init(node, options);

    return () => {
      node.vanillaTilt?.destroy();
    };
  }, []);

  return (
    <a
      href={url}
      className={`link block overflow-hidden rounded-3xl isolate ${additionalClasses}`}
      ref={projectCard}
      target="_blank"
      rel="noreferrer"
      style={{
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        flex: "1 0 auto",
      }}
    >
      <div
        className={`${styles.projectTile} relative flex h-[25rem] w-[38rem] max-w-full flex-col justify-between overflow-hidden rounded-3xl p-6`}
        style={{
          background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
        }}
      >
        <img
          src="/project-bg.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-30"
        />
        <div className={`${styles.projectImageWrap} absolute inset-0`}>
          <Image
            src={image}
            alt={name}
            width={272}
            height={400}
            placeholder="blur"
            blurDataURL={blurImage}
            className={styles.projectImage}
          />
        </div>
        <div
          className="pointer-events-none absolute left-0 top-0 z-[1] h-20 w-full"
          style={{
            background: `linear-gradient(180deg, ${gradient[0]} 0%, rgba(0,0,0,0) 100%)`,
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 z-[1] h-32 w-full"
          style={{
            background: `linear-gradient(0deg, ${gradient[0]} 10%, rgba(0,0,0,0) 100%)`,
          }}
        />
        <h1
          className="z-10 transform-gpu pl-2 text-3xl font-medium text-white sm:text-4xl"
          style={{ transform: "translateZ(3rem)" }}
        >
          {name}
        </h1>
        <div
          className={`${styles.techIcons} absolute left-24 top-0 hidden h-full w-1/2 items-center sm:flex`}
        >
          <div className="flex flex-col pb-8">
            {project.tech.map((el, i) => (
              <img
                className={cn("mb-4", { "ml-16": i % 2 === 0 })}
                src={`/projects/tech/${el}.svg`}
                alt={el}
                height={45}
                width={45}
                key={el}
              />
            ))}
          </div>
        </div>
        <h2
          className="z-10 transform-gpu text-lg font-medium tracking-wide text-white/95"
          style={{ transform: "translateZ(0.8rem)" }}
        >
          {description}
        </h2>
      </div>
    </a>
  );
};

export default ProjectTile;
