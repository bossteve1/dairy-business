var prod = document.getElementById('prod')
var income =document.getElementById('income')
var monthly = document.getElementById('monthly')
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
var selling_price = 45
var weekly_time = 7
var monthly_time = 30

// var incomeOverTime = function(selling_price, time){
//     var total = selling_price*time*1876
//     return total
// }


income.addEventListener('click', function(){ 
    var weekly_total = selling_price*weekly_time*1876
    var monthly_total = selling_price*monthly_time*1876

    // report.textContent = 'Your weekly income will be Ksh ' + weekly_total
    report.innerHTML = 'Your weekly income is Ksh ' + weekly_total + '<br />'
    report.innerHTML += 'Your monthly income is Ksh ' + monthly_total + '<br />'
})