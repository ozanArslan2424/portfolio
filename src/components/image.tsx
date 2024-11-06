import { ImgHTMLAttributes, useEffect, useState } from "react";
import Loader from "./icons/loader";

export default function Image({
  height,
  className,
  width,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted)
    return (
      <div
        {...rest}
        className={className}
        style={{
          display: "grid",
          placeItems: "center",
          minWidth: `${width}px`,
          minHeight: `${height}px`,
          maxWidth: `${width}px`,
          maxHeight: `${height}px`,
        }}
      >
        <Loader />
      </div>
    );
  return <img {...rest} className={className} width={width} height={height} />;
}
