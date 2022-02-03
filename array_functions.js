const users = ["maruf", "mehmet", "ayşe", "fatma"]

//push
users.push("helin")
console.log(users) //['maruf', 'mehmet', 'ayşe', 'fatma', 'helin']

// map
users.map((item) => {
    console.log(item);
});
// maruf
// mehmet
// ayşe
// fatma
// helin


// find
//arrray in içerisinde verdiğimiz koşulara göre arama yapar

//örnek 1
const array1 = [5, 4, 8, 130, 44];
const found = array1.find(element => element > 5);
console.log(found); //8 döner

//örnek 2
const array1 = [{
        name: "kops",
        age: 15
    },
    {
        name: "hyper",
        age: 45
    }
];

const found = array1.find(element => element.age > 5 && element.name === "kops");
console.log(found);// Object { name: "kops", age: 15 }


//filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);// Array ["exuberant", "destruction", "present"]


//some
//verilen koşula uygun herhangi bir eleman uyuyor mu diye kontrol edip bize True ya da False döner

const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
    return arr.some(function (arrVal) {
        return val === arrVal;
    });
}

checkAvailability(fruits, 'kela'); // false
checkAvailability(fruits, 'banana'); // true


//every
//array in tüm elemanlarının şarta uymasını bekler uyarsa True uymazsa False
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true


//includes
//array belirtilen itemı içeriyor mu kontrol eder ve True veya False bir değer döner
const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true