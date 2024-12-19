/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        'custom-svg': "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 id=%22visual%22 viewBox=%220 0 900 600%22 width=%22900%22 height=%22600%22 version=%221.1%22%3E%3Crect x=%220%22 y=%220%22 width=%22900%22 height=%22600%22 fill=%22%23fff%22/%3E%3Cpath d=%22M546 0L531.2 20C516.3 40 486.7 80 457.2 120C427.7 160 398.3 200 387.7 240C377 280 385 320 397.3 360C409.7 400 426.3 440 442.5 480C458.7 520 474.3 560 482.2 580L490 600L0 600L0 580C0 560 0 520 0 480C0 440 0 400 0 360C0 320 0 280 0 240C0 200 0 160 0 120C0 80 0 40 0 20L0 0Z%22 fill=%22%23F8583E%22 stroke-linecap=%22round%22 stroke-linejoin=%22miter%22/%3E%3C/svg%3E')",
        'principal-svg': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080' preserveAspectRatio='xMidYMid slice'%3E%3Crect x='0' y='0' width='1920' height='1080' fill='%23F3F6FB'/%3E%3Cpath d='M0 699L64 714.3C128 729.7 256 760.3 384 732.7C512 705 640 619 768 550.7C896 482.3 1024 431.7 1152 380.5C1280 329.3 1408 277.7 1536 269.5C1664 261.3 1792 296.7 1856 314.3L1920 332L1920 0L1856 0C1792 0 1664 0 1536 0C1408 0 1280 0 1152 0C1024 0 896 0 768 0C640 0 512 0 384 0C256 0 128 0 64 0L0 0Z' fill='%23F8583E'/%3E%3C/svg%3E\")",
        'second-svg': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' id='visual' viewBox='0 0 1920 1080' width='1920' height='1080' version='1.1'%3E%3Crect x='0' y='0' width='1920' height='1080' fill='%23326AE2'/%3E%3Cdefs%3E%3ClinearGradient id='grad1_0' x1='43.8%' y1='100%' x2='100%' y2='0%'%3E%3Cstop offset='14.444444444444446%' stop-color='%23326ae2' stop-opacity='1'/%3E%3Cstop offset='85.55555555555554%' stop-color='%23326ae2' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cdefs%3E%3ClinearGradient id='grad2_0' x1='0%' y1='100%' x2='56.3%' y2='0%'%3E%3Cstop offset='14.444444444444446%' stop-color='%23326ae2' stop-opacity='1'/%3E%3Cstop offset='85.55555555555554%' stop-color='%23326ae2' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(1920, 1080)'%3E%3Cpath d='M-890 0C-903.4 -175.3 -916.9 -350.6 -841.8 -486C-766.7 -621.4 -603.1 -716.9 -448 -776C-292.9 -835 -146.5 -857.5 0 -880L0 0Z' fill='%23F3F6FB'/%3E%3C/g%3E%3Cg transform='translate(0, 0)'%3E%3Cpath d='M972 0C937.4 180.2 902.8 360.3 799.3 461.5C695.9 562.7 523.7 584.9 379 656.4C234.3 728 117.2 849 0 970L0 0Z' fill='%23F3F6FB'/%3E%3C/g%3E%3C/svg%3E\")",
        "tercer-svg":"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' id='visual' viewBox='0 0 900 600' width='600' height='400' version='1.1'%3E%3Crect width='900' height='600' fill='%23F3F6FB'/%3E%3Cg%3E%3Cg transform='translate(837 176)'%3E%3Cpath d='M134.8 -161.5C172.2 -129.2 198.5 -84.4 211.4 -33.9C224.3 16.6 223.8 72.8 200.3 117.8C176.9 162.8 130.4 196.6 79.2 213.5C28 230.4 -27.9 230.4 -73.7 210.3C-119.6 190.3 -155.3 150.3 -181.7 104.8C-208 59.3 -225.1 8.3 -219.5 -41.4C-213.9 -91.1 -185.8 -139.4 -145.4 -171.2C-105 -203.1 -52.5 -218.3 -1.9 -216C48.7 -213.7 97.3 -193.9 134.8 -161.5Z' fill='%23FFE12A'/%3E%3C/g%3E%3Cg transform='translate(75 535)'%3E%3Cpath d='M129.4 -155.6C165 -124.3 189.4 -81 194.4 -36.7C199.4 7.7 184.9 53 159.3 87C133.8 121 97.1 143.6 56.3 161.3C15.5 179 -29.5 191.9 -70.1 181.8C-110.6 171.7 -146.7 138.6 -167.2 98.7C-187.6 58.8 -192.3 12 -182.7 -30.4C-173.1 -72.8 -149 -110.9 -116.2 -142.7C-83.4 -174.5 -41.7 -200 2.6 -203.1C46.9 -206.2 93.7 -186.9 129.4 -155.6Z' fill='%23FFE12A'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        "second-svg": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' id='visual' viewBox='0 0 1920 1080' width='1920' height='1080' version='1.1'%3E%3Crect x='0' y='0' width='1920' height='1080' fill='%23F3F6FB'/%3E%3Cpath d='M0 514L160 489C320 464 640 414 960 399.2C1280 384.3 1600 404.7 1760 414.8L1920 425L1920 1081L1760 1081C1600 1081 1280 1081 960 1081C640 1081 320 1081 160 1081L0 1081Z' fill='%23FF5F4B' stroke-linecap='round' stroke-linejoin='miter'/%3E%3C/svg%3E\")",

      },
      boxShadow:{
        'input': 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        'card': ' rgba(0, 0, 0, 0.1) 0px 4px 12px',
        
        },
      width:{
        '18': '70px',
      },
      height:{
        '18': '70px',
      },
      clipPath: {
        'rounded-bg': 'circle(70% at 50% 30%)',
      },

      },
    },
  plugins: [],
}

