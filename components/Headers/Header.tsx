import "./Header.css"
import Link from "next/link";
import { Button } from "@mui/material";

export function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/">LOGO</Link>
      </div>
      <nav>
        <Link href="/about">ჩვენს შესახებ</Link>
        <Link href="/mentors">მენტორები</Link>
        <Link href="/contact">დაგვიკავშირდით</Link>
      </nav>
      <Button variant="contained" href="/" sx={{ backgroundColor: "var(--thirdColor)" }}>შესვლა</Button>
    </header>
  )
}
