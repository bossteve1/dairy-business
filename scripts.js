var prod = document.getElementById('prod')
var report = document.getElementById('reports')

prod.addEventListener('click', function(){
    // return report.textContent = 'Your production in Shed A 510 litres per day\
    // Your production in Shed B 308 litres per day\
    // Your production in Shed C 486 litres per day\
    // Your production in Shed D 572 litres per day\r\n\
    // The total production is 1876 litres per day'

    // join the inner html using += to create new lines
    report.innerHTML = "Your production in Shed A 510 litres per day <br />"
    report.innerHTML += "Your production in Shed B 308 litres per day <br />"
    report.innerHTML += "Your production in Shed C 486 litres per day <br />"
    report.innerHTML += "Your production in Shed D 572 litres per day <br />"
    report.innerHTML += "The total production is 1876 litres per day <br />"
})