export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 font-sans">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 opacity-95"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* LEFT CONTENT */}
          <div className="text-white flex-1">
            <p className="uppercase tracking-[4px] text-gray-300 mb-4">
              Portfolio
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Akshaya <br />
              <span className="text-gray-300">Unnikrishnan</span>
            </h1>

            <p className="text-xl text-gray-300 leading-8 max-w-2xl mb-8">
              Aspiring Python Full Stack Developer & Data Engineer passionate
              about building intelligent web applications using Django,
              Machine Learning, and modern technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                className="px-7 py-3 rounded-2xl bg-white text-black font-medium hover:scale-105 transition duration-300"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="px-7 py-3 rounded-2xl border border-white text-white hover:bg-white hover:text-black transition duration-300"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-[40px] overflow-hidden border-4 border-white shadow-2xl">
              
              {/* REPLACE THIS IMAGE */}
              <img
                src="/ak1.png"
                alt="Akshaya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">About Me</h2>

        <div className="bg-white/80 backdrop-blur-lg rounded-[32px] shadow-lg p-10 leading-9 text-gray-700 text-lg border border-gray-100">
  I am a recent B.Tech Computer Science Engineering graduate with strong
  interest in Python Full Stack Development, Data Engineering, and
  Machine Learning.

  <br /><br />

  I enjoy building intelligent and scalable applications that solve
  real-world problems. Through academic projects and internships, I
  have gained hands-on experience in Django, Flask, REST APIs,
  databases, and AI-powered systems.

  <br /><br />

  I am actively seeking opportunities to grow as a software
  developer and contribute to impactful and innovative projects.
</div>
      </section>

      {/* SKILLS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">Skills</h2>

          <div className="flex flex-wrap gap-5">
            {[
              "Python",
              "Django",
              "Flask",
              "Machine Learning",
              "SQL",
              "MySQL",
              "MongoDB",
              "REST APIs",
              "Git/GitHub",
              "HTML",
              "CSS",
              "JavaScript",
              "Data Analysis",
              "ETL Concepts",
            ].map((skill) => (
              <div
                key={skill}
                className="px-6 py-3 rounded-2xl bg-gray-100 hover:bg-black hover:text-white transition duration-300 shadow-sm font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* PROJECT CARD */}
          {[
            {
              title: "Replica – Phishing Website Detection",
              desc: "Developed a phishing detection system using Flask and XGBoost to identify malicious websites and redirect users to legitimate websites.",
              tech: ["Flask", "XGBoost", "Python","MongoDB"],
            },

            {
              title: "Stroke Detection System",
              desc: "Built an AI-powered healthcare web application using Django and CNN + ViT models for cerebral infarct detection from fMRI images.",
              tech: ["Django", "CNN", "ViT"],
            },

            {
              title: "ZenDo – Task Management App",
              desc: "Created a responsive task management application using Django with authentication and CRUD functionalities.",
              tech: ["Django", "SQLite", "Bootstrap"],
            },

            {
              title: "Student Attendance Tracker",
              desc: "Designed and developed a web-based attendance tracking system during internship using Django and MySQL.",
              tech: ["Django", "MySQL"],
            },
          ].map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-[32px] p-8 shadow-md hover:-translate-y-2 hover:shadow-2xl transition duration-300 border border-gray-100"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-600 leading-8 mb-6">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-black text-white rounded-xl text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10">Education</h2>

          <div className="space-y-8">

            <div className="bg-gray-50 rounded-[32px] p-8 shadow-sm border-l-8 border-black">
              <h3 className="text-2xl font-semibold">
                B.Tech in Computer Science Engineering
              </h3>
              <p className="text-gray-700 mt-2">
                Universal Engineering College, Kerala
              </p>
              <p className="text-gray-600 mt-1">
                2022 – 2026 | CGPA: 9.59
              </p>
            </div>

            <div className="bg-gray-50 rounded-[32px] p-8 shadow-sm border-l-8 border-black">
              <h3 className="text-2xl font-semibold">
                Higher Secondary Education (12th)
              </h3>
              <p className="text-gray-700 mt-2">
                Government Model Girls HSS, Irinjalakuda
              </p>
              <p className="text-gray-600 mt-1">
                2019 – 2021 | Percentage: 98.83%
              </p>
            </div>

            <div className="bg-gray-50 rounded-[32px] p-8 shadow-sm border-l-8 border-black">
              <h3 className="text-2xl font-semibold">
                Secondary Education (10th)
              </h3>
              <p className="text-gray-700 mt-2">
                Little Flower Convent High School, Irinjalakuda
              </p>
              <p className="text-gray-600 mt-1">
                2018 – 2019 | Percentage: 100%
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-black text-white rounded-[40px] p-14 text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-5">
            Let’s Connect
          </h2>

          <p className="text-lg text-gray-300 mb-3">
            akshayaunnikrishnanau@gmail.com
          </p>

          <p className="text-lg text-gray-300 mb-8">
            Thrissur, Kerala, India
          </p>

          <div className="flex justify-center gap-5 flex-wrap">
            <a
              href="https://linkedin.com"
              target="_blank"
              className="px-7 py-3 rounded-2xl bg-white text-black font-medium hover:scale-105 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="px-7 py-3 rounded-2xl border border-white hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}