document.addEventListener("DOMContentLoaded", () => {

  function showNotification(message) {
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("show");
    }, 10);

    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 2500);
  }

  const images = document.querySelectorAll(".media-grid img");
  const imageModal = document.createElement("div");
  imageModal.classList.add("image-modal");

  const modalImage = document.createElement("img");

  const imageClose = document.createElement("button");
  imageClose.classList.add("modal-close");
  imageClose.innerHTML = "×";
  imageClose.setAttribute("aria-label", "Fechar imagem");

  imageModal.appendChild(modalImage);
  imageModal.appendChild(imageClose);
  document.body.appendChild(imageModal);

  images.forEach(image => {
    image.addEventListener("click", () => {
      modalImage.src = image.src;
      modalImage.alt = image.alt;
      imageModal.classList.add("active");
    });
  });

  imageClose.addEventListener("click", () => {
    imageModal.classList.remove("active");
  });

  imageModal.addEventListener("click", event => {
    if (event.target === imageModal) {
      imageModal.classList.remove("active");
    }
  });

  const gameVideo = document.querySelector(".game-video");

  if (gameVideo) {
    const videoModal = document.createElement("div");
    videoModal.classList.add("video-modal");

    const modalVideo = document.createElement("video");
    modalVideo.controls = true;
    modalVideo.autoplay = true;
    modalVideo.muted = true;
    modalVideo.playsInline = true;

    const videoSource = gameVideo.querySelector("source");

    if (videoSource) {
      modalVideo.src = videoSource.src;
    }

    const videoClose = document.createElement("button");
    videoClose.classList.add("video-close");
    videoClose.innerHTML = "×";
    videoClose.setAttribute("aria-label", "Fechar vídeo");

    videoModal.appendChild(modalVideo);
    videoModal.appendChild(videoClose);
    document.body.appendChild(videoModal);

    gameVideo.addEventListener("click", () => {
      videoModal.classList.add("active");
      modalVideo.currentTime = gameVideo.currentTime;
      modalVideo.play();
    });

    videoClose.addEventListener("click", () => {
      videoModal.classList.remove("active");
      modalVideo.pause();
    });

    videoModal.addEventListener("click", event => {
      if (event.target === videoModal) {
        videoModal.classList.remove("active");
        modalVideo.pause();
      }
    });

    window.gameVideoModal = videoModal;
    window.modalGameVideo = modalVideo;
  }

  const moreButton = document.querySelector(".media-more");

  const mediaItems = [
    { type: "video", src: "/games/gameplay.mp4" },
    { type: "image", src: "/games/gameplay1.jpeg" },
    { type: "image", src: "/games/gameplay2.jpeg" },
    { type: "image", src: "/games/gameplay3.jpeg" },
    { type: "image", src: "/games/gameplay4.jpeg" }
  ];

  const gallery = document.createElement("div");
  gallery.classList.add("media-gallery");

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery-image");

  const galleryVideo = document.createElement("video");
  galleryVideo.classList.add("gallery-image");
  galleryVideo.controls = true;
  galleryVideo.autoplay = true;
  galleryVideo.muted = true;
  galleryVideo.playsInline = true;

  const galleryClose = document.createElement("button");
  galleryClose.classList.add("gallery-close");
  galleryClose.innerHTML = "×";
  galleryClose.setAttribute("aria-label", "Fechar galeria");

  const controls = document.createElement("div");
  controls.classList.add("gallery-controls");

  const previousButton = document.createElement("button");
  previousButton.classList.add("gallery-arrow");
  previousButton.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
  previousButton.setAttribute("aria-label", "Mídia anterior");

  const counter = document.createElement("span");
  counter.classList.add("gallery-counter");

  const nextButton = document.createElement("button");
  nextButton.classList.add("gallery-arrow");
  nextButton.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
  nextButton.setAttribute("aria-label", "Próxima mídia");

  controls.appendChild(previousButton);
  controls.appendChild(counter);
  controls.appendChild(nextButton);

  gallery.appendChild(galleryImage);
  gallery.appendChild(galleryVideo);
  gallery.appendChild(controls);
  gallery.appendChild(galleryClose);
  document.body.appendChild(gallery);

  let currentMedia = 0;

  function showMedia(index) {
    currentMedia = index;
    const media = mediaItems[currentMedia];

    galleryImage.style.display = "none";
    galleryVideo.style.display = "none";

    if (media.type === "image") {
      galleryVideo.pause();
      galleryImage.src = media.src;
      galleryImage.style.display = "block";
    } else {
      galleryImage.style.display = "none";
      galleryVideo.src = media.src;
      galleryVideo.style.display = "block";
      galleryVideo.currentTime = 0;
      galleryVideo.play();
    }

    counter.textContent = `${currentMedia + 1} / ${mediaItems.length}`;
  }

  if (moreButton) {
    moreButton.addEventListener("click", () => {
      currentMedia = 0;
      showMedia(currentMedia);
      gallery.classList.add("active");
    });
  }

  nextButton.addEventListener("click", () => {
    currentMedia++;
    if (currentMedia >= mediaItems.length) {
      currentMedia = 0;
    }
    showMedia(currentMedia);
  });

  previousButton.addEventListener("click", () => {
    currentMedia--;
    if (currentMedia < 0) {
      currentMedia = mediaItems.length - 1;
    }
    showMedia(currentMedia);
  });

  galleryClose.addEventListener("click", () => {
    gallery.classList.remove("active");
    galleryVideo.pause();
  });

  gallery.addEventListener("click", event => {
    if (event.target === gallery) {
      gallery.classList.remove("active");
      galleryVideo.pause();
    }
  });

  const favoriteButton = document.querySelector('.icon-button[aria-label="Adicionar aos favoritos"]');

  if (favoriteButton) {
    favoriteButton.addEventListener("click", () => {
      const isActive = favoriteButton.classList.toggle("active");

      if (isActive) {
        showNotification("Dandy Ace foi adicionado aos favoritos!");
      } else {
        showNotification("Dandy Ace foi removido dos favoritos.");
      }
    });
  }

  const cartButton = document.querySelector('.icon-button[aria-label="Adicionar ao carrinho"]');

  if (cartButton) {
    cartButton.addEventListener("click", () => {
      const isActive = cartButton.classList.toggle("active");

      if (isActive) {
        showNotification("Dandy Ace foi adicionado ao carrinho!");
      } else {
        showNotification("Dandy Ace foi removido do carrinho.");
      }
    });
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && imageModal.classList.contains("active")) {
      imageModal.classList.remove("active");
    }

    if (event.key === "Escape" && window.gameVideoModal && window.gameVideoModal.classList.contains("active")) {
      window.gameVideoModal.classList.remove("active");
      if (window.modalGameVideo) {
        window.modalGameVideo.pause();
      }
    }

    if (event.key === "Escape" && gallery.classList.contains("active")) {
      gallery.classList.remove("active");
      galleryVideo.pause();
    }

    if (gallery.classList.contains("active")) {
      if (event.key === "ArrowRight") {
        nextButton.click();
      }

      if (event.key === "ArrowLeft") {
        previousButton.click();
      }
    }
  });

  const navigationButtons = document.querySelectorAll(".bottom-navigation span");
  const detailsSection = document.querySelector(".details-section");
  const requirementsSection = document.querySelector(".requirements-section");
  const similarSection = document.querySelector(".similar-section");

  const reviewsSection = document.createElement("section");
  reviewsSection.classList.add("reviews-section");
  reviewsSection.style.display = "none";

  reviewsSection.innerHTML = `
    <div class="reviews-container">
      <div class="reviews-header">
        <h2 class="reviews-title">Avaliações</h2>
        <div class="reviews-summary">
          <i class="fa-solid fa-star"></i>
          <strong>4,0</strong>
          <span>1.421 avaliações</span>
        </div>
      </div>
      <article class="review-card">
        <div class="review-top">
          <div class="review-user">
            <div class="review-avatar">
              <img src="/imgs/preferencias/bidu.jpg" alt="Lucas">
            </div>
            <div>
              <div class="review-name">
                Lucas
                <span class="user-rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
              </div>
              <div class="review-date">Há 2 dias</div>
            </div>
          </div>
        </div>
        <p class="review-text">
          Viciei feio nisso aqui, papo reto
          <br><br>
          comecei só pra testar e quando vi já tava horas tentando fazer build diferente com as cartas, sempre aparece alguma combinação quebrada que muda totalmente o jeito de jogar
          <br><br>
          o jogo é rápido, bonito, a trilha encaixa bem e o combate é gostoso demais de ficar spammando até dar tudo certo
          <br><br>
          não é nem questão de ser perfeito, é só muito divertido mesmo. aquele tipo de jogo que você fala “só mais uma run” e perde a noite
        </p>
        <div class="review-actions">
          <button class="review-action">
            <i class="fa-regular fa-thumbs-up"></i>
            <span>24</span>
          </button>
          <button class="review-action">
            <i class="fa-regular fa-thumbs-down"></i>
            <span>2</span>
          </button>
        </div>
      </article>
      <article class="review-card">
        <div class="review-top">
          <div class="review-user">
            <div class="review-avatar">
              <img src="/imgs/preferencias/magali.jpg" alt="Mariana">
            </div>
            <div>
              <div class="review-name">
                Mariana
                <span class="user-rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </span>
              </div>
              <div class="review-date">Há 1 semana</div>
            </div>
          </div>
        </div>
        <p class="review-text">
          Dandy Ace até tenta ser estiloso, mas o jogo não te puxa muito. A história é meio whatever, os personagens não grudam e eu não senti muita vontade de continuar avançando, mesmo com a gameplay funcionando.
          <br><br>
          Não é um jogo ruim, só falta aquele “gancho” que faz você pensar “só mais uma run”. Acabei largando sem nem perceber.
        </p>
        <div class="review-actions">
          <button class="review-action">
            <i class="fa-regular fa-thumbs-up"></i>
            <span>18</span>
          </button>
          <button class="review-action">
            <i class="fa-regular fa-thumbs-down"></i>
            <span>1</span>
          </button>
        </div>
      </article>
      <article class="review-card">
        <div class="review-top">
          <div class="review-user">
            <div class="review-avatar">
              <img src="/imgs/preferencias/cebolinha.jpg" alt="Rafael">
            </div>
            <div>
              <div class="review-name">
                Rafael
                <span class="user-rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star"></i>
                </span>
              </div>
              <div class="review-date">Há 2 semanas</div>
            </div>
          </div>
        </div>
        <p class="review-text">
          Dandy Ace é bem gostosinho de jogar. O sistema de cartas deixa cada run diferente e dá vontade de testar combinações novas o tempo todo.
          <br><br>
          O problema é que depois de algumas horas começa a ficar meio repetitivo, e não tem o mesmo impacto que outros roguelikes maiores.
          <br><br>
          Mesmo assim, tem estilo, é divertido e vale a pena, ainda mais sendo BR.
        </p>
        <div class="review-actions">
          <button class="review-action">
            <i class="fa-regular fa-thumbs-up"></i>
            <span>31</span>
          </button>
          <button class="review-action">
            <i class="fa-regular fa-thumbs-down"></i>
            <span>4</span>
          </button>
        </div>
      </article>
      <article class="review-card">
        <div class="review-top">
          <div class="review-user">
            <div class="review-avatar">
              <img src="/imgs/preferencias/chico.jpg" alt="André">
            </div>
            <div>
              <div class="review-name">
                André
                <span class="user-rating">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
              </div>
              <div class="review-date">Há 1 mês</div>
            </div>
          </div>
        </div>
        <p class="review-text">
          Excelente jogo para passar algumas horas. A mistura de ação, exploração e cartas funciona muito bem.
        </p>
        <div class="review-actions">
          <button class="review-action">
            <i class="fa-regular fa-thumbs-up"></i>
            <span>42</span>
          </button>
          <button class="review-action">
            <i class="fa-regular fa-thumbs-down"></i>
            <span>3</span>
          </button>
        </div>
      </article>
      <button class="load-more">Carregar mais</button>
    </div>
  `;

  const navigation = document.querySelector(".bottom-navigation");

  if (navigation) {
    navigation.after(reviewsSection);
  }

  function showDetails() {
    if (detailsSection) {
      detailsSection.style.display = "flex";
    }
    if (requirementsSection) {
      requirementsSection.style.display = "flex";
    }
    if (similarSection) {
      similarSection.style.display = "flex";
    }
    reviewsSection.style.display = "none";

    if (navigationButtons[0]) {
      navigationButtons[0].classList.add("active");
    }
    if (navigationButtons[1]) {
      navigationButtons[1].classList.remove("active");
    }
  }

  function showReviews() {
    if (detailsSection) {
      detailsSection.style.display = "none";
    }
    if (requirementsSection) {
      requirementsSection.style.display = "none";
    }
    if (similarSection) {
      similarSection.style.display = "none";
    }
    reviewsSection.style.display = "flex";

    if (navigationButtons[0]) {
      navigationButtons[0].classList.remove("active");
    }
    if (navigationButtons[1]) {
      navigationButtons[1].classList.add("active");
    }
  }

  navigationButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (index === 0) {
        showDetails();
      }
      if (index === 1) {
        showReviews();
      }
    });
  });

  showDetails();

  const reviewActions = reviewsSection.querySelectorAll(".review-action");

  reviewActions.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".review-card");
      const buttons = card.querySelectorAll(".review-action");
      const isActive = button.classList.contains("active");

      if (isActive) {
        button.classList.remove("active");
        const counter = button.querySelector("span");
        let value = parseInt(counter.textContent);
        counter.textContent = value - 1;
        return;
      }

      buttons.forEach(otherButton => {
        if (otherButton !== button && otherButton.classList.contains("active")) {
          otherButton.classList.remove("active");
          const otherCounter = otherButton.querySelector("span");
          let otherValue = parseInt(otherCounter.textContent);
          otherCounter.textContent = otherValue - 1;
        }
      });

      button.classList.add("active");
      const counter = button.querySelector("span");
      let value = parseInt(counter.textContent);
      counter.textContent = value + 1;
    });
  });

  const detailsBox = document.querySelector(".details-box");
  const detailsText = document.querySelector(".details-text");
  const readMoreButton = document.querySelector(".read-more");

  if (detailsBox && detailsText && readMoreButton) {
    const collapsedHeight = 315;
    detailsBox.style.height = `${collapsedHeight}px`;

    function getExpandedHeight() {
      return detailsText.scrollHeight;
    }

    function expandDetails() {
      const expandedHeight = getExpandedHeight();
      detailsBox.style.height = `${detailsBox.offsetHeight}px`;

      requestAnimationFrame(() => {
        detailsBox.style.height = `${expandedHeight + 70}px`;
      });

      detailsBox.classList.add("expanded");
      readMoreButton.textContent = "Ver menos";
    }

    function collapseDetails() {
      const currentHeight = detailsBox.offsetHeight;
      detailsBox.style.height = `${currentHeight}px`;

      requestAnimationFrame(() => {
        detailsBox.style.height = `${collapsedHeight}px`;
      });

      detailsBox.classList.remove("expanded");
      readMoreButton.textContent = "Ver mais";

      setTimeout(() => {
        detailsBox.style.height = `${collapsedHeight}px`;
      }, 450);
    }

    readMoreButton.addEventListener("click", () => {
      const isExpanded = detailsBox.classList.contains("expanded");
      if (isExpanded) {
        collapseDetails();
      } else {
        expandDetails();
      }
    });
  }

});