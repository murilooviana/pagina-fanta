// Criação de uma timeline do GSAP com animações sincronizadas com o scroll // 

var tl = gsap.timeline({
   scrollTrigger: {
     trigger: '.two',
      start: '0% 95%',
       end: '70% 50%',
        scrub: true,
         markers: true, //DEPURAÇÃO
        }, 
      });
         tl.to ( 
          '#fanta', 
          {
             top: '120%', //MOVE O ELEMENTO FANTA PARA 120% DO TOPO//  
             left: '0%',
             }, 
             'orange'
             ); 
             //Nomeando esse trecho de animação como 'orange' para sincronização 
             
             tl.to ( 
              '#laranja-cortada', 
              { 
                top:'160%', //Move o elemento com id 'orange-cut' para 160% do topo
                left:'23%', //Move o elemento para 23% para a esquerda
               }, 
               'orange' 
              ); //Sincronizando com a animação nomeada 'orange'
             
              tl.to (
                 '#laranja', 
                { 
                  widht:'15%', //Reduz a largura do elemento com id 'laranja' para 15% 
                  top:'160%', //Move o elemento para 160% do topo 
                  right:'10%', //Move o elemento para 10% para a esquerda
               }, 
               'orange'  
              ); //Sincronizando com a animação nomeada 'orange'

              tl.to (
                 '#folha', 
                { 
                  rotate: '530deg', //Rotaciona o elemento em 130 graus
                  top:'110%', //Move o elemento para 110% do topo 
                  left:'70%', //Move o elemento para 70% para a esquerda
               }, 
               'orange'  
              ); //Sincronizando com a animação nomeada 'orange'

              tl.to (
                 '#folha2', 
                { 
                  rotate: '530deg', //Rotaciona o elemento em 130 graus
                  top:'110%', //Move o elemento com o id 'folha2' para 110% do topo 
                  left:'0%', //Move o elemento para 70% para a esquerda
               }, 
               'orange'  
              ); //Sincronizando com a animação nomeada 'orange'

              //Criando outra timeline

              var tl2 = gsap.timeline({
   scrollTrigger: {
     trigger: '.three',
      start: '0% 95%',
       end: '20% 50%', // Fim da animação (topo da tela atinge 50% da altura quando estiver 20% da seção .three)
        scrub: true,
         markers: true, //DEPURAÇÃO
        }, 
      });

      //Definindo a animação dos elementos com a timeline 'tl2'
      tl2.from (
        '.lemon1',
        {
          rotate: '-90deg', // Inicia o elemento com classe 'lemon1' rotacionando
          left: '-100%',
          top: '110%',
        },
        'ca'
      ); // Nomeando este techo de animação como 'ca' para sincronização

      tl2.from (
        '#cocacola',
        {
          rotate: '-90deg', // Inicia o elemento com classe 'lemon1' rotacionando
          left: '-100%',
          top: '110%',
        },
        'ca'
      ); // Nomeando este techo de animação como 'ca' para sincronização

       tl2.from (
        '.lemon2',
        {
          rotate: '90deg', // Inicia o elemento com classe 'lemon2' rotacionando
          left: '100%',
          top: '110%',
        },
        'ca'
      );

      tl2.from (
        '#pepsi',
        {
          rotate: '90deg', // Inicia o elemento com classe 'lemon2' rotacionando
          left: '100%',
          top: '110%',
        },
        'ca'
      );

       tl2.to(
        '#laranja-cortada',
        {
          width: '18%' ,// Aumenta a largura do elemento com id 'laranja-cortada'
          left: '42%', // Move o elemento para a esquerda 42%
          top: '204%', // Move o elemento para o topo 204%
        },
        'ca'
      ); // Sincronizando com a animação nomeada 'ca'

      tl2.to(
        '#fanta',
        {
          width: '35%' ,// Aumenta a largura do elemento com id 'laranja-cortada'
          left: '33%', // Move o elemento para a esquerda 42%
          top: '210%', // Move o elemento para o topo 204%
        },
        'ca'
      ); // Sincronizando com a animação nomeada 'ca'