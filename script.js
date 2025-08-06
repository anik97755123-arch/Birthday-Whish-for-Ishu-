function checkKey() {
  const key = document.getElementById("keyInput").value;
  if (key === "love123") {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("formSection").style.display = "block";
  } else {
    alert("Wrong key!");
  }
}

function generateLink() {
  const name = encodeURIComponent(document.getElementById("name").value);
  const date = encodeURIComponent(document.getElementById("date").value);
  const msg = encodeURIComponent(document.getElementById("message").value);
  const emojis = encodeURIComponent(document.getElementById("emojis").value);

  const baseUrl = "https://anik.github.io/birthday"; // replace later with your actual URL
  const finalUrl = `${baseUrl}?to=${name}&date=${date}&msg=${msg}&emojis=${emojis}`;
  document.getElementById("output").innerHTML = `<p>Share this link:</p><a href="${finalUrl}" target="_blank">${finalUrl}</a>`;
}