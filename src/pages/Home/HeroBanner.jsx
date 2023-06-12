import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroBanner = () => {
  const slides = [
    {
      imageUrl: "https://example.com/image1.jpg",
      title: "Slide 1 Title",
      description: "Slide 1 Description",
    },
    {
      imageUrl: "https://example.com/image2.jpg",
      title: "Slide 2 Title",
      description: "Slide 2 Description",
    },
    {
      imageUrl: "https://example.com/image3.jpg",
      title: "Slide 3 Title",
      description: "Slide 3 Description",
    },
  ];

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
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero h-96 md:h-[580px]"
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
            }}
          >
            <div className="hero-overlay opacity-50"></div>
            <div className="hero-content text-center text-white">
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

export default HeroBanner;
