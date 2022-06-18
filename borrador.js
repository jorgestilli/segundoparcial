/*function myFunction (){
let serie = document.getElementById("floatingTitle").value;
    let plataform = document.getElementById("floatingPlataforma").value;
    let description = document.getElementById("floatingTextarea").value;

    const node = document.createElement("p");
    const serieNode = document.createTextNode(serie);
    const plataformNode = document.createTextNode(plataform);
    const descriptionNode = document.createTextNode(description);

    node.appendChild(serieNode);
    node.appendChild(plataformNode);
    node.appendChild(descriptionNode);
    
    document.getElementById("display").appendChild(node);
}
*/


$(document).ready(() => {
    $("form").submit((event) => {
        event.preventDefault();

        var name = $("floatingTitle").val().trim();
        var plataform = $("floatingPlataforma").val().trim();
        var description = $("floatingTextarea").val().trim();

        if(name !== "" && plataform !== "" && description !== ""){
            let item = $("<li></li>").text(`Serie: ${name} - Plataforma: ${plataform} - Descripcion: ${description}`);
            $("#listahtml").append(item);

            $("#floatingTitle").val("");
            $("#floatingPlataforma").val("");
            $("#floatingTextarea").val("");   
        }else{
            alert("Faltan datos por completar");
        }
    });
});
