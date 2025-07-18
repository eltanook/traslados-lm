"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

export function DynamicFavicon() {
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    const currentTheme = theme === "system" ? resolvedTheme : theme
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement
    
    if (favicon) {
      if (currentTheme === "dark") {
        favicon.href = "/logo2.png"
      } else {
        favicon.href = "/logo1.png"
      }
    }
  }, [theme, resolvedTheme])

  return null
} 