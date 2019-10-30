var tanya = true;
while (tanya) {

  // Menangkap Pilihan Player

  var pilih = prompt('pilih : gajah, semut, atau orang!')

  // Mengangkap pilihan Komputer

  var komputer = Math.random()

  if (komputer < 0.34) {
    komputer = 'gajah'
  } else if (komputer >= 0.34 && komputer < 0.67) {
    komputer = 'orang'
  } else {
    komputer = 'orang'
  }

  // Menentukan Rules
  var hasilnya = '';

  if (pilih == komputer) {
    hasilnya = 'Seri!'
  } else if (pilih == 'gajah') {
    if (komputer == 'orang') {
      hasilnya = 'Menang!'
    } else {
      hasilnya = 'Kalah!'
    }
  } else if (pilih == 'orang') {
    if (komputer == 'gajah') {
      hasilnya = 'Kalah!'
    } else {
      hasilnya = 'Menang!'
    }
  } else if (pilih == 'semut') {
    if (komputer == 'orang') {
      hasilnya = 'Kalah!'
    } else {
      hasilnya = 'Menang!'
    }
  } else {
    hasilnya = 'Memasukan Nilai yang tidak di kenali!'
  }

  alert('Kammu memilih : ' + pilih + ' dan komputer memilih : ' + komputer + ' \n Maka hasilnya : ' + hasilnya)

  tanya = confirm('lagi?')

}

alert('Terimakasih sudah bermain!')