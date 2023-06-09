import axios from "axios";
import InstructorCard from "./InstructorCard";
import { useEffect, useState } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/instructors").then((response) => {
      console.log(response.data);
      setInstructors(response.data);
    });
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-5 xl:grid-cols-3 gap-6  px-3 lg:px-6">
        {instructors.map((instructor, index) => (
          <InstructorCard instructor={instructor} key={index} />
        ))}
      </div>
    </>
  );
};

export default Instructors;

// const course = {
//   image: "path/to/course-image.jpg",
//   name: "Course Name",
//   instructor: "Instructor Name",
//   availableSeats: 5,
//   price: 50,
//   description: "Course description goes here.",
//   duration: "2 weeks",
//   startDate: "2023-07-01",
//   endDate: "2023-07-15",
//   location: "Online",
//   category: "Programming",
//   prerequisites: ["Basic knowledge of JavaScript", "Familiarity with HTML and CSS"],
// };

// const instructor = {
//   image: "path/to/instructor-image.jpg",
//   name: "John Doe",
//   email: "johndoe@example.com",
//   numberOfClasses: 5, // Optional
//   classesTaken: ["Class A", "Class B", "Class C"], // Optional
//   seeClassesLink: "https://example.com/classes", // Optional
//   bio: "Instructor's biography or description",
//   expertise: ["Web Development", "Data Science"],
//   socialMedia: {
//     twitter: "https://twitter.com/johndoe",
//     linkedin: "https://linkedin.com/in/johndoe",
//     // You can add more social media links here
//   },
// };
