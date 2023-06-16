function convert() {
    const celsius = document.getElementById("celsius").value;
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerHTML = `${celsius}°C is ${fahrenheit}°F`;
  }
  
  function reset() {
    document.getElementById("celsius").value = "";
    document.getElementById("result").innerHTML = "";
  }
  
  function reverse() {
    const fahrenheit = document.getElementById("celsius").value;
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("result").innerHTML = `${fahrenheit}°F is ${celsius}°C`;
  }