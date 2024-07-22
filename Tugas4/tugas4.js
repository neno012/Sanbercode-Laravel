// Soal String
var word = "JavaScript";
var second = "is";
var third = "awesome";
var fourth = "and";
var fifth = "I";
var sixth = "love";
var seventh = "it!";

// jawaban
let outputGabunganVariable =
  word +
  " " +
  second +
  " " +
  third +
  " " +
  fourth +
  " " +
  fifth +
  " " +
  sixth +
  " " +
  seventh;
console.log(outputGabunganVariable);

/// soal 2
var sentence = "I am going to be Web Developer";

//// jawaban

var exampleFirstWord = sentence[0];
var secondWord = sentence[2] + sentence[3];
var thirdWord =
  sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]; // lakukan sendiri
var fourthWord = sentence[11] + sentence[12]; // lakukan sendiri
var fifthWord = sentence[14] + sentence[15]; // lakukan sendiri
var sixthWord = sentence[17] + sentence[18] + sentence[19]; // lakukan sendiri
var seventhWord =
  sentence[21] +
  sentence[22] +
  sentence[23] +
  sentence[24] +
  sentence[25] +
  sentence[26] +
  sentence[27] +
  sentence[28] +
  sentence[29]; // lakukan sendiri

console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + secondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);
console.log("Sixth Word: " + sixthWord);
console.log("Seventh Word: " + seventhWord);

/// soal 3
var sentence3 = "wow JavaScript is so cool";

var exampleFirstWord3 = sentence3.substring(0, 3);
var secondWord3 = sentence3.substring(4, 14); // do your own!
var thirdWord3 = sentence3.substring(15, 17); // do your own!
var fourthWord3 = sentence3.substring(18, 20); // do your own!
var fifthWord3 = sentence3.substring(21, 25); // do your own! node

var firstWordLength = exampleFirstWord3.length;
var secondtWordLength = secondWord3.length;
var thirdWordLength = thirdWord3.length;
var fourthWordLength = fourthWord3.length;
var fifthWordLength = fifthWord3.length;
// lanjutkan buat variable lagi di bawah ini
console.log(
  "First Word: " + exampleFirstWord3 + ", with length: " + firstWordLength
);
console.log(
  "Second Word: " + secondWord3 + ", with length: " + secondtWordLength
);
console.log("third Word: " + thirdWord3 + ", with length: " + thirdWordLength);
console.log(
  "fourth Word: " + fourthWord3 + ", with length: " + fourthWordLength
);
console.log("fifth Word: " + fifthWord3 + ", with length: " + fifthWordLength);

//// functional
/// soal 1
function teriak() {
  return "Halo Sanbers!";
}

// jawaban
console.log(teriak()); // "Halo Sanbers!"

/// soal 2
function kalikan(num1, num2) {
  return num1 * num2;
}

console.log(kalikan(4, 12));

// soal 3
function introduce(name, age, address, hobby) {
  return (
    "Nama saya " +
    name +
    ", umur saya " +
    age +
    " tahun, alamat saya di " +
    address +
    "dan saya punya hobby yaitu " +
    hobby +
    "!"
  );
}

// TEST CASES
console.log(introduce("Agus", 30, "Jogja", "Gaming"));

/// conditional

// soal 1
var nama = "John";
var peran = "Penyihir";

if (peran === "" && nama === "") {
  console.log("Nama harus diisi!");
} else {
  if (peran === "") {
    console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
  } else {
    if (peran === "Penyihir") {
      console.log("Selamat datang di Dunia Werewolf,"+nama);
      console.log("Halo Penyihir "+nama+", kamu dapat melihat siapa yang menjadi werewolf!");
    } else if (peran === "Guard") {
        console.log("Selamat datang di Dunia Werewolf,"+nama);
        console.log("Halo Guard "+nama+", kamu akan membantu melindungi temanmu dari serangan werewolf.");
    } else if (peran === "Werewolf") {
        console.log("Selamat datang di Dunia Werewolf,"+nama);
        console.log("Halo Werewolf "+nama+", Kamu akan memakan mangsa setiap malam!");
    } else {
        console.log("Selamat datang di Dunia Werewolf,"+nama);
        console.log("Halo Warlok "+nama+", hati-hati dimakan werewolf!");
    }
  }
}

//// loop
var loop = 2;
console.log("Loop 1 :");
while(loop <=20){
    console.log(loop+" - I love coding");
    loop += 2;
}
console.log("Loop 2 :");
while(loop >=2){
    console.log(loop+" - I will become a mobile developer");
    loop -= 2;
}