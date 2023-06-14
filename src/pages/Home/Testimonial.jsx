import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ReviewCard from "./ReviewCard";
import SectionHeader from "../../components/Common/SectionHeader";
import { Navigation, Pagination } from "swiper";
import axios from "axios";

const Testimonial = () => {
  const { isLoading, data: reviews = [] } = useQuery("reviews", async () => {
    const response = await axios.get("/reviews");
    return response.data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <SectionHeader
        title="Hear What Our Customers Have to Say"
        subtitle="Discover why our dance classes are the ultimate choice for dance enthusiasts!"
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
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonial;
