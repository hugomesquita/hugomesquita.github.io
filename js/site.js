$(".open-menu").click(function(){
    $("#menu").toggleClass("menu-active");
    $(".top-menu").toggleClass("mascara");
});

$("a.para-id").click(function(e){
    e.preventDefault();

    $("#menu").removeClass("menu-active");
    $(".top-menu").removeClass("mascara");
    $(".top-menu").removeClass("fixo");

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-150
    }, 500);
});


$(window).scroll(function() {
    if($(this).scrollTop() > 500){
        if($("#menu").hasClass("menu-active")){
            $(".top-menu").addClass("fixo");
        }   
    }else{
        $(".top-menu").removeClass("fixo");
    }


    //$(".top-menu").addClass("fixo");
});

$(".open-menu").click(function(){
    if($("#menu").hasClass("menu-active")){
        $(".top-menu").addClass("fixo");
    }else{
        $(".top-menu").removeClass("fixo");
    }   
})



$(".msg-sucess").hide();
$("#formContato").submit(function(e){
	e.preventDefault();

	var nome = $("input[name=nome]").val();
	var email = $("input[name=email_cliente]").val();
	var assunto = $("select[name=assunto]").val();
	var mensagem = $("textarea[name=mensagem]").val();
	

	$.get("email-contato.php", { nome_contato: nome, email_contato: email, mensagem_contato: mensagem, assunto_contato: assunto, contato: "ok"  } ).done(function(texto){
        $(".msg-sucess").show();
        $(".msg-sucess").html(texto);
        $("#formContato").trigger("reset");
	});
});
