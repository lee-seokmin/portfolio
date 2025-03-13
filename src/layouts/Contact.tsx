export default function Contact() {
  return (
    <section id="contact" className="h-screen flex flex-col justify-center items-center text-white px-6 snap-start bg-black/70 backdrop-blur-lg">
      <h2 className="text-5xl font-bold mb-4">Contact</h2>
      <p className="max-w-2xl text-center text-lg">궁금한 점이 있으시면 언제든지 연락주세요.</p>
      <div className="mt-6 flex gap-4">
        <a href="mailto:dltjrals13@naver.com" className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">Email</a>
        <a href="https://github.com/lee-seokmin" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-800 transition">GitHub</a>
        <a href="https://www.instagram.com/lee_seokmin__" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-pink-500 rounded-lg hover:bg-pink-800 transition">Instagram</a>
      </div>
    </section>
  )
}