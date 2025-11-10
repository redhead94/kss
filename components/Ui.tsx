import * as React from "react";
import Link, { LinkProps } from "next/link"
import { twMerge } from "tailwind-merge";

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ")
}

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  )
}


export function Button({ className, variant = "primary", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & {variant?: "primary"|"secondary"|"ghost"}) {
  const base = "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition";
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 focus:ring-2 focus:ring-brand-400",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-2 focus:ring-slate-300",
    ghost: "text-slate-700 hover:bg-slate-100"
  };
  return <button className={twMerge(base, variants[variant], className)} {...props} />;
}

export function Badge({ children, className }: {children: React.ReactNode; className?: string}) {
  return <span className={twMerge("inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700", className)}>{children}</span>;
}

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("card-surface", className)} // uses our v4 utility
      {...props}
    />
  )
}

type NavLinkProps = LinkProps & {
  className?: string
  children: React.ReactNode
}

export function NavLink({ href, className, children, ...rest }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        // default brand styling
        "text-brand-ink/80 hover:text-brand-deep transition-colors",
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  )
}