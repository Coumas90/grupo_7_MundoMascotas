const products = [
  { name: "Alimento para perro (5kg)", price: 100, image: "https://puppis.vteximg.com.br/arquivos/ids/167601-1000-1000/150042.jpg?v=637021774562500000", q: 1 },
];

const tableBody = document.querySelector(".cart");

let tableContent = products.reduce((body, product, index) => {
    let total = product.price * product.q
  return (
    body +
    `
            <tr>
    <td>
      <img
        src="${product.image}"
        alt="${product.name}"
        height="50"
        width="50"
      />
    </td>
    <td>
      <p>${product.name}</p>
    </td>
    <td>
      <p>${product.price}</p>
    </td>
    <td class="quantity"><button>-</button><p>${product.q}</p><button>+</button></td>
    <td><p>${total}</p></td>
  </tr> `
  );
}, "");


tableBody.innerHTML = tableContent