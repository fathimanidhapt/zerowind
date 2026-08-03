import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function BrandStory() {
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["original", "smart", "unique"];

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 1200);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className="py-24 px-4 md:px-8 w-full max-w-[1800px] mx-auto bg-neutral-950 text-white">
      
      <div className="relative w-full flex flex-col items-start text-left mb-16 overflow-hidden">
        
        <svg
          className="absolute top-[-5%] right-[5%] w-[38vw] h-auto pointer-events-none select-none z-0 text-neutral-900/10 fill-current select-none"
          viewBox="0 0 395 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.4599 23.0217C17.9948 15.3673 19.5298 7.71297 21.0647 0.0585938H134.042C132.508 7.67258 130.973 15.2867 129.438 22.9007C105.303 40.8349 81.1889 58.7085 57.0544 76.6024H117.946C116.411 84.2568 114.492 91.9111 112.978 99.5655H0C1.53491 91.9515 3.45356 84.3374 4.96827 76.7234C29.1028 58.8296 53.2171 40.956 77.3516 23.0217H16.4599Z" />
          <path d="M389.521 0.0606479C370.759 23.6902 352.481 47.3604 333.982 70.8688C319.541 89.2272 299.123 99.5676 278.058 99.5676H237.464C242.816 74.4232 248.188 49.2183 253.54 24.0336C240.897 39.6655 228.699 55.3177 216.399 70.8486C201.898 89.1666 181.54 99.5473 160.496 99.5473H119.901C123.355 82.9864 127.172 66.3851 130.626 49.8242C134.079 33.2633 137.512 16.6215 140.966 0.0404319H175.441C170.069 25.5685 164.717 51.0764 159.365 76.5842C167.403 76.4631 175.441 72.3227 181.197 65.0924C195.375 47.239 209.149 29.3655 223.71 11.512C229.466 4.28175 237.12 0.101001 245.542 0.020216H293.024C287.672 25.5483 282.299 51.0562 276.947 76.564C285.369 76.4428 293.084 72.3431 298.779 65.0725C315.684 43.4423 332.871 21.6908 350.098 0H389.541L389.521 0.0606479Z" />
        </svg>

        <h2 className="relative text-3xl md:text-5xl lg:text-6xl font-display font-semibold tracking-wide leading-[1.2] text-left select-none z-10">
          <div className="flex flex-wrap items-center">
            <span>ZeroWind creates</span>
            <span className="relative inline-block h-[38px] md:h-[58px] lg:h-[70px] min-w-[125px] md:min-w-[220px] lg:min-w-[310px] overflow-hidden mx-2 md:mx-3 text-brand">
              <AnimatePresence>
                <motion.span
                  key={wordIndex}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 block font-display font-bold text-brand text-left"
                >
                  {words[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>
          <span className="text-white font-display block mt-1.5">
            fabrics
          </span>
        </h2>

        
        <div className="w-full max-w-4xl mx-auto flex flex-col items-start text-left z-10 mt-8">
          
          <p className="text-lg md:text-2xl font-normal leading-relaxed text-white/90 max-w-lg w-full mb-10 drop-shadow-sm">
            Passion for outdoor activities and pursuit of technicality make ZeroWind
            the ideal brand for creating performance fabrics for a wide range of uses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr] gap-8 text-neutral-400 font-body text-sm md:text-base leading-relaxed w-full">
            <div>
              <p>
                From the beginning, ZeroWind has developed much of the fabric range
                using dynamic breathability membranes : + Intensity + Breathability.
                The extraordinary technical performance of ZeroWind fabrics is
                guaranteed by the constant investment and research work on innovative
              </p>
            </div>
            <div>
              <p>
                materials to create unique garments for cycling, outdoor, running and
                urban sectors. Laboratory tests and practical trials ensure the best
                experience of use and usage by the end consumer.
              </p>
            </div>
          </div>

          
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-block border border-brand text-brand hover:bg-brand hover:text-black font-body font-normal tracking-wide px-8 py-2.5 rounded-full transition-all duration-300 text-sm"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <Link
          to="/features#zwr"
          className="relative block w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl cursor-pointer"
        >
          <video
            src="/video/0a804172.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/40" />

          
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center gap-6">
            <div className="w-[120px] overflow-hidden relative bg-transparent py-1 select-none pointer-events-none">
              <div className="animate-marquee whitespace-nowrap flex" style={{ animationDuration: "6s" }}>
                <span className="font-display font-medium text-[10px] tracking-[0.25em] text-neutral-400 uppercase flex-shrink-0">
                  . FEATURES&nbsp;
                </span>
                <span className="font-display font-medium text-[10px] tracking-[0.25em] text-neutral-400 uppercase flex-shrink-0">
                  . FEATURES&nbsp;
                </span>
              </div>
            </div>
            <img
              src="/images/download (1).svg"
              alt="ZWWR Logo"
              className="w-[200px] md:w-[240px] h-auto object-contain brightness-200"
            />
            
            <svg
              className="w-12 h-16 text-white"
              viewBox="0 0 63 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M62.7391 57.2796c-.04-.28-.14-.63-.19-.93-.12-.62-.23-1.23-.4-1.92-.1-.4-.26-.86-.38-1.29-.19-.67-.37-1.31-.61-2.04-.16-.49-.38-1.04-.57-1.56-.26-.74-.51-1.45-.82-2.24-.23-.59-.52-1.25-.78-1.87-.33-.79-.63-1.56-1-2.4-.3-.68-.65-1.43-.98-2.14-.39-.86-.76-1.7-1.19-2.6-.36-.77-.79-1.6-1.18-2.4-.45-.93-.89-1.82-1.38-2.79-.44-.87-.94-1.82-1.41-2.73-.47-.9-.9-1.75-1.39-2.68 0 0 0-.02.01-.03-.14-.21-.25-.43-.35-.67-.16-.25-.29-.52-.39-.81v-.01c-.15-.23-.28-.48-.39-.74-.02.03-.03.05-.05.08-4.85-8.97-9.22-16.12999-9.26-16.19999l-.89-1.46-.89 1.46c-.26.43-2.2 3.61999-4.85 8.24999v.01c.02-.03.03-.06.05-.08.1.26.23.51.38.74v.01c.1.28.23.55.39.81.1.23.21.46.35.67 0 0 0 .02-.01.03 1.97-3.48 3.62-6.27 4.57-7.87 1.65 2.75 5.35 9.05 9.21 16.28 8.18 15.33 12.51 26.22 12.51 31.48 0 11.97-9.74 21.72-21.72 21.72-.35 0-.69-.02-1.04-.05l-.33-.02c-5.2-.32-9.87-2.49-13.43-5.81h-.05c.01 0 .02.02.03.03-.62-.02-1.23-.02-1.85-.03-.39-.06-.78-.1-1.17-.13 3.82 4.32 9.2 7.26 15.28 7.91.59 0 1.19.07 1.78.16.62 0 1.23 0 1.85.03-.01 0-.02-.02-.03-.03.25-.01.49-.05.74-.07.37-.03.73-.06 1.09-.1.42-.05.84-.12 1.26-.19.35-.06.71-.13 1.05-.2.41-.09.82-.2 1.22-.32.34-.1.68-.19 1.01-.3.4-.13.79-.28 1.18-.43.32-.13.64-.25.96-.39.38-.17.76-.36 1.13-.54.31-.15.61-.31.91-.47.36-.2.71-.43 1.07-.65.29-.18.58-.36.86-.55.34-.24.67-.49 1-.75.27-.21.54-.41.79-.63.32-.27.62-.55.92-.84.25-.23.5-.45.73-.69.29-.3.57-.61.84-.93.22-.25.45-.5.66-.76.26-.33.51-.67.75-1.01.2-.27.4-.53.59-.81.23-.35.44-.72.66-1.08.17-.29.35-.57.51-.86.2-.38.38-.78.56-1.17.14-.3.29-.59.42-.89.17-.41.31-.83.46-1.25.11-.3.23-.6.32-.91.14-.44.24-.9.35-1.36.07-.3.16-.59.22-.9.1-.51.17-1.03.24-1.56.04-.26.09-.51.12-.78.08-.79.12-1.59.12-2.4 0-.71-.07-1.5-.2-2.36l.03.01Z"
              />
              <path
                fill="currentColor"
                d="M47.4 49.42c-.04-.28-.14-.63-.19-.93-.12-.62-.23-1.23-.4-1.92-.1-.4-.26-.86-.38-1.29-.19-.67-.37-1.31-.61-2.04-.16-.49-.38-1.04-.57-1.56-.26-.74-.51-1.45-.82-2.24-.23-.59-.52-1.25-.78-1.87-.33-.79-.63-1.56-1-2.4-.3-.68-.65-1.43-.98-2.14-.39-.86-.76-1.7-1.19-2.6-.36-.77-.79-1.6-1.18-2.4-.45-.93-.89-1.82-1.38-2.79-.44-.87-.94-1.82-1.41-2.73-.47-.9-.9-1.75-1.39-2.68 0 0 0-.02.01-.03-.14-.21-.25-.43-.35-.67-.16-.25-.29-.52-.39-.81v-.01c-.15-.23-.28-.48-.38-.74-.02.03-.03.05-.05.08-4.86-8.97-9.22-16.12-9.27-16.19L23.8 0l-.89 1.46C21.98 2.98 0 39.06 0 51.78 0 64.5 9.26 74.11 21.26 75.4c.59 0 1.19.07 1.78.16.62 0 1.23 0 1.85.03-.01 0-.02-.02-.03-.03.25-.01.49-.05.74-.07.37-.03.73-.06 1.09-.1.42-.05.84-.12 1.26-.19.35-.06.71-.13 1.05-.2.41-.09.82-.2 1.22-.32.34-.1.68-.19 1.01-.3.4-.13.79-.28 1.18-.43.32-.13.64-.25.96-.39.38-.17.76-.36 1.13-.54.31-.15.61-.31.91-.47.36-.2.71-.43 1.07-.65.29-.18.58-.36.86-.55.34-.24.67-.49 1-.75.27-.21.54-.41.79-.63.32-.27.62-.56.92-.84.25-.23.5-.45.73-.69.29-.3.57-.61.84-.93.22-.25.45-.5.66-.76.26-.33.51-.67.75-1.01.2-.27.4-.53.59-.81.23-.35.44-.72.66-1.08.17-.29.35-.57.51-.86.2-.38.38-.78.56-1.17.14-.3.29-.59.42-.89.17-.41.31-.83.46-1.25.11-.3.23-.6.32-.91.14-.44.24-.9.35-1.36.07-.3.16-.59.22-.9.1-.51.17-1.03.24-1.56.04-.26.09-.51.12-.78.08-.79.12-1.59.12-2.4 0-.71-.07-1.5-.2-2.36v.01ZM23.8 73.5c-.35 0-.69-.02-1.04-.05l-.33-.02C11.02 72.72 2.08 63.21 2.08 51.78 2.09 41.04 19.61 11.04 23.8 4.02c1.65 2.75 5.35 9.05 9.21 16.28 8.18 15.33 12.51 26.22 12.51 31.48 0 11.97-9.74 21.72-21.72 21.72Z"
              />
            </svg>
          </div>
        </Link>

        
        <Link
          to="/features#relife"
          className="relative block w-full h-[400px] md:h-[480px] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl cursor-pointer"
        >
          <video
            src="/video/592ec493.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/40" />

          
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center gap-6">
            <div className="w-[120px] overflow-hidden relative bg-transparent py-1 select-none pointer-events-none">
              <div className="animate-marquee whitespace-nowrap flex" style={{ animationDuration: "6s" }}>
                <span className="font-display font-medium text-[10px] tracking-[0.25em] text-neutral-400 uppercase flex-shrink-0">
                  . FEATURES&nbsp;
                </span>
                <span className="font-display font-medium text-[10px] tracking-[0.25em] text-neutral-400 uppercase flex-shrink-0">
                  . FEATURES&nbsp;
                </span>
              </div>
            </div>
            <img
              src="/images/download.svg"
              alt="RELIFE Logo"
              className="w-[240px] md:w-[280px] h-auto object-contain brightness-200"
            />

            <svg
              className="w-17 h-17 text-white animate-spin"
              style={{ animationDuration: "12s" }}
              viewBox="0 0 78 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Livello_1_10">
                <g id="Group 71">
                  <path
                    id="Vector_114"
                    d="M13.3003 45.3778C13.3416 45.3778 13.3828 45.3778 13.4241 45.3709C13.4586 45.3709 13.4861 45.364 13.5205 45.3571C13.5893 45.3434 13.6581 45.3158 13.7201 45.2883C13.844 45.2195 13.961 45.1231 14.0436 45.013C14.1881 44.8272 14.2707 44.5656 14.2363 44.3316C13.4173 38.0961 14.9796 31.8605 18.648 26.7812C21.7658 22.4658 25.9159 19.41 30.9746 17.6962C32.5851 17.1525 34.3677 16.7809 36.281 16.5813L36.5632 20.0363C36.5839 20.1877 36.6596 20.3736 36.7559 20.4974C36.9073 20.6901 37.1758 20.8416 37.4166 20.8691C37.6644 20.9173 37.9328 20.814 38.1187 20.6626L49.5368 11.5914C49.6607 11.5089 49.7777 11.3781 49.8465 11.2542C50.0805 10.8206 49.8947 10.2012 49.468 9.96028L36.5907 2.80245C36.4462 2.72674 36.2535 2.69233 36.0814 2.7061C35.5928 2.74739 35.1867 3.23605 35.2211 3.72471L35.5033 7.17974C26.735 8.01941 18.765 12.1007 12.9837 18.7355C7.49829 25.033 4.51127 33.0856 4.57321 41.4066C4.57321 41.7782 4.88292 42.2256 5.22705 42.3564L13.1764 45.3778C13.2177 45.3778 13.259 45.3847 13.3003 45.3847V45.3778ZM6.36267 40.8697C6.43149 33.1682 9.24645 25.7419 14.3326 19.9055C19.9901 13.4153 27.8568 9.49915 36.4256 8.88661C36.6733 8.88661 36.9349 8.76272 37.1 8.57689C37.2652 8.39106 37.3685 8.12265 37.3547 7.87488L37.1276 5.14939L47.4995 10.917L38.2081 18.3019L37.9948 15.6521C37.9948 15.6521 37.9948 15.6453 37.9948 15.6384C37.9535 15.1497 37.4166 14.723 36.9142 14.7299C34.5673 14.9088 32.3717 15.3355 30.3965 16.0031C24.973 17.8339 20.5338 21.11 17.1889 25.735C13.5274 30.8006 11.8136 36.9398 12.3023 43.1478L6.35579 40.8697H6.36267Z"
                    fill="currentColor"
                  />
                  <path
                    id="Vector_115"
                    d="M54.4815 11.5237L48.0326 16.7475C47.7848 16.9402 47.6265 17.2912 47.6609 17.601C47.6953 17.9176 47.9431 18.2273 48.2322 18.358C55.7617 21.5928 61.0888 27.9661 62.8438 35.8534C63.9863 40.9878 63.415 46.4525 61.2333 51.3322L58.1637 49.8869C57.8677 49.7493 57.4135 49.7699 57.1451 49.9695C56.8835 50.1691 56.7321 50.5889 56.7803 50.9124L58.9276 65.3657C58.9345 65.4139 59.0309 65.6548 59.0446 65.703C59.1685 65.9163 59.4163 66.1022 59.6503 66.1641C59.7191 66.1779 59.788 66.1847 59.8637 66.1847C60.0426 66.1847 60.2353 66.1366 60.3799 66.054L73.0368 58.4694C73.1538 58.38 73.2708 58.2354 73.3328 58.1047C73.5393 57.6642 73.319 57.0516 72.8716 56.8452L69.7676 55.3792C71.97 50.5958 73.0299 45.3376 72.8441 40.1206C72.5895 33.0316 70.3595 26.5689 66.2162 20.9115C63.4563 17.1467 59.7673 13.8706 55.569 11.4617C55.2386 11.2553 54.7706 11.2897 54.4815 11.5306V11.5237ZM64.7778 21.9576C68.7077 27.3191 70.8207 33.4514 71.0615 40.1757C71.2474 45.372 70.1255 50.6165 67.8061 55.3516C67.7029 55.565 67.7097 55.8609 67.7923 56.0881C67.8749 56.3152 68.0539 56.5423 68.2741 56.6456L70.7036 57.7949L60.5244 63.8929L58.7831 52.1581L61.2126 53.3075C61.426 53.4108 61.7288 53.4314 61.956 53.3557C62.1831 53.28 62.3964 53.0804 62.5066 52.8671C65.1494 47.4367 65.8928 41.2631 64.6057 35.4818C62.8232 27.4705 57.6062 20.9183 50.2144 17.3119L55.1629 13.2994C58.9621 15.5706 62.2863 18.5576 64.7847 21.9783L64.7778 21.9576Z"
                    fill="currentColor"
                  />
                  <path
                    id="Vector_116"
                    d="M54.6484 60.6772C54.3456 60.5465 53.9533 60.6153 53.6987 60.808C50.0165 63.5954 45.8113 65.2472 41.2 65.729C38.1648 66.0456 34.9162 65.7634 32.06 64.9375C26.6021 63.3546 22.101 60.2092 18.6735 55.5635L21.5985 53.5263C21.688 53.4368 21.7775 53.2992 21.8257 53.1753C21.9977 52.721 21.7293 52.1154 21.2819 51.9364L7.68205 46.5749C7.40675 46.4579 7.00756 46.4855 6.75979 46.6575C6.51202 46.8296 6.34684 47.1737 6.35372 47.4697L6.57396 62.0744C6.57396 62.4116 6.7942 62.8108 7.09704 62.9622C7.3861 63.1137 7.84035 63.0586 8.10877 62.8728L10.9237 60.9319C15.9136 67.9452 23.2641 72.7699 31.7021 74.5662C33.9871 75.048 36.3271 75.2889 38.6603 75.2889C44.7238 75.2889 50.8011 73.6852 56.0456 70.6087C56.3553 70.4229 56.5755 69.9411 56.5205 69.5832L55.2266 61.4274C55.1784 61.1177 54.9444 60.8011 54.6622 60.6772H54.6484ZM32.06 72.8111C23.8147 71.0561 16.6638 66.2452 11.9286 59.2594C11.7909 59.0599 11.5156 58.8809 11.2747 58.8396C11.2334 58.8327 11.1853 58.8258 11.1371 58.8258C10.9306 58.8258 10.6966 58.8947 10.5452 58.9979L8.32213 60.5258L8.14318 48.6672L19.1759 53.017L16.9528 54.5587C16.7601 54.6963 16.5949 54.9372 16.5536 55.1712C16.5055 55.4052 16.5743 55.7081 16.7119 55.9077C20.4354 61.2623 25.4252 64.8756 31.5507 66.6513C34.6272 67.5391 38.1097 67.8488 41.3789 67.5047C45.8594 67.0367 49.9821 65.5294 53.6505 63.0311L54.6484 69.3286C47.8623 73.1553 39.6583 74.4217 32.0531 72.8111H32.06Z"
                    fill="currentColor"
                  />
                </g>
              </g>
            </svg>
          </div>
        </Link>
      </div>
    </section>
  );
}
