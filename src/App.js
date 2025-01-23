// import { Routes, Route, Router } from "react-router-dom";

// import IndexPage from "./pages/HomePage/IndexPage";
// import ContactPage from "./pages/ContactPage/ContactPage";
// import NotFound from "./pages/PageNotFound/NotFoundPage";
// import GalleryPage from "./pages/GalleryPage/GalleryPage";
// import BlogPage from "./pages/BlogPage/BlogPage";
// import PythonCourse from "./pages/CoursePage/Python-course";
// import DataScienceCourse from "./pages/CoursePage/DataScience";
// import DataAnalyticsCourse from "./pages/CoursePage/DataAnalytics";
// import PowerBiCourse from "./pages/CoursePage/PowerBi";
// import InformaticaCourse from "./pages/CoursePage/Informatica";
// import AwsCourse from "./pages/CoursePage/Aws";
// import AzureCourse from "./pages/CoursePage/Azure";
// import PegaCourse from "./pages/CoursePage/Pega";
// import MicrosoftCourse from "./pages/CoursePage/Microsoft";
// import JavaCourse from "./pages/CoursePage/Java";
// import TestingCourse from "./pages/CoursePage/Testing";
// import SapCourse from "./pages/CoursePage/Sap";
// import TableauCourse from "./pages/CoursePage/Tableau";

// function App() {
//   // const sendMail = () => {
//   //   console.log("something");
//   // };
//   // const openForm = () => {
//   //   console.log("something");
//   // };
//   // const closeForm = () => {
//   //   console.log("something");
//   // };
//   return (
//     <div>
//       <Router>
//         <div>
//           {" "}
//           <Routes>
//             <Route path="/" element={<IndexPage />} />
//             <Route path="/home" element={<IndexPage />} />
//             {/* <Route path="/about#about-section" /> */}
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/gallery" element={<GalleryPage />} />
//             <Route path="/blog" element={<BlogPage />} />
//             <Route
//               path="/python-course"
//               element={<PythonCourse prop="Python Course" />}
//             />
//             <Route
//               path="/DataScience"
//               element={
//                 <DataScienceCourse prop="Data Science With AI & ML Course" />
//               }
//             />
//             <Route
//               path="/DataAnalytics"
//               element={<DataAnalyticsCourse prop="Data Analytics" />}
//             />

//             <Route
//               path="/PowerBi"
//               element={<PowerBiCourse prop="Power BI" />}
//             />
//             <Route
//               path="/Informatica"
//               element={<InformaticaCourse prop="Informatica" />}
//             />
//             <Route path="/Aws" element={<AwsCourse prop="AWS DEVOPS" />} />
//             <Route
//               path="/Azure"
//               element={<AzureCourse prop="AZURE DEVOPS" />}
//             />
//             <Route path="/Pega" element={<PegaCourse prop="PEGA" />} />
//             <Route
//               path="/MicroSoft"
//               element={<MicrosoftCourse prop="MICROSOFT FULL STACK" />}
//             />
//             <Route
//               path="/Java"
//               element={<JavaCourse prop="JAVA FULL STACK" />}
//             />
//             <Route
//               path="/Testing"
//               element={<TestingCourse prop="TESTING MANUAL & AUTOMATION" />}
//             />
//             <Route
//               path="/Sap"
//               element={<SapCourse prop="SAP FICO WITH S4 HANA" />}
//             />
//             <Route
//               path="/Tableau"
//               element={
//                 <TableauCourse
//                   prop="Tableau
// "
//                 />
//               }
//             />
//             <Route path="*" element={<NotFound />} />
//           </Routes>{" "}
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/HomePage/IndexPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NotFound from "./pages/PageNotFound/NotFoundPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import PythonCourse from "./pages/CoursePage/Python-course";
import DataScienceCourse from "./pages/CoursePage/DataScience";
import DataAnalyticsCourse from "./pages/CoursePage/DataAnalytics";
import PowerBiCourse from "./pages/CoursePage/PowerBi";
import InformaticaCourse from "./pages/CoursePage/Informatica";
import AwsCourse from "./pages/CoursePage/Aws";
import AzureCourse from "./pages/CoursePage/Azure";
import PegaCourse from "./pages/CoursePage/Pega";
import MicrosoftCourse from "./pages/CoursePage/Microsoft";
import JavaCourse from "./pages/CoursePage/Java";
import TestingCourse from "./pages/CoursePage/Testing";
import SapCourse from "./pages/CoursePage/Sap";
import TableauCourse from "./pages/CoursePage/Tableau";
import HomePage from "./pages/HomePage/HomePage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import OurCoursesPage from "./pages/CoursesPage/OurCoursesPage";
import AboutUsPage from "./pages/AboutPage/AboutUsPage";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/our-courses" element={<OurCoursesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route
          path="/python-course"
          element={<PythonCourse prop="Python Course" />}
        />
        <Route
          path="/DataScience"
          element={
            <DataScienceCourse prop="Data Science With AI & ML Course" />
          }
        />
        <Route
          path="/DataAnalytics"
          element={<DataAnalyticsCourse prop="Data Analytics" />}
        />
        <Route path="/PowerBi" element={<PowerBiCourse prop="Power BI" />} />
        <Route
          path="/Informatica"
          element={<InformaticaCourse prop="Informatica" />}
        />
        <Route path="/Aws" element={<AwsCourse prop="AWS DEVOPS" />} />
        <Route path="/Azure" element={<AzureCourse prop="AZURE DEVOPS" />} />
        <Route path="/Pega" element={<PegaCourse prop="PEGA" />} />
        <Route
          path="/MicroSoft"
          element={<MicrosoftCourse prop="MICROSOFT FULL STACK" />}
        />
        <Route path="/Java" element={<JavaCourse prop="JAVA FULL STACK" />} />
        <Route
          path="/Testing"
          element={<TestingCourse prop="TESTING MANUAL & AUTOMATION" />}
        />
        <Route
          path="/Sap"
          element={<SapCourse prop="SAP FICO WITH S4 HANA" />}
        />
        <Route path="/Tableau" element={<TableauCourse prop="Tableau" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
