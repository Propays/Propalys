document.getElementById("loadBtn").addEventListener("click", function () {
  const videoUrl = document.getElementById("videoUrl").value.trim();
  const iframeContainer = document.getElementById("iframeContainer");

  if (!videoUrl) {
    alert("Bitte gib eine YouTube-URL ein.");
    return;
  }

  const encodedVideoUrl = encodeURIComponent(videoUrl);
  const iframe = document.createElement("iframe");

  iframe.id = "cardApiIframe";
  iframe.src = `https://p.oceansaver.in/api/card2/?url=${encodedVideoUrl}`;
  iframe.style.border = "none";
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.allowTransparency = true;
  iframe.scrolling = "no";

  // iFrame ersetzen
  iframeContainer.innerHTML = "";
  iframeContainer.appendChild(iframe);

  // Resize aktivieren
  iFrameResize({ log: false }, "#cardApiIframe");

  // Sichtbarkeit und Animation aktivieren
  iframeContainer.classList.add("show");
});
