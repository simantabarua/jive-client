function SectionHeader({ title, subtitle }) {
  return (
    <div className="mx-auto mt-10 py-8 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-xl md:text-4xl  font-extrabold ">{title}</h2>
      {subtitle && <p className="mt-4 text-xl  text-gray-500">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
