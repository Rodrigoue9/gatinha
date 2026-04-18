import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12 text-[#f8efe6]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, rgba(191, 212, 255, 0.08), transparent 28%), radial-gradient(circle at 20% 20%, rgba(240, 201, 141, 0.12), transparent 24%), linear-gradient(160deg, #050816 0%, #091127 48%, #04050b 100%)",
        }}
      />
      <div className="relative z-10 max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.45em] text-[#f0c98d]">página não encontrada</p>
        <h1 className="mt-6 [font-family:var(--font-display)] text-5xl leading-tight sm:text-6xl">
          Mas o caminho de volta para o amor continua aqui.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#d8cfc5]">
          Se essa rota se perdeu no escuro, a surpresa principal ainda está esperando por você na
          página inicial.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-full border border-[#f0c98d]/35 bg-[#f0c98d] px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#241a13] transition hover:scale-[1.02] hover:bg-[#f4d5a7]"
        >
          voltar para a surpresa
        </Link>
      </div>
    </main>
  );
}
