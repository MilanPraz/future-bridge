import React from "react";
import { cn } from "@/lib/utils";
import { Lato, Poppins, Exo } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["900", "700", "400", "300", "100"],
});

export const exo = Exo({ subsets: ["latin"] });

interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  className?: string;
}

interface ParagraphProps extends React.HTMLProps<HTMLParagraphElement> {
  className?: string;
}

export const H1: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h1
      {...props}
      className={cn(
        lato.className,
        "text-4xl font-bold md:text-5xl lg:text-6xl",
        className
      )}
    />
  );
};

export const H2: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h2
      {...props}
      className={cn(
        lato.className,
        "text-2xl font-semibold md:text-3xl",
        className
      )}
    />
  );
};

export const H3: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h3
      {...props}
      className={cn(
        lato.className,
        "text-xl font-semibold lg:text-2xl",
        className
      )}
    />
  );
};

export const H4: React.FC<HeadingProps> = ({ className, ...props }) => {
  return (
    <h4
      {...props}
      className={cn(
        lato.className,
        "text-lg font-semibold lg:text-xl",
        className
      )}
    />
  );
};

export const P: React.FC<ParagraphProps> = ({ className, ...props }) => {
  return <p {...props} className={cn(" text-sm md:text-base", className)}></p>;
};
