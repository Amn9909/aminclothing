"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const categories = ["products", "articles", "users", "categories"]

export function SearchInput() {
  const [currentCategory, setCurrentCategory] = useState(0)

  const cycleCategory = () => {
    setCurrentCategory((prev) => (prev + 1) % categories.length)
  }

  return (
    <div className="relative w-full">
      <Input
        type="text"
        placeholder={`Search ${categories[currentCategory]}...`}
        className="pr-10"
        onChange={cycleCategory}
      />
      <Button type="submit" size="icon" className="absolute right-0 top-0 h-full rounded-l-none">
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </div>
  )
}

