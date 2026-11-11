

const Employee = () => {


  const empName = "Priya";
  const empId = "EMP101";
  const designation = "React Developer";
  const salary = "₹35,000";
  const company = "TCS";
  return (
    <>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-8 rounded-lg shadow-lg w-80">

        <h1 className="text-2xl font-bold text-blue-600 text-center mb-5">
          Employee Details
        </h1>

        <p className="mt-3">Employee ID: {empId}</p>
        <p className="mt-3">Name: {empName}</p>
        <p className="mt-3">Designation: {designation}</p>
        <p className="mt-3">Salary: {salary}</p>
        <p className="mt-3">Company: {company}</p>

      </div>
    </div>
    </>
  )
}

export default Employee