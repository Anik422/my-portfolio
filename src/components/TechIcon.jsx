
import { SiJavascript, SiPython, SiReact, SiScrapy, SiSqlite, SiPostman, SiSelenium, SiGooglemaps, SiLeaflet, SiFastapi, SiRedux, SiAxios, SiReactrouter, SiDjango, SiMui, SiMysql, SiPostgresql } from 'react-icons/si';
import { TbBrandCpp, TbFileTypeSql, TbApi } from "react-icons/tb";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaJava, FaBootstrap, FaGitAlt, FaGithub, FaTheaterMasks, FaCode, FaCss3Alt } from "react-icons/fa";
import { AiOutlineOpenAI } from "react-icons/ai";


const techIcons = {
  "C/C++": <TbBrandCpp className="text-blue-600" />, // Blue is common for C/C++
  "JavaScript": <SiJavascript className="text-[#f7df1e]" />, // Official JS yellow
  "Python": <SiPython className="text-[#3776AB]" />, // Official Python blue
  "React": <SiReact className="text-[#61DAFB]" />, // Official React cyan
  "Java": <FaJava className="text-[#007396]" />, // Official Java blue
  "SQL": <TbFileTypeSql className="text-[#003B57]" />, // Dark SQL blue
  "Fast API": <SiFastapi className="text-[#009688]" />, // Official FastAPI green
  "ReactJS": <RiReactjsFill className="text-[#61DAFB]" />, // Same as React
  "Redux": <SiRedux className="text-[#764ABC]" />, // Official Redux purple
  "Bootstrap": <FaBootstrap className="text-[#7952B3]" />, // Official Bootstrap purple
  "Tailwind CSS": <RiTailwindCssFill className="text-[#38BDF8]" />, // Official Tailwind cyan
  "Django": <SiDjango className="text-[#092E20]" />, // Official Django green-black
  "Material UI": <SiMui className="text-[#007FFF]" />, // Official MUI blue
  "MySQL": <SiMysql className="text-[#4479A1]" />, // Official MySQL blue
  "PostgreSQL": <SiPostgresql className="text-[#336791]" />, // Official PostgreSQL blue
  "SQLite": <SiSqlite className="text-[#003B57]" />, // SQLite blue
  "Git": <FaGitAlt className="text-[#F05032]" />, // Git orange
  "GitHub": <FaGithub className="text-[#181717]" />, // GitHub black
  "POSTMAN": <SiPostman className="text-[#FF6C37]" />, // Postman orange
  "Selenium": <SiSelenium className="text-[#43B02A]" />, // Selenium green
  "Scrapy": <SiScrapy className="text-[#E41F24]" />, // Scrapy red
  "Playwright": <FaTheaterMasks className="text-[#5A2A83]" />, // Custom purple mask
  "OpenAI API": <AiOutlineOpenAI className="text-[#412991]" />, // OpenAI purple
  "React Router": <SiReactrouter className="text-[#CA4245]" />, // React Router red
  "API": <TbApi className="text-green-500" />, // Neutral green
  "Axios": <SiAxios className="text-[#5A29E4]" />, // Axios purple
  "Code": <FaCode className="text-gray-600" />, // Neutral gray
  "React-Leaflet": <SiLeaflet className="text-[#199900]" />, // Leaflet green
  "CSS": <FaCss3Alt className="text-[#264de4]" />, // Official CSS blue
  "Google Maps API": <SiGooglemaps className="text-[#4285F4]" /> // Google blue
};


export const TechIcon = ({ lang }) => {
    const getBestCharMatchIcon = (lang) => {
        const inputChars = lang.toLowerCase().replace(/\s+/g, '');

        let bestMatch = null;
        let maxMatches = 0;

        for (const key in techIcons) {
            const keyChars = key.toLowerCase().replace(/\s+/g, '');

            // Count how many characters from input exist in the key
            let matchCount = 0;
            for (const char of inputChars) {
                if (keyChars.includes(char)) {
                    matchCount++;
                }
            }

            if (matchCount > maxMatches) {
                maxMatches = matchCount;
                bestMatch = key;
            }
        }

        return bestMatch ? techIcons[bestMatch] : techIcons["Code"];
    };

    return (
        <>
            {techIcons[lang] || getBestCharMatchIcon(lang)}
        </>
    );
};

