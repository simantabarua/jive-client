function SectionHeader({ title, subtitle }) {
  return (
    <div className="mx-auto mt-12 py-10 px-6 sm:px-8 lg:px-12 text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-24 h-1 mx-auto bg-indigo-600 rounded"></div>
    </div>
  );
}

export default SectionHeader;
