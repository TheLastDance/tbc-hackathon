import "./Landing.css";
import Image from "next/image";
import background from "@/public/background.jpg"
import { Button } from "@mui/material";

export function Landing() {
  return (
    <section className="landing">
      <div className="landing_background">
        <Image src={background} alt="background" priority sizes="100vw" quality={100} placeholder="blur" fill />
        <div className="landing_about">
          <p>
            აღმოაჩინე თავისთვის სასურველი მენტორები და ტუტორები, მიიღე ინფორმაცია მათ შესახებ,
            მარტივად დაგეგმე გაკვეთილები და მიიღე ხარისხიანი განათლება ჩვენთან.
          </p>
          <Button href="/about" variant="contained" sx={{ backgroundColor: "var(--thirdColor)" }}>ვრცლად</Button>
        </div>
      </div>
    </section>
  )
}
