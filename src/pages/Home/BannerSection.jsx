import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import toySlide from "../../utils/toySlideData";


const BannerSection = () => {
 

  const params = {
    pagination: {
      clickable: true,
    },
    navigation: true,
    autoplay: {
      delay: 1500,
    },
    speed: 300,
    modules: [EffectFade, Pagination, Navigation, Autoplay],
  };

  return (
    <Swiper {...params}>
      {toySlide?.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero h-96 md:h-[580px]"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="hero-overlay opacity-50"></div>
            <div className="hero-content text-center  text-white">
              <div className="max-w-xl space-y-5">
                <h1
                  className="text-xl sm:text-3xl md:text-5xl font-medium md:font-bold"
                  data-aos="zoom-in-up"
                  data-aos-duration="800"
                >
                  {slide.title}
                </h1>
                <p
                  className="md:font-bold text-xl"
                  data-aos="zoom-in-up"
                  data-aos-duration="800"
                >
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSection;
