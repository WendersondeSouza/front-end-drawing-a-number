document.addEventListener('DOMContentLoaded', function() {
    const loginIcon = document.querySelector('.img-login-icon');
  
    if (loginIcon) {
      loginIcon.addEventListener('mouseover', function() { // Evento mouseover
        const imageURLs = [
          './media/person_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png', // Imagem padrão
          './media/person_24dp_33FF00D0_FILL0_wght400_GRAD0_opsz24.png', //imagem a substituir
        ];
  
        let currentImageIndex = parseInt(loginIcon.dataset.currentImageIndex) || 0;
        const nextImageIndex = (currentImageIndex + 1) % imageURLs.length;
        loginIcon.src = imageURLs[nextImageIndex];
        loginIcon.dataset.currentImageIndex = nextImageIndex;
      });
  
      loginIcon.addEventListener('mouseout', function() {
        loginIcon.src = './media/person_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png';
        loginIcon.dataset.currentImageIndex = 0;
      });
    } else {
      console.error('Erro: Elemento não existente');
    }
  });
  
  
  