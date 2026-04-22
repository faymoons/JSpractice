const hobby = {
  name: "typology and psychology",
  isIndoor: true,
  weeklyHours: 14,
  tools: ["phone", "books", "computer"],
  getHobbySummary() {
    return `I enjoy ${this.name}. It's an indoor hobby. I spend about ${this.weeklyHours} hours per week using tools like: ${this.tools.join(", ")}.`;
  }
};
console.log(
  `I enjoy ${hobby.name}. It's an ${hobby.isIndoor ? "indoor" : "outdoor"} hobby. I spend about ${hobby.weeklyHours} hours per week using tools like: ${hobby.tools.join(", ")}.`
);
console.log(hobby.getHobbySummary());
