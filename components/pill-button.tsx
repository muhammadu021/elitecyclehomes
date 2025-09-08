"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PillButtonProps {
  children: React.ReactNode
  variant?: "default" | "primary" | "secondary" | "accent" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  href?: string
}

export function PillButton({ children, variant = "default", size = "md", className, onClick, href }: PillButtonProps) {
  const baseClasses =
    "rounded-full font-semibold transition-all duration-200 hover:shadow-lg no-underline hover:no-underline"

  const variants = {
    default: "bg-muted text-muted-foreground hover:bg-muted/80",
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    accent: "bg-accent text-accent-foreground hover:bg-accent/90",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  if (href) {
    return (
      <a href={href} className={cn(baseClasses, variants[variant], sizes[size], className)}>
        {children}
      </a>
    )
  }

  return (
    <Button onClick={onClick} className={cn(baseClasses, variants[variant], sizes[size], className)}>
      {children}
    </Button>
  )
}
