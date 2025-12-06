document.getElementById("msgForm").addEventListener("submit", function(event){
  event.preventDefault();

  // ambil value form
  const nama = document.getElementById("nama").value;
  const nama1 = document.getElementById("nama").value;
  const tanggal = document.getElementById("tanggalLahir").value;
  const jk = document.querySelector("input[name='jk']:checked").value;
  const pesan = document.getElementById("pesan").value;

  // current time
  const now = new Date().toLocaleString();

  // output
  document.getElementById("waktu").innerText = now;
  document.getElementById("outNama").innerText = nama;
  document.getElementById("outNama1").innerText = nama1;
  document.getElementById("outTanggal").innerText = tanggal;
  document.getElementById("outJK").innerText = jk;
  document.getElementById("outPesan").innerText = pesan;
});
