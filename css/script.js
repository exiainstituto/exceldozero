document.addEventListener('DOMContentLoaded', () => {
    // 1. Controle do Menu Mobile (Hambúrguer)
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link, .btn-header');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Fechar menu ao clicar em qualquer item
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // 2. Scroll Suave
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Verifica se o usuário já marcou a opção "Não mostrar novamente"
    const hidePopup = localStorage.getItem("cetepis_hide_popup");

    if (!hidePopup) {
      // Abre o pop-up automaticamente 1 segundo após o carregamento da página
      setTimeout(function () {
        document.getElementById("popup-cetepis").style.display = "flex";
      }, 1000);
    }
  });

  function closePopup() {
    const checkbox = document.getElementById("no-show-checkbox");
    
    // Se a caixa estiver marcada, grava a escolha no navegador para não exibir mais
    if (checkbox && checkbox.checked) {
      localStorage.setItem("cetepis_hide_popup", "true");
    }

    document.getElementById("popup-cetepis").style.display = "none";
  }
</script>