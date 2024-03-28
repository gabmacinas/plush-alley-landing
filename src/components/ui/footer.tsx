"use client"
export default function Footer() {
  return (
    <footer className="flex items-center justify-between py-4 px-8">
      <p className="text-lg">
        Plush Alley @{new Date().getFullYear()}
      </p>
    </footer>
  )
}