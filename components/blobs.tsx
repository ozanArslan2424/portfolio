export const Blobs = () => {
  const maxSize = 150;
  const minSize = 70;
  const minPos = 5;
  const maxPos = 90;

  return (
    <div className="fixed z-[-999] min-h-screen w-full overflow-hidden blur-3xl">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          style={{
            height:
              Math.floor(Math.random() * (maxSize - minSize + 1)) +
              minSize +
              "px",
            width:
              Math.floor(Math.random() * (maxSize - minSize + 1)) +
              minSize +
              "px",
            left:
              Math.floor(Math.random() * (maxPos - minPos + 1)) + minPos + "%",
            top:
              Math.floor(Math.random() * (maxPos - minPos + 1)) + minPos + "%",
            backgroundColor: `hsl(188.7, 94.5%, ${Math.floor(Math.random() * 360)})`,
          }}
          className="absolute rounded-[40%_50%_30%_40%] bg-slate-600 opacity-70"
        ></div>
      ))}
    </div>
  );
};
