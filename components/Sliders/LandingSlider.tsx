"use client"

import "./LandingSlider.css"
import { MentorCard } from "../MentorList/MentorCard/MentorCard";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Keyboard, Navigation, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export function LandingSlider() {
  return (
    <>
      <section className="landingSlider">
        <h1>თვის საუკეთესო მენტორები</h1>

        <div className="slider_container">
          <Swiper
            loop
            autoplay={{ delay: 6000 }}
            speed={600}
            keyboard={{ enabled: true }}
            navigation={true}
            modules={[Keyboard, Navigation, A11y, Autoplay]}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <MentorCard />
            </SwiperSlide>
            <SwiperSlide>
              <MentorCard />
            </SwiperSlide>
            <SwiperSlide>
              <MentorCard />
            </SwiperSlide>
            <SwiperSlide>
              <MentorCard />
            </SwiperSlide>
            <SwiperSlide>
              <MentorCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}