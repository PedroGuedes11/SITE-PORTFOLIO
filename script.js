$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        //SE O SCROLLY FOR MAIO QUE 20 ADICIONA A CLASSE "STICKY" AO MENU DE NAVEGAÇAO
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
        //SE O SCROLLY FOR MAIOR QUE 500 ADICONA A CLASSE "SHOW" AO BOTAO DE TOPO DA PAGINA
    });
     $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // FUNCAO DO BOTAO DE TOPO DA PAGINA
    });


    var typed = new Typed(".typing", {
         strings:["Estudante", "Desenvolvedor", "Atleta Profissional"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
    });
    var typed = new Typed(".typing-2", {
        strings:["Estudante", "Desenvolvedor", "Atleta Profissional"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    // ARRAYS PARA A ANIMAÇAO DE DIGITAÇAO NAS SESSOES "HOMEPAGE" E "SOBRE MIM" 

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        // BOTAO PARA MOSTRAR/ESCONDER O MENU REPONSIVO ADICIONANDO/REMOVENDO A CLASSE "ACTIVE"
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    // FUNÇAO PARA ANIMAÇAO DO CARROSSEL NA SESSAO PROJETOS
    });
});