// Menangkap Pilihan Player

var pilih = prompt('pilih : gajah, semut, atau orang!')

// Mengangkap pilihan Komputer

var komputer = Math.random()

if (komputer < 0.34) {
  komputer = 'gajah'
}else if(komputer >= 0.34 && komputer < 0.67){
  komputer = 'orang'
}else{
  komputer = 'orang'
}

console.log(komputer)
