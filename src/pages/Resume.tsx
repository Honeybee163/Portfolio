import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    document.title = "Hania Rahman - Resume";
  }, []);

  return (
    <div className="min-h-screen bg-white text-black print:bg-white">
      <div className="max-w-[800px] mx-auto p-8 print:p-6">
        {/* Header */}
        <header className="text-center border-b-2 border-gray-300 pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            HANIA RAHMAN
          </h1>
          <p className="text-lg text-gray-600 mb-3">
            Python & Django Developer
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <span>📧 haniarahman635@gmail.com</span>
            <span>📱 032 6437 7660</span>
            <span>📍 Lahore, Pakistan</span>
          </div>
          <div className="flex justify-center gap-4 mt-2 text-sm text-blue-600">
            <a
              href="https://www.linkedin.com/in/hania-rahman/"
              className="hover:underline"
            >
              linkedin.com/in/hania-rahman
            </a>
            <a
              href="https://github.com/Honeybee163"
              className="hover:underline"
            >
              github.com/Honeybee163
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Skilled Python and Django developer with experience in building web
            applications and RESTful APIs. Proficient in SQL/NoSQL databases,
            data analysis with Pandas and NumPy, and visualization using
            Matplotlib and Seaborn. Experienced in AI integration through
            LangChain and collaborative development via GitHub. Strong
            problem-solving abilities with a focus on clean, maintainable code.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">
            TECHNICAL SKILLS
          </h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="font-semibold text-gray-700">Languages:</span>
              <span className="text-gray-600"> Python, JavaScript, SQL</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Frameworks:</span>
              <span className="text-gray-600">
                {" "}
                Django, Django REST Framework, FastAPI
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Databases:</span>
              <span className="text-gray-600">
                {" "}
                PostgreSQL, MySQL, MongoDB, SQLite
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Data Science:</span>
              <span className="text-gray-600">
                {" "}
                Pandas, NumPy, Matplotlib, Seaborn
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">AI/ML:</span>
              <span className="text-gray-600">
                {" "}
                LangChain, OpenAI API, Hugging Face
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-700">Tools:</span>
              <span className="text-gray-600">
                {" "}
                Git, GitHub, VS Code, Postman
              </span>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">
            EXPERIENCE
          </h2>

          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-800">
                  Software Developer Intern
                </h3>
                <p className="text-sm text-gray-600 italic">Moonsys</p>
              </div>
              <span className="text-sm text-gray-500">2025</span>
            </div>

            <ul className="list-disc list-inside text-sm text-gray-700 mt-2 space-y-1">
              <li>
                {" "}
                Built custom, scalable software using modern tech and agile
                practices.
              </li>
              <li>
                Used tools like Git, MongoDB, Postman, and Jira in an agile
                environment.
              </li>
              <li>
                Worked with React and Node to understand front-end and back-end
                development.
              </li>
              <li>
                Implemented features, debugged code, and collaborated to deliver
                milestones.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">
            PROJECTS
          </h2>

          <div className="mb-3">
            <h3 className="font-semibold text-gray-800">
              AI Chatbot with LangChain
            </h3>
            <p className="text-sm text-gray-700">
              Built an intelligent chatbot using LangChain and OpenAI API with
              context-aware responses and conversation memory. Implemented RAG
              (Retrieval Augmented Generation) for document Q&A.
            </p>
          </div>

          <div className="mb-3">
            <h3 className="font-semibold text-gray-800">
              Django E-Commerce Platform
            </h3>
            <p className="text-sm text-gray-700">
              Developed a full-featured e-commerce website with Django,
              including user authentication, product catalog, shopping cart, and
              payment integration.
            </p>
          </div>

          <div className="mb-3">
            <h3 className="font-semibold text-gray-800">
              Attendance Management System | Django
            </h3>
            <p className="text-sm text-gray-700">
              Built a Django-based attendance system with role-based access for
              teachers and students. Enabled teachers to manage classes, mark
              attendance, and download monthly reports in CSV format.
              Implemented student dashboards with attendance visualization using
              Matplotlib. Ensured data isolation so teachers can only view and
              manage their own classes.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">
            EDUCATION
          </h2>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-gray-800">
                Bachelor's in Computer Science
              </h3>
              <p className="text-sm text-gray-600 italic">
                University of Education, Lahore
              </p>
            </div>
            <span className="text-sm text-gray-500">2023 - Present</span>
          </div>
        </section>

        {/* Additional */}
        <section>
          <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">
            ADDITIONAL INFORMATION
          </h2>
          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <span className="font-semibold">Languages:</span> Urdu (Native),
              English (Professional), Turkish(Basic)
            </p>
            <p>
              <span className="font-semibold">Interests:</span> Chess,Puzzles,Learning new languages
            </p>
          </div>
        </section>

        {/* Print Button - hidden when printing */}
        <div className="mt-8 text-center print:hidden">
          <button
            onClick={() => window.print()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            📄 Download as PDF
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Click the button above, then select "Save as PDF" in the print
            dialog
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
