function kelilingjargen() {
    const sisiA = parseFloat(document.getElementById("sisiA").value);
    const sisiB = parseFloat(document.getElementById("sisiB").value);
    const kelilingjargen = 2 * (sisiA + sisiB);

    document.getElementById("hasil1").innerHTML = "Kelilingnya adalah : " + kelilingjargen;
    
}

function luasjargen() {
    const a = parseFloat(document.getElementById("a").value);
    const t = parseFloat(document.getElementById("t").value);
    const luasjargen = a * t;

    document.getElementById("hasil2").innerHTML = "Luasnya adalah : " + luasjargen;
    
}