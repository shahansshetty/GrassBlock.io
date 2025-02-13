

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
        name: "Cotton",
        soilTypes: ["loam", "sandy", "clay"],
        minPH: 5.5,
        maxPH: 8.5,
        minHumidity: 30,
        maxHumidity: 60,
        minRainfall: 400,
        maxRainfall: 1500,
        minTemp: 15,
        maxTemp: 38,
        href: "https://en.wikipedia.org/wiki/Cotton"
    },
    {
        name: "Potatoes",
        soilTypes: ["sandy loam", "loam"],
        minPH: 4.8,
        maxPH: 6.5,
        minHumidity: 60,
        maxHumidity: 85,
        minRainfall: 300,
        maxRainfall: 700,
        minTemp: 7,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Potato"
    },
    {
        name: "Tomatoes",
        soilTypes: ["loam", "sandy loam"],
        minPH: 6.0,
        maxPH: 6.8,
        minHumidity: 65,
        maxHumidity: 85,
        minRainfall: 400,
        maxRainfall: 600,
        minTemp: 10,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Tomato"
    },
    {
        name: "Soybeans",
        soilTypes: ["loam", "clay loam"],
        minPH: 6.0,
        maxPH: 7.0,
        minHumidity: 45,
        maxHumidity: 75,
        minRainfall: 450,
        maxRainfall: 900,
        minTemp: 8,
        maxTemp: 34,
        href: "https://en.wikipedia.org/wiki/Soybean"
    },
    {
        name: "Cacao",
        soilTypes: ["sandy loam", "clay loam"],
        minPH: 5.0,
        maxPH: 7.5,
        minHumidity: 70,
        maxHumidity: 100,
        minRainfall: 1500,
        maxRainfall: 3000,
        minTemp: 18,
        maxTemp: 32,
        href: "https://en.wikipedia.org/wiki/Cocoa_bean"
    },
    {
        name: "Coffee",
        soilTypes: ["volcanic", "loam"],
        minPH: 6.0,
        maxPH: 6.5,
        minHumidity: 60,
        maxHumidity: 95,
        minRainfall: 1500,
        maxRainfall: 2500,
        minTemp: 15,
        maxTemp: 28,
        href: "https://en.wikipedia.org/wiki/Coffee"
    },
    {
        name: "Lavender",
        soilTypes: ["sandy", "rocky"],
        minPH: 6.5,
        maxPH: 7.5,
        minHumidity: 20,
        maxHumidity: 50,
        minRainfall: 300,
        maxRainfall: 600,
        minTemp: -15,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Lavandula"
    },
    {
        name: "Desert Date",
        soilTypes: ["sandy", "rocky"],
        minPH: 5.5,
        maxPH: 8.0,
        minHumidity: 10,
        maxHumidity: 40,
        minRainfall: 100,
        maxRainfall: 500,
        minTemp: 10,
        maxTemp: 45,
        href: "https://en.wikipedia.org/wiki/Balanites"
    },
    {
        name: "Watercress",
        soilTypes: ["aquatic", "clay"],
        minPH: 6.5,
        maxPH: 7.5,
        minHumidity: 80,
        maxHumidity: 100,
        minRainfall: 1000,
        maxRainfall: 2500,
        minTemp: 5,
        maxTemp: 23,
        href: "https://en.wikipedia.org/wiki/Watercress"
    },
    {
        name: "Quinoa",
        soilTypes: ["sandy", "loamy"],
        minPH: 6.0,
        maxPH: 8.5,
        minHumidity: 40,
        maxHumidity: 60,
        minRainfall: 200,
        maxRainfall: 400,
        minTemp: -4,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Quinoa"
    },
    {
        name: "Pineapple",
        soilTypes: ["sandy loam", "clay loam"],
        minPH: 4.5,
        maxPH: 6.5,
        minHumidity: 60,
        maxHumidity: 80,
        minRainfall: 1000,
        maxRainfall: 1500,
        minTemp: 18,
        maxTemp: 32,
        href: "https://en.wikipedia.org/wiki/Pineapple"
    },
    {
        name: "Mangrove",
        soilTypes: ["saline", "clay"],
        minPH: 6.0,
        maxPH: 8.5,
        minHumidity: 60,
        maxHumidity: 100,
        minRainfall: 1000,
        maxRainfall: 4000,
        minTemp: 20,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Mangrove"
    },
    {
        name: "Arctic Willow",
        soilTypes: ["tundra", "rocky"],
        minPH: 5.0,
        maxPH: 7.0,
        minHumidity: 30,
        maxHumidity: 60,
        minRainfall: 150,
        maxRainfall: 500,
        minTemp: -40,
        maxTemp: 20,
        href: "https://en.wikipedia.org/wiki/Salix_arctica"
    },
    {
        name: "Date Palm",
        soilTypes: ["sandy", "loamy"],
        minPH: 7.0,
        maxPH: 8.5,
        minHumidity: 15,
        maxHumidity: 45,
        minRainfall: 100,
        maxRainfall: 400,
        minTemp: 7,
        maxTemp: 50,
        href: "https://en.wikipedia.org/wiki/Date_palm"
    },
    {
        name: "Bamboo",
        soilTypes: ["loamy", "clay"],
        minPH: 5.5,
        maxPH: 6.5,
        minHumidity: 50,
        maxHumidity: 100,
        minRainfall: 1200,
        maxRainfall: 4000,
        minTemp: 2,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Bamboo"
    },
    {
        name: "Olive",
        soilTypes: ["rocky", "sandy loam"],
        minPH: 5.5,
        maxPH: 8.5,
        minHumidity: 30,
        maxHumidity: 60,
        minRainfall: 200,
        maxRainfall: 800,
        minTemp: 5,
        maxTemp: 40,
        href: "https://en.wikipedia.org/wiki/Olive"
    },
    {
        name: "Seaweed",
        soilTypes: ["marine"],
        minPH: 7.5,
        maxPH: 8.4,
        minHumidity: 100,
        maxHumidity: 100,
        minRainfall: 0,
        maxRainfall: 0,
        minTemp: 0,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Seaweed"
    },
    {
        name: "Aloe Vera",
        soilTypes: ["sandy", "rocky"],
        minPH: 6.0,
        maxPH: 8.5,
        minHumidity: 10,
        maxHumidity: 40,
        minRainfall: 50,
        maxRainfall: 300,
        minTemp: 5,
        maxTemp: 45,
        href: "https://en.wikipedia.org/wiki/Aloe_vera"
    },
    {
        name: "Saffron",
        soilTypes: ["sandy loam", "clay loam"],
        minPH: 6.0,
        maxPH: 8.0,
        minHumidity: 40,
        maxHumidity: 70,
        minRainfall: 300,
        maxRainfall: 700,
        minTemp: -10,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Saffron"
    },
    {
        name: "Lotus",
        soilTypes: ["aquatic", "mud"],
        minPH: 5.0,
        maxPH: 7.5,
        minHumidity: 70,
        maxHumidity: 100,
        minRainfall: 800,
        maxRainfall: 2500,
        minTemp: 10,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Nelumbo"
    },
    {
        name: "Cloudberry",
        soilTypes: ["peat", "tundra"],
        minPH: 3.5,
        maxPH: 5.0,
        minHumidity: 60,
        maxHumidity: 90,
        minRainfall: 400,
        maxRainfall: 800,
        minTemp: -40,
        maxTemp: 25,
        href: "https://en.wikipedia.org/wiki/Cloudberry"
    },
    {
        name: "Barley",
        soilTypes: ["loamy", "clay"],
        minPH: 6.0,
        maxPH: 7.0,
        minHumidity: 30,
        maxHumidity: 65,
        minRainfall: 200,
        maxRainfall: 1000,
        minTemp: 1,
        maxTemp: 38,
        href: "https://en.wikipedia.org/wiki/Barley"
    },
    {
        name: "Coconut Palm",
        soilTypes: ["sandy", "loamy"],
        minPH: 5.0,
        maxPH: 8.0,
        minHumidity: 70,
        maxHumidity: 95,
        minRainfall: 1500,
        maxRainfall: 2500,
        minTemp: 20,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Coconut"
    },
    {
        name: "Venus Flytrap",
        soilTypes: ["bog", "sandy"],
        minPH: 3.5,
        maxPH: 5.0,
        minHumidity: 70,
        maxHumidity: 95,
        minRainfall: 800,
        maxRainfall: 1500,
        minTemp: 5,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Venus_flytrap"
    },
    {
        name: "Wild Rice",
        soilTypes: ["aquatic", "mud"],
        minPH: 6.0,
        maxPH: 7.0,
        minHumidity: 80,
        maxHumidity: 100,
        minRainfall: 1000,
        maxRainfall: 2000,
        minTemp: 2,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Wild_rice"
    },
    {
        name: "Tea",
        soilTypes: ["loamy", "sandy loam"],
        minPH: 4.5,
        maxPH: 5.5,
        minHumidity: 70,
        maxHumidity: 90,
        minRainfall: 1500,
        maxRainfall: 2500,
        minTemp: 10,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Tea"
    },
    {
        name: "Wasabi",
        soilTypes: ["loamy", "volcanic"],
        minPH: 6.0,
        maxPH: 7.0,
        minHumidity: 75,
        maxHumidity: 95,
        minRainfall: 1500,
        maxRainfall: 3000,
        minTemp: 8,
        maxTemp: 20,
        href: "https://en.wikipedia.org/wiki/Wasabi"
    },




    {
        name: "Sugar Beet",
        soilTypes: ["silt", "silt loam"],
        minPH: 6.0,
        maxPH: 7.5,
        minHumidity: 60,
        maxHumidity: 80,
        minRainfall: 450,
        maxRainfall: 750,
        minTemp: 5,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Sugar_beet"
    },
    {
        name: "Carrot",
        soilTypes: ["silt loam", "fine silt"],
        minPH: 6.0,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 75,
        minRainfall: 400,
        maxRainfall: 800,
        minTemp: 7,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Carrot"
    },
    {
        name: "Flax",
        soilTypes: ["silt", "silt clay"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 450,
        maxRainfall: 750,
        minTemp: 5,
        maxTemp: 32,
        href: "https://en.wikipedia.org/wiki/Flax"
    },
    {
        name: "Rye",
        soilTypes: ["silt", "silt clay"],
        minPH: 5.5,
        maxPH: 7.0,
        minHumidity: 40,
        maxHumidity: 70,
        minRainfall: 400,
        maxRainfall: 800,
        minTemp: -30,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Rye"
    },
    {
        name: "Mustard",
        soilTypes: ["silt", "silt clay loam"],
        minPH: 5.5,
        maxPH: 7.5,
        minHumidity: 45,
        maxHumidity: 70,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 6,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Mustard_plant"
    },
    {
        name: "Garlic",
        soilTypes: ["silt loam", "fine silt"],
        minPH: 6.0,
        maxPH: 7.0,
        minHumidity: 50,
        maxHumidity: 75,
        minRainfall: 350,
        maxRainfall: 650,
        minTemp: 0,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Garlic"
    },
    {
        name: "Spinach",
        soilTypes: ["silt", "silt clay loam"],
        minPH: 6.0,
        maxPH: 7.5,
        minHumidity: 45,
        maxHumidity: 75,
        minRainfall: 300,
        maxRainfall: 600,
        minTemp: 2,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Spinach"
    },
    {
        name: "Amaranth",
        soilTypes: ["silt", "fine silt"],
        minPH: 6.0,
        maxPH: 7.5,
        minHumidity: 40,
        maxHumidity: 70,
        minRainfall: 400,
        maxRainfall: 800,
        minTemp: 15,
        maxTemp: 35,
        href: "https://en.wikipedia.org/wiki/Amaranth"
    },
    {
        name: "Buckwheat",
        soilTypes: ["silt", "silt clay"],
        minPH: 5.0,
        maxPH: 7.0,
        minHumidity: 45,
        maxHumidity: 75,
        minRainfall: 500,
        maxRainfall: 1000,
        minTemp: 10,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Buckwheat"
    },
    {
        name: "Chard",
        soilTypes: ["silt", "silt clay loam"],
        minPH: 6.0,
        maxPH: 7.5,
        minHumidity: 50,
        maxHumidity: 80,
        minRainfall: 400,
        maxRainfall: 800,
        minTemp: 5,
        maxTemp: 30,
        href: "https://en.wikipedia.org/wiki/Chard"
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