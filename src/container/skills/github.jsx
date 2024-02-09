import { motion } from "framer-motion";

const GitHub = () => {
  return (
    <>
      <div className="app__skills-acc-github">
        <motion.img
          whileHover={{ scale: [1, 1.05] }}
          transition={{ duration: 0.25 }}
          className="github__stats"
          src="https://github-readme-streak-stats.herokuapp.com/?user=github2k10"
          alt="github_stats"
          loading="lazy"
        />

        <motion.img
          whileHover={{ scale: [1, 1.05] }}
          transition={{ duration: 0.25 }}
          className="github__trophy"
          src="https://github-profile-trophy.vercel.app/?username=github2k10&&theme=flat&column=3&margin-w=25&margin-h=25"
          alt="github_stats"
          loading="lazy"
        />

        {/* <motion.img
          whileHover={{ scale: [1, 1.05] }}
          transition={{ duration: 0.25 }}
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Github2k10&layout=compact&langs_count=10"
          alt="github_stats"
          loading="lazy"
        /> */}
      </div>
    </>
  );
};

export default GitHub;
