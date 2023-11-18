interface Person<T, U> {
  name: T;
  salary: U;
}

let person: Person<string, number> = {name: '10k', salary: 1000};

let roudro: Person<string, string> = {name: 'Roudro', salary: '2000'};
console.log(person, roudro);
