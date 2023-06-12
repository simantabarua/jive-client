
const ReviewCard = () => {
  return (
    <div className="card w-full h-full md:w-96 md:h-[29rem] bg-base-300 shadow-xl rounded-xl px-2 md:p-4">
  <figure>
    <img
      className="h-64 w-full object-left-top object-cover md:w-96 rounded-lg"
      src="https://example.com/image.jpg"
      alt="User Image"
      loading="lazy"
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">John Doe</h2>
    <p>Short Description</p>
    <div className="flex items-center mt-2">
      <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M10 16.666l-6.236 3.417 1.19-6.932L.417 7.083l6.932-1.003L10 0l2.651 5.08 6.932 1.003-4.537 4.068 1.19 6.932L10 16.666zm0-2.857L5.08 15.956l-.952-5.537L.833 7.8l5.537-.803L10 2.145l2.63 4.852 5.537.803-4.295 3.619.952 5.537L10 13.81z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-yellow-500">4.5</span>
    </div>
  </div>
</div>

  )
}

export default ReviewCard