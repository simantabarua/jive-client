const FeatureDance = () => {
  return (
    <>
      <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center md:my-10 p-4 max-w-7xl mx-auto">
        <div className="lg:col-start-2">
          <h3 className="text-2xl font-bold tracki sm:text-3xl">Fusion Flow</h3>
          <p className="mt-3 text-lg">
            {" "}
            Ignite your passion for dance with Fusion Flow, a dynamic course
            that combines multiple styles into a seamless and exhilarating dance
            experience.
          </p>
          <div className="mt-12 space-y-12">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium leadi">Style Fusion</h4>
                <p className="mt-2">
                  Explore the fusion of diverse dance styles, blending elements
                  from contemporary, hip-hop, and Latin dance genres. Embrace
                  the fluidity of movement as you seamlessly transition between
                  different styles.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium leadi">
                  Creative Expression
                </h4>
                <p className="mt-2">
                  Unlock your creativity by learning to express yourself through
                  dance. Develop your own unique style and discover innovative
                  ways to interpret music, allowing your personality to shine
                  through each movement.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium leadi">
                  Creative Expression
                </h4>
                <p className="mt-2">
                  {" "}
                  Take the stage and showcase your talent in exciting
                  performance opportunities. From local showcases to grand
                  events, embrace the thrill of performing in front of live
                  audiences, sharing your passion and skill with the world.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
          <img
            src="
    https://i.ibb.co/9pQt3Z8/beautiful-ballerina-dancing-in-blue-long-dress-m.jpg"
            alt=""
            className="mx-auto rounded-lg shadow-lg md:h-[600px]"
          />
        </div>
      </div>
    </>
  );
};

export default FeatureDance;
