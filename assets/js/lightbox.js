(() => {
  // Evita crear la ventana más de una vez.
  if (document.getElementById("project-lightbox")) return;
  if (typeof HTMLDialogElement === "undefined") return;

  const dialog = document.createElement("dialog");
  dialog.id = "project-lightbox";
  dialog.className = "image-lightbox";
  dialog.setAttribute("aria-label", "Enlarged project image");

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "image-lightbox-close";
  closeButton.textContent = "✕";
  closeButton.setAttribute("aria-label", "Close image");

  const enlargedImage = document.createElement("img");

  dialog.append(closeButton, enlargedImage);
  document.body.append(dialog);

  // Solo activa imágenes dentro de figuras enlazadas
  // directamente a un archivo de imagen.
  document.querySelectorAll("figure a[href]").forEach((link) => {
    const thumbnail = link.querySelector("img");
    const imageURL = new URL(link.href, document.baseURI);

    if (!thumbnail) return;
    if (!/\.(png|jpe?g|webp|gif|avif)$/i.test(imageURL.pathname)) return;

    link.classList.add("lightbox-trigger");
    link.setAttribute("aria-haspopup", "dialog");

    link.addEventListener("click", (event) => {
      // Conserva Ctrl/clic o Cmd/clic para abrir otra pestaña.
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
        return;
      }

      event.preventDefault();

      enlargedImage.src = imageURL.href;
      enlargedImage.alt = thumbnail.alt || "Project image";

      dialog.showModal();
      document.documentElement.classList.add("lightbox-open");
    });
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  // También se ejecuta al cerrar con Escape.
  dialog.addEventListener("close", () => {
    document.documentElement.classList.remove("lightbox-open");
    enlargedImage.removeAttribute("src");
  });
})();
