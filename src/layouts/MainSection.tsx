import React from 'react';

export default function MainSection() {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

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
      className="min-h-screen snap-start flex items-center justify-center relative overflow-hidden px-4 md:px-0"
    >
      <div className="max-w-4xl text-center mx-auto relative z-10 px-4">
        <div className={isVisible ? 'animate-slide-in-left' : 'opacity-0'}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Building digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">experiences</span>
          </h1>
          <p className="text-lg md:text-2xl text-zinc-300 max-w-lg mx-auto font-bold">
            항상 새로운 것을 추구하고 배워가는
          </p>
          <p className="text-lg md:text-2xl text-zinc-300 max-w-lg mx-auto font-bold">
            <span className="myname">개발자 이석민</span>입니다.
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}