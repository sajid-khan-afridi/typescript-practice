type vs interface in typescript

In TypeScript, both type and interface are ways to define a type. However, they have some differences that can affect how they can be used.

type is a way to create a new type by combining existing types or by creating a type alias. It is often used to provide a more descriptive or concise name for a type. For example:

type Person = {
name: string;
age: number;
};

type Address = {
street: string;
city: string;
zipCode: string;
};

type Employee = Person & Address;

const employee: Employee = {
name: 'John',
age: 30,
street: 'Main St.',
city: 'New York',
zipCode: '10001'
};
interface is a way to define a type that describes the structure of an object. It is often used to define the shape of a class or to describe the expected arguments of a function. For example:

Copy code
interface Person {
name: string;
age: number;
}

interface Address {
street: string;
city: string;
zipCode: string;
}

interface Employee extends Person, Address {
jobTitle: string;
}

class Employee implements Employee {
constructor(public name: string, public age: number, public street: string, public city: string, public zipCode: string, public jobTitle: string) {}
}

const employee = new Employee('John', 30, 'Main St.', 'New York', '10001', 'Manager');
One difference between type and interface is that type cannot be extended or implemented, while interface can be extended using the extends keyword. Another difference is that type can use the union and intersection types & and |, while interface cannot.

In general, interface is a more powerful and flexible way to define types, while type is a simpler and more concise alternative. It's up to you to decide which one to use based on your needs and preferences.
