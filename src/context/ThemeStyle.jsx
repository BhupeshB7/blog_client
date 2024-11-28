import { useTheme } from "./theme-provider";

export const useThemeContext = () => {
  const { theme } = useTheme();
  return {
    bgColor: theme === "dark" ? "bg-gray-900" : "bg-gray-100",
    textColor: theme === "dark" ? "text-white" : "text-gray-800",
    categoryBgColor: theme === "dark" ? "bg-gray-800" : "bg-white",
    dateColor: theme === "dark" ? "text-green-400" : "text-green-700",
    categoryLinkBgColor: theme === "dark" ? "bg-yellow-300" : "bg-gray-800",
    categoryLinkTextColor: theme === "dark" ? "text-gray-800" : "text-gray-100",
    titleColor: theme === "dark" ? "text-yellow-300" : "text-gray-800",
    subtitleColor: theme === "dark" ? "text-gray-400" : "text-gray-600",
    codeBgColor: theme === "dark" ? "bg-gray-950" : "bg-slate-50",
    buttonGradient:
      theme === "dark"
        ? "from-yellow-400 to-red-500"
        : "from-pink-500 to-yellow-500",
  };
};
