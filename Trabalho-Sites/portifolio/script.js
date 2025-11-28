// Botão Mostrar Mais Projetos
        const btnMostrarMais = document.getElementById('btnMostrarMais');
        const projetosOcultos = document.querySelectorAll('.projeto.oculto');
        let projetosVisiveis = false;

        btnMostrarMais.addEventListener('click', function() {
            projetosVisiveis = !projetosVisiveis;
            
            projetosOcultos.forEach(projeto => {
                if (projetosVisiveis) {
                    projeto.classList.remove('oculto');
                } else {
                    projeto.classList.add('oculto');
                }
            });

            btnMostrarMais.textContent = projetosVisiveis 
                ? 'Mostrar Menos Projetos' 
                : 'Mostrar Mais Projetos';
        });

        // Botão Voltar ao Topo
        const voltarTopo = document.getElementById('voltarTopo');

        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                voltarTopo.classList.add('visivel');
            } else {
                voltarTopo.classList.remove('visivel');
            }
        });

        voltarTopo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Rolagem suave para links do menu
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });