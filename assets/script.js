const form = document.forms['form']
form.addEventListener('submit', handleSubmit, escondeForm)

function handleSubmit(e) {
    e.preventDefault();
    const weight = form.weight.value;
    const height = form.height.value.replace('.','');
    const age = form.age.value;
    const gender = form.gender.value;
    const level = form.level.value;

    gender == 'male' ? basal = (10 * weight) + ( 6.25 * height ) - ( 5 * age ) + 5 : basal = (10 * weight) + ( 6.25 * height ) - ( 5 * age ) -161;

    basal = Math.round(basal)
    basalAct = Math.round(basal * level);
    basalFinal = Math.round(basalAct - ( basalAct * 0.25 ))
    
    var outBasal = document.getElementById("outBasal");
    var outAct = document.getElementById("outAct");
    var outDef = document.getElementById("outDef");
    // outBasal.innerHTML = `Taxa metabólica basal: ${basal} calorias`;
    outAct.innerHTML = `Para manter o peso: ${basalAct} calorias`;
    outDef.innerHTML = `Déficit para emagrecimento: ${basalFinal} calorias`;
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
}

function mostraForm() {
    for (let index = 0; index < resultForm.length; index++) {
        const element = resultForm[index];        
        element.style.display = 'block';
    }
}

function mostraBadges() {
    for (let index = 0; index < badges.length; index++) {
        const badge = badges[index];        
        badge.style.display = 'inline-block';
    }
    document.querySelector('.rowBadges').style.display = 'flex';    
}