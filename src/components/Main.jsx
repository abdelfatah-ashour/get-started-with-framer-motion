import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGraduationCap, FaToolbox, FaGooglePlay } from "react-icons/fa";
import { BiBookContent } from "react-icons/bi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { GrAppleAppStore } from "react-icons/gr";

import "../assets/css/main";

export default function Main() {
  const { ref: firstSection, inView: firstSectionView } = useInView();
  const { ref: secondSection, inView: secondSectionView } = useInView();
  const { ref: thirdSection, inView: thirdSectionView } = useInView();
  const { ref: fourSection, inView: fourSectionView } = useInView();

  const { ref: screenshot, inView: screenshotsInView } = useInView();

  const controlFirstSectionLeft = useAnimation();
  const controlFirstSectionRight = useAnimation();
  const controlThirdSectionLeft = useAnimation();
  const controlThirdSectionRight = useAnimation();
  const controlScreenShots = useAnimation();

  const opacityDownloadApp = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  const featuresArr = [
    {
      icon: <FaGraduationCap />,
      head: "personalize learning",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      icon: <BiBookContent />,
      head: "trusted content",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      icon: <FaToolbox />,
      head: "tools to touchers",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      icon: <AiFillSafetyCertificate />,
      head: "safe platform",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    if (firstSectionView) {
      controlFirstSectionLeft.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.5,
        },
      });
      controlFirstSectionRight.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.5,
        },
      });
    }

    if (!firstSectionView) {
      controlFirstSectionLeft.start({
        x: "-100vw",
      });
      controlFirstSectionRight.start({
        x: "100vw",
      });
    }
  }, [firstSectionView]);

  useEffect(() => {
    if (thirdSectionView) {
      controlThirdSectionLeft.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.5,
          staggerChildren: 0.2,
        },
      });
      controlThirdSectionRight.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.5,
        },
      });
    }
    if (!thirdSectionView) {
      controlThirdSectionLeft.start({ x: "-100vw" });
      controlThirdSectionRight.start({ x: "100vw" });
    }
  }, [thirdSectionView]);

  useEffect(() => {
    if (screenshotsInView) {
      console.log("start animation");
      controlScreenShots.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.2,
          delayChildren: 0.2,
        },
      });
    }

    if (!screenshotsInView) {
      console.log("cancel animation");
      controlScreenShots.start({
        x: "-100vw",
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.2,
        },
      });
    }
  }, [screenshotsInView]);

  return (
    <main>
      <div className="container">
        <section className="subscribe" ref={firstSection}>
          <motion.div
            animate={controlFirstSectionLeft}
            className="wrapper-img"></motion.div>

          <motion.div
            animate={controlFirstSectionRight}
            className="wrapper-content-subscribe">
            <div className="wrapper-content">
              <small>about me</small>
              <h3>learn new skills online with top educator</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Incidunt maxime itaque beatae mollitia odio debitis commodi
                libero.
              </p>
              <button className="read-more" type="button">
                read more
              </button>
            </div>
          </motion.div>
        </section>
        <section className="features" ref={secondSection}>
          <h3>our features</h3>
          <motion.div
            className="wrapper-features"
            initial="hidden"
            variants={container}
            animate={secondSectionView ? "visible" : "hidden"}>
            {featuresArr.map((feat, i) => {
              return (
                <motion.div variants={item} className="one-feature" key={i}>
                  <div className="icon-feat">{feat.icon}</div>
                  <h4>{feat.head}</h4>
                  <p>{feat.content}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
        <section className="subscribe reverse-subscribe" ref={thirdSection}>
          <motion.div
            className="wrapper-content-subscribe"
            animate={controlThirdSectionLeft}>
            <div className="wrapper-content">
              <small>about me</small>
              <h3>learn new skills online with top educator</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Incidunt maxime itaque beatae mollitia odio debitis commodi
                libero.
              </p>
              <button className="read-more" type="button">
                read more
              </button>
            </div>
          </motion.div>
          <motion.div
            className="wrapper-img"
            animate={controlThirdSectionRight}></motion.div>
        </section>
        <section className="download-our-app" ref={fourSection}>
          <motion.div
            variants={opacityDownloadApp}
            className="parentDownloadApp"
            initial="hidden"
            animate={fourSectionView ? "visible" : "hidden"}
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}>
            <div className="wrapper-image"></div>
            <div className="wrapper-content">
              <h3>download our app</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                ex impedit, atque pariatur obcaecati veniam distinctio alias
                maiores officiis sunt nostrum.
              </p>
              <div className="wrapper-buttons-download">
                <button className="apple" type="button">
                  <GrAppleAppStore />
                  apple
                </button>
                <button className="google" type="button">
                  <FaGooglePlay />
                  google
                </button>
              </div>
            </div>
          </motion.div>
        </section>
        <section className="screenshots">
          <h3>app&apos;s screenshots</h3>
          <div className="container-screenshots" ref={screenshot}>
            <motion.div
              className="one-screenshot"
              animate={controlScreenShots}></motion.div>
            <motion.div
              className="one-screenshot"
              animate={controlScreenShots}></motion.div>
            <motion.div
              className="one-screenshot"
              animate={controlScreenShots}></motion.div>
            <motion.div
              className="one-screenshot"
              animate={controlScreenShots}></motion.div>
            <motion.div
              className="one-screenshot"
              animate={controlScreenShots}></motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}
