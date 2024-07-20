function calculateSalary() {
    
    var hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    var hoursPerWeek = parseFloat(document.getElementById('hoursPerWeek').value);

    
    var annualSalary = hourlyRate * hoursPerWeek * 52;

    
    document.getElementById('result').innerHTML = "Annual Salary: $" + annualSalary.toFixed(2);
}
