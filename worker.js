
export default {
  async fetch(request, env, ctx) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#0b1020">
  <meta name="description" content="Shaurya's websites — projects, experiments, games, and more.">
  <title>Shaurya's Website ✨</title>

  <style>
    :root {
      color-scheme: dark;
      --background: #0b1020;
      --card: #1b2438;
      --text: #ffffff;
      --muted: #a4acc2;
      --accent: #c084fc;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      min-height: 100vh;
      font-family: system-ui, -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
      background: var(--background);
      color: var(--text);
      overflow-x: hidden;
    }

    /* Ambient background glow */
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      z-index: -1;
      pointer-events: none;
      background:
        radial-gradient(
          ellipse at 15% 15%,
          rgba(124, 58, 237, 0.22),
          transparent 45%
        ),
        radial-gradient(
          ellipse at 85% 80%,
          rgba(37, 99, 235, 0.18),
          transparent 45%
        );
    }

    .page {
      width: min(100% - 40px, 850px);
      min-height: 100vh;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 70px 0 30px;
    }

    /* Hero section */
    .hero {
      text-align: center;
      margin-bottom: 42px;
      animation: fadeUp 0.7s ease both;
    }

    .eyebrow {
      display: inline-block;
      padding: 9px 16px;
      border: 1px solid rgba(192, 132, 252, 0.25);
      border-radius: 100px;
      background: rgba(192, 132, 252, 0.08);
      color: #c4b5fd;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    h1 {
      margin: 24px 0 16px;
      font-size: clamp(38px, 7vw, 66px);
      font-weight: 800;
      letter-spacing: -2.5px;
      line-height: 1.12;
    }

    h1 span {
      background: linear-gradient(
        110deg,
        #c084fc,
        #818cf8,
        #67e8f9
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .subtitle {
      color: var(--muted);
      font-size: 17px;
      line-height: 1.7;
      max-width: 530px;
      margin: 0 auto;
    }

    /* Project cards */
    .projects {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
    }

    .card {
      position: relative;
      display: flex;
      flex-direction: column;
      min-height: 220px;
      padding: 26px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      background: var(--card);
      color: var(--text);
      text-decoration: none;
      overflow: hidden;
      isolation: isolate;
      transition:
        transform 0.25s ease,
        box-shadow 0.25s ease,
        border-color 0.25s ease;
      animation: fadeUp 0.7s ease both;
    }

    .card:nth-child(1) { animation-delay: 0.1s; }
    .card:nth-child(2) { animation-delay: 0.2s; }
    .card:nth-child(3) { animation-delay: 0.3s; }
    .card:nth-child(4) { animation-delay: 0.4s; }
    .card:nth-child(5) { animation-delay: 0.5s; }
    .card:nth-child(6) { animation-delay: 0.6s; }

    .card:hover {
      transform: translateY(-7px);
      border-color: rgba(192, 132, 252, 0.45);
      box-shadow: 0 18px 45px rgba(0, 0, 0, 0.3);
    }

    .card:focus-visible {
      outline: 3px solid #c4b5fd;
      outline-offset: 4px;
    }

    .icon-box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 54px;
      height: 54px;
      border-radius: 15px;
      background: rgba(255, 255, 255, 0.08);
      font-size: 27px;
      margin-bottom: 28px;
    }

    .card h2 {
      font-size: 21px;
      margin: 0 0 9px;
      letter-spacing: -0.5px;
    }

    .card p {
      font-size: 14px;
      line-height: 1.6;
      color: var(--muted);
      margin: 0;
      padding-right: 20px;
    }

    .arrow {
      position: absolute;
      right: 24px;
      bottom: 24px;
      font-size: 23px;
      color: #a5b4fc;
      transition: transform 0.25s ease;
    }

    .card:hover .arrow {
      transform: translate(4px, -4px);
    }

    /* Randomly colored card */
    .card.chaotic {
      color: #111827;
      border-color: rgba(255, 255, 255, 0.25);
    }

    .card.chaotic p,
    .card.chaotic .arrow {
      color: #1f2937;
    }

    .card.chaotic .icon-box {
      background: rgba(0, 0, 0, 0.1);
    }

    .chaos-label {
      display: none;
      position: absolute;
      top: 24px;
      right: 20px;
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      color: #111827;
      background: rgba(255, 255, 255, 0.4);
      padding: 7px 10px;
      border-radius: 100px;
    }

    .card.chaotic .chaos-label {
      display: block;
    }

    /* Footer */
    footer {
      text-align: center;
      margin-top: 45px;
      color: #7f8ba5;
      font-size: 13px;
      line-height: 1.8;
      animation: fadeUp 0.7s 0.5s both;
    }

    footer .heart {
      color: #f472b6;
    }

    /* Entrance animation */
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Mobile layout */
    @media (max-width: 600px) {
      .page {
        width: min(100% - 32px, 440px);
        padding-top: 55px;
      }

      .hero {
        margin-bottom: 30px;
      }

      h1 {
        letter-spacing: -1.5px;
      }

      .subtitle {
        font-size: 15px;
      }

      .projects {
        grid-template-columns: 1fr;
        gap: 14px;
      }

      .card {
        min-height: 180px;
        padding: 22px;
      }

      .icon-box {
        margin-bottom: 18px;
      }

      .chaos-label {
        top: 20px;
        right: 16px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation: none !important;
        transition: none !important;
      }
    }
  </style>
</head>

<body>
  <main class="page">

    <header class="hero">
      <div class="eyebrow">
        ✦ a bit of this, and a bit of that...
      </div>

      <h1>
        Shaurya's Website ✨</span>
      </h1>

      <p class="subtitle">
        Projects, experiments, games, and whatever
        I decide to build next. Pick something
        interesting and dive in.
      </p>
    </header>

    <section class="projects" aria-label="My projects">

      <a class="card"
         href="https://midterm-uj.shauryaswebsite.com/">
        <div class="chaos-label">✨ Chaotic Pick</div>
        <div class="icon-box">🎓</div>
        <h2>Midterm-UJ</h2>
        <p>
          Jump into the midterm project.
        </p>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>

      <a class="card"
         href="https://gerry.shauryaswebsite.com/">
        <div class="chaos-label">✨ Chaotic Pick</div>
        <div class="icon-box">🦎</div>
        <h2>Gerry the Salamander</h2>
        <p>
          A gerrymandering adventure with
          Gerry the Salamander.
        </p>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>

      <a class="card"
         href="https://race.shauryaswebsite.com/">
        <div class="chaos-label">✨ Chaotic Pick</div>
        <div class="icon-box">🏁</div>
        <h2>Race to Whitehouse</h2>
        <p>
          Keep score while playing the
          Race to Whitehouse board game.
        </p>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>

      <a class="card"
         href="https://hello.shauryaswebsite.com/">
        <div class="chaos-label">✨ Chaotic Pick</div>
        <div class="icon-box">👋</div>
        <h2>About Me</h2>
        <p>
          Curious about who's behind all this?
          Come say hello!
        </p>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>


      <a class="card"
         href="https://qed.shauryaswebsites.com/">
        <div class="chaos-label">✨ Chaotic Pick</div>
        <div class="icon-box">🧩</div>
        <h2>QED Project</h2>
        <p>
          Divide a 5×5 grid into connected regions
          and see which letter wins the majority.
        </p>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>


      <a class="card"
         href="https://presidentialsim.shauryaswebsites.com/">
        <div class="chaos-label">✨ Chaotic Pick</div>
        <div class="icon-box">🗳️</div>
        <h2>Road to 270</h2>
        <p>
          Build your candidate, campaign across the country,
          and win 270 electoral votes.
        </p>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>

    </section>

    <footer>
      <div>
        ✨ One project gets a weird color every refresh.
      </div>
      <div>
        Built with fun, and
        questionable design decisions.
        <span class="heart">♥</span>
      </div>
    </footer>

  </main>

  <script>
    // The original collection of weird colors
    const weirdColors = [
      "#ff00ff", // Neon pink
      "#39ff14", // Radioactive green
      "#ff4500", // Bright orange
      "#9400d3", // Electric purple
      "#00ffff", // Cyan
      "#ffff00", // Bright yellow
      "#ff1493", // Deep pink
      "#7fff00", // Chartreuse
      "#ff69b4", // Hot pink
      "#00ff7f", // Spring green
      "#ff0000", // Bright red
      "#8a2be2"  // Blue violet
    ];

    // Get all project cards
    const cards = document.querySelectorAll(".card");

    // Randomly choose one card
    const randomCard = Math.floor(
      Math.random() * cards.length
    );

    // Randomly choose one weird color
    const randomColor = weirdColors[
      Math.floor(Math.random() * weirdColors.length)
    ];

    // Apply the random weirdness
    const chosenCard = cards[randomCard];

    chosenCard.classList.add("chaotic");
    chosenCard.style.backgroundColor = randomColor;

    // Use white text on darker weird colors
    const darkColors = [
      "#9400d3",
      "#ff0000",
      "#8a2be2"
    ];

    if (darkColors.includes(randomColor)) {
      chosenCard.style.color = "#ffffff";

      chosenCard.querySelector("p").style.color =
        "rgba(255,255,255,0.85)";

      chosenCard.querySelector(".arrow").style.color =
        "#ffffff";

      chosenCard.querySelector(".chaos-label").style.color =
        "#ffffff";

      chosenCard.querySelector(".chaos-label").style.background =
        "rgba(0,0,0,0.25)";
    }
  </script>

</body>
</html>`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8"
      }
    });
  }
};
