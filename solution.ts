

function formatValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
  
    let result = "";
    for (let i = 0; i < value.length; i++) {
      const code = value.charCodeAt(i);
      if (code >= 97 && code <= 122) {
        result += String.fromCharCode(code - 32);
      } else {
        result += value[i];
      }
    }
    return result;
  } else if (typeof value === "number") {
   
    return value * 10;
  } else if (typeof value === "boolean") {
    
    return value ? false : true;
  }
  return value;
}






function getLength(value: string | any[]): number {
  let count = 0;

  if (typeof value === "string") {
    for (let i = 0; value[i] !== undefined; i++) {
      count++;
    }
    return count;
  } else if (Array.isArray(value)) {
    for (let i = 0; value[i] !== undefined; i++) {
      count++;
    }
    return count;
  }

  return 0;
}






class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
   
    let result = "Name: ";
   
    for (let i = 0; this.name[i] !== undefined; i++) {
      result += this.name[i];
    }
    result += ", Age: ";

   
    let ageNumber = this.age;
    let ageString = "";
    if (ageNumber === 0) {
      ageString = "0";
    } else {
      let digits: string[] = [];
      while (ageNumber > 0) {
        let digit = ageNumber % 10;
     
        digits.push(String.fromCharCode(48 + digit));
        ageNumber = (ageNumber - digit) / 10;
      }
      
      for (let i = digits.length - 1; i >= 0; i--) {
        ageString += digits[i];
      }
    }

    result += ageString;
    return result;
  }
}

// Sample Input / Output
const person1 = new Person("John Doe", 30);
// console.log(person1.getDetails()); // "Name: John Doe, Age: 30"

const person2 = new Person("Alice", 25);









type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[]): Item[] {
  let result: Item[] = [];


  for (let i = 0; items[i] !== undefined; i++) {
    if (items[i].rating >= 4) {
      // Push manually into result
      result[result.length] = items[i];
    }
  }

  return result;
}


const books: Item[] = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];














type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  let result: User[] = [];


  for (let i = 0; users[i] !== undefined; i++) {
    if (users[i].isActive === true) {
      
      result[result.length] = users[i];
    }
  }

  return result;
}


const users: User[] = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];












interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}


function printBookDetails(book: Book): void {
  let result = "Title: ";


  for (let i = 0; book.title[i] !== undefined; i++) {
    result += book.title[i];
  }

  result += ", Author: ";

  
  for (let i = 0; book.author[i] !== undefined; i++) {
    result += book.author[i];
  }

  result += ", Published: ";

  
  let year = book.publishedYear;
  let yearString = "";
  if (year === 0) {
    yearString = "0";
  } else {
    let digits: string[] = [];
    while (year > 0) {
      let digit = year % 10;
      digits[digits.length] = String.fromCharCode(48 + digit);
      year = (year - digit) / 10;
    }

    for (let i = digits.length - 1; i >= 0; i--) {
      yearString += digits[i];
    }
  }
  result += yearString;

  result += ", Available: ";


  if (book.isAvailable === true) {
    result += "Yes";
  } else {
    result += "No";
  }

  console.log(result);
}


const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};


printBookDetails(myBook);





function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
  let result: (string | number)[] = [];

  
  function exists(value: string | number): boolean {
    for (let i = 0; result[i] !== undefined; i++) {
      if (result[i] === value) {
        return true;
      }
    }
    return false;
  }


  for (let i = 0; arr1[i] !== undefined; i++) {
    if (!exists(arr1[i])) {
      result[result.length] = arr1[i];
    }
  }


  for (let i = 0; arr2[i] !== undefined; i++) {
    if (!exists(arr2[i])) {
      result[result.length] = arr2[i];
    }
  }

  return result;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];







type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
};

function calculateTotalPrice(products: Product[]): number {
  
  if (products[0] === undefined) {
    return 0;
  }

  let total = 0;

  
  for (let i = 0; products[i] !== undefined; i++) {
    let product = products[i];
    let productTotal = product.price * product.quantity;


    if (product.discount !== undefined) {
      let discountAmount = (productTotal * product.discount) / 100;
      productTotal = productTotal - discountAmount;
    }

    
    total = total + productTotal;
  }

  return total;
}


const products: Product[] = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];




