import { CrossIcon } from "./cross";
import { DarkThemeIcon, LightThemeIcon } from "./theme";
import { LangEnIcon, LangTrIcon } from "./lang";
import { LinkIcon } from "./link";
import { GithubIcon, LinkedinIcon, MailIcon } from "./social";
import { LoaderIcon } from "./loader";
import type { IconVariant } from "../../lib/types";

export function Icon({ variant }: { variant: IconVariant }) {
  switch (variant) {
    case "github":
      return <GithubIcon />;
    case "linkedin":
      return <LinkedinIcon />;
    case "mail":
      return <MailIcon />;
    case "cross":
      return <CrossIcon />;
    case "link":
      return <LinkIcon />;
    case "lang-en":
      return <LangEnIcon />;
    case "lang-tr":
      return <LangTrIcon />;
    case "theme-light":
      return <LightThemeIcon />;
    case "theme-dark":
      return <DarkThemeIcon />;
    case "loader":
      return <LoaderIcon />;
    default:
      return null;
  }
}
