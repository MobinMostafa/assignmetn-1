

ইন্টারফেস (Interface) বনাম টাইপ (Type) এর পার্থক্য
ঘোষণা (Declaration): ইন্টারফেসকে একাধিকবার ঘোষণা করে একত্রে মিশিয়ে ব্যবহার করা যায় (declaration merging)। কিন্তু টাইপকে একবারই ঘোষণা করা যায়।

এক্সটেনশন (Extension): ইন্টারফেসকে extends দিয়ে অন্য ইন্টারফেস থেকে উত্তরাধিকার নেওয়া যায়। টাইপকে & (intersection) দিয়ে একাধিক টাইপ একত্রে করা যায়।

ব্যবহার ক্ষেত্র: ইন্টারফেস সাধারণত অবজেক্টের কাঠামো নির্ধারণে ব্যবহৃত হয়। টাইপ ব্যবহার করা যায় অবজেক্ট, প্রিমিটিভ, ইউনিয়ন, ইন্টারসেকশন ইত্যাদি সবকিছুর জন্য।






keyof কীওয়ার্ডের ব্যবহার
keyof ব্যবহার করা হয় কোনো অবজেক্ট টাইপের সবগুলো প্রপার্টির নামকে ইউনিয়ন টাইপ হিসেবে বের করার জন্য।

উদাহরণ:
typescript
interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKeys = keyof Person; 
// এখানে PersonKeys হবে: "name" | "age" | "email"

function getProperty(obj: Person, key: PersonKeys) {
  return obj[key];
}

const person: Person = { name: "Rakib", age: 25, email: "rakib@example.com" };

console.log(getProperty(person, "name"));  // আউটপুট: Rakib
console.log(getProperty(person, "age"));   // আউটপুট: 25





TypeScript এ any, unknown, এবং never টাইপের পার্থক্য
1. any টাইপ
any মানে হলো যেকোনো কিছু হতে পারে।

যখন কোনো ভ্যালুর টাইপ সম্পর্কে নিশ্চিত না থাকি, তখন any ব্যবহার করলে TypeScript টাইপ চেক করবে না।

এটি সবচেয়ে বেশি ফ্লেক্সিবল, কিন্তু টাইপ সেফটি নষ্ট করে দেয়।

typescript
let value: any = "Hello";
value = 123;       // ঠিক আছে
value = true;      // এটাও ঠিক আছে
2. unknown টাইপ
unknown হলো টাইপ সেফ any।

এটি যেকোনো ভ্যালু রাখতে পারে, কিন্তু ব্যবহার করার আগে টাইপ চেক করতে হবে।

অর্থাৎ, unknown ব্যবহার করলে TypeScript আপনাকে বাধ্য করবে টাইপ যাচাই করতে।

typescript
let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase()); // টাইপ চেক করার পর ব্যবহার করা যাবে
}
3. never টাইপ
never মানে হলো কখনোই কোনো ভ্যালু থাকবে না।

সাধারণত এমন ফাংশনের জন্য ব্যবহার হয় যা কখনো রিটার্ন করে না (যেমন: সবসময় error ছোড়ে বা অনন্ত লুপে থাকে)।

typescript
function throwError(message: string): never {
  throw new Error(message); // এই ফাংশন কখনো কোনো ভ্যালু রিটার্ন করবে না
}





