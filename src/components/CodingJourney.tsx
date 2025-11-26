import { useEffect, useState } from "react";
import {GitHubCalendar} from "react-github-calendar";
import { SiLeetcode, SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

interface LCStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
}

export default function CodingJourney() {
  const [lcStats, setLcStats] = useState<LCStats | null>(null);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/priyanshujindal009")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setLcStats({
            totalSolved: data.totalSolved,
            easySolved: data.easySolved,
            mediumSolved: data.mediumSolved,
            hardSolved: data.hardSolved,
          });
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section id="coding" className="py-32 text-white max-w-7xl mx-auto px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-6xl font-extrabold tracking-wide"
      >
        My Coding Journey ⚡
      </motion.h1>

      <p className="text-center text-gray-300 mt-4 text-lg">
        Measuring progress & dedication in the world of code 🚀
      </p>

      {/* GitHub CARD */}
      <div className="mt-20 w-full bg-black/40 border border-white/10 backdrop-blur-2xl rounded-2xl p-8 shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <SiGithub className="text-white" size={26} /> GitHub Contributions
          </h2>

          <a
            href="https://github.com/priyanshujindal12"
            target="_blank"
            className="text-gray-300 underline"
          >
            View on GitHub ↗
          </a>
        </div>

        <div className="flex gap-10 mt-6">
          {/* Heatmap */}
          <GitHubCalendar
            username="priyanshujindal12"
            blockSize={12}
            blockMargin={3}
            fontSize={14}
            colorScheme="dark"
          />

          {/* Stats Right Side */}
          <div className="flex flex-col gap-4 min-w-[180px]">
            <div className="bg-green-900/20 border border-green-500/20 px-6 py-3 rounded-xl text-center">
              <p className="text-3xl font-bold text-green-400">18</p>
              <p className="text-gray-300 text-xs">Public Repos</p>
            </div>
            <div className="bg-yellow-900/20 border border-yellow-500/20 px-6 py-3 rounded-xl text-center">
              <p className="text-3xl font-bold text-yellow-400">42</p>
              <p className="text-gray-300 text-xs">Avg Monthly Commits</p>
            </div>
          </div>
        </div>
      </div>


{/* LeetCode CARD - matched size to GitHub */}
<div className="w-full mt-16 bg-black/40 border border-white/10 backdrop-blur-2xl rounded-2xl p-8 shadow-lg">
  <div className="flex justify-between items-center">
    <h2 className="text-2xl font-bold flex items-center gap-3">
      <SiLeetcode className="text-yellow-300" size={26} /> LeetCode Progress
    </h2>

    <a
      href="https://leetcode.com/priyanshujindal009/"
      target="_blank"
      className="text-gray-300 underline hover:text-yellow-300 transition"
    >
      Profile ↗
    </a>
  </div>

  <p className="text-gray-300 text-sm ml-1 mt-3">
    • {lcStats?.totalSolved ?? "—"} Problems Solved
  </p>

  {/* Heatmap + Stats */}
  <div className="flex justify-between gap-10 mt-8">
    
    {/* Heatmap Sized Equal to GitHub Calendar Area */}
    <img
      src={`https://leetcard.jacoblin.cool/priyanshujindal009?theme=nord&ext=contest`}
      className="max-w-[35%] rounded-lg border border-white/10 shadow-md"
      alt="LeetCode Contest Graph"
    />

    {/* Stats Column */}
    <div className="flex flex-col gap-4 min-w-[180px]">

      <div className="bg-green-900/30 border border-green-600/20 px-6 py-3 rounded-xl text-center">
        <p className="text-3xl font-extrabold text-green-400">
          {lcStats?.easySolved ?? "—"}
        </p>
        <p className="text-xs text-gray-300">Easy</p>
      </div>

      <div className="bg-yellow-900/30 border border-yellow-600/20 px-6 py-3 rounded-xl text-center">
        <p className="text-3xl font-extrabold text-yellow-400">
          {lcStats?.mediumSolved ?? "—"}
        </p>
        <p className="text-xs text-gray-300">Medium</p>
      </div>

      <div className="bg-red-900/30 border border-red-600/20 px-6 py-3 rounded-xl text-center">
        <p className="text-3xl font-extrabold text-red-400">
          {lcStats?.hardSolved ?? "—"}
        </p>
        <p className="text-xs text-gray-300">Hard</p>
      </div>

    </div>
  </div>
</div>




    </section>
  );
}
