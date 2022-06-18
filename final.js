$(document).ready(() => {
    $("form").submit((event) => {
        event.preventDefault();

        var name = $("#floatingTitle").val().trim();
        var plataform = $("#floatingPlataforma").val().trim();
        var description = $("#floatingTextarea").val().trim();

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
