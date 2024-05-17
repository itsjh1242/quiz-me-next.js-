import { cn } from "@/app/utils/cn";
import Link from "next/link";

const BUTTON_DEFAULT_SETTING = {
  bg_color: "bg-blue-500",
  hover_bg_color: "bg-blue-600",
  text_color: "text-white",
};

interface ButtonInterface {
  className?: string;
  children: React.ReactNode;
  text_color?: string;
  bg_color?: string;
  hover_bg_color?: string;
  method?: () => void;
}

interface LinkButtonInterface extends ButtonInterface {
  link: string;
}

export const Button = (props: ButtonInterface) => {
  const { className, children, text_color, bg_color, hover_bg_color, method } = props;
  return (
    <button
      className={cn(
        `px-6 py-3 ${bg_color || BUTTON_DEFAULT_SETTING.bg_color} ${text_color || BUTTON_DEFAULT_SETTING.text_color} rounded-md hover:${
          hover_bg_color === undefined ? BUTTON_DEFAULT_SETTING.hover_bg_color : hover_bg_color
        } transition`,
        className
      )}
      onClick={method}
    >
      {children}
    </button>
  );
};

export const RoundedButton = (props: ButtonInterface) => {
  const { className, children, text_color, bg_color, hover_bg_color, method } = props;
  return (
    <button
      className={cn(
        `px-6 py-3 ${bg_color || BUTTON_DEFAULT_SETTING.bg_color} ${text_color || BUTTON_DEFAULT_SETTING.text_color} px-4 py-2 rounded-full shadow-lg hover:${
          hover_bg_color === undefined ? BUTTON_DEFAULT_SETTING.hover_bg_color : hover_bg_color
        } transition`,
        className
      )}
      onClick={method}
    >
      {children}
    </button>
  );
};

export const LinkButton = (props: LinkButtonInterface) => {
  const { className, children, text_color, bg_color, hover_bg_color, link } = props;
  return (
    <Link href={link}>
      <p
        className={cn(
          `px-6 py-3 ${bg_color || BUTTON_DEFAULT_SETTING.bg_color} ${text_color || BUTTON_DEFAULT_SETTING.text_color} rounded-md hover:${
            hover_bg_color === undefined ? BUTTON_DEFAULT_SETTING.hover_bg_color : hover_bg_color
          } transition`,
          className
        )}
      >
        {children}
      </p>
    </Link>
  );
};

export const RoundedLinkButton = (props: LinkButtonInterface) => {
  const { className, children, text_color, bg_color, hover_bg_color, link } = props;
  return (
    <Link href={link}>
      <p
        className={cn(
          `${bg_color || BUTTON_DEFAULT_SETTING.bg_color} ${text_color || BUTTON_DEFAULT_SETTING.text_color} px-4 py-2 rounded-full shadow-lg hover:${
            hover_bg_color === undefined ? BUTTON_DEFAULT_SETTING.hover_bg_color : hover_bg_color
          } transition`,
          className
        )}
      >
        {children}
      </p>
    </Link>
  );
};
