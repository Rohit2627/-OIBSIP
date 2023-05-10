function convert() {
    const temperatureInput = document.getElementById("temperature").value;
    const unitInput = document.getElementById("unit").value;
    let result = "";
  
    if (isNaN(temperatureInput)) {
      result = "Please enter a valid number";
    } else {
      const temperature = parseFloat(temperatureInput);
      switch (unitInput) {
        case "celsius":
          result = `${temperature}°C = ${(temperature * 1.8 + 32).toFixed(2)}°F = ${(temperature + 273.15).toFixed(2)}K`;
          break;
        case "fahrenheit":
          result = `${temperature}°F = ${((temperature - 32) / 1.8).toFixed(2)}°C = ${(((temperature - 32) / 1.8) + 273.15).toFixed(2)}K`;
          break;
        case "kelvin":
          result = `${temperature}K = ${(temperature - 273.15).toFixed(2)}°C = ${(((temperature - 273.15) * 1.8) + 32).toFixed(2)}°F`;
          break;
      }
    }
  
    document.getElementById("result").innerHTML = result;
  }
  