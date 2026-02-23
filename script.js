const kehanetler = [
    "Bazen her şey üst üste geliyor gibi hissedebilirsin ama unutma, en güçlü insanlar da en çok zorlananlardır 🌿 Sen pes etmediğin her gün biraz daha güçleniyorsun. Küçük adımlar attığını düşünsen bile o adımlar seni hayaline yaklaştırıyor.Kendine güven, gerçekten sandığından daha fazlasısın 💫",
    "Şu an yavaş ilerlediğini düşünüyor olabilirsin ama yavaş olmak başarısız olmak değildir 🌸 Herkesin zamanı farklıdır. Sen kendi yolunda, kendi hızında ilerliyorsun. Önemli olan durmamak. Devam ettiğin sürece kaybetmezsin 🚀",
    "Kendine biraz daha nazik davran olur mu? 🤍 Her şeyi aynı anda başarmak zorunda değilsin. Bazen dinlenmek de bir ilerlemedir. Yorulduysan mola ver ama asla vazgeçme. Çünkü sen vazgeçmeyecek kadar güçlü birisin 🌈",
    "Hayal ettiğin hayat belki bugün değil ama bir gün mutlaka gerçek olacak ✨ Yeter ki inanmaya devam et. Disiplinli olduğun her gün, aslında gelecekteki “iyi ki”nin temelini atıyorsun. O gün geldiğinde bugünkü çabalarınla gurur duyacaksın 💪🔥",
    "Başkaları senden daha ileride gibi görünebilir ama herkesin başlangıç noktası farklıdır 🌻 Kendini kimseyle kıyaslama. Sen dünkü halinden daha iyisen, işte o zaman gerçekten kazanıyorsun. Küçük gelişmeler büyük dönüşümlerin habercisidir 💛",
    "Korkuların olabilir, şüphelerin olabilir ama cesaret korkunun olmaması değil, korkuya rağmen devam etmektir 🦋 Sen zaten deniyorsun. Denemek bile büyük bir adımdır. Kendinle gurur duymalısın 💙",
    "Bir gün “iyi ki vazgeçmemişim” diyeceksin 🌟 O gün bugünden daha yakın. Sadece sabırlı ol. Çaban asla boşa gitmiyor. Emek verdiğin her şey bir şekilde sana geri dönecek. Evren emeği sever 🌌💫",
    "Şu an kimsenin görmediği bir mücadele veriyor olabilirsin ama unutma, en sessiz savaşlar en büyük zaferleri getirir 🛡️ İçindeki gücü hafife alma. Sen düşündüğünden daha dayanıklısın 🌿",
    "Hayat bir maraton, sprint değil 🏃‍♀️ Bazen hızlanırsın, bazen yavaşlarsın ama önemli olan yarışta kalmak. Sen yoldasın ve bu bile başlı başına bir başarı. Kendine inan, çünkü gerçekten başarabilecek potansiyele sahipsin ✨💖"
];
// script.js

// ... (kehanetler dizisi aynı kalsın)

const deck = document.getElementById('deck');
const modal = document.getElementById('modal');
const typingText = document.getElementById('typing-text');

let typingInterval; // Daktilo sürecini kontrol etmek için değişken

// 1. Kartları Oluştur
function createCards() {
    deck.innerHTML = '';
    for(let i=0; i<7; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<div class="card-inner"><div class="card-front"></div></div>`;
        card.onclick = () => selectCard(card);
        deck.appendChild(card);
    }
}

// 2. Kartları Karıştır (Shuffle)
function shuffleDeck() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.left = `${Math.random() * 100 - 50}px`;
        card.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;
        card.style.zIndex = index;
    });
}

// 3. Kart Seçme ve Daktilo Efekti
function selectCard(card) {
    // ÖNEMLİ: Eğer içeride çalışan bir daktilo varsa onu durdur
    clearTimeout(typingInterval); 
    
    modal.classList.add('active');
    const randomKehanet = kehanetler[Math.floor(Math.random() * kehanetler.length)];
    
    typingText.innerText = ''; // Önceki yazıyı temizle
    let i = 0;
    
    function typeWriter() {
        if (i < randomKehanet.length) {
            typingText.innerText += randomKehanet.charAt(i);
            i++;
            // Yeni daktilo adımını değişkene ata
            typingInterval = setTimeout(typeWriter, 40); 
        }
    }
    typeWriter();
}

function closeModal() {
    // Kartı kapatırken daktiloyu durdur ve metni sıfırla
    clearTimeout(typingInterval);
    typingText.innerText = '';
    modal.classList.remove('active');
    shuffleDeck();
}

createCards();
shuffleDeck();