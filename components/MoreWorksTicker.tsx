export default function MoreWorksTicker() {
  const phrase = "MORE WORKS ";
  const track = phrase.repeat(12);

  return (
    <div className="w-full overflow-hidden border-y border-border bg-background py-8 md:py-10">
      <div className="more-works-track flex w-max items-center">
        <span className="px-4 text-[clamp(2rem,8vw,4.5rem)] font-bold uppercase leading-none tracking-tight text-foreground md:px-6">
          {track}
        </span>
        <span
          className="px-4 text-[clamp(2rem,8vw,4.5rem)] font-bold uppercase leading-none tracking-tight text-foreground md:px-6"
          aria-hidden="true"
        >
          {track}
        </span>
      </div>
    </div>
  );
}
