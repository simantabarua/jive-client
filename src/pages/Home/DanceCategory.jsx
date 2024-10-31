import SectionHeader from "../../components/Common/SectionHeader";

const danceClasses = [
  {
    id: 1,
    title: "Beginner's Ballet",
    description:
      "Learn ballet positions, alignment, and grace. Build strength, flexibility, and artistic expression.",
    image: "https://i.ibb.co/4MDmK4N/dance9.png",
    reverse: false, // To manage flex direction
  },
  {
    id: 2,
    title: "Salsa Dance",
    description:
      "Designed for young children, Creative Movement is an introductory class that helps develop motor skills, coordination, and spatial awareness.",
    image: "https://i.ibb.co/8Ng18qb/Jazz4.jpg",
    reverse: true,
  },
  {
    id: 3,
    title: "Contemporary Ballet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.",
    image: "https://i.ibb.co/bJnqvRB/dance7.png",
    reverse: false,
  },
  {
    id: 4,
    title: "Contemporary Jazz",
    description:
      "Fuse contemporary and jazz techniques. Express emotions through fluid movements and dynamic choreography.",
    image: "https://i.ibb.co/gtnyGVZ/dance-2.jpg",
    reverse: true,
  },
];

const DanceCategory = () => {
  return (
    <section className="p-4 lg:p-8 container mx-auto">
      <div className="md:my-8">
        <SectionHeader title={"Rhythmic Moves: Unleashing Your Inner Dancer"} />
      </div>
      <div className="container mx-auto space-y-12">
        {danceClasses.map(({ id, title, description, image, reverse }) => (
          <div
            key={id}
            className={`flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row${
              reverse ? "-reverse" : ""
            }`}
          >
            <img
              src={image}
              alt={title}
              className="h-80 aspect-video object-cover object-top"
            />
            <div className="flex flex-col justify-center flex-1 p-6">
              <span className="text-xs uppercase">Join Now</span>
              <h3 className="text-3xl font-bold">{title}</h3>
              <p className="my-6">{description}</p>
              <button type="button" className="self-start btn btn-primary">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DanceCategory;
