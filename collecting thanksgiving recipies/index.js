ingreedientList = [];
listContainer = document.getElementById('ingreedientList');
numDislplayed = 0;
missingInputMessage = document.getElementById('errorMessage');
addIngreedient = () =>{
    newIngreedient = document.getElementById('ingreedient');
    if(newIngreedient.value != ''){
        ingreedientList.push(newIngreedient.value);
        displayIngreedients();
        numDislplayed += 1;
        newIngreedient.value = '';
    }
}
displayIngreedients = () =>{
    for(let i = numDislplayed; i < ingreedientList.length; i++){
        console.log(ingreedientList[i]);
        const li = document.createElement("li");
        li.textContent = ingreedientList[i];
        console.log(li);
        listContainer.appendChild(li);
    }
}
submitData = () =>{
    if(vlaidateData()){
        sessionStorage.setItem('email', document.getElementById('email').value);
        sessionStorage.setItem('todaysDate', document.getElementById('todaysDate').value);
        sessionStorage.setItem('recipieName', document.getElementById('recipieName').value);
        sessionStorage.setItem('ingreedientList', ingreedientList);
        sessionStorage.setItem('recipieType', document.getElementById('recipieType').value);

    }
    console.log(sessionStorage);
}
vlaidateData = () =>{
    missingInputMessage.value = '';
    result = true; 
    if(document.getElementById('email').value == ''){
        missingInputMessage.value += 'Input an email. ';
        result = false;
    }
    if(document.getElementById('todaysDate').value == ''){
        missingInputMessage.value += 'Input todaysDate. ';
        result = false;
    }
    if(document.getElementById('recipieName').value == ''){
        missingInputMessage.value += 'Input a recipie name. ';
        result = false;
    }
    if(ingreedientList.length < 1){
        missingInputMessage.value += 'Give us some ingreedients to work with. ';
        result = false;
    }
    if(document.getElementById('recipieType').value == ''){
        missingInputMessage.value += 'Input a recipie type. ';
        result = false;
    }
    return false;
    //TODO: implement data validation
}