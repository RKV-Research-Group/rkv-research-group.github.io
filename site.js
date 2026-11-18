/* ============================================================
   Shared header, footer and small behaviours for every page.
   Edit the menu or footer here once — all pages update.
   ============================================================ */
const SITE = {
  email: "rajendra.varma@iitjammu.ac.in",
  office: "Room 6022, Pushkar Block",
  menu: [
    ["index.html","Home"],["about.html","About"],["research.html","Research"],
    ["projects.html","Projects"],["consultancy.html","Consultancy"],["group.html","Group"],
    ["publications.html","Publications"],["teaching.html","Teaching"],["contact.html","Contact"]
  ]
};

(function(){
  const page = document.body.dataset.page || "index.html";

  // header
  const header = document.createElement("header");
  header.className = "nav";
  header.innerHTML = `<div class="wrap">
    <a href="index.html" class="brand"><b>R. K. Varma<span>.</span></b><small>Civil Engineering · IIT Jammu</small></a>
    <nav><button class="menu-btn" aria-expanded="false" aria-controls="menu">Menu</button>
    <ul id="menu">${SITE.menu.map(([h,l])=>`<li><a href="${h}"${h===page?' class="active" aria-current="page"':''}>${l}</a></li>`).join("")}</ul></nav></div>`;
  document.body.prepend(header);

  // footer
  const footer = document.createElement("footer");
  footer.innerHTML = `<div class="wrap">
    <div class="foot-grid">
      <div><div class="fname">Dr Rajendra Kumar Varma</div>
        <p>Associate Professor, Department of Civil Engineering<br>Indian Institute of Technology Jammu<br>${SITE.office}, Jagti, PO Nagrota, Jammu 181221</p>
        <p style="margin-top:10px"><a href="mailto:${SITE.email}">${SITE.email}</a></p></div>
      <div><h4>Explore</h4><ul>${SITE.menu.slice(1,6).map(([h,l])=>`<li><a href="${h}">${l}</a></li>`).join("")}</ul></div>
      <div><h4>Profiles</h4><ul>
        <li><a href="https://iitjammu.ac.in/faculty/~rajendrakvarma" target="_blank" rel="noopener">IIT Jammu faculty page ↗</a></li>
        <li><a href="https://scholar.google.com/citations?user=NxhLUnAAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar ↗</a></li>
        <li><a href="https://www.researchgate.net/profile/Rajendra-Varma" target="_blank" rel="noopener">ResearchGate ↗</a></li>
        <li><a href="https://www.linkedin.com/in/rajendra-kumar-56a083a/" target="_blank" rel="noopener">LinkedIn ↗</a></li></ul></div>
    </div>
    <div class="foot-base"><span>© ${new Date().getFullYear()} Dr Rajendra Kumar Varma · IIT Jammu</span><a href="#top">Back to top ↑</a></div></div>`;
  document.body.append(footer);
  document.body.id = document.body.id || "top";

  // mobile menu
  const menu = document.getElementById("menu"), btn = header.querySelector(".menu-btn");
  btn.addEventListener("click",()=>{const o=menu.classList.toggle("open");btn.setAttribute("aria-expanded",o)});

  // images: show uploaded photo if it exists, otherwise keep the drawing / initials
  document.querySelectorAll("img[data-optional]").forEach(img=>{
    const ok=()=>img.classList.add("ok");
    img.addEventListener("load",ok); img.addEventListener("error",()=>img.remove());
    if(img.complete){ if(img.naturalWidth) ok(); else img.remove(); }
  });

  // fill email placeholders
  document.querySelectorAll("[data-email]").forEach(el=>{el.textContent=SITE.email; if(el.tagName==="A") el.href="mailto:"+SITE.email});

  // copy buttons
  document.querySelectorAll("[data-copy]").forEach(b=>b.addEventListener("click",()=>{
    try{navigator.clipboard.writeText(SITE.email).then(()=>{b.textContent="Copied";setTimeout(()=>b.textContent="Copy",1500)}).catch(()=>{})}catch(e){}
  }));

  // reveal on scroll
  const els=document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window){
    const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");ro.unobserve(e.target)}}),{threshold:.08});
    els.forEach(el=>ro.observe(el));
  } else els.forEach(el=>el.classList.add("in"));
})();
