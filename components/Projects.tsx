type Project = {
  name: string;
  lang: string;
  description: string;
  url: string;
};

const projects: Project[] = [
  {
    name: "Projeto_1-Periodo",
    lang: "C",
    description:
      "Projeto desenvolvido durante o 1º período do curso, aplicando lógica de programação em C.",
    url: "https://github.com/silasviniDP/Projeto_1-Periodo",
  },
  {
    name: "BC Black Concessionária",
    lang: "colaboração",
    description:
      "Contribuição em projeto em grupo, com fork a partir do repositório de uma colega de turma.",
    url: "https://github.com/silasviniDP/BC-Black-Concessionaria",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="border-b border-line py-11">
      <h2 className="mb-4 text-xl font-semibold">Projetos</h2>

      {projects.map((project) => (
        <div
          key={project.name}
          className="mb-3.5 rounded-md border border-line bg-card p-5"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="font-semibold">{project.name}</h3>
            <span className="font-mono text-xs text-ink-soft">
              {project.lang}
            </span>
          </div>
          <p className="mt-2 max-w-[60ch] text-sm text-ink-soft">
            {project.description}
          </p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener"
            className="font-mono text-[12.5px] text-accent"
          >
            {project.url.replace("https://", "")} →
          </a>
        </div>
      ))}

      <div className="rounded-md border border-dashed border-line p-4 font-mono text-sm text-ink-soft">
        // novos projetos em breve.
      </div>
    </section>
  );
}
