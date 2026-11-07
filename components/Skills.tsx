type Skill = { name: string; tag: string; kind: "use" | "seen" };

const active: Skill[] = [
  { name: "Java", tag: "praticando", kind: "use" },
  { name: "SQL", tag: "praticando", kind: "use" },
];

const seen: Skill[] = [
  { name: "C", tag: "base", kind: "seen" },
  { name: "HTML", tag: "base", kind: "seen" },
  { name: "CSS", tag: "base", kind: "seen" },
];

function SkillColumn({ title, items }: { title: string; items: Skill[] }) {
  return (
    <div>
      <h3 className="mb-3 font-mono text-[12.5px] text-ink-soft">{title}</h3>
      <ul className="border-b border-line">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between gap-2.5 border-t border-line py-2.5"
          >
            <span>{item.name}</span>
            <span
              className={`rounded font-mono text-[11px] px-1.5 py-0.5 ${
                item.kind === "use"
                  ? "bg-accent-soft text-accent"
                  : "bg-amber-soft text-amber"
              }`}
            >
              {item.tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-11">
      <h2 className="mb-4 text-xl font-semibold">Conhecimentos</h2>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <SkillColumn title="EM USO ATIVO" items={active} />
        <SkillColumn title="VISTO NA FACULDADE" items={seen} />
      </div>
    </section>
  );
}
