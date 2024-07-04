import "./MentorList.css";
import { MentorCard } from "./MentorCard/MentorCard";

export function MentorList() {
  return (
    <section className="mentorList">
      <div className="mentor_grid">
        <MentorCard />
        <MentorCard />
        <MentorCard />
      </div>
    </section>
  )
}
