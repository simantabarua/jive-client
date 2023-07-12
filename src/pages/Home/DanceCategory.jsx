import SectionHeader from "../../components/Common/SectionHeader";

const DanceCategory = () => {
  return (
    <>
      <section className="p-4 lg:p-8 max-w-7xl mx-auto ">
        <div className="md:my-8">
          <SectionHeader
            title={"Rhythmic Moves: Unleashing Your Inner Dancer"}
          />
        </div>
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://i.ibb.co/4MDmK4N/dance9.png"
              alt=""
              className="h-80  aspect-video object-cover object-top"
            />
            <div className="flex flex-col justify-center flex-1 p-6">
              <span className="text-xs uppercase">Join Now</span>
              <h3 className="text-3xl font-bold">Beginner &apos;s Ballet</h3>
              <p className="my-6">
                Learn ballet positions, alignment, and grace. Build strength,
                flexibility, and artistic expression.
              </p>
              <button type="button" className="self-start btn btn-primary">
                Learn more
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/8Ng18qb/Jazz4.jpg"
              alt=""
              className="h-80  aspect-video object-cover object-top"
            />
            <div className="flex flex-col justify-center flex-1 p-6">
              <span className="text-xs uppercase">Join Now</span>
              <h3 className="text-3xl font-bold">Salsa Dance</h3>
              <p className="my-6">
                Designed for young children, Creative Movement is an
                introductory class that helps develop motor skills,
                coordination, and spatial awareness.
              </p>
              <button type="button" className="self-start btn btn-primary">
                Learn more
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://i.ibb.co/bJnqvRB/dance7.png"
              alt=""
              className="h-80  aspect-video object-cover object-top"
            />
            <div className="flex flex-col justify-center flex-1 p-6">
              <span className="text-xs uppercase">Join Now</span>
              <h3 className="text-3xl font-bold">Contemporary Ballet</h3>
              <p className="my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                aliquam possimus quas, error esse quos.
              </p>
              <button type="button" className="self-start btn btn-primary">
                Learn more
              </button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/gtnyGVZ/dance-2.jpg"
              alt=""
              className="h-80  aspect-video object-cover object-top"
            />
            <div className="flex flex-col justify-center flex-1 p-6">
              <span className="text-xs uppercase">Join Now</span>
              <h3 className="text-3xl font-bold">Contemporary Jazz</h3>
              <p className="my-6">
                {" "}
                Fuse contemporary and jazz techniques. Express emotions through
                fluid movements and dynamic choreography.
              </p>
              <button type="button" className="self-start btn btn-primary">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DanceCategory;
