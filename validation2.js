var firstName = document.getElementById('firstName')
var lastName = document.getElementById('lastName')
var age = document.getElementById('age')
var gender = document.getElementsByName('gender')
var email = document.getElementById('email')
var phone = document.getElementById('phone')
var errorElement = document.getElementById('error')

var firstName2 = document.getElementById('firstName2')
var lastName2 = document.getElementById('lastName2')
var age2 = document.getElementById('age2')
var gender2 = document.getElementsByName('gender2')
var email2 = document.getElementById('email2')
var phone2 = document.getElementById('phone2')


form.addEventListener('submit', (e)=>{
    let messages = []
    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;
    

    if(firstName)
    {
        if ( firstName.value === '' || firstName.value == null )
        {
            messages.push('Enter First Name')
            document.getElementById("firstName").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else if ( firstName.value.length > 20 )
        {
            messages.push('First Name Exceeds 20 Characters')
            document.getElementById("firstName").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else if ( !firstName.value.match(letters) )
        {
            messages.push('Enter Alphabets for First Name')
            document.getElementById("firstName").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else
        {
            document.getElementById("firstName").setAttribute('style','border-color:black; border-width:0.5px;');
        }
    }


    if(lastName)
    {
        if ( lastName.value === '' || lastName.value == null )
        {
            messages.push('Enter Last Name')
            document.getElementById("lastName").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else if ( lastName.value.length > 20 )
        {
            messages.push('Last Name Exceeds 20 Characters')
            document.getElementById("lastName").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else if ( !lastName.value.match(letters) )
        {
            messages.push('Enter Alphabets for Last Name')
            document.getElementById("lastName").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else
        {
            document.getElementById("lastName").setAttribute('style','border-color:black; border-width:0.5px;');
        }
    }


    if(age)
    {
        if ( age.value === '' || age.value == null )
        {
            messages.push('Enter Age')
            document.getElementById("age").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else if ( !age.value.match(numbers) )
        {
            messages.push('Enter Numbers for Age')
            document.getElementById("age").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else if ( age.value.length > 3 )
        {
            messages.push('Age Exceeds 3 Digits')
            document.getElementById("age").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else if ( age.value < 18 )
        {
            messages.push('Minimum Age is 18')
            document.getElementById("age").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else
        {
            document.getElementById("age").setAttribute('style','border-color:black; border-width:0.5px;');
        }
    }
    

    if(gender)
    {
        if ( !( gender[0].checked || gender[1].checked || gender[2].checked) )
        {
            messages.push('Enter Gender')
        }
    }


    if(email)
    {
        if ( email.value === '' || email.value == null )
        {
            messages.push('Enter E-mail ID')
            document.getElementById("email").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else
        {
            document.getElementById("email").setAttribute('style','border-color:black; border-width:0.5px;');
        }
    }


    if(phone)
    {
        if ( phone.value === '' || phone.value == null )
        {
            messages.push('Enter Phone Number')
            document.getElementById("phone").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else if ( !phone.value.match(numbers) )
        {
            messages.push('Enter Numbers for Phone')
            document.getElementById("phone").setAttribute('style','border-color:red; border-width:3.5px;');
        }    
        else if ( phone.value.length > 10 )
        {
            messages.push('Maximum 10 Digits for Phone')
            document.getElementById("phone").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else
        {
            document.getElementById("phone").setAttribute('style','border-color:black; border-width:0.5px;');
        }
    }


    if(messages.length > 0)
    {
        e.preventDefault()    
        errorElement.innerText = messages.join(', ')
    }


    if(firstName2)
    {
        if ( firstName2.value === '' || firstName2.value == null )
        {
            messages.push('Enter First Name')
            document.getElementById("firstName2").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else if ( firstName2.value.length > 20 )
        {
            messages.push('First Name Exceeds 20 Characters')
            document.getElementById("firstName2").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else if ( !firstName2.value.match(letters) )
        {
            messages.push('Enter Alphabets for First Name')
            document.getElementById("firstName2").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else
        {
            document.getElementById("firstName2").setAttribute('style','border-color:black; border-width:0.5px;');
        }
    }


    if(lastName2)
    {
        if ( lastName2.value === '' || lastName2.value == null )
        {
            messages.push('Enter Last Name')
            document.getElementById("lastName2").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else if ( lastName2.value.length > 20 )
        {
            messages.push('Last Name Exceeds 20 Characters')
            document.getElementById("lastName2").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else if ( !lastName2.value.match(letters) )
        {
            messages.push('Enter Alphabets for Last Name')
            document.getElementById("lastName2").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else
        {
            document.getElementById("lastName2").setAttribute('style','border-color:black; border-width:0.5px;');
        }
    }


    if(age2)
    {
        if ( age2.value === '' || age2.value == null )
        {
            messages.push('Enter Age')
            document.getElementById("age2").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else if ( !age2.value.match(numbers) )
        {
            messages.push('Enter Numbers for Age')
            document.getElementById("age2").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else if ( age2.value.length > 3 )
        {
            messages.push('Age Exceeds 3 Digits')
            document.getElementById("age2").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else if ( age2.value < 18 )
        {
            messages.push('Minimum Age is 18')
            document.getElementById("age2").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else
        {
            document.getElementById("age2").setAttribute('style','border-color:black; border-width:0.5px;');
        }
    }
    

    if(gender2)
    {
        if ( !( gender2[0].checked || gender2[1].checked || gender2[2].checked) )
        {
            messages.push('Enter Gender')
        }
    }

    
    if(phone2)
    {
        if ( !phone2.value.match(numbers) && phone2.value != '' && phone2.value != null )
        {
            messages.push('Enter Numbers for Phone')
            document.getElementById("phone2").setAttribute('style','border-color:red; border-width:3.5px;');
        }    
        else if ( phone2.value.length > 10 )
        {
            messages.push('Maximum 10 Digits for Phone')
            document.getElementById("phone2").setAttribute('style','border-color:red; border-width:3.5px;');
        }
        else
        {
            document.getElementById("phone2").setAttribute('style','border-color:black; border-width:0.5px;');
        }
    }

    if(messages.length > 0)                 // This code is repeated here, to execute validations from line 154 onwards
    {
        e.preventDefault()    
        errorElement.innerText = messages.join(', ')
    }

})