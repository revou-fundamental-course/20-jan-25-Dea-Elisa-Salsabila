document.addEventListener("DOMContentLoaded", function() {
    // Code ini dijalankan setelah halaman sepenuhnya dimuat
    // Misalnya, inisialisasi elemen-elemen, seperti tombol, dan lain-lain
});

document.getElementById("faqForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form untuk reload halaman

    // Ambil nilai inputan
    const motivationInput = document.getElementById("motivationInput").value;

    // Lakukan perhitungan berdasarkan input
    let motivationResult = calculateMotivation(motivationInput);

    // Tampilkan hasil perhitungan di div hasil
    document.getElementById("motivationResult").innerHTML = "Hasil Motivasi: " + motivationResult;
});

// Fungsi untuk menghitung motivasi berdasarkan input
function calculateMotivation(input) {
    // Asumsi kita memiliki logika perhitungan tertentu di sini
    // Misalnya kita membandingkan panjang input atau faktor lainnya
    if (input.length < 5) {
        return "Motivasi rendah";
    } else if (input.length >= 5 && input.length <= 10) {
        return "Motivasi sedang";
    } else {
        return "Motivasi tinggi";
    }
}

function calculateBMI() {
    // Ambil input dari form
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
  
    // Cek apakah input valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert("Please enter valid weight and height values.");
      return;
    }
  
    // Hitung BMI
    var bmi = weight / (height * height);
  
    // Tentukan kategori BMI
    var category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
  
    // Tampilkan hasil BMI dan kategori
    document.getElementById('result').innerHTML = 'Your BMI is ' + bmi.toFixed(2) + ' (' + category + ')';
  }
function displayResult(bmi) {
    let description = '';
    let motivation = '';

    if (bmi < 18.5) {
        description = 'Kamu kurang berat badan. Coba pastikan pola makan dan gaya hidup sehat.';
        motivation = 'Jaga kesehatan tubuh ya!';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        description = 'BMI kamu ideal! Tetap jaga pola hidup sehat.';
        motivation = 'Terus jaga gaya hidup sehat!';
    } else if (bmi >= 25 && bmi < 29.9) {
        description = 'Kamu overweight. Coba perbaiki pola makan dan tingkatkan aktivitas fisik.';
        motivation = 'Semangat! Kamu bisa lebih sehat dengan sedikit usaha.';
    } else {
        description = 'Kamu obesitas. Perlu perhatian lebih terhadap kesehatan tubuh.';
        motivation = 'Mencapai berat badan ideal itu bisa, yang penting konsisten!';
    }

    document.getElementById("description").innerText = description;
    document.getElementById("result").innerText = `BMI: ${bmi.toFixed(2)}`;
    document.getElementById("motivation").innerText = motivation;
    document.getElementById("result-container").classList.remove("hidden");
}

document.getElementById("faq-icon").addEventListener("click", function() {
    document.getElementById("faq-modal").classList.remove("hidden");
});

document.getElementById("faq-close").addEventListener("click", function() {
    document.getElementById("faq-modal").classList.add("hidden");
});