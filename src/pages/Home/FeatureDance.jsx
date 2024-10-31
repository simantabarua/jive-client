import { FaCheckCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import SectionHeader from "../../components/Common/SectionHeader";

const images = [
  "https://i.ibb.co/hmW6j76/dance8.png",
  "https://i.ibb.co/chrfTbn/Salsa-and-Merengue.jpg",
  "https://i.ibb.co/9pQt3Z8/beautiful-ballerina-dancing-in-blue-long-dress-m.jpg",
  "https://i.ibb.co/bJnqvRB/dance7.png",
];

const FeatureDance = () => {
  return (
    <>
      <SectionHeader
        title="Discover the Best Dance Styles"
        subtitle="Explore the diverse range of dance styles available on our platform."
      />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2  items-center gap-8 px-4">
        <div className="order-2 lg:order-none">
          <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Fusion Flow
          </h3>
          <p className="mt-3 text-lg text-gray-700">
            Ignite your passion for dance with Fusion Flow, a dynamic course
            that combines multiple styles into a seamless and exhilarating dance
            experience.
          </p>
          <div className="mt-12 space-y-10">
            {[
              {
                title: "Style Fusion",
                description:
                  "Explore the fusion of diverse dance styles, blending elements from contemporary, hip-hop, and Latin dance genres. Embrace the fluidity of movement as you seamlessly transition between different styles.",
              },
              {
                title: "Creative Expression",
                description:
                  "Unlock your creativity by learning to express yourself through dance. Develop your own unique style and discover innovative ways to interpret music, allowing your personality to shine through each movement.",
              },
              {
                title: "Performance Opportunities",
                description:
                  "Take the stage and showcase your talent in exciting performance opportunities. From local showcases to grand events, embrace the thrill of performing in front of live audiences, sharing your passion and skill with the world.",
              },
            ].map(({ title, description }) => (
              <div key={title} className="flex items-start">
                <div className="flex-shrink-0 text-indigo-600">
                  <FaCheckCircle className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leading-tight">{title}</h4>
                  <p className="mt-2 text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full max-h-[680px]">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Pagination, Autoplay]}
            className="rounded-lg shadow-md max-h-[680px]"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Dance image ${index + 1}`}
                  className="h-full w-full object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
            <div className="swiper-button-prev text-indigo-600 w-8 h-8"></div>
            <div className="swiper-button-next text-indigo-600 w-8 h-8"></div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeatureDance;
