import { useState } from "react";

const SLIDES = [
  {
    id:"01", tag:"PEMBUKA", tc:"#f97316", name:"The Hook", dur:"~30 dtk",
    who:"Presenter 1 · AI Engineer", lay:"fullbleed",
    copy:[
      ["HEADLINE","67 Juta Ton Sampah."],
      ["SUBHEAD","Setiap Tahun."],
      ["SUPPORTING","Dan kurang dari 15% berhasil dipilah dengan benar di Indonesia."],
    ],
    vis:"Foto full-bleed TPA atau timbunan sampah Indonesia. Dark overlay 60–70%. Angka '67 JUTA TON' sangat besar di tengah — bold, putih. Tidak ada elemen dekoratif lain.",
    cue:"Masuk tanpa salam pembuka. Diam 2 detik. Biarkan angkanya menyengat duluan.",
  },
  {
    id:"02", tag:"MASALAH", tc:"#f97316", name:"The Problem", dur:"~60 dtk",
    who:"Presenter 1 · AI Engineer", lay:"three-col",
    copy:[
      ["HEADLINE","Masalah Bukan Niatnya — Masalah adalah Pengetahuan"],
      ["KOLOM 1","Masyarakat tidak bisa membedakan jenis sampah: organik, anorganik, B3"],
      ["KOLOM 2","Panduan pemilahan masih manual dan tidak mudah diakses kapan saja"],
      ["KOLOM 3","Edukasi lingkungan bergantung pada penyuluhan tatap muka konvensional"],
    ],
    vis:"3 kolom setara. Tiap kolom: ikon besar di atas (bingung/tanya, dokumen, speaker) + kalimat pendek di bawah. Background gelap, aksen oranye/amber.",
    cue:"Jangan baca teks — narasi natural. Bangun empati dulu. 'Kalau kita jujur, masalah sampah bukan karena orang tidak peduli...'",
  },
  {
    id:"03", tag:"INSIGHT", tc:"#a78bfa", name:"The Insight", dur:"~30 dtk",
    who:"Presenter 1 · AI Engineer", lay:"flow",
    copy:[
      ["HEADLINE","Solusinya Sudah Ada di Tangan Semua Orang"],
      ["SUPPORTING","77% masyarakat Indonesia sudah memegang smartphone. Kamera sudah ada. Yang kurang hanya satu: AI yang bisa membaca sampah."],
      ["NODE 1","Smartphone"],
      ["NODE 2","AI Vision"],
      ["NODE 3","Panduan"],
    ],
    vis:"Flow horizontal 3 node dengan panah. Smartphone → AI/otak → Checklist. Warna node gradasi dari abu ke hijau. Headline di atas, supporting text di bawah.",
    cue:"Ini adalah 'aha moment'. Sampaikan dengan nada penemuan — seperti sesuatu yang obvious tapi tidak ada yang notice.",
  },
  {
    id:"04", tag:"SOLUSI", tc:"#4ade80", name:"The Solution", dur:"~60 dtk",
    who:"Presenter 1 · AI Engineer", lay:"center-hero",
    copy:[
      ["BRAND NAME","PilahNusa AI"],
      ["TAGLINE","Asisten pemilah sampah berbasis AI. Cukup satu foto."],
      ["PILLAR 1","Identifikasi Instan — Foto sampah, langsung tahu jenisnya"],
      ["PILLAR 2","Panduan Personal — Tips daur ulang & pembuangan tepat sasaran"],
      ["PILLAR 3","Edukasi Interaktif — Chatbot Bahasa Indonesia siap menjawab"],
    ],
    vis:"Logo PilahNusa AI di tengah atas. Tagline bold di bawah. Tiga pillar card sejajar: ikon besar + judul tebal + satu kalimat deskripsi. Aksen hijau dominan.",
    cue:"Perkenalkan dengan confident dan positif. Belum perlu sebut tech stack. Fokus pada manfaat pengguna.",
  },
  {
    id:"05", tag:"CARA KERJA", tc:"#4ade80", name:"How It Works", dur:"~45 dtk",
    who:"Presenter 1 → Handoff ke Presenter 2", lay:"steps",
    copy:[
      ["HEADLINE","Tiga Langkah. Satu Tujuan."],
      ["STEP 1","FOTO — Ambil atau unggah foto sampah"],
      ["STEP 2","ANALISIS — AI mengidentifikasi jenis sampah"],
      ["STEP 3","PANDUAN — Terima panduan pembuangan & daur ulang"],
    ],
    vis:"Tiga kotak besar bernomor (01, 02, 03) dengan panah horizontal di antaranya. Tiap kotak: nomor besar + ikon di tengah + kalimat pendek di bawah. Warna gradient kiri ke kanan.",
    cue:"Slide cepat — jembatan menuju demo. Akhiri dengan kalimat handoff natural: 'Dan biar [nama] tunjukkan langsung...'",
  },
  {
    id:"06", tag:"DEMO", tc:"#4ade80", name:"Product Demo", dur:"~2 menit",
    who:"Presenter 2 · Full-Stack Dev", lay:"mockup",
    copy:[
      ["HEADLINE","Lihat Langsung Cara Kerjanya"],
      ["MOCKUP 1","Halaman Upload / Kamera"],
      ["MOCKUP 2","Hasil Klasifikasi + Confidence Score"],
      ["MOCKUP 3","Percakapan Chatbot"],
    ],
    vis:"2–3 phone mockup (frame smartphone) menampilkan screenshot: upload screen, hasil klasifikasi + label + %, chatbot conversation. Fan layout atau slight overlap. Backup: area gelap besar untuk video playback.",
    cue:"PRIORITAS: demo live > video recording. Selalu siapkan backup video offline. Narasi alur pengguna — bukan komentar teknis.",
  },
  {
    id:"07", tag:"TEKNIS", tc:"#38bdf8", name:"Technical Depth", dur:"~60 dtk",
    who:"Presenter 1 · AI Engineer", lay:"architecture",
    copy:[
      ["HEADLINE","Dibangun dengan Stack yang Tepat untuk Masalah yang Nyata"],
      ["LAYER 1","React 18 + Vite — Frontend mobile-first"],
      ["LAYER 2","Express + Node.js — Backend API & serving"],
      ["LAYER 3A","TensorFlow.js — Klasifikasi sampah (inference di server)"],
      ["LAYER 3B","Gemini API — Chatbot edukasi Bahasa Indonesia"],
    ],
    vis:"Diagram arsitektur 3 lapisan. Frontend → Backend → split ke TF.js + Gemini API. Kotak berwarna berbeda per layer, dihubungkan panah. Bukan screenshot kode.",
    cue:"Jelaskan keputusan, bukan sekadar daftar. 'Kami pilih TF.js karena inference bisa langsung di server, tanpa cloud GPU eksternal.'",
  },
  {
    id:"08", tag:"VALIDASI", tc:"#38bdf8", name:"Data & Validation", dur:"~60 dtk",
    who:"Presenter 3 · Data Scientist", lay:"metrics",
    copy:[
      ["HEADLINE","Angka yang Membuktikan"],
      ["METRIC 1","[XX]% — Model Accuracy"],
      ["METRIC 2","[XXXX] — Total Training Images"],
      ["METRIC 3","3 Kelas — Organik, Anorganik, B3"],
      ["METRIC 4","[X]ms — Rata-rata Inference Time"],
      ["NOTE","Dataset custom + transfer learning MobileNetV2 / EfficientNet"],
    ],
    vis:"4 metric card besar dalam grid 2×2. Tiap card: angka sangat besar + label kecil. Tambahkan confusion matrix atau bar chart distribusi kelas di bawah jika ruang cukup.",
    cue:"Interpretasikan angka, jangan hanya baca. 'XX% artinya dari 100 foto, XX langsung teridentifikasi benar.' Jujur soal limitasi — itu tanda tim yang mature.",
  },
  {
    id:"09", tag:"DAMPAK", tc:"#fbbf24", name:"Impact & Vision", dur:"~60 dtk",
    who:"Presenter 3 · Data Scientist", lay:"timeline",
    copy:[
      ["HEADLINE","PilahNusa Bukan Akhir — Ini Awal"],
      ["NOW","Klasifikasi 3 kategori, chatbot edukasi, mobile-first"],
      ["NEXT","Gamifikasi, integrasi bank sampah, lebih banyak kategori"],
      ["FUTURE","Platform terbuka untuk komunitas & pemerintah daerah"],
      ["ESG ANCHOR","Mendukung target pemerintah: pengurangan 30% sampah ke TPA pada 2029"],
    ],
    vis:"Timeline horizontal 3 fase dengan gradasi gelap→terang. Tiap fase: lingkaran besar + label fase + deskripsi singkat. Label ESG kecil di bawah sebagai anchor DBS Foundation.",
    cue:"Anchor ke target pemerintah agar visi terasa realistis. Bicara tenang dan visioner — bukan excited berlebihan.",
  },
  {
    id:"10", tag:"TIM", tc:"#fbbf24", name:"The Team", dur:"~30 dtk",
    who:"Presenter 3 · Data Scientist", lay:"team-grid",
    copy:[
      ["HEADLINE","Tim yang Saling Melengkapi"],
      ["FRAMING","2 AI Engineer · 2 Full-Stack Developer · 2 Data Scientist"],
      ["MEMBER 1","Galih Rizaldy — AI Engineer — Univ. Kuningan"],
      ["MEMBER 2","Ema Maleni — Full-Stack — Univ. Primakara"],
      ["MEMBER 3","Irdan Guntara — AI Engineer — Univ. Kuningan"],
      ["MEMBER 4","Nayarah A. — Full-Stack — Univ. Sulawesi Barat"],
      ["MEMBER 5","Ryan Dwi Antoni — Data Scientist — Univ. Negeri Surabaya"],
      ["MEMBER 6","Gisca O. Ramadhani — Data Scientist — Univ. Kuningan"],
    ],
    vis:"Grid 2×3 kartu kecil. Tiap kartu: avatar placeholder lingkaran + nama + tag role berwarna (hijau=AI, biru=FS, kuning=DS) + universitas kecil.",
    cue:"Singkat. Jangan kenalkan satu-satu. Highlight komposisi: 'Dari dataset sampai antarmuka — semua ada di tim ini.'",
  },
  {
    id:"11", tag:"PENUTUP", tc:"#4ade80", name:"Closing", dur:"~30 dtk",
    who:"Semua / Presenter Paling Confident", lay:"closing",
    copy:[
      ["HEADLINE","Satu Foto. Satu Langkah."],
      ["SUBHEAD","Menuju Indonesia yang Lebih Bersih."],
      ["QR CTA","Scan untuk lihat demo langsung"],
      ["CREDIT","Coding Camp 2026 · DBS Foundation · Tim PilahNusa AI"],
    ],
    vis:"Slide full-color brand. Background hijau gelap atau dark dengan aksen hijau kuat. Logo PilahNusa AI besar di tengah-atas. Tagline dua baris bold. QR code pojok kanan bawah. Credit kecil pojok kiri bawah.",
    cue:"Jangan tutup dengan 'Sekian, terima kasih.' Sampaikan tagline dengan keyakinan, tatap audiens, lalu diam. Biarkan slide yang menutup.",
  },
];

const LABELS = {
  fullbleed:"Full-Bleed","three-col":"3 Kolom",flow:"Flow Diagram",
  "center-hero":"Center Hero",steps:"Step Flow",mockup:"Mockup Showcase",
  architecture:"Arsitektur",metrics:"Metrics Grid",timeline:"Timeline",
  "team-grid":"Team Grid",closing:"Closing Screen",
};

function WF({ lay, c }) {
  const bg = "#08090e", bl = "#131825", bl2 = "#1c2436";

  if (lay === "fullbleed") return (
    <svg viewBox="0 0 280 158" style={{width:"100%",display:"block"}}>
      <rect width="280" height="158" fill={bg}/>
      {[0,1,2,3,4].map(i=><line key={i} x1={0} y1={i*40} x2={280} y2={i*40+158} stroke="#10192a" strokeWidth="28"/>)}
      <rect width="280" height="158" fill="rgba(0,0,0,0.52)"/>
      <rect x="24" y="46" width="232" height="36" rx="5" fill={c+"cc"}/>
      <text x="140" y="68" textAnchor="middle" fill="white" fontSize="11.5" fontWeight="bold" fontFamily="monospace">67 JUTA TON SAMPAH.</text>
      <rect x="55" y="90" width="170" height="18" rx="3" fill={c+"55"}/>
      <text x="140" y="103" textAnchor="middle" fill="white" fontSize="9" fontFamily="monospace">SETIAP TAHUN.</text>
      <rect x="24" y="116" width="232" height="8" rx="2" fill={bl2}/>
      <rect x="40" y="130" width="200" height="8" rx="2" fill={bl2}/>
    </svg>
  );

  if (lay === "three-col") return (
    <svg viewBox="0 0 280 158" style={{width:"100%",display:"block"}}>
      <rect width="280" height="158" fill={bg}/>
      <rect x="16" y="10" width="248" height="18" rx="3" fill={c+"33"}/>
      <text x="140" y="23" textAnchor="middle" fill={c} fontSize="8.5" fontFamily="monospace">MASALAH BUKAN NIATNYA</text>
      {[0,1,2].map(i=>(
        <g key={i}>
          <rect x={16+i*88} y="36" width="80" height="112" rx="5" fill={bl} stroke={bl2} strokeWidth="1"/>
          <circle cx={16+i*88+40} cy="63" r="15" fill={c+"1a"} stroke={c+"55"} strokeWidth="1.5"/>
          <text x={16+i*88+40} y="67.5" textAnchor="middle" fill={c} fontSize="11">?</text>
          {[86,99,112,125].map((y,j)=>(
            <rect key={j} x={16+i*88+8} y={y} width={64-j*6} height="7" rx="2" fill={bl2}/>
          ))}
        </g>
      ))}
    </svg>
  );

  if (lay === "flow") return (
    <svg viewBox="0 0 280 158" style={{width:"100%",display:"block"}}>
      <defs>
        <marker id="mf" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M2 2L8 5L2 8" fill="none" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
        </marker>
      </defs>
      <rect width="280" height="158" fill={bg}/>
      <rect x="16" y="9" width="248" height="17" rx="3" fill={c+"33"}/>
      <text x="140" y="21.5" textAnchor="middle" fill={c} fontSize="8.5" fontFamily="monospace">SOLUSINYA SUDAH ADA DI TANGAN KITA</text>
      <rect x="16" y="32" width="248" height="7" rx="2" fill={bl2}/>
      <rect x="20" y="43" width="200" height="7" rx="2" fill={bl2}/>
      {[
        {x:20,lbl:"Smartphone",op:"40"},
        {x:106,lbl:"AI Vision",op:"77"},
        {x:192,lbl:"Panduan",op:"ff"},
      ].map((n,i)=>(
        <g key={i}>
          <rect x={n.x} y="62" width="68" height="62" rx="6" fill={bl} stroke={c+n.op} strokeWidth="1.5"/>
          <circle cx={n.x+34} cy="84" r="12" fill={c+n.op+"33"}/>
          <text x={n.x+34} y="88" textAnchor="middle" fill={c} fontSize="14">{"📱🤖✓"[i]}</text>
          <rect x={n.x+6} y="103" width="56" height="6" rx="2" fill={c+"22"}/>
          <text x={n.x+34} y="109.5" textAnchor="middle" fill={c+"cc"} fontSize="7" fontFamily="monospace">{n.lbl}</text>
          <rect x={n.x+8} y="115" width="52" height="5" rx="2" fill={bl2}/>
        </g>
      ))}
      <line x1="90" y1="93" x2="104" y2="93" stroke={c} strokeWidth="1.5" markerEnd="url(#mf)"/>
      <line x1="176" y1="93" x2="190" y2="93" stroke={c} strokeWidth="1.5" markerEnd="url(#mf)"/>
      <rect x="16" y="132" width="248" height="7" rx="2" fill={bl2}/>
    </svg>
  );

  if (lay === "center-hero") return (
    <svg viewBox="0 0 280 158" style={{width:"100%",display:"block"}}>
      <rect width="280" height="158" fill={bg}/>
      <rect x="74" y="9" width="132" height="24" rx="5" fill={c+"dd"}/>
      <text x="140" y="25" textAnchor="middle" fill="#08090e" fontSize="10" fontWeight="bold" fontFamily="monospace">PilahNusa AI</text>
      <rect x="40" y="39" width="200" height="11" rx="3" fill={c+"33"}/>
      <text x="140" y="48" textAnchor="middle" fill={c+"aa"} fontSize="7.5" fontFamily="monospace">Asisten pemilah sampah. Cukup satu foto.</text>
      {[0,1,2].map(i=>(
        <g key={i}>
          <rect x={16+i*88} y="58" width="80" height="90" rx="5" fill={bl} stroke={c+"33"} strokeWidth="1"/>
          <circle cx={16+i*88+40} cy="80" r="13" fill={c+(["22","55","99"][i])}/>
          <rect x={16+i*88+8} y="100" width="64" height="8" rx="2" fill={c+"44"}/>
          {[114,126,136].map((y,j)=>(
            <rect key={j} x={16+i*88+8} y={y} width={64-j*6} height="6" rx="2" fill={bl2}/>
          ))}
        </g>
      ))}
    </svg>
  );

  if (lay === "steps") return (
    <svg viewBox="0 0 280 158" style={{width:"100%",display:"block"}}>
      <rect width="280" height="158" fill={bg}/>
      <rect x="50" y="9" width="180" height="16" rx="3" fill={c+"33"}/>
      <text x="140" y="21" textAnchor="middle" fill={c} fontSize="8.5" fontFamily="monospace">TIGA LANGKAH. SATU TUJUAN.</text>
      {[
        {x:18,n:"01",op:"44"},
        {x:106,n:"02",op:"88"},
        {x:194,n:"03",op:"ff"},
      ].map((s,i)=>(
        <g key={i}>
          <rect x={s.x} y="34" width="70" height="114" rx="6" fill={bl} stroke={c+s.op} strokeWidth="1.5"/>
          <text x={s.x+35} y="57" textAnchor="middle" fill={c+s.op} fontSize="16" fontWeight="bold" fontFamily="monospace">{s.n}</text>
          <circle cx={s.x+35} cy="87" r="18" fill={c+s.op+"33"}/>
          <rect x={s.x+8} y="113" width="54" height="7" rx="2" fill={c+"33"}/>
          {[126,135].map((y,j)=>(
            <rect key={j} x={s.x+8} y={y} width={54-j*8} height="6" rx="2" fill={bl2}/>
          ))}
        </g>
      ))}
      <line x1="90" y1="87" x2="104" y2="87" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <polygon points="101,84 107,87 101,90" fill={c}/>
      <line x1="178" y1="87" x2="192" y2="87" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <polygon points="189,84 195,87 189,90" fill={c}/>
    </svg>
  );

  if (lay === "mockup") return (
    <svg viewBox="0 0 280 158" style={{width:"100%",display:"block"}}>
      <rect width="280" height="158" fill={bg}/>
      <rect x="40" y="8" width="200" height="14" rx="3" fill={c+"33"}/>
      <text x="140" y="19" textAnchor="middle" fill={c} fontSize="8.5" fontFamily="monospace">LIHAT LANGSUNG CARA KERJANYA</text>
      {[8,100,192].map((x,i)=>(
        <g key={i}>
          <rect x={x} y="30" width="72" height="120" rx="9" fill={bl} stroke={bl2} strokeWidth="2"/>
          <rect x={x+4} y="37" width="64" height="106" rx="5" fill="#050608"/>
          <rect x={x+26} y="30" width="20" height="5" rx="2.5" fill={bg}/>
          <rect x={x+8} y="42" width="56" height="34" rx="4" fill={c+"1a"} stroke={c+"33"} strokeWidth="0.5"/>
          <text x={x+36} y="63" textAnchor="middle" fill={c+"88"} fontSize="7" fontFamily="monospace">{["Upload","Hasil AI","Chatbot"][i]}</text>
          {[83,93,103,113,123].map((y,j)=>(
            <rect key={j} x={x+8} y={y} width={[56,44,56,36,48][j]} height="6" rx="2" fill={bl2}/>
          ))}
          <rect x={x+20} y="131" width="32" height="8" rx="4" fill={c+"44"}/>
        </g>
      ))}
    </svg>
  );

  if (lay === "architecture") return (
    <svg viewBox="0 0 280 158" style={{width:"100%",display:"block"}}>
      <rect width="280" height="158" fill={bg}/>
      <rect x="16" y="8" width="248" height="15" rx="3" fill={c+"22"}/>
      <text x="140" y="19.5" textAnchor="middle" fill={c+"aa"} fontSize="8" fontFamily="monospace">STACK YANG TEPAT UNTUK MASALAH NYATA</text>
      <rect x="56" y="30" width="168" height="28" rx="4" fill="#0d1f33" stroke="#38bdf8" strokeWidth="1"/>
      <text x="140" y="43" textAnchor="middle" fill="#93c5fd" fontSize="8.5" fontWeight="bold" fontFamily="monospace">React 18 + Vite</text>
      <text x="140" y="53.5" textAnchor="middle" fill="#60a5fa" fontSize="7.5" fontFamily="monospace">Frontend mobile-first</text>
      <line x1="140" y1="60" x2="140" y2="69" stroke="#475569" strokeWidth="1.5" strokeDasharray="3 2"/>
      <polygon points="136,67 140,73 144,67" fill="#475569"/>
      <rect x="56" y="71" width="168" height="28" rx="4" fill="#0f1a26" stroke="#475569" strokeWidth="1"/>
      <text x="140" y="84" textAnchor="middle" fill="#94a3b8" fontSize="8.5" fontWeight="bold" fontFamily="monospace">Express + Node.js</text>
      <text x="140" y="94" textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="monospace">Backend API & serving</text>
      <line x1="100" y1="101" x2="74" y2="110" stroke="#4ade80" strokeWidth="1.5" strokeDasharray="3 2"/>
      <polygon points="71,108 73,114 79,111" fill="#4ade80"/>
      <line x1="180" y1="101" x2="206" y2="110" stroke="#a78bfa" strokeWidth="1.5" strokeDasharray="3 2"/>
      <polygon points="202,108 208,110 206,104" fill="#a78bfa"/>
      <rect x="12" y="112" width="116" height="36" rx="4" fill="#0a1f10" stroke="#4ade80" strokeWidth="1"/>
      <text x="70" y="125" textAnchor="middle" fill="#86efac" fontSize="8" fontWeight="bold" fontFamily="monospace">TensorFlow.js</text>
      <text x="70" y="136" textAnchor="middle" fill="#4ade80" fontSize="7.5" fontFamily="monospace">Klasifikasi sampah</text>
      <rect x="152" y="112" width="116" height="36" rx="4" fill="#150d2a" stroke="#a78bfa" strokeWidth="1"/>
      <text x="210" y="125" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontWeight="bold" fontFamily="monospace">Gemini API</text>
      <text x="210" y="136" textAnchor="middle" fill="#a78bfa" fontSize="7.5" fontFamily="monospace">Chatbot Bahasa ID</text>
    </svg>
  );

  if (lay === "metrics") return (
    <svg viewBox="0 0 280 158" style={{width:"100%",display:"block"}}>
      <rect width="280" height="158" fill={bg}/>
      <rect x="50" y="8" width="180" height="15" rx="3" fill={c+"33"}/>
      <text x="140" y="19.5" textAnchor="middle" fill={c} fontSize="8.5" fontFamily="monospace">ANGKA YANG MEMBUKTIKAN</text>
      {[
        {x:12,y:30,v:"XX%",l:"Model Accuracy"},
        {x:148,y:30,v:"XXXX",l:"Training Images"},
        {x:12,y:96,v:"3",l:"Kelas Sampah"},
        {x:148,y:96,v:"Xms",l:"Inference Time"},
      ].map((m,i)=>(
        <g key={i}>
          <rect x={m.x} y={m.y} width="120" height="60" rx="6" fill={bl} stroke={c+"44"} strokeWidth="1"/>
          <text x={m.x+60} y={m.y+32} textAnchor="middle" fill={c} fontSize="22" fontWeight="bold" fontFamily="monospace">{m.v}</text>
          <text x={m.x+60} y={m.y+50} textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">{m.l}</text>
        </g>
      ))}
      <rect x="12" y="162" width="256" height="0" rx="0" fill="none"/>
      <rect x="12" y="154" width="256" height="8" rx="3" fill={c+"11"}/>
    </svg>
  );

  if (lay === "timeline") return (
    <svg viewBox="0 0 280 158" style={{width:"100%",display:"block"}}>
      <rect width="280" height="158" fill={bg}/>
      <rect x="20" y="8" width="240" height="15" rx="3" fill={c+"33"}/>
      <text x="140" y="19.5" textAnchor="middle" fill={c} fontSize="8.5" fontFamily="monospace">PILAHNUSA BUKAN AKHIR — INI AWAL</text>
      <line x1="28" y1="72" x2="252" y2="72" stroke={bl2} strokeWidth="2"/>
      {[
        {x:50,lbl:"NOW",ops:"55",sub:["3 Kategori","Chatbot"]},
        {x:140,lbl:"NEXT",ops:"99",sub:["Gamifikasi","Bank Sampah"]},
        {x:230,lbl:"FUTURE",ops:"ff",sub:["Open Platform","Komunitas"]},
      ].map((p,i)=>(
        <g key={i}>
          <circle cx={p.x} cy="72" r="11" fill={c+p.ops} stroke={bg} strokeWidth="2"/>
          <text x={p.x} y="75.5" textAnchor="middle" fill="#08090e" fontSize="7.5" fontWeight="bold" fontFamily="monospace">{i+1}</text>
          <text x={p.x} y="56" textAnchor="middle" fill={c} fontSize="8.5" fontWeight="bold" fontFamily="monospace">{p.lbl}</text>
          {p.sub.map((s,j)=>(
            <g key={j}>
              <rect x={p.x-32} y={86+j*15} width="64" height="11" rx="2" fill={bl}/>
              <text x={p.x} y={95+j*15} textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">{s}</text>
            </g>
          ))}
        </g>
      ))}
      <rect x="12" y="128" width="256" height="22" rx="4" fill={c+"0d"} stroke={c+"33"} strokeWidth="0.5"/>
      <text x="140" y="143" textAnchor="middle" fill={c+"88"} fontSize="7.5" fontFamily="monospace">ESG: Target Pengurangan 30% Sampah ke TPA — 2029</text>
    </svg>
  );

  if (lay === "team-grid") return (
    <svg viewBox="0 0 280 158" style={{width:"100%",display:"block"}}>
      <rect width="280" height="158" fill={bg}/>
      <rect x="40" y="8" width="200" height="15" rx="3" fill={c+"33"}/>
      <text x="140" y="19.5" textAnchor="middle" fill={c} fontSize="8.5" fontFamily="monospace">TIM YANG SALING MELENGKAPI</text>
      {[
        {x:8,y:30,r:"AI",rc:"#4ade80"},{x:100,y:30,r:"FS",rc:"#38bdf8"},{x:192,y:30,r:"AI",rc:"#4ade80"},
        {x:8,y:96,r:"FS",rc:"#38bdf8"},{x:100,y:96,r:"DS",rc:"#fbbf24"},{x:192,y:96,r:"DS",rc:"#fbbf24"},
      ].map((m,i)=>(
        <g key={i}>
          <rect x={m.x} y={m.y} width="84" height="60" rx="4" fill={bl} stroke={bl2} strokeWidth="1"/>
          <circle cx={m.x+18} cy={m.y+22} r="12" fill={bl2}/>
          <circle cx={m.x+18} cy={m.y+17} r="6" fill="#2a3550"/>
          <ellipse cx={m.x+18} cy={m.y+32} rx="9" ry="5" fill="#2a3550"/>
          <rect x={m.x+36} y={m.y+10} width="40" height="7" rx="2" fill={bl2}/>
          <rect x={m.x+36} y={m.y+22} width="24" height="11" rx="3" fill={m.rc+"22"} stroke={m.rc+"55"} strokeWidth="0.5"/>
          <text x={m.x+48} y={m.y+31.5} textAnchor="middle" fill={m.rc} fontSize="6.5" fontWeight="bold" fontFamily="monospace">{m.r}</text>
          <rect x={m.x+36} y={m.y+38} width="36" height="6" rx="2" fill={bl2}/>
        </g>
      ))}
    </svg>
  );

  if (lay === "closing") return (
    <svg viewBox="0 0 280 158" style={{width:"100%",display:"block"}}>
      <rect width="280" height="158" fill={bg}/>
      {[0,1,2,3].map(i=>(
        <rect key={i} x={i*80-20} y="0" width="60" height="158" fill={c+"08"} transform={`skewX(-20)`}/>
      ))}
      <rect x="70" y="18" width="140" height="30" rx="7" fill={c+"cc"}/>
      <text x="140" y="37" textAnchor="middle" fill="#08090e" fontSize="11" fontWeight="bold" fontFamily="monospace">PilahNusa AI</text>
      <text x="140" y="75" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="monospace">Satu Foto. Satu Langkah.</text>
      <text x="140" y="92" textAnchor="middle" fill={c+"cc"} fontSize="9.5" fontFamily="monospace">Menuju Indonesia yang Lebih Bersih.</text>
      <line x1="50" y1="104" x2="230" y2="104" stroke={c+"44"} strokeWidth="0.5"/>
      <rect x="14" y="128" width="130" height="8" rx="2" fill={bl}/>
      <text x="79" y="135.5" textAnchor="middle" fill="#475569" fontSize="7" fontFamily="monospace">Coding Camp 2026 · DBS Foundation</text>
      <rect x="212" y="116" width="54" height="34" rx="4" fill={bl} stroke={c+"55"} strokeWidth="1"/>
      {[[0,0],[0,1],[1,1],[1,2],[2,0],[2,2]].map(([r,c_],i)=>(
        <rect key={i} x={216+c_*16} y={120+r*11} width="11" height="9" rx="1.5" fill={c+"88"}/>
      ))}
      <text x="239" y="154" textAnchor="middle" fill="#334155" fontSize="6.5" fontFamily="monospace">QR Code</text>
    </svg>
  );

  return null;
}

export default function Blueprint() {
  const [open, setOpen] = useState("01");

  return (
    <div style={{fontFamily:"monospace",padding:"0"}}>
      {/* Header */}
      <div style={{marginBottom:"20px",paddingBottom:"14px",borderBottom:"1px solid #1e2235"}}>
        <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"6px"}}>
          <div style={{width:"8px",height:"8px",borderRadius:"50%",background:"#4ade80"}}/>
          <span style={{fontSize:"10px",color:"#475569",letterSpacing:"2px"}}>PILAHNUSA AI · CODING CAMP 2026 · DBS FOUNDATION</span>
        </div>
        <div style={{fontSize:"20px",fontWeight:"bold",color:"var(--color-text-primary)",letterSpacing:"-0.5px"}}>
          Blueprint Presentasi
        </div>
        <div style={{fontSize:"12px",color:"var(--color-text-secondary)",marginTop:"3px"}}>
          11 slides · 10 menit · 2–3 presenter · Klik slide untuk detail
        </div>
      </div>

      {/* Overview strip */}
      <div style={{display:"flex",gap:"5px",overflowX:"auto",paddingBottom:"12px",marginBottom:"16px"}}>
        {SLIDES.map(s=>(
          <button key={s.id} onClick={()=>setOpen(open===s.id?null:s.id)} style={{
            minWidth:"50px",padding:"6px 5px",cursor:"pointer",textAlign:"center",
            background:open===s.id?s.tc+"22":"var(--color-background-secondary)",
            border:`1px solid ${open===s.id?s.tc:"var(--color-border-tertiary)"}`,
            borderRadius:"6px",
          }}>
            <div style={{fontSize:"10px",fontWeight:"bold",color:s.tc}}>{s.id}</div>
            <div style={{fontSize:"7.5px",color:"var(--color-text-secondary)",marginTop:"2px",whiteSpace:"nowrap"}}>{s.dur}</div>
          </button>
        ))}
      </div>

      {/* Cards */}
      <div style={{display:"flex",flexDirection:"column",gap:"8px"}}>
        {SLIDES.map(s=>(
          <div key={s.id} style={{
            border:`1px solid ${open===s.id?s.tc+"66":"var(--color-border-tertiary)"}`,
            borderRadius:"10px",overflow:"hidden",
          }}>
            {/* Header */}
            <div onClick={()=>setOpen(open===s.id?null:s.id)} style={{
              display:"flex",alignItems:"center",gap:"10px",padding:"11px 14px",
              background:"var(--color-background-secondary)",cursor:"pointer",
              borderBottom:open===s.id?"1px solid var(--color-border-tertiary)":"none",
            }}>
              <span style={{fontSize:"18px",fontWeight:"bold",color:s.tc,minWidth:"30px",lineHeight:1}}>{s.id}</span>
              <div style={{flex:1,minWidth:0}}>
                <div style={{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap",marginBottom:"2px"}}>
                  <span style={{fontSize:"13px",fontWeight:"500",color:"var(--color-text-primary)"}}>{s.name}</span>
                  <span style={{fontSize:"9px",padding:"2px 6px",borderRadius:"3px",background:s.tc+"22",color:s.tc,letterSpacing:"0.8px"}}>{s.tag}</span>
                  <span style={{fontSize:"9px",padding:"2px 6px",borderRadius:"3px",background:"var(--color-background-tertiary)",color:"var(--color-text-secondary)"}}>{LABELS[s.lay]}</span>
                </div>
                <div style={{fontSize:"11px",color:"var(--color-text-secondary)"}}>{s.dur} · {s.who}</div>
              </div>
              <span style={{color:"var(--color-text-secondary)",fontSize:"11px",flexShrink:0}}>{open===s.id?"▲":"▼"}</span>
            </div>

            {/* Body */}
            {open===s.id&&(
              <div style={{padding:"16px",background:"var(--color-background-primary)"}}>
                {/* Wireframe + Copy */}
                <div style={{display:"flex",gap:"16px",marginBottom:"14px",flexWrap:"wrap"}}>
                  <div style={{flexShrink:0,width:"200px"}}>
                    <div style={{fontSize:"9px",color:"var(--color-text-secondary)",marginBottom:"6px",letterSpacing:"1px"}}>WIREFRAME LAYOUT</div>
                    <div style={{border:"1px solid var(--color-border-tertiary)",borderRadius:"6px",overflow:"hidden"}}>
                      <WF lay={s.lay} c={s.tc}/>
                    </div>
                  </div>
                  <div style={{flex:1,minWidth:"180px"}}>
                    <div style={{fontSize:"9px",color:"var(--color-text-secondary)",marginBottom:"8px",letterSpacing:"1px"}}>TEKS PADA SLIDE</div>
                    <div style={{display:"flex",flexDirection:"column",gap:"7px"}}>
                      {s.copy.map(([lbl,txt],i)=>(
                        <div key={i} style={{display:"flex",gap:"8px",alignItems:"flex-start"}}>
                          <span style={{
                            fontSize:"8px",padding:"3px 6px",borderRadius:"3px",minWidth:"72px",
                            background:"var(--color-background-secondary)",color:"var(--color-text-secondary)",
                            textAlign:"center",letterSpacing:"0.3px",flexShrink:0,marginTop:"1px",
                          }}>{lbl}</span>
                          <span style={{
                            fontSize:"12px",lineHeight:"1.45",
                            color:i===0?"var(--color-text-primary)":"var(--color-text-secondary)",
                            fontWeight:i===0?"500":"400",
                          }}>{txt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual note */}
                <div style={{
                  padding:"10px 12px",borderRadius:"6px",marginBottom:"8px",
                  background:"var(--color-background-secondary)",
                  borderLeft:`3px solid ${s.tc}66`,
                }}>
                  <div style={{fontSize:"9px",color:"var(--color-text-secondary)",marginBottom:"4px",letterSpacing:"0.8px"}}>VISUAL / GRAFIS</div>
                  <p style={{fontSize:"12px",color:"var(--color-text-secondary)",margin:0,lineHeight:"1.6"}}>{s.vis}</p>
                </div>

                {/* Delivery cue */}
                <div style={{
                  padding:"10px 12px",borderRadius:"6px",
                  background:"var(--color-background-secondary)",
                  borderLeft:`3px solid #4ade8066`,
                }}>
                  <div style={{fontSize:"9px",color:"var(--color-text-secondary)",marginBottom:"4px",letterSpacing:"0.8px"}}>DELIVERY NOTE</div>
                  <p style={{fontSize:"12px",color:"var(--color-text-primary)",margin:0,lineHeight:"1.6"}}>{s.cue}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{marginTop:"20px",paddingTop:"14px",borderTop:"1px solid var(--color-border-tertiary)",textAlign:"center"}}>
        <p style={{fontSize:"10px",color:"var(--color-text-secondary)",margin:0}}>
          Blueprint ini hanya referensi layout dan copy — visual, font, dan warna dicari & dibuat sendiri.
        </p>
      </div>
    </div>
  );
}
