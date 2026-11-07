const chips = [
  { label: "svestudos40@gmail.com", href: "mailto:svestudos40@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/silasvinidp" },
  { label: "GitHub", href: "https://github.com/silasviniDP" },
];

export default function Hero() {
  return (
    <>
      <div className="flex items-center justify-between pt-5 text-[13px] text-ink-soft font-mono">
        <span>Recife, PE</span>
      </div>

      <header className="border-b border-line pb-12 pt-14">
        <p className="font-mono text-[13px] text-ink-soft">
          silas@portfolio ~ %
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Silas Vinícius
        </h1>
        <p className="mt-2 font-medium text-accent">
          Estudante de Análise e Desenvolvimento de Sistemas
        </p>
        <p className="mt-4 max-w-[56ch] text-ink-soft">
          19 anos, 2º período na Faculdade Imaculada Conceição do Recife.
          Construindo base em lógica e programação, hoje com Java e SQL,
          depois de passar por C, HTML e CSS em sala de aula.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <a
              key={chip.label}
              href={chip.href}
              target={chip.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener"
              className="rounded border border-line px-2.5 py-1.5 font-mono text-[12.5px] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {chip.label}
            </a>
          ))}
        </div>
      </header>
    </>
  );
}
