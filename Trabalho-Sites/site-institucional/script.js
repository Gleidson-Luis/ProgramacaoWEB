// Rolagem suave para seções
        function scrollToSection(selector) {
            document.querySelector(selector).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Adicionar rolagem suave aos links do menu
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                scrollToSection(targetId);
            });
        });

        // Validação do formulário
        const form = document.getElementById('formContato');
        const mensagemSucesso = document.getElementById('mensagemSucesso');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validações
            if (nome === '' || nome.length < 3) {
                alert('Por favor, insira um nome válido (mínimo 3 caracteres).');
                return;
            }

            if (email === '' || !email.includes('@')) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }

            if (mensagem === '' || mensagem.length < 10) {
                alert('Por favor, insira uma mensagem com no mínimo 10 caracteres.');
                return;
            }

            // Mostrar mensagem de sucesso
            mensagemSucesso.style.display = 'block';
            form.reset();

            // Esconder mensagem após 5 segundos
            setTimeout(() => {
                mensagemSucesso.style.display = 'none';
            }, 5000);

            // Rolar até a mensagem
            mensagemSucesso.scrollIntoView({ behavior: 'smooth' });
        });