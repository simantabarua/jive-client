const ReviewCard = ({ review }) => {
  const { name, description, rating, image } = review;
  return (
    <div className="card w-full h-full md:w-96 md:h-[29rem] bg-base-300 shadow-xl rounded-xl px-2 md:p-4 text-center">
    <figure>
      <img
        className="h-32 w-32 rounded-full object-cover"
        src={image}
        alt="User Image"
        loading="lazy"
      />
    </figure>
    <div className="card-body text-center flex items-center justify-center">
      <h2 className="font-black">{name}</h2>
      <p>{description}</p>
      <span className="text-yellow-500">Rating: {rating}</span>
    </div>
  </div>
  
  );
};

export default ReviewCard;
