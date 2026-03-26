'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { Button } from '@heroui/react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // This is a necessary pattern for Next.js hydration
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        isIconOnly
        size="sm"
        variant="bordered"
        className="border-purple-200 text-purple-700 dark:border-purple-600 dark:text-purple-300"
        aria-label="Toggle theme"
        isDisabled
      >
        <FiSun className="w-4 h-4" />
      </Button>
    )
  }

  return (
    <Button
      isIconOnly
      size="sm"
      variant="bordered"
      className="border-purple-200 text-purple-700 dark:border-purple-600 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-950"
      onPress={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <FiSun className="w-4 h-4" />
      ) : (
        <FiMoon className="w-4 h-4" />
      )}
    </Button>
  )
}
