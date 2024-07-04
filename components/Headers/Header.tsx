import "./Header.css"
import Link from "next/link";
import { Button } from "@mui/material";
import { Burger } from "../Burger/Burger";

export function Header() {
  return (
    <header>
      <div className="logo">
        <Link href="/">LOGO</Link>
      </div>
      <nav className="nav_list">
        <Link href="/about">ჩვენს შესახებ</Link>
        <Link href="/mentors">მენტორები</Link>
        <Link href="/contact">დაგვიკავშირდით</Link>
      </nav>
      <Button className="login_button" variant="contained" href="/" sx={{ backgroundColor: "var(--thirdColor)" }}>შესვლა</Button>
      <Burger />
    </header>
  )
}
