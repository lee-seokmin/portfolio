import Image from "next/image";
import React from "react";

export default function About() {
  const sectionRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen flex snap-start items-center justify-center px-6 sm:px-12 py-20 bg-gradient-to-b from-black/40 to-black/40 backdrop-blur-lg"
    >
      <div className={`relative z-10 max-w-3xl w-full text-center text-white transition-all duration-700 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-white/20">
          <Image
            src="/image/profile.jpg"
            alt="profile"
            width={160}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <h2 className="text-xl md:text-4xl font-extrabold mt-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">
          안녕하세요, 저는 풀스택 개발자입니다.
        </h2>
        <div className="flex flex-col gap-3 mt-5 text-gray-300 text-base md:text-lg leading-relaxed">
          <p>
            웹 애플리케이션 개발과 AI에 열정을 갖고 있습니다. 
          </p>
          <p>
            오류를 극복할 때 큰 희열을 느낍니다.
          </p>
          <p>
            오픈 소스 커뮤니티에 기여하며 함께 성장하는 개발 문화를 만들어가는 것을 목표로 합니다.
          </p>
        </div>
      </div>
    </section>
  );
}