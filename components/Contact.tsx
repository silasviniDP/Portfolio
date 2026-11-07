const items = [
  { label: "EMAIL", value: "svestudos40@gmail.com", href: "mailto:svestudos40@gmail.com" },
  { label: "TELEFONE", value: "(81) 98210-4083", href: "tel:+5581982104083" },
  { label: "LINKEDIN", value: "/in/silasvinidp", href: "https://linkedin.com/in/silasvinidp" },
  { label: "GITHUB", value: "/silasviniDP", href: "https://github.com/silasviniDP" },
  { label: "LOCAL", value: "Recife, PE — Brasil", href: null },
];

export default function Contact() {
  return (
    <section id="contato" className="py-11">
      <h2 className="mb-4 text-xl font-semibold">Contato</h2>
      <ul className="max-w-[420px] border-b border-line">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex justify-between border-t border-line py-3"
          >
            <span className="font-mono text-[12.5px] text-ink-soft">
              {item.label}
            </span>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener">
                {item.value}
              </a>
            ) : (
              <span>{item.value}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
