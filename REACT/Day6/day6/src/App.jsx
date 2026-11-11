import CourseDetails from "./components/CourseDetails"
import Employee from "./components/Employee"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Product from "./components/Product"
import StudentList from "./components/StudentList"
import StudentProfile from "./components/StudentProfile"


const App = () => {
  const previewComponents = {
    StudentProfile: <StudentProfile />,
    Employee: <Employee />,
    Product: <Product />,
    StudentList: <StudentList />
  }
  const selectedComponent = new URLSearchParams(window.location.search).get("component")

  if (selectedComponent === "CourseDetails") {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <div className="flex justify-center items-center flex-1">
          <CourseDetails />
        </div>
        <Footer />
      </div>
    )
  }

  if (selectedComponent && previewComponents[selectedComponent]) {
    return previewComponents[selectedComponent]
  }

  return (
   <>
   <div>

    <StudentProfile/>
    <Employee/>
    <Product/>
    <StudentList/>

    
   </div>

   <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header/>

      <div className="flex justify-center items-center flex-1">
        <CourseDetails/>
      </div>

      <Footer/>
    </div>
   
   </>
  )
}

export default App
