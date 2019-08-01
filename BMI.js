function BMI() {
    let bmi;
    let weight =parseFloat(document.getElementById('Weight').value);
    let height =parseFloat(document.getElementById('Height').value);
    bmi=weight/(height*height);
if(bmi>=30)
{
    alert('Obese');
}
else if(bmi>=25)
{
    alert('Over weight');
}
else if(bmi>=18.5)
{
    alert('Nomal');
}
else
    {
        alert('Under weight');
    }
}