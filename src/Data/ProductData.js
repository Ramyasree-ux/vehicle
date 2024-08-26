import rhynoImage from './rhyno1.png';


const productData = {
  se03Lite: {
    name: "Rhyno GTX Lite",
    image: rhynoImage, 
    colors: ["#F9ED32", "#FFFFFF", "#252525"],
    details: `
      Battery: 1.8Kwh
      Battery features: LFP with 1500 cycles, Active Balancing, Waterproof (IP67)
      Battery warranty: 3 Years
      Charging time: 3 hours (12A)
      Motor: 1500W
      Max speed: 50 km/hr
      Max range (@30km/h): 100 km
      Max range (@45km/h): 90 km
      Max range (@full speed): 60 km
      Warranty on electronics: 1 year
      Other key benefits: Fire-safe battery, Range prediction, Comfortable ride
    `,
  },
  se03: {
    name: "Rhyno GTX",
    image: rhynoImage, 
    colors: ["#F9ED32", "#FFFFFF", "#252525"],
    details: `
      Battery: 2.7Kwh
      Battery features: LFP with 1500 cycles, Active Balancing, Waterproof (IP67)
      Battery warranty: 3 Years
      Charging time: 4 hours (12A)
      Motor: 1500W
      Max speed: 55 km/h
      Max range (@30km/h): 150 km
      Max range (@45km/h): 110 km
      Max range (@full speed): 90 km
      Warranty on electronics: 1 year
      Other key benefits: Fire-safe battery, Range prediction, Comfortable ride
    `,
  },
  se03Max: {
    name: "Rhyno GTX Max",
    image: rhynoImage, 
    colors: ["#F9ED32", "#FFFFFF", "#252525"],
    details: `
      Battery: 2.7Kwh
      Battery features: LFP with 1500 cycles, Active Balancing, Waterproof (IP67)
      Battery warranty: 3 Years
      Charging time: 4 hours (12A)
      Motor: 2000W
      Max speed: 65 km/h
      Max range (@30km/h): 120 km
      Max range (@45km/h): 90 km
      Max range (@full speed): 80 km
      Warranty on electronics: 1 year
      Other key benefits: Fire-safe battery, Range prediction, Comfortable ride
    `,
  }
};

export default productData;
