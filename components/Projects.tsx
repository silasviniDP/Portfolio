type Project = {
  name: string;
  lang: string;
  description: string;
  url: string;
  imagem: string;
};

const projects: Project[] = [
  {
    name: "Cotação de Moedas",
    lang: "TypeScript",
    description:
      "Dashboard com a variação de moedas estrangeiras no último mês, podendo comparar até 4 moedas simultaneamente e contendo uma tabela de conversão, usando dados reais da BrasilAPI.",
    url: "https://cotacao-moedas-kvjz.vercel.app",
    imagem: "/cotacao-moedas.png"
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

          <img
            src={project.imagem}
            alt={`Preview do projeto ${project.name}`}
            className="mb-4 h-auto w-full rounded border border-line"
          />


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
