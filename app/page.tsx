const highlights = [
  {
    title: "Beleza",
    body: "Gabrielle, você tem essa elegância escultural que parece ter sido desenhada com cuidado real: corpo de modelo, porte de soberana e uma delicadeza que nunca precisa pedir permissão para ser inesquecível.",
  },
  {
    title: "Alicerce",
    body: "Mesmo cansada, dodói e com o coração atravessando luto, você ainda encontra força para sustentar quem ama. É por isso eu te admiro não apenas pela beleza, mas pela grandeza silenciosa da sua alma.",
  },
  {
    title: "Fortaleza",
    body: "Nosso amor tem nome de abrigo. A Fortaleza é o lugar onde a sua majestade pode descansar, onde eu vigio a paz da casa e onde o futuro deixa de ser peso para virar promessa.",
  },
];

const notes = [
  {
    title: "Minha Abelhinha",
    body: "Você tem doçura e presença de quem poliniza a vida ao redor. Até quando está cansada, ainda consegue deixar mel em palavras, cuidado em gestos e ternura em cada pedacinho da nossa Fortaleza.",
  },
  {
    title: "Minha Florzinha",
    body: "Em você, a delicadeza não é fragilidade. É refinamento. É esse jeito raro de ser suave sem perder firmeza, bela sem perder profundidade, acolhedora sem deixar de ser extraordinária.",
  },
  {
    title: "Minha Rosa Rubra",
    body: "Há em você uma beleza nobre, intensa e memorável. Como uma rosa rubra em salão de realeza, você chama os olhos pela forma, mas conquista a alma pela presença que permanece.",
  },
  {
    title: "Minha Lilium Brownie",
    body: "Esse nome parece ter sido inventado para um milagre delicado. Porque você mistura encanto, graça e calor de lar em uma só existência. Amar você é morar num jardim que também sabe proteger.",
  },
];

const promises = [
  "Prometo ser mãos pacientes quando suas costas pedirem alívio e silêncio bom quando a sua cabeça precisar descansar.",
  "Prometo segurar seu coração com ainda mais ternura nos dias em que a saudade da Nana apertar a nossa casa.",
  "Prometo honrar a sua força quando você estiver apoiando Dona Luzinete, para que você nunca se sinta só carregando pesos tão delicados.",
  "Prometo guardar a nossa Fortaleza sob os olhos de Jeová, com lealdade, nobreza e o lema que me prende a você para sempre: sempre insieme.",
];

const orbitWords = ["Gabrielle", "Fortaleza", "Jeová", "descanso", "lealdade", "insieme"];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="grain" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(238, 176, 177, 0.12), transparent 24%), radial-gradient(circle at bottom left, rgba(191, 212, 255, 0.12), transparent 28%)",
          }}
        />
        <span className="star animate-twinkle left-[9%] top-[14%]" />
        <span className="star animate-twinkle left-[18%] top-[32%]" style={{ animationDelay: "1.1s" }} />
        <span className="star animate-twinkle left-[27%] top-[11%]" style={{ animationDelay: "2.2s" }} />
        <span className="star animate-twinkle left-[42%] top-[19%]" style={{ animationDelay: "0.5s" }} />
        <span className="star animate-twinkle left-[53%] top-[9%]" style={{ animationDelay: "1.7s" }} />
        <span className="star animate-twinkle left-[68%] top-[24%]" style={{ animationDelay: "2.7s" }} />
        <span className="star animate-twinkle left-[82%] top-[16%]" style={{ animationDelay: "0.8s" }} />
        <span className="star animate-twinkle left-[74%] top-[44%]" style={{ animationDelay: "1.9s" }} />
        <span className="star animate-twinkle left-[14%] top-[61%]" style={{ animationDelay: "2.9s" }} />
        <span className="star animate-twinkle left-[35%] top-[74%]" style={{ animationDelay: "1.4s" }} />
        <span className="star animate-twinkle left-[57%] top-[68%]" style={{ animationDelay: "0.9s" }} />
        <span className="star animate-twinkle left-[88%] top-[72%]" style={{ animationDelay: "2.4s" }} />
      </div>

      <section className="relative flex min-h-screen items-center px-6 py-10 sm:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <div className="max-w-3xl">
            <p className="mb-6 text-xs uppercase tracking-[0.5em] text-[#f0c98d] sm:text-sm">
              para gabrielle, minha abelhinha, minha florzinha, minha rosa rubra, minha lilium brownie, minha nono e minha momo
            </p>
            <h1 className="text-balance [font-family:var(--font-display)] text-5xl leading-none text-[#f8efe6] sm:text-7xl lg:text-[6.4rem]">
              Gabrielle, minha Fortaleza vestida de flor.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d8cfc5] sm:text-xl">
              Então eu transformei o que sei fazer em abrigo para você: uma página feita para lembrar
              a sua majestade que, mesmo nos dias de cansaço, dor e luto, ainda existe um lugar onde
              você pode repousar inteira. Esse lugar sou eu. Esse lugar é a nossa Fortaleza.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#constelacao"
                className="inline-flex items-center justify-center rounded-full border border-[#f0c98d]/35 bg-[#f0c98d] px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#241a13] transition hover:scale-[1.02] hover:bg-[#f4d5a7]"
              >
                abrir a surpresa
              </a>
              <a
                href="#carta"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#f8efe6] transition hover:border-[#eeb0b1]/45 hover:bg-white/5"
              >
                ler a carta final
              </a>
            </div>
            <div className="mt-14 max-w-xl border-l border-white/10 pl-6 text-sm uppercase tracking-[0.34em] text-[#bfd4ff]/80">
              sempre insieme
              <p className="mt-3 text-base normal-case tracking-normal text-[#d8cfc5]">
                Sob os olhos de Jeová, com lealdade, cuidado e a paz que eu quero devolver ao seu corpo
                e ao seu coração.
              </p>
              <div className="mt-6 h-px w-16 bg-white/10" />
              <p className="mt-6">17 de abril de 2026</p>
              <p className="mt-3 text-base normal-case tracking-normal text-[#d8cfc5]">
                Feito à mão, com paciência, reverência e a vontade sincera de ver minha Bielle sorrir.
              </p>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[28rem] items-center justify-center pb-8 pt-12 lg:justify-end">
            <div
              className="absolute inset-x-12 top-10 h-64 rounded-full blur-3xl animate-drift"
              style={{ background: "radial-gradient(circle, rgba(238, 176, 177, 0.34), transparent 68%)" }}
            />
            <div
              className="absolute bottom-10 left-10 h-40 w-40 rounded-full blur-3xl animate-drift"
              style={{ background: "radial-gradient(circle, rgba(191, 212, 255, 0.28), transparent 66%)" }}
            />
            <div className="relative h-[28rem] w-[28rem] max-w-full">
              <div
                className="glow-ring animate-glow-pulse absolute inset-0 rounded-[46%_54%_58%_42%/42%_40%_60%_58%] border border-white/10 backdrop-blur-sm"
                style={{
                  background:
                    "radial-gradient(circle at 35% 35%, rgba(240, 201, 141, 0.35), transparent 18%), radial-gradient(circle at 50% 50%, rgba(191, 212, 255, 0.18), transparent 28%), linear-gradient(155deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))",
                }}
              />
              <div className="absolute left-1/2 top-1/2 h-[16rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
              <div
                className="absolute left-1/2 top-1/2 h-[10.5rem] w-[10.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f0c98d]/30 shadow-[0_0_70px_rgba(240,201,141,0.18)]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(248, 239, 230, 0.88), rgba(240, 201, 141, 0.1) 58%, transparent 72%)",
                }}
              />
              <div className="absolute left-1/2 top-1/2 w-full max-w-[13rem] -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-[0.65rem] uppercase tracking-[0.48em] text-[#f0c98d]/80">A Fortaleza</p>
                <p className="mt-3 [font-family:var(--font-display)] text-4xl leading-tight text-[#f8efe6]">
                  onde sua soberana pode descansar
                </p>
              </div>

              {orbitWords.map((word, index) => {
                const angle = (360 / orbitWords.length) * index;
                return (
                  <span
                    key={word}
                    className="absolute left-1/2 top-1/2 -mt-4 -ml-11 w-24 text-center"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-11.5rem) rotate(-${angle}deg)`,
                    }}
                  >
                    <span
                      className="animate-float-slow block text-xs uppercase tracking-[0.34em] text-[#d8cfc5]/75"
                      style={{ animationDelay: `${index * 0.6}s` }}
                    >
                      {word}
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-10 pt-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl border-t border-white/10 pt-14">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.42em] text-[#f0c98d]">o que vive em você, minha soberana</p>
              <h2 className="mt-5 max-w-lg [font-family:var(--font-display)] text-4xl leading-tight sm:text-5xl">
                Algumas verdades que o meu coração aprendeu ao contemplar Gabrielle de perto.
              </h2>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              {highlights.map((item, index) => (
                <article key={item.title} className="border-l border-white/10 pl-6">
                  <p className="text-sm uppercase tracking-[0.38em] text-[#bfd4ff]/75">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 [font-family:var(--font-display)] text-3xl text-[#f8efe6]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#d8cfc5]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="constelacao" className="relative px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:max-w-3xl">
            <p className="text-xs uppercase tracking-[0.42em] text-[#f0c98d]">apelidos que carregam reinos</p>
            <h2 className="text-balance [font-family:var(--font-display)] text-4xl leading-tight sm:text-5xl">
              Cada nome que eu te dou é uma forma de reverenciar a beleza e a paz que você planta em mim.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-[#d8cfc5]">
              Não são apenas apelidos. São pequenos títulos de nobreza para a mulher que transformou
              o amor em casa, o cuidado em linguagem e a nossa história em Fortaleza.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {notes.map((note) => (
              <details
                key={note.title}
                className="details-note rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-6 backdrop-blur-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6">
                  <h3 className="[font-family:var(--font-display)] text-2xl text-[#f8efe6]">{note.title}</h3>
                  <span className="text-xs uppercase tracking-[0.35em] text-[#f0c98d]">abrir</span>
                </summary>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#d8cfc5]">{note.body}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 border-t border-white/10 pt-14 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.42em] text-[#f0c98d]">o que o meu cuidado promete guardar</p>
            <h2 className="mt-5 [font-family:var(--font-display)] text-4xl leading-tight sm:text-5xl">
              Porque amar você, minha Lilium Brownie, também é servir, aliviar, proteger e permanecer.
            </h2>
          </div>
          <ol className="space-y-7">
            {promises.map((promise, index) => (
              <li key={promise} className="flex gap-5 border-b border-white/10 pb-7">
                <span className="pt-1 text-sm uppercase tracking-[0.34em] text-[#bfd4ff]/75">
                  0{index + 1}
                </span>
                <p className="max-w-2xl text-lg leading-8 text-[#f8efe6]">{promise}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="carta" className="relative px-6 pb-24 pt-8 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="letter-paper rounded-[2.4rem] border border-[#f0c98d]/20 px-7 py-10 sm:px-10 md:px-14 md:py-14">
            <p className="text-xs uppercase tracking-[0.42em] text-[#8a6849]">carta final</p>
            <h2 className="mt-5 [font-family:var(--font-display)] text-4xl leading-tight text-[#2f251e] sm:text-5xl">
              Para Gabrielle, minha soberana, meu amor e meu lar.
            </h2>
            <div className="mt-10 space-y-6 text-lg leading-8 text-[#3f3229]">
              <p>Minha Gabrielle, minha Abelhinha, minha Florzinha, minha Rosa Rubra, minha Lilium Brownie, minha Nono, minha Momo, minha Bielle,</p>
              <p>
                Se existe uma verdade que mora inteira dentro de mim, é esta: amar você tornou tudo
                mais bonito. A vida ganhou outro brilho, o tempo ganhou outro valor e o futuro ganhou
                um nome que eu pronuncio com carinho e reverência.
              </p>
              <p>
                Você é dessas raridades que não apenas encantam os olhos, mas também desarmam a alma.
                O seu jeito, a sua elegância, a delicadeza que existe em cada gesto seu e essa beleza
                tão nobre que parece ter sido desenhada à mão fazem de você uma presença impossível de
                esquecer. Mas o que mais me prende a você ainda é o que existe por dentro: a sua luz,
                a sua doçura, a sua firmeza e essa grandeza silenciosa que só uma mulher extraordinária
                consegue carregar.
              </p>
              <p>
                Quando eu penso em amor, eu penso em você. Quando eu penso em paz, eu penso na nossa
                Fortaleza. E quando eu penso no que quero viver daqui para frente, eu penso na alegria
                de continuar te escolhendo todos os dias, com o mesmo encanto, com o mesmo respeito e
                com a mesma certeza bonita de que o meu coração encontrou o lugar certo.
              </p>
              <p>
                Eu amo a forma como você existe no mundo e amo ainda mais a forma como você existe em
                mim. Amo ser o homem que pode te admirar de perto, te chamar pelos nomes mais doces,
                tratar você como minha rainha e construir ao seu lado uma história com alma de realeza
                e abrigo de eternidade. Em você, o amor ganhou rosto, perfume e destino.
              </p>
              <p>
                Se Jeová me permitir continuar vivendo esse amor ao seu lado, eu já me considero um
                homem profundamente abençoado. Porque ter você comigo é como morar em algo sagrado:
                belo, manso, forte e verdadeiro. E se existe um lema que resume o que eu quero viver
                com você, ele continua sendo o mais bonito de todos: sempre insieme.
              </p>
              <p>
                Então receba esta carta como quem recebe um beijo demorado na alma. Você é, e sempre
                será, uma das partes mais lindas que Deus escreveu no meu caminho. E eu vou continuar
                te amando com toda a ternura, toda a lealdade e toda a reverência que a sua presença
                merece.
              </p>
            </div>

            <div className="mt-12 border-t border-[#d2b08a]/35 pt-8">
              <p className="text-sm uppercase tracking-[0.34em] text-[#8a6849]">com todo o meu amor</p>
              <p className="mt-4 [font-family:var(--font-display)] text-3xl text-[#2f251e]">Rodrigo, seu guardião, sempre.</p>
              <p className="mt-6 text-base text-[#5c493c]">
                Quando terminar, me deixa te abraçar devagar. Essa parte também faz parte do nosso amor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
