import Certifications from "@/components/Certification";
import Studys from "@/components/Study";

export default function Resume() {
  return (
    <section
      id="resume"
      className="h-screen flex flex-col justify-center items-center text-white px-6 snap-start bg-black/50 backdrop-blur-lg"
    >
      <div className="max-w-6xl w-full max-h-[85vh] h-full flex flex-col gap-10 justify-start overflow-y-auto p-4">
        {/* Added p-4 for inner padding and overflow-y-auto for scroll */}
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-bold">이석민</span>
          <span className="text-3xl opacity-30">Full Stack Developer</span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-xl p-2 border-b border-gray-500">
            <span>🏫 Education</span>
          </div>
          <div className="flex gap-3 items-baseline">
            <span>-</span>
            <span className="text-base font-bold ">경기대학교</span>
            <span className="text-sm opacity-30">2023.03 ~</span>
          </div>
          <div className="flex gap-3 items-baseline">
            <span>-</span>
            <span className="text-base font-bold ">울산고등학교</span>
            <span className="text-sm opacity-30">2020.03 ~ 2023.02</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-xl p-2 border-b border-gray-500">
            <span>🪪 Certification</span>
          </div>
          <Certifications />
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-xl p-2 border-b border-gray-500">
            <span>💻 Tech Skills</span>
          </div>
          <div className="flex items-center gap-3">
            <span>-</span>
            <span className="text-base font-bold">Programming Languages</span>
            <span className="text-sm opacity-70">Python, JavaScript, TypeScript, HTML5, CSS, SwiftUI</span>
          </div>
          <div className="flex items-center gap-3">
            <span>-</span>
            <span className="text-base font-bold">Framework/ Library</span>
            <span className="text-sm opacity-70">React, React Native, Node.js, Next.js, JQuery, Tensorflow, Pytorch, FastAPI, Flask</span>
          </div>
          <div className="flex items-center gap-3">
            <span>-</span>
            <span className="text-base font-bold">Environment</span>
            <span className="text-sm opacity-70">MacOS, Ubuntu, AWS</span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="text-xl p-2 border-b border-gray-500">
            <span>📚 Study</span>
          </div>
          <Studys />
        </div>
      </div>
    </section>
  );
}
