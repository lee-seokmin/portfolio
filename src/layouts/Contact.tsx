import Link from "next/link";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-between items-center text-white px-6 snap-start bg-black/70 backdrop-blur-lg"
    >
      <div className="flex flex-col justify-center items-center text-center flex-grow">
        <h2 className="text-5xl font-bold mb-4">Contact</h2>
        <p className="max-w-2xl text-lg mb-6">
          궁금한 점이 있으시면 언제든지 연락주세요.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="mailto:dltjrals13@naver.com"
            className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            Email
          </Link>
          <Link
            href="https://github.com/lee-seokmin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-800 transition"
          >
            GitHub
          </Link>
          <Link
            href="https://www.instagram.com/lee_seokmin__"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-pink-500 rounded-lg hover:bg-pink-800 transition"
          >
            Instagram
          </Link>
        </div>
      </div>

      <Footer />
    </section>
  );
}
