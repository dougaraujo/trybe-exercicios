// const order = {
//     name: 'Rafael Andrade',
//     phoneNumber: '11-98763-1416',
//     address: {
//       street: 'Rua das Flores',
//       number: '389',
//       apartment: '701',
//     },
//     order: {
//       pizza: {
//         marguerita: {
//           amount: 1,
//           price: 25,
//         },
//         pepperoni: {
//           amount: 1,
//           price: 20,
//         }
//       },
//       drinks: {
//         coke: {
//           type: 'Coca-Cola Zero',
//           price: 10,
//           amount: 1,
//         }
//       },
//       delivery: {
//         deliveryPerson: 'Ana Silveira',
//         price: 5,
//       }
//     },
//     payment: {
//       total: 60,
//     },
//   };
  
//   const customerInfo = (order) => `Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, Telefone: ${order.phoneNumber}. R.${order.address.street}, Nº ${order.address.number}, AP: ${order.address.apartment}`;

//   console.log(customerInfo(order));
  
//   const orderModifier = (order) => {
//     const pizzas = Object.keys(order.order.pizza);
//     order.name = 'Luiz Silva';
//     order.payment.total = 50;
//     return `Olá ${order.name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${order.order.drinks.coke.type} é R$${order.payment.total.toFixed(2)}.`
//   }
  
//   console.log(orderModifier(order));

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKey = (obj, key, value) => {
  obj[key] = value;
}

const keysList = (obj) => Object.keys(obj);

const objSize = (obj) => Object.entries(obj).length;

const valuesList = (obj) => Object.values(obj);

addKey(lesson2, 'turno', 'noite');

const allLessons = new Object();

allLessons.lesson1 = Object.assign({}, lesson1);
allLessons.lesson2 = Object.assign({}, lesson2);
allLessons.lesson3 = Object.assign({}, lesson3);

const studentsNumber = (obj) => {
  let sum = 0;
  const keys = Object.keys(obj);
  for (let chave of keys) {
    sum += obj[chave].numeroEstudantes;
  }
  return sum;
}

const getValueByNumber = (obj, index) => {
  const keys = Object.keys(obj);
  return obj[keys[index]];
} 

const verifyExistence = (obj, key, value) => {
  const entries = Object.entries(obj);
  let output;
  for (let entrada of entries) {
    entrada[0] === key && entrada[1] === value ? output = true : output = false;
    }
  return output;
}

console.log(verifyExistence(lesson1, 'turno', 'manhã'));