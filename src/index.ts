interface Human {
    name: string;
    age: number;
    gender: string;
}

const person = {
    name: "sss",
    age: 33,
    gender: "Male"
}

const sayHi = (person: Human): void =>
    console.log(`Hello, ${person.name}. You are ${person.age} age and you are a ${person.gender}!!!`);

sayHi(person)

export {};