export function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center" data-aos="blur-up">
      <p className="mb-3 inline-block rounded-full border-2 border-black bg-[#ff7ab6] px-4 py-2 text-sm font-extrabold uppercase shadow-retroSm">{eyebrow}</p>
      <h2 className="font-title text-4xl font-black md:text-6xl">{title}</h2>
      <p className="mt-4 text-base leading-8 md:text-lg">{description}</p>
    </div>
  );
}
