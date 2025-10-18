import mortgageCalculatorImg from "/src/images/mortgage-calculator.png";
import rockPaperScissorsImg from "/src/images/rock-paper-scissors.png";
import characterCounterImg from "/src/images/character-counter.png";
import recipeHubImg from "/src/images/recipe-hub.png";
import faqPageImg from "/src/images/faq-page.png";
import weatherCastImg from "/src/images/weathercast.png";
import ideaVaultImg from "/src/images/idea-vault.png";
import colorSparkImg from "/src/images/color-spark.png";
import tenziesImg from "/src/images/Tenzies.png";

const projectData = [
  {
    id: 1,
    name: "Mortgage Calculator",
    description:
      "A responsive, interactive mortgage repayment calculator built with React and TailwindCSS. This is a solution to the Mortgage repayment calculator challenge on Frontend Mentor.",
    tools: ["Reactjs", "Tailwindcss"],
    link: "https://mortgage-calculator-gules.vercel.app/",
    github: "https://github.com/Anikhe00/Mortgage-Calculator",
    image: mortgageCalculatorImg,
  },

  {
    id: 2,
    name: "Tenzies",
    description:
      "An interactive Tenzies game built with React and TypeScript, where players roll the dice until all show the same number",
    tools: ["Reactjs", "CSS", "Typescript"],
    link: "https://typed-tenzies.vercel.app/",
    github: "https://github.com/Anikhe00/typed-tenzies",
    image: tenziesImg,
  },

  {
    id: 3,
    name: "Rock Paper Scissors",
    description:
      "A visually engaging and interactive Rock Paper Scissors game built with HTML, CSS, and JavaScript. This browser-based game lets a user play against a computer with animated hand choices, score tracking, and a result modal.",
    tools: ["HTML", "CSS", "JavaScript"],
    link: "https://rock-paper-scissors-game-delta-jade.vercel.app/",
    github: "",
    image: rockPaperScissorsImg,
  },

  {
    id: 4,
    name: "Character Counter",
    description:
      "A feature-rich character counter that provides real-time text analysis, including character, word, and sentence counts. It allows users to set character limits with warnings, estimate reading time, analyze letter density, customize themes, and navigate using only the keyboard—all in a fully responsive interface.",
    tools: ["HTML", "CSS", "JavaScript"],
    link: "https://character-counter-rose.vercel.app/",
    github: "https://github.com/Anikhe00/Character-Counter",
    image: characterCounterImg,
  },

  {
    id: 5,
    name: "Recipe Hub",
    description:
      "RecipeHub is a simple and interactive recipe finder web app that allows users to explore random meals, search for recipes, and view meal details, including categories and YouTube tutorials. It uses TheMealDB API to fetch meal data dynamically.",
    tools: ["HTML", "CSS", "JavaScript", "TheMealDB API"],
    link: "https://recipe-hub-nu.vercel.app/",
    github: "https://github.com/Anikhe00/Recipe-Hub",
    image: recipeHubImg,
  },

  {
    id: 6,
    name: "FAQ Page",
    description:
      "A clean and responsive FAQ Accordion component built using React and TailwindCSS. Users can toggle each FAQ item to expand or collapse the answer, enhancing user experience through smooth animations and intuitive UI.",
    tools: ["Reactjs", "TailwindCSS", "JavaScript"],
    link: "https://fe-faqs.vercel.app/",
    github: "https://github.com/Anikhe00/FE-FAQs?tab=readme-ov-file",
    image: faqPageImg,
  },

  {
    id: 7,
    name: "WeatherCast",
    description:
      "A clean, simple, and responsive weather application built using HTML, CSS, and vanilla JavaScript. The app fetches real-time weather data from the OpenWeatherMap API and displays key weather information for any city the user searches for.",
    tools: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    link: "https://weather-cast-self.vercel.app/",
    github: "https://github.com/Anikhe00/WeatherCast",
    image: weatherCastImg,
  },

  {
    id: 8,
    name: "Idea Vault",
    description:
      "IdeaVault is a simple web app to save, view, and manage research resources with local storage. No database needed!",
    tools: ["HTML", "CSS", "JavaScript"],
    link: "https://idea-vault-ten.vercel.app/",
    github: "https://github.com/Anikhe00/IdeaVault",
    image: ideaVaultImg,
  },

  {
    id: 9,
    name: "Color Spark",
    description:
      "ColorSpark is a simple web app to generate random colors and copy them to the clipboard. It uses HTML, CSS, and vanilla JavaScript.",
    tools: ["HTML", "CSS", "JavaScript"],
    link: "https://color-spark.vercel.app/",
    github: "https://github.com/Anikhe00/Color-Spark",
    image: colorSparkImg,
  },
];

export default projectData;
