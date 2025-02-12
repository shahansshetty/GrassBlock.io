// const cropDatabase = [
//   {
//       name: "Wheat",
//       soilTypes: ["loam", "clay"],
//       minPH: 6.0,
//       maxPH: 7.5,
//       minHumidity: 40,
//       maxHumidity: 70,
//       minRainfall: 350,
//       maxRainfall: 750,
//       minTemp: 3,
//       maxTemp: 30,
//       href:"www.google.com"
//   },
//   {
//       name: "Corn",
//       soilTypes: ["loam", "clay"],
//       minPH: 5.8,
//       maxPH: 7.0,
//       minHumidity: 50,
//       maxHumidity: 80,
//       minRainfall: 500,
//       maxRainfall: 1000,
//       minTemp: 10,
//       maxTemp: 35
//   },
//   {
//       name: "Rice",
//       soilTypes: ["clay", "silt"],
//       minPH: 6.0,
//       maxPH: 7.0,
//       minHumidity: 70,
//       maxHumidity: 90,
//       minRainfall: 1000,
//       maxRainfall: 2000,
//       minTemp: 20,
//       maxTemp: 40
//   },
//   {
//       name: "Soybean",
//       soilTypes: ["loam", "sandy"],
//       minPH: 6.0,
//       maxPH: 7.0,
//       minHumidity: 50,
//       maxHumidity: 70,
//       minRainfall: 500,
//       maxRainfall: 1200,
//       minTemp: 10,
//       maxTemp: 35
//   },
//   {
// name: "Potato",
// soilTypes: ["sandy loam", "loam"],
// minPH: 5.0,
// maxPH: 6.5,
// minHumidity: 50,
// maxHumidity: 75,
// minRainfall: 400,
// maxRainfall: 800,
// minTemp: 7,
// maxTemp: 24
// },
// {
// name: "Tomato",
// soilTypes: ["sandy loam", "loam"],
// minPH: 6.0,
// maxPH: 6.8,
// minHumidity: 50,
// maxHumidity: 70,
// minRainfall: 400,
// maxRainfall: 600,
// minTemp: 15,
// maxTemp: 35
// },
// {
// name: "Cotton",
// soilTypes: ["clay loam", "sandy loam"],
// minPH: 5.5,
// maxPH: 7.0,
// minHumidity: 50,
// maxHumidity: 75,
// minRainfall: 500,
// maxRainfall: 1200,
// minTemp: 15,
// maxTemp: 40
// },
// {
// name: "Sugarcane",
// soilTypes: ["clay", "clay loam"],
// minPH: 6.0,
// maxPH: 7.5,
// minHumidity: 60,
// maxHumidity: 85,
// minRainfall: 1500,
// maxRainfall: 2500,
// minTemp: 20,
// maxTemp: 35
// },
// {
// name: "Barley",
// soilTypes: ["loam", "clay loam"],
// minPH: 6.0,
// maxPH: 7.2,
// minHumidity: 40,
// maxHumidity: 65,
// minRainfall: 300,
// maxRainfall: 700,
// minTemp: 2,
// maxTemp: 28
// },
// {
// name: "Sunflower",
// soilTypes: ["sandy loam", "loam"],
// minPH: 6.0,
// maxPH: 7.5,
// minHumidity: 40,
// maxHumidity: 70,
// minRainfall: 400,
// maxRainfall: 800,
// minTemp: 10,
// maxTemp: 35
// },
// {
// name: "Carrots",
// soilTypes: ["sandy loam", "loam"],
// minPH: 5.5,
// maxPH: 6.8,
// minHumidity: 50,
// maxHumidity: 70,
// minRainfall: 400,
// maxRainfall: 600,
// minTemp: 7,
// maxTemp: 24
// },
// {
// name: "Beans",
// soilTypes: ["loam", "sandy loam"],
// minPH: 6.0,
// maxPH: 7.0,
// minHumidity: 50,
// maxHumidity: 75,
// minRainfall: 500,
// maxRainfall: 1000,
// minTemp: 15,
// maxTemp: 30
// },
// {
// name: "Lettuce",
// soilTypes: ["loam", "sandy loam"],
// minPH: 6.0,
// maxPH: 7.0,
// minHumidity: 50,
// maxHumidity: 70,
// minRainfall: 350,
// maxRainfall: 500,
// minTemp: 10,
// maxTemp: 24
// },
// {
// name: "Quinoa",
// soilTypes: ["sandy loam", "loam"],
// minPH: 6.0,
// maxPH: 8.0,
// minHumidity: 40,
// maxHumidity: 60,
// minRainfall: 250,
// maxRainfall: 500,
// minTemp: 8,
// maxTemp: 30
// },
// {
// name: "Alfalfa",
// soilTypes: ["loam", "clay loam"],
// minPH: 6.5,
// maxPH: 7.5,
// minHumidity: 50,
// maxHumidity: 75,
// minRainfall: 500,
// maxRainfall: 1000,
// minTemp: 5,
// maxTemp: 35
// },
// {
// name: "Onions",
// soilTypes: ["sandy loam", "loam"],
// minPH: 6.0,
// maxPH: 7.0,
// minHumidity: 40,
// maxHumidity: 65,
// minRainfall: 350,
// maxRainfall: 600,
// minTemp: 10,
// maxTemp: 30
// },
// {
// name: "Peanuts",
// soilTypes: ["sandy loam", "sandy"],
// minPH: 5.8,
// maxPH: 6.8,
// minHumidity: 50,
// maxHumidity: 75,
// minRainfall: 500,
// maxRainfall: 1000,
// minTemp: 20,
// maxTemp: 35
// },
// {
// name: "Coffee",
// soilTypes: ["volcanic", "clay loam"],
// minPH: 6.0,
// maxPH: 6.5,
// minHumidity: 60,
// maxHumidity: 80,
// minRainfall: 1500,
// maxRainfall: 2500,
// minTemp: 15,
// maxTemp: 28
// },
// {
// name: "Millet",
// soilTypes: ["sandy loam", "loam"],
// minPH: 5.5,
// maxPH: 7.5,
// minHumidity: 40,
// maxHumidity: 60,
// minRainfall: 250,
// maxRainfall: 600,
// minTemp: 15,
// maxTemp: 35
// }
// ];

// document.getElementById('cropAdvisorForm').addEventListener('submit', function(e) {
//   e.preventDefault();
  
//   const soilType = document.getElementById('soilType').value;
//   const soilPH = parseFloat(document.getElementById('soilPH').value);
//   const humidity = parseFloat(document.getElementById('humidity').value);
//   const rainfall = parseFloat(document.getElementById('rainfall').value);
//   const temperature = parseFloat(document.getElementById('temperature').value);

//   const recommendedCrops = cropDatabase.filter(crop => 
//       crop.soilTypes.includes(soilType) &&
//       soilPH >= crop.minPH && soilPH <= crop.maxPH &&
//       humidity >= crop.minHumidity && humidity <= crop.maxHumidity &&
//       rainfall >= crop.minRainfall && rainfall <= crop.maxRainfall &&
//       temperature >= crop.minTemp && temperature <= crop.maxTemp
//   );

//   const cropListElement = document.getElementById('cropList');
//   const resultsContainer = document.getElementById('resultsContainer');
  
//   cropListElement.innerHTML = '';
  
//   if (recommendedCrops.length > 0) {
//       recommendedCrops.forEach(crop => {
//           const li = document.createElement('li');
//           li.textContent = crop.name;
//           cropListElement.appendChild(li);
//       });
//       resultsContainer.style.display = 'block';
//   } else {
//       const li = document.createElement('li');
//       li.textContent = 'No suitable crops found for the given conditions.';
//       cropListElement.appendChild(li);
//       resultsContainer.style.display = 'block';
//   }
// });

const cropDatabase = [
    {
        name: "Wheat",
        soilTypes: ["loam", "clay"],
        minPH: 6.0,
        maxPH: 7.5,
        minHumidity: 40,
        maxHumidity: 70,
        minRainfall: 350,
        maxRainfall: 750,
        minTemp: 3,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Wheat"
    },
    {
        name: "Corn",
        soilTypes: ["loam", "clay"],
        minPH: 5.8,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 10,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Maize"
    },
    {
        name: "Rice",
        soilTypes: ["clay", "silt"],
        minPH: 6.0,
        maxPH: 7.0,
        minHumidity: 70,
        maxHumidity: 90,
        minRainfall: 1000,
        maxRainfall: 2000,
        minTemp: 20,
        maxTemp: 40,
        href: "https://en.wikipedia.org/wiki/Rice"
    },
    {
        name: "Soybean",
        soilTypes: ["loam", "sandy"],
        minPH: 6.0,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 70,
        minRainfall: 500,
        maxRainfall: 1200,
        minTemp: 10,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Soybean"
    },
    {
        name: "Potato",
        soilTypes: ["sandy loam", "loam"],
        minPH: 5.0,
        maxPH: 6.5,
        minHumidity: 50,
        maxHumidity: 75,
        minRainfall: 400,
        maxRainfall: 800,
        minTemp: 7,
        maxTemp: 24,
        href: "https://en.wikipedia.org/wiki/Potato"
    },
    {
        name: "Tomato",
        soilTypes: ["sandy loam", "loam"],
        minPH: 6.0,
        maxPH: 6.8,
        minHumidity: 50,
        maxHumidity: 70,
        minRainfall: 400,
        maxRainfall: 600,
        minTemp: 15,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Tomato"
    },
    {
        name: "Cotton",
        soilTypes: ["clay loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 75,
        minRainfall: 500,
        maxRainfall: 1200,
        minTemp: 15,
        maxTemp: 40,
        href: "https://en.wikipedia.org/wiki/Cotton"
    },
    {
        name: "Sugarcane",
        soilTypes: ["clay", "clay loam"],
        minPH: 6.0,
        maxPH: 7.5,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 1500,
        maxRainfall: 2500,
        minTemp: 20,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Sugarcane"
    },
    {
        name: "Barley",
        soilTypes: ["loam", "clay loam"],
        minPH: 6.0,
        maxPH: 7.2,
        minHumidity: 40,
        maxHumidity: 65,
        minRainfall: 300,
        maxRainfall: 700,
        minTemp: 2,
        maxTemp: 28,
        href: "https://en.wikipedia.org/wiki/Barley"
    },
    {
        name: "Sunflower",
        soilTypes: ["sandy loam", "loam"],
        minPH: 6.0,
        maxPH: 7.5,
        minHumidity: 40,
        maxHumidity: 70,
        minRainfall: 400,
        maxRainfall: 800,
        minTemp: 10,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Sunflower"
    },
    {
        name: "Carrots",
        soilTypes: ["sandy loam", "loam"],
        minPH: 5.5,
        maxPH: 6.8,
        minHumidity: 50,
        maxHumidity: 70,
        minRainfall: 400,
        maxRainfall: 600,
        minTemp: 7,
        maxTemp: 24,
        href: "https://en.wikipedia.org/wiki/Carrot"
    },
    {
        name: "Beans",
        soilTypes: ["loam", "sandy loam"],
        minPH: 6.0,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 75,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Bean"
    },
    {
        name: "Lettuce",
        soilTypes: ["loam", "sandy loam"],
        minPH: 6.0,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 70,
        minRainfall: 350,
        maxRainfall: 500,
        minTemp: 10,
        maxTemp: 24,
        href: "https://en.wikipedia.org/wiki/Lettuce"
    },
    {
        name: "Quinoa",
        soilTypes: ["sandy loam", "loam"],
        minPH: 6.0,
        maxPH: 8.0,
        minHumidity: 40,
        maxHumidity: 60,
        minRainfall: 250,
        maxRainfall: 500,
        minTemp: 8,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Quinoa"
    },
    {
        name: "Alfalfa",
        soilTypes: ["loam", "clay loam"],
        minPH: 6.5,
        maxPH: 7.5,
        minHumidity: 50,
        maxHumidity: 75,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 5,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Alfalfa"
    },
    {
        name: "Onions",
        soilTypes: ["sandy loam", "loam"],
        minPH: 6.0,
        maxPH: 7.0,
        minHumidity: 40,
        maxHumidity: 65,
        minRainfall: 350,
        maxRainfall: 600,
        minTemp: 10,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Onion"
    },
    {
        name: "Peanuts",
        soilTypes: ["sandy loam", "sandy"],
        minPH: 5.8,
        maxPH: 6.8,
        minHumidity: 50,
        maxHumidity: 75,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 20,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Peanut"
    },
    {
        name: "Coffee",
        soilTypes: ["volcanic", "clay loam"],
        minPH: 6.0,
        maxPH: 6.5,
        minHumidity: 60,
        maxHumidity: 80,
        minRainfall: 1500,
        maxRainfall: 2500,
        minTemp: 15,
        maxTemp: 28,
        href: "https://en.wikipedia.org/wiki/Coffee"
    },
    {
        name: "Millet",
        soilTypes: ["sandy loam", "loam"],
        minPH: 5.5,
        maxPH: 7.5,
        minHumidity: 40,
        maxHumidity: 60,
        minRainfall: 250,
        maxRainfall: 600,
        minTemp: 15,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Millet"
    },
    {
        name: "Millet",
        soilTypes: ["sandy loam", "loam"],
        minPH: 5.5,
        maxPH: 7.5,
        minHumidity: 40,
        maxHumidity: 60,
        minRainfall: 250,
        maxRainfall: 600,
        minTemp: 15,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Millet"
    },
    {
        name: "Wheat",
        soilTypes: ["loam", "clay loam"],
        minPH: 6.0,
        maxPH: 7.5,
        minHumidity: 30,
        maxHumidity: 70,
        minRainfall: 500,
        maxRainfall: 900,
        minTemp: 10,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Wheat"
    },
    {
        name: "Rice",
        soilTypes: ["clay", "clay loam"],
        minPH: 5.0,
        maxPH: 6.5,
        minHumidity: 50,
        maxHumidity: 90,
        minRainfall: 1000,
        maxRainfall: 2500,
        minTemp: 20,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Rice"
    },
    {
        name: "Maize",
        soilTypes: ["sandy loam", "loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 40,
        maxHumidity: 70,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 18,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Maize"
    },
    {
        name: "Barley",
        soilTypes: ["loam", "sandy loam"],
        minPH: 6.0,
        maxPH: 7.5,
        minHumidity: 30,
        maxHumidity: 60,
        minRainfall: 300,
        maxRainfall: 800,
        minTemp: 12,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Barley"
    },
    {
        name: "Sorghum",
        soilTypes: ["sandy loam", "loam"],
        minPH: 5.5,
        maxPH: 7.5,
        minHumidity: 30,
        maxHumidity: 60,
        minRainfall: 400,
        maxRainfall: 800,
        minTemp: 20,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Sorghum"
    },
    {
        name: "Oats",
        soilTypes: ["loam", "clay loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 40,
        maxHumidity: 70,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 10,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Oats"
    },
    {
        name: "Rye",
        soilTypes: ["sandy loam", "loam"],
        minPH: 5.0,
        maxPH: 7.0,
        minHumidity: 30,
        maxHumidity: 60,
        minRainfall: 400,
        maxRainfall: 800,
        minTemp: 10,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Rye"
    },
    {
        name: "Quinoa",
        soilTypes: ["sandy loam", "loam"],
        minPH: 6.0,
        maxPH: 8.5,
        minHumidity: 40,
        maxHumidity: 70,
        minRainfall: 300,
        maxRainfall: 600,
        minTemp: 15,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Quinoa"
    },
    {
        name: "Potato",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.0,
        maxPH: 6.5,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Potato"
    },
    {
        name: "Tomato",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 600,
        maxRainfall: 1200,
        minTemp: 18,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Tomato"
    },
    {
        name: "Carrot",
        soilTypes: ["sandy loam", "loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Carrot"
    },
    {
        name: "Onion",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 70,
        minRainfall: 300,
        maxRainfall: 800,
        minTemp: 13,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Onion"
    },
    {
        name: "Garlic",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 40,
        maxHumidity: 70,
        minRainfall: 300,
        maxRainfall: 600,
        minTemp: 10,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Garlic"
    },
    {
        name: "Cabbage",
        soilTypes: ["loam", "clay loam"],
        minPH: 6.0,
        maxPH: 7.5,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Cabbage"
    },
    {
        name: "Cauliflower",
        soilTypes: ["loam", "clay loam"],
        minPH: 6.0,
        maxPH: 7.5,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Cauliflower"
    },
    {
        name: "Broccoli",
        soilTypes: ["loam", "clay loam"],
        minPH: 6.0,
        maxPH: 7.5,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Broccoli"
    },
    {
        name: "Spinach",
        soilTypes: ["loam", "sandy loam"],
        minPH: 6.0,
        maxPH: 7.5,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 400,
        maxRainfall: 800,
        minTemp: 10,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Spinach"
    },
    {
        name: "Lettuce",
        soilTypes: ["loam", "sandy loam"],
        minPH: 6.0,
        maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Lettuce"
    },
    {
        name: "Cucumber",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 600,
        maxRainfall: 1200,
        minTemp: 18,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Cucumber"
    },
    {
        name: "Pumpkin",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 18,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Pumpkin"
    },
    {
        name: "Zucchini",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 18,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Zucchini"
    },
    {
        name: "Eggplant",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 600,
        maxRainfall: 1200,
        minTemp: 18,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Eggplant"
    },
    {
        name: "Bell Pepper",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 600,
        maxRainfall: 1200,
        minTemp: 18,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Bell_pepper"
    },
    {
        name: "Chili Pepper",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 18,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Chili_pepper"
    },
    {
        name: "Okra",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 20,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Okra"
    },
    {
        name: "Green Bean",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 18,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Green_bean"
    },
    {
        name: "Pea",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Pea"
    },
    {
        name: "Corn",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 18,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Corn"
    },
    {
        name: "Sunflower",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 18,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Sunflower"
    },
    {
        name: "Soybean",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 18,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Soybean"
    },
    {
        name: "Cotton",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 20,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Cotton"
    },
    {
        name: "Sugarcane",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 1000,
        maxRainfall: 2500,
        minTemp: 20,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Sugarcane"
    },
    {
        name: "Coffee",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 1000,
        maxRainfall: 2500,
        minTemp: 15,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Coffee"
    },
    {
        name: "Tea",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 1000,
        maxRainfall: 2500,
        minTemp: 15,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Tea"
    },
    {
        name: "Cocoa",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 70,
        maxHumidity: 90,
        minRainfall: 1500,
        maxRainfall: 3000,
        minTemp: 20,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Cocoa_bean"
    },
    {
        name: "Banana",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 1000,
        maxRainfall: 2500,
        minTemp: 20,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Banana"
    },
    {
        name: "Mango",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.5,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 800,
        maxRainfall: 2000,
        minTemp: 20,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Mango"
    },
    {
        name: "Papaya",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 1000,
        maxRainfall: 2500,
        minTemp: 20,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Papaya"
    },
    {
        name: "Pineapple",
        soilTypes: ["sandy loam", "loam"],
        minPH: 4.5,
       maxPH: 6.5,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 1000,
        maxRainfall: 2500,
        minTemp: 20,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Pineapple"
    },
    {
        name: "Guava",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 800,
        maxRainfall: 2000,
        minTemp: 20,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Guava"
    },
    {
        name: "Avocado",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 800,
        maxRainfall: 2000,
        minTemp: 15,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Avocado"
    },
    {
        name: "Orange",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 800,
        maxRainfall: 2000,
        minTemp: 15,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Orange_(fruit)"
    },
    {
        name: "Lemon",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 800,
        maxRainfall: 2000,
        minTemp: 15,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Lemon"
    },
    {
        name: "Grapefruit",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 800,
        maxRainfall: 2000,
        minTemp: 15,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Grapefruit"
    },
    {
        name: "Apple",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 800,
        maxRainfall: 2000,
        minTemp: 10,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Apple"
    },
    {
        name: "Pear",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 800,
        maxRainfall: 2000,
        minTemp: 10,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Pear"
    },
    {
        name: "Peach",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 800,
        maxRainfall: 2000,
        minTemp: 10,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Peach"
    },
    {
        name: "Plum",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 800,
        maxRainfall: 2000,
        minTemp: 10,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Plum"
    },
    {
        name: "Cherry",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 800,
        maxRainfall: 2000,
        minTemp: 10,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Cherry"
    },
    {
        name: "Strawberry",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Strawberry"
    },
    {
        name: "Blueberry",
        soilTypes: ["loam", "sandy loam"],
        minPH: 4.5,
       maxPH: 5.5,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Blueberry"
    },
    {
        name: "Raspberry",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Raspberry"
    },
    {
        name: "Blackberry",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Blackberry"
    },
    {
        name: "Grape",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Grape"
    },
    {
        name: "Olive",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Olive"
    },
    {
        name: "Almond",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Almond"
    },
    {
        name: "Walnut",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Walnut"
    },
    {
        name: "Pistachio",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Pistachio"
    },
    {
        name: "Cashew",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 20,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Cashew"
    },
    {
        name: "Coconut",
        soilTypes: ["sandy loam", "loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 1000,
        maxRainfall: 2500,
        minTemp: 20,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Coconut"
    },
    {
        name: "Date Palm",
        soilTypes: ["sandy loam", "loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 20,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Date_palm"
    },
    {
        name: "Pomegranate",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Pomegranate"
    },
    {
        name: "Fig",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 15,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Fig"
    },
    {
        name: "Kiwi",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 800,
        maxRainfall: 2000,
        minTemp: 15,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Kiwi_fruit"
    },
    {
        name: "Passion Fruit",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 800,
        maxRainfall: 2000,
        minTemp: 20,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Passion_fruit"
    },
    {
        name: "Dragon Fruit",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 800,
        maxRainfall: 2000,
        minTemp: 20,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Dragon_fruit"
    },
    {
        name: "Lychee",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 1000,
        maxRainfall: 2500,
        minTemp: 20,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Lychee"
    },
    {
        name: "Jackfruit",
        soilTypes: ["loam", "sandy loam"],
        minPH: 5.5,
       maxPH: 7.0,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 1000,
        maxRainfall: 2500,
        minTemp: 20,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Jackfruit"
    }
  ];



document.getElementById('cropAdvisorForm').addEventListener('submit', function(e) {
e.preventDefault();

const soilType = document.getElementById('soilType').value;
const soilPH = parseFloat(document.getElementById('soilPH').value);
const humidity = parseFloat(document.getElementById('humidity').value);
const rainfall = parseFloat(document.getElementById('rainfall').value);
const temperature = parseFloat(document.getElementById('temperature').value);

const recommendedCrops = cropDatabase.filter(crop => 
    crop.soilTypes.includes(soilType) &&
    soilPH >= crop.minPH && soilPH <= crop.maxPH &&
    humidity >= crop.minHumidity && humidity <= crop.maxHumidity &&
    rainfall >= crop.minRainfall && rainfall <= crop.maxRainfall &&
    temperature >= crop.minTemp && temperature <= crop.maxTemp
);

const cropListElement = document.getElementById('cropList');
const resultsContainer = document.getElementById('resultsContainer');

cropListElement.innerHTML = '';

if (recommendedCrops.length > 0) {
    recommendedCrops.forEach(crop => {
        const li = document.createElement('li');
        
        if (crop.href) {
            const link = document.createElement('a');
            link.href = crop.href;
            link.textContent = crop.name;
            link.target = "_blank"; 
            li.appendChild(link);
        } else {
            li.textContent = crop.name;
        }
        
        cropListElement.appendChild(li);
    });
    resultsContainer.style.display = 'block';
} else {
    const li = document.createElement('li');
    li.textContent = 'No suitable crops found for the given conditions.';
    cropListElement.appendChild(li);
    resultsContainer.style.display = 'block';
}
});