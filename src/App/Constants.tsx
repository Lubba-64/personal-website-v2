export const employed_at = "Visiostack Inc.";
export const days_employed = () => {
  let start = Date.parse("2/22/2021");
  let now = Date.now();
  let diff = Math.abs(now - start);
  let diff_days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return diff_days.toString() + " days";
};
export const knownFormats = ["html", "json", "yaml", "css"];
export const knownLanguages = [
  "javascript",
  "typescript",
  "python",
  "c#",
  "c++",
  "rust",
];
export const knownFrameworks = ["react", "unity"];
export const currentOS = "Windows 10";
