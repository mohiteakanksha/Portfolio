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

            {/* Profile Image */}
            <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-4 border-purple-300">
              <img
                src="/profile.jpg" // replace with your photo
                alt="My Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Hello! I'm Akanksha 👋
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                I am a passionate <span className="font-semibold text-purple-600">Flutter & React Developer</span> building modern web and mobile applications.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                I have experience with <b>Next.js, Tailwind, MongoDB, Node.js, Flutter</b> and enjoy creating full-stack projects that solve real problems.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
