/* ============================================================
   PUBLICATIONS AND CONFERENCES
   To add a paper: copy one line inside PUBS, paste it at the top, edit it.
     y    = year
     t    = title
     a    = authors (R.K. Varma is made bold automatically)
     v    = journal / venue
     tags = any of: meta, waves, wind, frp
     kind = "journal" | "conference" | "thesis"
     doi  = DOI only (e.g. "10.1016/j.actamat.2022.118226"), or
     url  = any other link. If neither is given, a Google Scholar search link is used.
   ============================================================ */
const PUBS = [
 {y:2026,kind:"journal",tags:["meta"],t:"Machine intelligence-driven anti-curvature metamaterials for optimally enhanced specific strength, stiffness and energy absorption",a:"B.R. Isanaka, R.K. Varma, V. Kushvaha, T. Mukhopadhyay",v:"Composite Structures, 120875"},
 {y:2025,kind:"journal",tags:["wind"],t:"Comparative wind tunnel analysis of wind flow characteristics over gentle and steep escarpment slopes",a:"A.H. Wani, R.K. Varma",v:"Civil Engineering Infrastructures Journal",doi:"10.22059/ceij.2025.389658.2242"},
 {y:2025,kind:"journal",tags:["waves"],t:"Criteria for mode shape tracking in micropolar-Cosserat periodic panels",a:"S.K. Singh, A. Banerjee, A.A. Baxy, R.K. Varma",v:"Mechanics of Materials 201, 105213",doi:"10.1016/j.mechmat.2024.105213"},
 {y:2024,kind:"journal",tags:["wind"],t:"Wind effects on rectangular plan building located in a hilly terrain: a wind tunnel investigation",a:"A.H. Wani, R.K. Varma, A.K. Ahuja",v:"Sādhanā 49(1), 95"},
 {y:2024,kind:"journal",tags:["waves"],t:"Study of wave motion on the emergence of veering, locking, and coupling in periodic composite panels",a:"S.K. Singh, R.K. Varma, A. Banerjee, K.K. Rathore",v:"The Journal of the Acoustical Society of America 155(2), 826–836",doi:"10.1121/10.0024616"},
 {y:2024,kind:"journal",tags:["meta","waves"],t:"Smart electro-magneto-viscoelastomer minimum energy structures with particle-reinforcements: theoretical equilibrium and nonlinear dynamics of actuated configurations",a:"A. Khurana, S. Naskar, R.K. Varma, T. Mukhopadhyay",v:"International Journal of Engineering Science 194, 103974",url:"https://eprints.soton.ac.uk/483859/"},
 {y:2023,kind:"journal",tags:["waves"],t:"Wave propagation analysis of micropolar-Cosserat periodic composite panels: spectral element formulation",a:"S.K. Singh, R.K. Varma, A. Banerjee, K.K. Rathore",v:"Acta Mechanica 234(9), 4011–4034",doi:"10.1007/s00707-023-03597-0"},
 {y:2023,kind:"conference",tags:["wind"],t:"Along-wind aerodynamic forces on a rectangular plan building in vicinity of a gently sloped two-dimensional hill",a:"A.H. Wani, R.K. Varma, A.K. Ahuja",v:"2nd International Conference on Civil Infrastructure and Construction (CIC 2023), Qatar University, Doha",url:"https://journals.qu.edu.qa/index.php/CIC/article/view/3607"},
 {y:2023,kind:"journal",tags:["wind"],t:"Local topography factor for design wind speeds near and on the escarpment with gentle slope",a:"A.H. Wani, R.K. Varma, A.K. Ahuja",v:"Asian Journal of Civil Engineering 24(3), 619–628",doi:"10.1007/s42107-022-00529-6"},
 {y:2023,kind:"journal",tags:["wind"],t:"On evaluation of the Indian Standard topography factor for design wind speed on escarpments",a:"A.H. Wani, R.K. Varma, A.K. Ahuja",v:"ASEAN Journal on Science and Technology for Development 40(1), 1"},
 {y:2023,kind:"journal",tags:["waves"],t:"Flexural wave propagation in periodic micropolar-Cosserat panels: spectral element formulation",a:"S.K. Singh, A. Baxy, A. Banerjee, D. Bhattacharya, R.K. Varma",v:"European Journal of Mechanics – A/Solids 97, 104812",doi:"10.1016/j.euromechsol.2022.104812"},
 {y:2022,kind:"journal",tags:["meta"],t:"On exploiting machine learning for failure pattern driven strength enhancement of honeycomb lattices",a:"B.R. Isanaka, T. Mukhopadhyay, R.K. Varma, V. Kushvaha",v:"Acta Materialia 239, 118226",doi:"10.1016/j.actamat.2022.118226"},
 {y:2022,kind:"journal",tags:["frp"],t:"A review on performance of near-surface mounted carbon fiber-reinforced polymer laminates bonded into slits",a:"S. Gupta, A. Sharma, R.K. Varma, V. Kushvaha",v:"Polymer Composites 43(10), 6782–6802"},
 {y:2022,kind:"journal",tags:["waves"],t:"Static and dynamic analysis of homogeneous micropolar-Cosserat panels",a:"S.K. Singh, A. Banerjee, R.K. Varma, S. Adhikari, S. Das",v:"Mechanics of Advanced Materials and Structures 29, 2757–2768"},
 {y:2021,kind:"journal",tags:["waves"],t:"Spectral element formulation for damped transversely isotropic micropolar-Cosserat layered composite panels",a:"S.K. Singh, A. Banerjee, R.K. Varma, S. Adhikari",v:"Mechanics of Materials 160, 103898"},
 {y:2021,kind:"journal",tags:["wind"],t:"Experimental investigation of wind flow characteristics over hills and escarpments — a review",a:"A.H. Wani, R.K. Varma, A.K. Ahuja",v:"Wind and Structures 32, 393"},
 {y:2012,kind:"thesis",tags:["frp"],t:"Numerical models for the simulation of the cyclic behaviour of RC structures incorporating new advanced materials",a:"R.K. Varma",v:"PhD thesis, University of Minho, Portugal"},
 {y:2009,kind:"journal",tags:["frp"],t:"Numerical model for CFRP confined concrete elements subject to monotonic and cyclic loadings",a:"R.K. Varma, J.A.O. Barros, J.M. Sena-Cruz",v:"Composites Part B: Engineering 40, 766–775"},
 {y:2009,kind:"journal",tags:["frp"],t:"Cost competitive steel fibre reinforced SCC for structural applications",a:"J.A.O. Barros, L.A. Lourenço, R.K. Varma, D.M. Gonçalves",v:"The Indian Concrete Journal 83, 15–26"},
 {y:2008,kind:"journal",tags:["frp"],t:"Near surface mounted CFRP strips for the flexural strengthening of RC columns: experimental and numerical research",a:"J.A.O. Barros, R.K. Varma, J.M. Sena-Cruz, A.F.M. Azevedo",v:"Engineering Structures 30, 3412–3425"},
 {y:2007,kind:"conference",tags:["frp"],t:"CFRP-confined reinforced concrete elements subjected to cyclic compressive loading",a:"J.A.O. Barros, D. Ferreira, R.K. Varma",v:"American Concrete Institute, ACI SP-258"}
];

/* Conference presentations. flag = short label shown in the coloured box. */
const CONFS = [
 {y:2025,flag:"IN",name:"14th International Symposium on Plasticity and Impact Mechanics (IMPLAST 2025)",where:"IIT Roorkee, India · October 2025",t:"Impact of structural imperfections on the mechanical behaviour of honeycomb lattices",a:"B.R. Isanaka, S. Meena, R.K. Varma"},
 {y:2024,flag:"PT",name:"9th European Congress on Computational Methods in Applied Sciences and Engineering (ECCOMAS 2024)",where:"Lisbon, Portugal · June 2024",t:"On exploiting coupled physical and artificial intelligence for enhancing the strength of lattice metamaterials",a:"B.R. Isanaka, T. Mukhopadhyay, R.K. Varma, V. Kushvaha"},
 {y:2024,flag:"USA",name:"ASCE Engineering Mechanics Institute & Probabilistic Mechanics and Reliability Conference (EMI/PMC 2024)",where:"Chicago, Illinois, USA · June 2024",t:"Design of architected materials for failure strength and enhanced energy absorption",a:"B.R. Isanaka, T. Mukhopadhyay, R.K. Varma, V. Kushvaha"},
 {y:2023,flag:"IT",name:"16th International Conference on Wind Engineering (ICWE16)",where:"Florence, Italy · 27–31 August 2023",t:"Effect of steep escarpment on the wind pressure distribution on a rectangular shape building",a:"Presented by A.H. Wani"},
 {y:2023,flag:"IT",name:"ASCE Engineering Mechanics Institute International Conference (EMI IC 2023)",where:"University of Palermo, Italy · August 2023",t:"Machine learning assisted design of honeycomb lattices for enhanced energy absorption and failure strength",a:"B.R. Isanaka, T. Mukhopadhyay, R.K. Varma, V. Kushvaha"},
 {y:2023,flag:"QA",name:"2nd International Conference on Civil Infrastructure and Construction (CIC 2023)",where:"Qatar University, Doha, Qatar · 5–8 February 2023",t:"Along-wind aerodynamic forces on a rectangular plan building in vicinity of a gently sloped two-dimensional hill",a:"A.H. Wani, R.K. Varma, A.K. Ahuja"},
 {y:0,flag:"IN",name:"Advances in Coupled Processes in Porous Media: Applications to Energy, Environment and Health",where:"IIT Jammu, India",t:"Reinforced Voronoi porous architectures: coupled geometric–mechanical enhancements guided by machine learning",a:"B.R. Isanaka, T. Mukhopadhyay, R.K. Varma, V. Kushvaha"},
 {y:2011,flag:"PT",name:"Semana da Escola de Engenharia",where:"University of Minho, Portugal · 24–27 October 2011",t:"Non-linear material behaviour of RC structures subjected to cyclic loads",a:"R.K. Varma, J.A.O. Barros, J.M. Sena-Cruz"},
 {y:2007,flag:"USA",name:"American Concrete Institute (ACI) — Seismic Strengthening of Concrete Buildings Using FRP Composites",where:"ACI Special Publication SP-258 · 2007",t:"CFRP-confined reinforced concrete elements subjected to cyclic compressive loading",a:"J.A.O. Barros, D. Ferreira, R.K. Varma"}
];

function pubLink(p){
  if(p.doi) return {href:"https://doi.org/"+p.doi,label:"DOI ↗"};
  if(p.url) return {href:p.url,label:"View ↗"};
  return {href:"https://scholar.google.com/scholar?q="+encodeURIComponent('"'+p.t+'"'),label:"Scholar ↗"};
}
function boldMe(a){return a.replace(/R\.K\. Varma/g,'<b>R.K. Varma</b>')}
