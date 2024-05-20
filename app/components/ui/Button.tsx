import { cn } from "@/app/utils/cn";
import Link from "next/link";
import { DEFAULT_COLOR } from "./Settings";

interface ButtonInterface {
  className?: string;
  children: React.ReactNode;
  text_color?: string;
  bg_color?: string;
  method?: () => void;
}

interface LinkButtonInterface extends ButtonInterface {
  link: string;
}

export const Button = (props: ButtonInterface) => {
  const { className, children, text_color, bg_color, method } = props;
  return (
    <button
      className={cn(`px-6 py-3 ${bg_color || DEFAULT_COLOR.bg_color} ${text_color || DEFAULT_COLOR.text_color} rounded-md transition`, className)}
      onClick={method}
    >
      {children}
    </button>
  );
};

export const RoundedButton = (props: ButtonInterface) => {
  const { className, children, text_color, bg_color, method } = props;
  return (
    <button
      className={cn(
        `px-6 py-3 ${bg_color || DEFAULT_COLOR.bg_color} ${text_color || DEFAULT_COLOR.text_color} px-4 py-2 rounded-full shadow-lg  transition`,
        className
      )}
      onClick={method}
    >
      {children}
    </button>
  );
};

export const LinkButton = (props: LinkButtonInterface) => {
  const { className, children, text_color, bg_color, link } = props;
  return (
    <Link href={link}>
      <p className={cn(`px-6 py-3 ${bg_color || DEFAULT_COLOR.bg_color} ${text_color || DEFAULT_COLOR.text_color} rounded-md transition`, className)}>
        {children}
      </p>
    </Link>
  );
};

export const RoundedLinkButton = (props: LinkButtonInterface) => {
  const { className, children, text_color, bg_color, link } = props;
  return (
    <Link href={link}>
      <p
        className={cn(`${bg_color || DEFAULT_COLOR.bg_color} ${text_color || DEFAULT_COLOR.text_color} px-4 py-2 rounded-full shadow-lg transition`, className)}
      >
        {children}
      </p>
    </Link>
  );
};
