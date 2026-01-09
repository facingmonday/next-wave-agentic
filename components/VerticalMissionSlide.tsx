"use client";

import { motion } from "framer-motion";

export function VerticalMissionSlide({
  title,
  body,
}: {
  title: string;
  body?: string;
}) {
  return (
    <section className="h-[90vh] flex items-center justify-center px-10 sm:px-20 relative">
      <div className="relative flex w-full max-w-7xl h-full">
        {/* DESKTOP: TITLE — LEFT CENTER */}
        <motion.div
          initial={{ opacity: 0, y: 40, x: -150 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
          transition={{
            duration: 1.4,
            ease: [0.25, 0.1, 0.25, 1],
            opacity: { duration: 1.2 },
            x: { duration: 1.4 },
          }}
          className="hidden sm:block absolute top-1/3 -translate-y-1/2"
        >
          <h1 className="text-white font-bold text-2xl sm:text-4xl md:text-6xl lg:text-7xl leading-[0.9]">
            {title}
          </h1>
        </motion.div>

        {/* DESKTOP: BODY — RIGHT LOWER */}
        {body && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
            transition={{
              duration: 1.6,
              ease: [0.25, 0.1, 0.25, 1],
              opacity: { duration: 1.3 },
            }}
            className="hidden sm:block absolute right-10 bottom-32 max-w-2xl text-right"
          >
            <p className="text-gray-300 text-2xl md:text-3xl leading-snug font-medium">
              {body}
            </p>
          </motion.div>
        )}

        {/* MOBILE VERSION */}
        <div className="sm:hidden flex flex-col items-center justify-center w-full h-full text-center space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              opacity: { duration: 1 },
            }}
            className="text-white font-bold text-5xl leading-[0.9]"
          >
            {title}
          </motion.h1>

          {body && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.25, 0.1, 0.25, 1],
                opacity: { duration: 1.1 },
              }}
              className="text-gray-300 text-xl max-w-xs"
            >
              {body}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
