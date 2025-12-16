// app/components/About.jsx
export default function About() {
  return (
    <div 
    id="about"
    className="w-full flex flex-col items-center py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-purple-700 mb-6 text-center">
          About Me
        </h1>

        {/* Main About Container */}
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* Profile Image
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-purple-300">
              <img
                src="/profile.jpg" // replace with your photo
                alt="My Profile"
                className="w-full h-full object-cover"
              />
            </div> */}

            {/* Text Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Hello! I'm Akanksha 👋
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                I am a passionate <span className="font-semibold text-purple-600">Full Stack Developer</span> with a B.E in Computer Science Engineering From Savitribai Phule Pune University.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                I have a strong command of frontend and backend technologies, and I specialize in building scalable, high-performance web applications.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
              My portfolio includes projects like e-commerce platforms, job portals, and taxi booking apps, where I implemented intuitive user interfaces, robust backend systems, and optimized architectures.
              </p><p className="text-gray-700 leading-relaxed text-lg">
              During my internship at the Itrix.pvt.ltd , I focused on enhancing user satisfaction through impactful and user-friendly solutions.
</p>
<p className="text-gray-700 leading-relaxed text-lg">
I am driven by solving complex problems with innovative solutions that bridge technology and real-world needs, delivering projects that are both functional and user-centric.
            </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
