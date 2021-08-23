var origin = document.getElementById('origin')
var destination = document.getElementById('destination')
var datepicker = document.getElementById('datepicker')
var pCount = document.getElementById('pCount')
var form = document.getElementById('form')
var errorElement = document.getElementById('error')

form.addEventListener('submit', (e)=>{
    let messages = []
    
    if (origin.value === '' || origin.value == null)
    {
        messages.push('Enter an Origin City')
        document.getElementById("origin").setAttribute('style','border-color:red; border-width:3.5px;');
    }
    else
    {
        document.getElementById("origin").setAttribute('style','border-color:black; border-width:0.5px;');
    }
    
    if (destination.value === '' || destination.value == null)
    {
        messages.push('Enter a Destination City')
        document.getElementById("destination").setAttribute('style','border-color:red; border-width:3.5px;');
    }
    else
    {
        document.getElementById("destination").setAttribute('style','border-color:black; border-width:0.5px;');
    }


    if (datepicker.value === '' || datepicker.value == null)
    {
        messages.push('Enter a Travel Date')
        document.getElementById("datepicker").setAttribute('style','border-color:red; border-width:3.5px;');
    }
    else
    {
        document.getElementById("datepicker").setAttribute('style','border-color:black; border-width:0.5px;');
    }

    if (pCount.value === '' || pCount.value == null)
    {
        messages.push('Enter the Number of Passengers')
        document.getElementById("pCount").setAttribute('style','border-color:red; border-width:3.5px;');
    }
    else
    {
        document.getElementById("pCount").setAttribute('style','border-color:black; border-width:0.5px;');
    }

    if(messages.length > 0)
    {
        e.preventDefault()    
        errorElement.innerText = messages.join(', ')
    }
})