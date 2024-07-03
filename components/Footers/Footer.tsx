import "./Footer.css";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { Button } from "@mui/material";

export function Footer() {
  return (
    <footer>
      <div className="footerContent">
        <div className="aboutUs">
          <h5>ჩვენს შესახებ</h5>
          <p>
            ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ
            ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ
          </p>
          <div className="aboutUs_social">
            <IconButton href="/" color="primary">
              <Facebook />
            </IconButton>
            <IconButton href="/" color="primary">
              <Instagram />
            </IconButton>
            <IconButton href="/" color="primary">
              <YouTube />
            </IconButton>
          </div>
        </div>
        <div className="footerNav">
          <div>
            <h5>ბმულები</h5>
            <nav>
              <Link href="/about">ჩვენს შესახებ</Link>
              <Link href="/mentors">მენტორები</Link>
              <Link href="/contact">დაგვიკავშირდით</Link>
            </nav>
          </div>
          <Button className="auth_link" variant="contained" href="/" sx={{ backgroundColor: "var(--thirdColor)" }}>შესვლა</Button>
        </div>
      </div>
      <div className="terms">
        <p>© 2023 ყველა უფლება დაცულია</p>
        <div className="terms_links">
          <Link href="/">წესები და პირობები</Link>
          <Link href="/">კონფიდენციალურობის პოლიტიკა</Link>
        </div>
      </div>
    </footer>
  )
}
