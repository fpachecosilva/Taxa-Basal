const form = document.forms['form']
form.addEventListener('submit', handleSubmit)

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

    console.log(basal)    
    console.log(Math.round(basalAct))
    console.log(basalFinal)
    
    var outBasal = document.getElementById("outBasal");
    // outBasal.innerHTML = "Taxa basal: " + basal + " calorias";
    outBasal.innerHTML = `Taxa basal: ${basal} calorias`;
    var outAct = document.getElementById("outAct");
    // outAct.innerHTML = "Taxa com atividade: " + basalAct + " calorias";
    outAct.innerHTML = `Taxa com atividade: ${basalAct} calorias`;
    var outDef = document.getElementById("outDef");
    // outDef.innerHTML = "Taxa de déficit calórico: " + basalFinal + " calorias";
    outDef.innerHTML = `Taxa de déficit calórico: ${basalFinal} calorias`;

    const proteinPure = form.protein.value;
    const protein = Math.round(form.protein.value * weight);    
    const fatPure = form.fat.value;
    const fat = Math.round(form.fat.value * weight);    
    const carbPure = form.carb.value;
    const carb = Math.round(form.carb.value * weight);

    resultForm = document.querySelectorAll('.result__content .form-group')
    for (let index = 0; index < resultForm.length; index++) {
        const element = resultForm[index];
        
        element.style.display = 'none';
    }

    document.getElementById("outProtein");
    outProtein.innerHTML = `Proteínas ( ${proteinPure}g ): ${protein}g`;
    document.getElementById("outFat");
    outFat.innerHTML = `Gorduras ( ${fatPure}g ): ${fat}g`;
    document.getElementById("outCarb");
    outCarb.innerHTML = `Carbos ( ${carbPure}g ): ${carb}g`;
    
}

// function getSelectedValue(id) {
//     const select = document.getElementById(id);
//     return select.options[select.selectedIndex].value;
// }
  
// function getInputNumberValue(id) {
//     return Number(document.getElementById(id).value);
// }
