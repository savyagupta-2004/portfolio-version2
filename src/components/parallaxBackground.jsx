import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  const allImages = [
    "/assets/extra1.jpeg", // default image, index 0
    "/assets/smoke.png",
    "/assets/m3.png",
    "/assets/city_ruin.jpeg",
    "/assets/burnt.png",
  ];

  // New state to control slideshow ON/OFF
  const [slideshowOn, setSlideshowOn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slideshow cycling effect
  useEffect(() => {
    if (!slideshowOn) {
      // Reset to the default image
      setCurrentIndex(0);
      return;
    }

    // Start cycling through the rest of the images
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        // Only cycle among slideshow images (skip 0)
        if (prev < 1 || prev >= allImages.length - 1) {
          return 1;
        }
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [slideshowOn, allImages.length]);

  return (
    <section className="absolute inset-0 bg-black/80">
      <div className="relative h-screen overflow-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            filter: "brightness(0.8) contrast(1.2) saturate(1.5)",
          }}
        />

        {/* Ruined City Layer */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
            filter: "brightness(0.6) grayscale(0.5)",
          }}
        />

        {/* Accent Layer */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
            opacity: 0.4,
            mixBlendMode: "screen",
            filter: "brightness(1.5) saturate(2)",
          }}
        />

        {/* Midground */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
            filter: "brightness(0.7) contrast(1.2) saturate(1.4)",
          }}
        />

        {/* Foreground Slideshow */}
        <div className="absolute inset-0 -z-10">
          {allImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
                idx === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                filter: "brightness(0.9) saturate(1.5)",
              }}
            />
          ))}
        </div>

        {/* Control Button */}
        <div className="absolute z-20 bottom-8 right-8">
          {slideshowOn ? (
            <button
              onClick={() => setSlideshowOn(false)}
              className="px-5 py-3 text-lg font-semibold rounded-lg backdrop-blur-sm border border-red-500 text-red-300 hover:bg-red-600 hover:text-black transition-all shadow-lg shadow-red-800/40"
            >
              bg will change
            </button>
          ) : (
            <button
              onClick={() => setSlideshowOn(true)}
              className="px-5 py-3 text-lg font-semibold rounded-lg backdrop-blur-sm border border-red-500 text-red-300 hover:bg-red-600 hover:text-black transition-all shadow-lg shadow-green-800/40"
            >
              Explore
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ParallaxBackground;
