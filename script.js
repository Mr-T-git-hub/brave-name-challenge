const braveNames = [
  "جبل الجبال", "أسد الوحوش", "نمور الغضب", "طيف الليل", "وحش الوديان",
  "وسواس العظمة", "حوت القمم", "شبح الهيبة", "ذيب البراري", "فهد الشوارع"
];

function generateName() {
  const input = document.getElementById("nameInput").value.trim();
  if (!input) {
    alert("Please enter your name!");
    return;
  }
  const hash = [...input].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const index = hash % braveNames.length;
  const result = braveNames[index];

  document.getElementById("result").innerHTML = `Your Brave Name: <b>${result}</b> 🐪`;
}
