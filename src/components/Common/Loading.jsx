const Loading = () => {
  return (
    <div className="max-w-7xl flex items-center justify-center mx-auto h-[40vh]">
      <span className="loading loading-ring loading-xs"></span>
      <span className="loading loading-ring loading-sm"></span>
      <span className="loading loading-ring loading-md"></span>
      <span className="loading loading-ring loading-lg"></span>
      <img
        src="https://images.squarespace-cdn.com/content/v1/5d122e0d694a030001ef945a/1630465154382-T2WW60HR4R25MQ5XISMW/poem.gif"
        alt="loading"
        className="w-32 h-32 rounded-full  object-contain filter grayscale brightness-50 mx-2"
      />
    </div>
  );
};

export default Loading;
