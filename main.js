
console.log(customers);

let body = document.querySelector('body');

let container = document.createElement('main');
let list = document.createElement('ul');

body.appendChild(container);
container.appendChild(list);
for (var i = 0; i < customers.results.length; i++) {
  let currentPerson =  customers.results[i];

    let listItems = document.createElement('li');
    let img = document.createElement('img');
    let name = document.createElement('h1');
    let email = document.createElement('h2');
    let  address1= document.createElement('p');
    let address2 = document.createElement('p');
    let phone = document.createElement('p');
    let social = document.createElement('p')

  img.src = currentPerson.picture.large;
  name.textContent= currentPerson.name.first + ' ' + currentPerson.name.last;
  email.textContent = currentPerson.email;
  address1.textContent = currentPerson.location.street;
  address2.textContent = currentPerson.location.city + ' ' + currentPerson.location.state + ' ' + currentPerson.location.postcode;




    list.appendChild(listItems);

    listItems.appendChild(img);
    listItems.appendChild(name);
    listItems.appendChild(email);
    listItems.appendChild(address1);
    listItems.appendChild(address2);
    listItems.appendChild(phone);
    listItems.appendChild(social);

  }








// let eventSelection = document.querySelector('#events');
// console.log(events);
//
// fetch('https://randomuser.me/')
//   .then(function(response){
//     return response.json();
// })
//   .then(function(data){
//       let html = '';
//       console.log(data);
//
//       for (var i = 0; i < data.results.length; i++) {
//       let event = data[i];
//
//
//       }
//       html +=`
//         <div>
//         <h2>${event.name}</h2>
//         <p>${event.gender}</p>
//           <p>${event.location}</p>
//             <p>${event.email}</p>
//               <p>${event.gende}</p>
//
//         </div>
//       `;
//       console.log();
//       }
//       eventsSection.innerHTML = html;
//   });
