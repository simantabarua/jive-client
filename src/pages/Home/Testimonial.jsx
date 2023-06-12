
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ReviewCard from "./ReviewCard";
import SectionHeader from "../../components/Common/SectionHeader";
import { Navigation, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <SectionHeader
        title="Hear What Our Customers Have to Say"
        subtitle="Our customers have described our dishes as 'heavenly', 'mouth-watering', and 'the best I've ever tasted'. We're thrilled to share their reviews and testimonials with you, so you can see for yourself why Cuisine Route is the ultimate destination for foodies who crave culinary inspiration and satisfaction"
      />

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
