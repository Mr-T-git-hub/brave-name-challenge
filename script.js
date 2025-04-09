const braveNames = {
  male: [
    "أسد الأسود 🦁",
    "نمر النمور 🐅",
    "فهد السهول 🐆",
    "ذيب الذئاب 🐺",
    "تمساح البحيرات 🐊",
    "صقر الأعالي 🦅",
    "عقاب السحاب 🦅",
    "جمل الهضاب 🐪",
    "نحلة القتال 🐝",
    "ديك الفجر 🐓",
    "بعوضة الغضب 🦟",
    "زرافة القمم 🦒",
    "حوت المحيطات 🐋",
    "ثعلب الليل 🦊",
    "دب العسل 🐻",
    "نورس النار 🕊️🔥",
    "ضب الرمال 🦎",
    "كنغر الهيبة 🦘",
    "جبل الجبال ⛰️",
    "وادٍ الهلاك 🌄",
    "نار الصحارى 🔥🏜️",
    "ريح الرعب 🌪️",
    "صخرة الصمود 🪨",
    "صاعقة البرق ⚡",
    "بركان الأسرار 🌋",
    "ثلج الجحيم ❄️🔥",
    "غيمة الكبرياء ☁️💪",
    "غابة الضياع 🌳🌲",
    "محيط الرغبة 🌊💙",
    "كوكب العناد 🌍😤",
    "صحراء القلب 🏜️❤️",
    "نجمة السطوع ⭐✨",
    "قمر الحنين 🌙💔",
    "مجرة الهروب 🌌",
    "وحش الحنين 😈💔",
    "أمير الفوضى 👑💥",
    "شبح الكشخة 👻✨",
    "ملك التناقضات 👑⚖️",
    "وسواس العظمة 🤯👑",
    "زعيم الزعامة 🧠👊",
    "جنرال النعاس 😴🎖️",
    "شاعر العنف ✍️💥",
    "فارس الشاي 🫖⚔️",
    "شيخ الدلع 😎🕶️",
    "مدمن القهوة ☕🔥",
    "ملك السهر 🌙👑",
    "أسطورة التردد 🌀😬",
    "مهندس القرارات العشوائية 🛠️🎲",
    "صانع الأعذار 🧪🙄",
    "مفتي الكسل 📚😴",
    "إمام التيه 🧭💭",
    "عبقري الفشل الجميل 🧠💔",
    "طيف الليل 🌌👻",
    "ظل الحزن 🌫️😢",
    "صوت الصمت 🔇🎵",
    "عين الريبة 👁️❓",
    "رجل بدون ماضٍ 🧥❌",
    "صاحب الظل الطويل 🕴️🌒",
    "غريب الأطوار 🌀🙃",
    "كحل الليل 🖤🌙",
    "سيد الأسرار 🤫📖",
    "الوحيد في الزحام 🚶‍♂️🌆",
    "قائد الفرسان 🏇🔥",
    "ضابط الهيبة 🎖️😎",
    "كابتن القوة 🧢💪",
    "نقيب الشجاعة 🛡️🔥",
    "محارب بلا رحمة ⚔️❌❤️",
    "سلاح الدمار العاطفي 💣💔",
    "جنرال الرومانسية 💘🎖️",
    "صائد الفرص 🎯🐺",
    "مقاتل النسيان 🥷🧠",
    "ضارب الحظ 🎲👊",
    "ذكاء اصطناعي بدوي 🤖🌵",
    "مشاعر مخزنة في السحابة ☁️💾",
    "المؤثر المجهول 🎥🕵️",
    "أرنب سكران بالواي فاي 🐰📶🍷",
    "فيل سيلفي 🐘📸",
    "المتابع المجهول 🧍‍♂️👀",
    "تريند لا يموت 📈🔥",
    "الاسم اللي يقفل التعليقات 🚫💬",
    "أب الروح المكسورة 👤💔",
    "حالة واتساب قديمة 💚📱"
  ],
  female: [
    // 👉 Exactly 76 names — replace these with real female-style names if you'd like
    // For now, I'm using "Placeholder اسم" with emoji to keep the length equal
    "لبؤة الأسود 🦁",
    "نمرة النمور 🐅",
    "فهدة السهول 🐆",
    "ذئبة الذئاب 🐺",
    "تماسيح البحيرات 🐊",
    "صقورة الأعالي 🦅",
    "عقابة السحاب 🦅",
    "ناقة الهضاب 🐪",
    "نحلة القتال 🐝",
    "دجاجة الفجر 🐔",
    "بعوضة الغضب 🦟",
    "زرافة القمم 🦒",
    "حوتة المحيطات 🐋",
    "ثعلبة الليل 🦊",
    "دبة العسل 🐻",
    "نورسة النار 🕊️🔥",
    "ضبة الرمال 🦎",
    "كنغرة الهيبة 🦘",
    "جبلية الجبال ⛰️",
    "وادي الهلاك 🌄",
    "نار الصحارى 🔥🏜️",
    "رياح الرعب 🌪️",
    "صخرة الصمود 🪨",
    "صاعقة البرق ⚡",
    "بركانية الأسرار 🌋",
    "ثلجة الجحيم ❄️🔥",
    "غيمة الكبرياء ☁️💪",
    "غابة الضياع 🌳🌲",
    "محيط الرغبة 🌊💙",
    "كوكب العناد 🌍😤",
    "صحراء القلب 🏜️❤️",
    "نجمة السطوع ⭐✨",
    "قمر الحنين 🌙💔",
    "مجرة الهروب 🌌",
    "وحشة الحنين 😈💔",
    "أميرة الفوضى 👑💥",
    "شبح الكشخة 👻✨",
    "ملكة التناقضات 👑⚖️",
    "وسواس العظمة 🤯👑",
    "زعيمة الزعامة 🧠👊",
    "جنرالة النعاس 😴🎖️",
    "شاعرة العنف ✍️💥",
    "فارسة الشاي 🫖⚔️",
    "شيخة الدلع 😎🕶️",
    "مدمنة القهوة ☕🔥",
    "ملكة السهر 🌙👑",
    "أسطورة التردد 🌀😬",
    "مهندسة القرارات العشوائية 🛠️🎲",
    "صانعة الأعذار 🧪🙄",
    "مفتية الكسل 📚😴",
    "إمامة التيه 🧭💭",
    "عبقرية الفشل الجميل 🧠💔",
    "طيف الليل 🌌👻",
    "ظل الحزن 🌫️😢",
    "صوت الصمت 🔇🎵",
    "عين الريبة 👁️❓",
    "امرأة بدون ماضٍ 🧥❌",
    "صاحبة الظل الطويل 🕴️🌒",
    "غريبة الأطوار 🌀🙃",
    "كحل الليل 🖤🌙",
    "سيدة الأسرار 🤫📖",
    "الوحيدة في الزحام 🚶‍♀️🌆",
    "قائدة الفرسان 🏇🔥",
    "ضابطة الهيبة 🎖️😎",
    "كابتنة القوة 🧢💪",
    "نقيبة الشجاعة 🛡️🔥",
    "محاربة بلا رحمة ⚔️❌❤️",
    "سلاح الدمار العاطفي 💣💔",
    "جنرالة الرومانسية 💘🎖️",
    "صائدة الفرص 🎯🐺",
    "مقاتلة النسيان 🥷🧠",
    "ضاربة الحظ 🎲👊",
    "ذكاء اصطناعي بدوية 🤖🌵",
    "مشاعر مخزنة في السحابة ☁️💾",
    "المؤثرة المجهولة 🎥🕵️",
    "أرنبة سكرانة بالواي فاي 🐰📶🍷",
    "فيلة سيلفي 🐘📸",
    "المتابعة المجهولة 🧍‍♀️👀",
    "تريند لا يموت 📈🔥",
    "الاسم اللي يقفل التعليقات 🚫💬",
    "أم الروح المكسورة 👤💔",
    "حالة واتساب قديمة 💚📱"
  ]
};

let currentGender = localStorage.getItem("gender") || "male";

// Set gender button active on page load
window.onload = () => {
  const savedName = localStorage.getItem("userName");
  const braveName = localStorage.getItem("braveName");

  document.getElementById("genderMale").classList.toggle("active", currentGender === "male");
  document.getElementById("genderFemale").classList.toggle("active", currentGender === "female");

  if (savedName) document.getElementById("nameInput").value = savedName;
  if (braveName) document.getElementById("result").innerHTML = `Your Brave Name: <b>${braveName}</b>`;
};

function toggleGender(gender) {
  currentGender = gender;
  localStorage.setItem("gender", gender);

  document.getElementById("genderMale").classList.toggle("active", gender === "male");
  document.getElementById("genderFemale").classList.toggle("active", gender === "female");
}

function generateName() {
  const input = document.getElementById("nameInput").value.trim();
  if (!input) {
    alert("Please enter your name!");
    return;
  }

  const hash = [...input].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const namesArray = braveNames[currentGender];
  const index = hash % namesArray.length;
  const result = namesArray[index];

  localStorage.setItem("userName", input);
  localStorage.setItem("braveName", result);
  localStorage.setItem("gender", currentGender);

  document.getElementById("result").innerHTML = `Your Brave Name: <b>${result}</b>`;
}

function resetGenerator() {
  localStorage.clear();
  document.getElementById("nameInput").value = "";
  document.getElementById("result").innerHTML = "";
  currentGender = "male";
  toggleGender("male");
}
