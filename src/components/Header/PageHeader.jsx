export default function PageHeader({ title, description }) {
  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-500 text-white py-10 px-6 shadow-lg  mb-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
        <div className="mb-6 md:mb-0">
          <h1 className="text-4xl font-extrabold mb-2">{title}</h1>
          <p className="text-base font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
}
