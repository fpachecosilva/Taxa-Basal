const form = document.forms['form']
form.addEventListener('submit', handleSubmit, escondeForm)

function handleSubmit(e) {
    e.preventDefault();

    const weight = form.weight.value;
    const height = Math.round(form.height.value);
    const age = form.age.value;
    const gender = form.gender.value;
    const level = form.level.value;    

    gender == 'male' ? basal = (10 * weight) + ( 6.25 * height ) - ( 5 * age ) + 5 : basal = (10 * weight) + ( 6.25 * height ) - ( 5 * age ) -161;

    basal = Math.round(basal)
    basalFinal = Math.round(basal * level);
    basalAct = Math.round(basalFinal - ( basalFinal * 0.25 ))

    // console.log(basal)    
    // console.log(Math.round(basalAct))
    // console.log(basalFinal)
    
    var outBasal = document.getElementById("outBasal");
    outBasal.innerHTML = `Taxa basal: ${basal} calorias`;
    var outAct = document.getElementById("outAct");
    outAct.innerHTML = `Taxa com atividade: ${basalAct} calorias`;
    var outDef = document.getElementById("outDef");
    outDef.innerHTML = `Taxa de déficit calórico: ${basalFinal} calorias`;

    const proteinPure = form.protein.value;
    const protein = Math.round(form.protein.value * weight);    
    const fatPure = form.fat.value;
    const fat = Math.round(form.fat.value * weight);    
    const carbPure = form.carb.value;
    const carb = Math.round(form.carb.value * weight);    

    var outProtein = document.getElementById("outProtein");
    var outFat = document.getElementById("outFat");
    var outCarb = document.getElementById("outCarb");
    outProtein.innerHTML = `Proteínas ( ${proteinPure}g ): ${protein}g`;
    outFat.innerHTML = `Gorduras ( ${fatPure}g ): ${fat}g`;
    outCarb.innerHTML = `Carbos ( ${carbPure}g ): ${carb}g`;

    escondeForm();
    mostraBadges();
}

var resultForm = document.querySelectorAll('.inserirDados')
const resetButton = document.querySelector('#reset__button')
const resultButton = document.querySelector('#result__button')
var badges = document.querySelectorAll('.badge')

function escondeForm() {
    for (let index = 0; index < resultForm.length; index++) {
        const element = resultForm[index];        
        element.style.display = 'none';
    }
    resetButton.style.display = 'inline-block';
    resultButton.style.display = 'none';
}

function mostraForm() {
    for (let index = 0; index < resultForm.length; index++) {
        const element = resultForm[index];        
        element.style.display = 'block';
    }
    resetButton.style.display = 'none';
    resultButton.style.display = 'inline-block';    
}

function escondeBadges() {
    for (let index = 0; index < badges.length; index++) {
        const badge = badges[index];        
        badge.style.display = 'none';
    }
    document.querySelector('.rowBadges').style.display = 'none';
    outBasal.innerHTML = '';
    outAct.innerHTML = '';
    outDef.innerHTML = '';
}

function mostraBadges() {
    for (let index = 0; index < badges.length; index++) {
        const badge = badges[index];        
        badge.style.display = 'inline-block';
    }
    document.querySelector('.rowBadges').style.display = 'block';
}

function validaReset() {
    var proteinButton = document.querySelector('#outProtein')
    var res = window.getComputedStyle(proteinButton, null).display;

    escondeForm();
    escondeBadges();

    if(res !== 'none') {
        mostraForm();
    } 
}