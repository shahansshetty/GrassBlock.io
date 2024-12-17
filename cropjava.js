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