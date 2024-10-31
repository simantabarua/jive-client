import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroBanner = () => {
  const slides = [
    {
      imageUrl: "https://i.ibb.co/16BQ7Pk/slider06.jpg",
      title: "Unleash Your Dance Potential",
      description:
        "Join us this summer and embark on a transformative journey through the art of dance.",
    },
    {
      imageUrl: "https://i.ibb.co/1dbhzNX/slider1-bg-2000x.jpg",
      title: "Exciting Dance Workshops",
      description:
        "Join our workshops to explore different dance techniques and improve your skills.",
    },
    {
      imageUrl: "https://i.ibb.co/7y6q7qv/slider05.jpg",
      title: "Perform on Stage",
      description:
        "Get the opportunity to showcase your talent on our grand stage performances.",
    },
    {
      imageUrl: "https://i.ibb.co/n6QqfQv/slider01.jpg",
      title: "Fun and Engaging Classes",
      description:
        "Enjoy interactive classes that make learning dance a joyful and rewarding experience.",
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
            className="hero h-80 sm:h-96 md:h-[70vh] bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
            }}
          >
            <div className="hero-overlay bg-black opacity-40"></div>
            <div className="hero-content flex flex-col justify-center items-center text-white text-center px-4 sm:px-8">
              <div className="max-w-2xl space-y-4 sm:space-y-6">
                <h1
                  className="text-2xl sm:text-3xl md:text-5xl font-semibold md:font-bold leading-tight"
                  data-aos="zoom-in-up"
                  data-aos-duration="800"
                >
                  {slide.title}
                </h1>
                <p
                  className="text-base sm:text-lg md:text-xl font-medium"
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
