function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
  
  function showRandomSleepReason() {
    const reasons = [
      "หนูกำลัง recharge พลังงานค่ะ 💤",
      "ฝันว่ากินมะม่วงอยู่เลยค่ะ~",
      "เงียบไปเพราะกำลังดูดชาเขียว",
      "หนูตอบในใจไปแล้วไงคะ 😇"
    ];
    const random = reasons[Math.floor(Math.random() * reasons.length)];
    document.getElementById("sleep-reason").textContent = random;
  }
  
  function showMeaning(element, message) {
    const existing = element.querySelector('.meaning');
    if (existing) {
      existing.remove(); // toggle ปิด
      return;
    }
  
    const meaning = document.createElement("div");
    meaning.className = "meaning";
    meaning.innerText = message;
    element.appendChild(meaning);
  }
  
  function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      document.getElementById("copy-status").textContent = "คัดลอกลิงก์เรียบร้อย ส่งให้น้องเลย์ได้เลย!";
    });
  }

  let loveLevel = 0;
const titooLines = [
  "ไม่รักจริงหย๋อ? 😢",
  "เค้าน่ารักนะ",
  "รักเถอะนะ~",
  "รักเค้าเถอะนะ 🥺",
  "ถ้ารักเค้า เค้าจะไม่งอแงเลย",
  "คิดดี ๆ นะ ใจตัวเองอะ ❤️",
  "หนูจะยิ้มเลย ถ้าเธอบอกรัก",
  "ยอมแล้วก็ได้นะ~",
  "จะถามอีกก็ได้นะ จนกว่าจะยอมรักอะ",
  "ตอบรักสักทีเถอะ เค้าอ้อนละนะ!"
];

function handleNo() {
    const msg = titooLines[loveLevel % titooLines.length];
    document.getElementById("love-response").textContent = msg;
  
    loveLevel++;
  
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
  
    // ปรับขนาดปุ่มรักให้โตขึ้น
    const newSize = 1.4 + loveLevel * 0.2;
    const paddingH = 30 + loveLevel * 6;
    const paddingV = 14 + loveLevel * 3;
  
    yesBtn.style.fontSize = `${newSize}rem`;
    yesBtn.style.padding = `${paddingV}px ${paddingH}px`;
  
    // ปรับขนาดปุ่มไม่ให้เล็กลงเรื่อย ๆ จนหาย
    const shrinkSize = Math.max(1.2 - loveLevel * 0.1, 0.2); // อย่าให้เล็กเกิน
    const opacity = Math.max(1 - loveLevel * 0.1, 0);
  
    noBtn.style.transform = `scale(${shrinkSize})`;
    noBtn.style.opacity = opacity;
  
    // ถ้าครบ 9 ครั้งให้ซ่อนปุ่ม "ไม่"
    if (loveLevel >= 9) {
      noBtn.style.display = "none";
    }
  }

function handleYes() {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("love-response").textContent = "";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function openEventPopup(imageSrc, title, desc) {
    document.getElementById("popup-image").src = imageSrc;
    document.getElementById("popup-title").textContent = title;
    document.getElementById("popup-desc").textContent = desc;
    document.getElementById("event-popup").style.display = "flex";
  }
  
  function closeEventPopup() {
    document.getElementById("event-popup").style.display = "none";
  }