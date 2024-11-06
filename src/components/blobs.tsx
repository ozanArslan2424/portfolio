import { useMemo } from "react";

export function Blobs() {
  const MAX_S = 150;
  const MIN_S = 70;
  const MIN_P = 5;
  const MAX_P = 90;

  const blobs = useMemo(
    () =>
      Array.from({ length: 10 }).map(() => ({
        size: Math.floor(Math.random() * (MAX_S - MIN_S + 1)) + MIN_S,
        pos: Math.floor(Math.random() * (MAX_P - MIN_P + 1)) + MIN_P,
        hue: Math.floor(Math.random() * 360),
        animationDuration: Math.random() * 20 + 10,
        borderRadius: `${40 + Math.random() * 20}% ${50 + Math.random() * 20}% ${30 + Math.random() * 20}% ${40 + Math.random() * 20}%`,
      })),
    [],
  );

  return (
    <div className="fixed z-[-999] min-h-screen w-full overflow-hidden blur-3xl">
      {blobs.map((blob, i) => (
        <div
          key={i}
          style={{
            opacity: 0.7,
            position: "absolute",
            height: `${blob.size}px`,
            width: `${blob.size}px`,
            left: `${blob.pos}%`,
            top: `${blob.pos * i}%`,
            backgroundColor: `hsl(200, 90%, ${blob.hue}%)`,
            borderRadius: blob.borderRadius,
          }}
        />
      ))}
    </div>
  );
}
