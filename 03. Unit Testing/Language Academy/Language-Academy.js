export const languageAcademy = {
  difficultyLevel(courseType) {
    if (courseType === "Beginner") {
      return "The course is beginner-friendly and focuses on basic concepts like greetings, numbers, and common phrases.";
    } else if (courseType === "Intermediate") {
      return "The course is moderately challenging and includes grammar rules, sentence structure, and conversational practice.";
    } else if (courseType === "Advanced") {
      return "The course is highly challenging and covers advanced vocabulary, idioms, and specialized topics like business or technical language.";
    } else {
      return "Invalid course type. Please choose 'Beginner', 'Intermediate', or 'Advanced'.";
    }
  },
  discountbyNumber(numberOfCourses, totalPrice) {
    if (typeof numberOfCourses !== "number" || typeof totalPrice !== "number") {
      throw new Error("Invalid input.");
    }

    let discountPercentage = 0;

    if (numberOfCourses > 1 && numberOfCourses <= 3) {
      discountPercentage = 10;
    } else if (numberOfCourses > 3) {
      discountPercentage = 25;
    }

    let discountAmount = (discountPercentage / 100) * totalPrice;

    if (numberOfCourses <= 1) {
      return "You cannot apply a discount.";
    } else {
      return `Discount applied! You saved ${discountAmount}$ on your courses.`;
    }
  },
  additionalResources(resourceCatalog, neededResources) {
    let totalCost = 0;

    if (!Array.isArray(resourceCatalog) || !Array.isArray(neededResources)) {
      throw new Error("Invalid input.");
    }

    neededResources.forEach((resource) => {
      resourceCatalog.map((item) => {
        if (item.name === resource) {
          totalCost += item.price;
        }
      });
    });

    return `Total Cost is ${totalCost}$.`;
  }
};