
export default {
  async fetch(request, env, ctx) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#0b1020">
  <meta name="description" content="Shaurya's websites — projects, experiments, games, and more.">
  <title>Shaurya's Websites ✨</title>

  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&display=swap');
    :root { color-scheme: dark; --background:#0b1020; --card:#171f33; --text:#f0f2fa; --muted:#a9b2c9; --accent:#c4b5fd; }
    * { box-sizing:border-box; }
    body { margin:0; min-height:100vh; font:14px/1.5 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; background:radial-gradient(ellipse at 10% 0%,#231841 0,transparent 55%),var(--background); color:var(--text); }
    .page { width:min(calc(100% - clamp(32px,5vw,96px)),1800px); margin:0 auto; padding:28px 0 18px; }
    .hero { margin-bottom:24px; }
    .eyebrow { color:var(--muted); font-size:14px; font-weight:600; }
    h1 { font-size:clamp(28px,3vw,36px); line-height:1.2; letter-spacing:-1px; margin:20px 0 8px; }
    .subtitle { color:var(--muted); font-size:14px; line-height:1.6; max-width:760px; margin:0; }
    .projects { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:clamp(14px,1.5vw,24px); }
    .card { position:relative; display:grid; grid-template-columns:clamp(40px,3.5vw,56px) minmax(0,1fr) 20px; grid-template-rows:24px auto 1fr; column-gap:clamp(12px,1.2vw,20px); row-gap:8px; align-content:start; min-height:clamp(176px,21vh,240px); padding:clamp(18px,1.8vw,30px); border:1px solid #2b344d; border-radius:13px; background:var(--card); color:var(--text); text-decoration:none; transition:transform .15s,border-color .15s,background .15s; }
    .card[hidden] { display:none; }
    .card:hover { transform:translateY(-3px); background:#1d2740; border-color:#8e7bc4; }
    .card:focus-visible,.heart-trigger:focus-visible,.trapdoor:focus-visible { outline:3px solid var(--accent); outline-offset:4px; }
    .icon-box { grid-column:1; grid-row:2 / span 2; display:grid; place-items:center; width:clamp(40px,3.5vw,56px); height:clamp(40px,3.5vw,56px); border-radius:12px; background:#252e47; font-size:clamp(22px,2vw,30px); }
    .card h2 { grid-column:2; grid-row:2; min-width:0; overflow-wrap:break-word; font-size:clamp(18px,1.4vw,22px); line-height:1.35; font-weight:650; letter-spacing:-.2px; margin:1px 0 0; }
    .card p { grid-column:2; grid-row:3; min-width:0; overflow-wrap:break-word; color:var(--muted); font-size:clamp(14px,1.05vw,16px); line-height:1.5; margin:0; }
    .arrow { grid-column:3; grid-row:2; color:#929dba; font-size:17px; }
    .chaos-label { grid-column:1 / -1; grid-row:1; justify-self:end; visibility:hidden; font-size:11px; line-height:20px; font-weight:750; padding:2px 9px; border-radius:100px; background:rgba(255,255,255,.35); color:inherit; }
    .card.chaotic .chaos-label { visibility:visible; }
    .card.chaotic { background:var(--chaos-bg); color:var(--chaos-ink); border-color:var(--chaos-ink); }
    .card.chaotic p,.card.chaotic .arrow { color:var(--chaos-ink); }
    .card.chaotic .icon-box { background:rgba(128,128,128,.25); }
    .card .touchline-icon, .card.chaotic .touchline-icon { background:#112e26; color:#d9ef86; }
    .touchline-icon .brand-icon { font:800 32px/1 'DM Sans',sans-serif; letter-spacing:-6px; }
    .touchline-icon .brand-icon span { font-size:22px; }
    footer { display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:8px 20px; margin-top:20px; color:var(--muted); font-size:12px; }
    footer > div:last-child { flex-basis:100%; text-align:right; }
    footer .heart { color:#f472b6; }
    .heart-trigger { min-width:44px; min-height:44px; font:inherit; border:0; background:transparent; cursor:pointer; touch-action:manipulation; }
    .trapdoor { display:inline-flex; align-items:center; justify-content:center; width:64px; height:64px; color:var(--accent); border:1px solid #65527e; border-radius:14px; background:#141b2e; }
    .trapdoor[hidden] { display:none; }
    .trapdoor:hover { color:#67e8f9; }
    .trapdoor svg { width:46px; height:46px; }
    @media(min-width:1800px) { .projects { grid-template-columns:repeat(4,minmax(0,1fr)); } }
    @media(max-width:1000px) { .projects { grid-template-columns:repeat(2,minmax(0,1fr)); } }
    @media(max-width:620px) { .page { width:calc(100% - 32px); padding-top:24px; } .projects { grid-template-columns:1fr; } .card { min-height:170px; } footer { align-items:flex-start; flex-direction:column; } }
    @media(prefers-reduced-motion:reduce) { .card { transition:none; } .card:hover { transform:none; } }
  </style>
</head>

<body>
  <main class="page">

    <header class="hero">
      <div class="eyebrow">
        ✦ a bit of this, and a bit of that...
      </div>

      <h1>
        Shaurya's Websites ✨
      </h1>

      <p class="subtitle">
        Build an empire, lead your soccer team to championship glory, or try something unexpected. Your move...
      </p>
    </header>

    <section class="projects" aria-label="My projects">

      <a class="card"
         href="https://midterm-uj.shauryaswebsites.com/">
        <div class="chaos-label">✨ Chaotic Pick</div>
        <div class="icon-box">🎓</div>
        <h2>Midterm-UJ</h2>
        <p>
          Jump into the midterm project.
        </p>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>

      <a class="card"
         href="https://gerry.shauryaswebsites.com/">
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
         href="https://race.shauryaswebsites.com/">
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
         href="https://hello.shauryaswebsites.com/">
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
          Build a campaign and win the White House.
        </p>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>

      <a class="card"
         href="https://soccersim.shauryaswebsites.com/">
        <div class="chaos-label">✨ Chaotic Pick</div>
        <div class="icon-box">⚽</div>
        <h2>League Lab</h2>
        <p>
          Twenty clubs. Four philosophies. One champion.
        </p>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>

      <a class="card"
         href="https://army.shauryaswebsites.com/">
        <div class="chaos-label">✨ Chaotic Pick</div>
        <div class="icon-box">🛡️</div>
        <h2>Army Game</h2>
        <p>
          Step into the army simulator and put
          your strategy to the test.
        </p>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>

      <a class="card"
         href="https://soccermanager.shauryaswebsites.com/">
        <div class="chaos-label">✨ Chaotic Pick</div>
        <div class="icon-box touchline-icon" aria-hidden="true"><span class="brand-icon">T<span>•</span></span></div>
        <h2>Touchline · Soccer Manager</h2>
        <p>
          Sign players, set your lineup, and lead your club to Soccer Championship Glory.
        </p>
        <span class="arrow" aria-hidden="true">↗</span>
      </a>

      <a class="card" id="admin-project" href="https://auth.shauryaswebsites.com/admin" hidden>
        <div class="chaos-label">✨ Chaotic Pick</div>
        <div class="icon-box">🛡️</div>
        <h2>Admin Dashboard</h2>
        <p>Manage users and access across Shaurya's Websites.</p>
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
        <button class="heart heart-trigger" id="secret-heart" type="button" aria-label="A little love" aria-controls="secret-trapdoor" aria-expanded="false">♥</button>
      </div>
      <div>
        <a class="trapdoor" id="secret-trapdoor" href="https://secret.shauryaswebsites.com/" aria-label="Enter the secret trapdoor" title="You found the trapdoor. Step inside." hidden>
          <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M8 39 32 27 56 39 32 53Z" fill="#080c18"/>
            <path d="M8 39V15L32 3V27Z" fill="#26324b"/>
            <path d="M14 22 27 15M14 29 27 22"/>
            <circle cx="22" cy="24" r="2"/>
            <path d="M27 36V49M37 36V49M27 40H37M27 45H37"/>
          </svg>
        </a>
      </div>
    </footer>

  </main>

  <script>
    const secretHeart = document.getElementById("secret-heart");
    const secretTrapdoor = document.getElementById("secret-trapdoor");
    let heartClicks = 0;
    secretHeart.addEventListener("click", () => {
      heartClicks++;
      if (heartClicks === 5) {
        secretTrapdoor.hidden = false;
        secretHeart.setAttribute("aria-expanded", "true");
        secretTrapdoor.focus();
      }
    });

    const cards = document.querySelectorAll(".card:not([hidden])");
    const chosenCard = cards[Math.floor(Math.random() * cards.length)];
    chosenCard.classList.add("chaotic");
    const weirdColors = ["#ff00ff","#39ff14","#ff4500","#9400d3","#00ffff","#ffff00","#ff1493","#7fff00","#ff69b4","#00ff7f","#ff0000","#8a2be2"];
    const randomColor = weirdColors[Math.floor(Math.random() * weirdColors.length)];
    // Choose the more readable of black and white for every random color.
    const rgb = randomColor.slice(1).match(/../g).map(value => parseInt(value,16)/255);
    const linear = rgb.map(value => value <= 0.04045 ? value/12.92 : Math.pow((value+0.055)/1.055,2.4));
    const luminance = linear[0]*0.2126 + linear[1]*0.7152 + linear[2]*0.0722;
    chosenCard.style.setProperty("--chaos-bg",randomColor);
    chosenCard.style.setProperty("--chaos-ink",luminance > 0.179 ? "#000000" : "#ffffff");
  </script>
  <script>
    // Shared login widget dispatches this after checking the server-side session.
    // Access is enforced by the authentication Worker; this only controls visibility.
    window.addEventListener("shaurya:auth-changed", event => {
      const adminTile = document.getElementById("admin-project");
      if (adminTile) adminTile.hidden = event.detail?.user?.isAdmin !== true;
    });
  </script>

<script defer src="https://feedback.shauryaswebsites.com/widget.js"></script>
<script defer src="https://navigation.shauryaswebsites.com/launcher.js"></script>
<script defer src="https://auth.shauryaswebsites.com/widget.js"></script>
</body>
</html>`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8"
      }
    });
  }
};
