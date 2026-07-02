import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/918905122222?text=Hello%20I%20want%20to%20book%20a%20free%20demo%20class"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl z-50
                 hover:bg-green-600 hover:scale-110 transition duration-300
                 animate-bounce"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}