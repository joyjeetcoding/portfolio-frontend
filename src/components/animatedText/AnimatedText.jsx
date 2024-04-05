import { motion } from "framer-motion";

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,      //This property will delay each of its children by 0.08secs
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y:0,
        transition: {
            duration: 1,
        }
    }
}

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="">
      <div className="px-4 lg:px-0">
        <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`text-center ${className}`}>
            {/* the texts will get splited to words by words */}
          {text.split(" ").map((word, index) => (
            <motion.span 
            variants={singleWord}           
            key={word + "-" + index}>{word}&nbsp;</motion.span>
          ))}
        </motion.h1>
      </div>
    </div>
  );
};

export default AnimatedText;
