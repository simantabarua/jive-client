import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineCamera, AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";

const galleryImages = [
  "https://i.ibb.co/chrfTbn/Salsa-and-Merengue.jpg",
  "https://i.ibb.co/chrfTbn/Salsa-and-Merengue.jpg",
  "https://i.ibb.co/chrfTbn/Salsa-and-Merengue.jpg",
  "https://i.ibb.co/chrfTbn/Salsa-and-Merengue.jpg",
  "https://i.ibb.co/chrfTbn/Salsa-and-Merengue.jpg",
  "https://i.ibb.co/chrfTbn/Salsa-and-Merengue.jpg",
];

const UserProfile = () => {
  const [editMode, setEditMode] = useState({
    profile: false,
    contact: false,
    about: false,
    danceStyles: false,
    gallery: false,
  });

  const toggleEdit = (section) => {
    setEditMode((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen  flex flex-col items-center">
      <div className="w-full container mx-auto p-y-8 rounded-lg relative">
        {/* Cover Photo Section */}
        <div className="relative -z-10">
          <div
            className="w-full h-44  md:h-60 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url('https://i.ibb.co/chrfTbn/Salsa-and-Merengue.jpg')`,
            }}
          ></div>
          <button
            onClick={() => toggleEdit("profile")}
            className="absolute top-4 right-4 p-2 text-white bg-black bg-opacity-50 rounded-full"
          >
            <AiOutlineEdit />
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center  mt-[-50px]">
          <div className="relative">
            <img
              src="https://i.ibb.co/PDTF50v/instructor1.jpg"
              alt="Instructor Profile"
              className="w-36 h-36 rounded-full shadow-lg mb-4 border-4 border-white"
            />
            <button
              onClick={() => toggleEdit("profile")}
              className="absolute bottom-5 right-5 p-2 text-white bg-black bg-opacity-50 rounded-full"
            >
              <AiOutlineEdit />
            </button>
          </div>
          <h1 className="text-xl md:text-3xl text-center font-bold text-gray-800">
            Alexandra Stone
          </h1>
          <p className="text-gray-600 text-center">
            Professional Dance Instructor
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center mt-6 space-x-4">
          <a href="#" className="text-gray-500 hover:text-blue-600">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-400">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="#" className="text-gray-500 hover:text-pink-500">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#" className="text-gray-500 hover:text-red-600">
            <FaYoutube className="text-2xl" />
          </a>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-4 mt-6 px-4">
          <div className="flex flex-col md:flex-row items-center  bg-blue-100 p-4 rounded-lg">
            <BsFillPersonFill className="h-8 w-8 text-blue-600 text-3xl" />
            <div className=" md:ml-4">
              <p className="text-base md:text-xl font-semibold text-gray-800">
                Total Students
              </p>
              <p className="text-gray-600 text-center md:text-left">150+</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center  bg-blue-100 p-4 rounded-lg">
            <AiOutlineCamera className="h-8 w-8 text-indigo-600 text-3xl" />
            <div className="md:ml-4">
              <p className="text-base md:text-xl font-semibold text-gray-800">
                Classes Held
              </p>
              <p className="text-gray-600 text-center md:text-left">120+</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-6 relative px-4">
          <h2 className="text-base md:text-xl font-semibold text-gray-800">
            Contact Information
          </h2>
          <button
            onClick={() => toggleEdit("contact")}
            className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-900"
          >
            <AiOutlineEdit />
          </button>
          <div className="flex items-center">
            <MdEmail className="text-gray-600 text-xl" />
            <p className="ml-2 text-gray-600">alexander@dance.com</p>
          </div>
          <div className="flex items-center">
            <MdLocationOn className="text-gray-600 text-2xl" />
            <p className="ml-2 text-gray-600">123 Dance St, Dance City, DC</p>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-6 relative px-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">About Me</h2>
          <button
            onClick={() => toggleEdit("about")}
            className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-900"
          >
            <AiOutlineEdit />
          </button>
          <p className="text-gray-600">
            I am a passionate dance instructor with over 10 years of experience
            in teaching a wide range of dance styles. My goal is to help
            students discover the joy of dance and improve their skills, rhythm,
            and confidence.
          </p>
        </div>

        {/* Dance Styles */}
        <div className="mt-6 relative px-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Dance Styles
          </h2>
          <button
            onClick={() => toggleEdit("danceStyles")}
            className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-900"
          >
            <AiOutlineEdit />
          </button>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Hip Hop</li>
            <li>Contemporary</li>
            <li>Salsa</li>
            <li>Ballet</li>
          </ul>
        </div>

        {/* Photo Gallery */}
        <div className="mt-6 relative px-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Photo Gallery
          </h2>
          <button
            onClick={() => toggleEdit("gallery")}
            className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-900"
          >
            <AiOutlineEdit />
          </button>
          <div className="grid grid-cols-3 gap-2">
            {galleryImages.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Gallery ${index + 1}`}
                className="w-full h-44 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
