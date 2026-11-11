
const StudentList = () => {

  const students = ["Arun", "Priya", "Karthik", "Divya", "Sanjay"];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-8 rounded-lg shadow-lg w-80">

        <h1 className="text-2xl font-bold text-blue-600 text-center mb-5">
          Student List
        </h1>

        <ul className="list-disc pl-5 space-y-3 text-gray-700">
          {students.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default StudentList;
