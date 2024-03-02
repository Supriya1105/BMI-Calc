const form = document.querySelector('form');

//this usecase will return empty value
// const height= parseInt(document.querySelector('height').value)

form.addEventListener('submit', function(e){
    e.preventDefault();         //to stop the default action of form
    
    const height= parseInt(document.querySelector('#height').value);

    const Weight = parseInt(document.querySelector('#Weight').value);
    const results= document.querySelector('#results');



   if (height === '' || height< 0 || isNaN(height)){

        results.innerHTML = `Please give a valid height ${height}`;
    }
    
    else if (Weight === '' || Weight< 0 || isNaN(Weight) ){
        results.innerHTML = `Please give a valid Weight ${Weight}`;
    }
     else{
        const bmi  = (Weight / ((height * height) / 10000)).toFixed(2);

        //show result


        results.innerHTML = `<span>${bmi}</span>`

        const textNode = document.createTextNode('div');

if (bmi <= 18.6) {
    textNode.textContent = "\n Hey you are perfect underweight!! stuff some healthy fats inside!";
} else if (bmi > 18.6 && bmi < 25.0) {
    textNode.textContent = "\n okay okay perfectly weighted. go be a model!";
} else {
    textNode.textContent = "\n Hey you are perfect overweight!! Go run elephant!!";
}

results.appendChild(textNode);
       

     }



    
});



                              