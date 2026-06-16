import React from "react";

interface WhatsAppCTAProps {
  lang: "en" | "ar";
}

export const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({ lang }) => {
  const phoneNumber = "+9647700000000"; // Replace with actual agency number
  const message =
    lang === "en"
      ? "Hello UP TREND, I am interested in your marketing services. I'd like to get a consultation."
      : "مرحباً أب تريند، أنا مهتم بالخدمات التسويقية وأرغب في الحصول على استشارة مجانية.";
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodedText}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 z-50 flex items-center justify-center p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-[#050B14] cursor-pointer group ltr:right-6 rtl:left-6"
      aria-label="Contact us on WhatsApp"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping -z-10"></span>
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.588 1.485 5.367 1.486 5.42.003 9.83-4.402 9.834-9.822.002-2.626-1.013-5.093-2.862-6.944C17.078 1.94 14.617.925 12.008.925 6.589.925 2.18 5.33 2.176 10.75c-.001 1.874.49 3.708 1.42 5.31l-.995 3.635 3.72-.976zM17.47 15.2c-.3-.15-1.782-.88-2.05-.98-.268-.1-.463-.15-.658.15-.195.3-.75.95-.92 1.15-.17.2-.34.22-.64.07-1.155-.58-1.907-1.03-2.67-2.33-.2-.35-.02-.54.15-.71.155-.15.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.658-1.58-.9-2.17-.237-.58-.478-.5-.658-.51-.17-.008-.365-.01-.56-.01-.195 0-.51.07-.78.37-.268.3-1.025 1.002-1.025 2.443 0 1.44 1.05 2.83 1.196 3.03.147.2 2.07 3.16 5.01 4.43.7.3 1.24.48 1.67.62.7.22 1.35.19 1.86.11.565-.084 1.783-.73 2.03-1.43.25-.7.25-1.3.175-1.43-.075-.13-.27-.205-.57-.355z" />
      </svg>
      {/* Label only visible on hover for accessibility/premium feel */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap text-sm font-medium ltr:group-hover:ml-2 rtl:group-hover:mr-2">
        {lang === "en" ? "Chat with Us" : "تواصل معنا"}
      </span>
    </a>
  );
};
