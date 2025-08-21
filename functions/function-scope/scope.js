// Global scope
let globalVariable = 'Global'

function showGlobalVariable() {
    console.log(globalVariable);
}

showGlobalVariable();

// Local scope
function showLocalVariable() {
    let localVariable = 'Local';
    console.log(localVariable);
}

showLocalVariable();