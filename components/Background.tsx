// Fixed ambient background: slow-moving blue light + film grain. Pure CSS, no JS.
export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      <div className="absolute inset-0 bg-noise" />
    </div>
  );
}
