const btn = document.getElementById('btn');
const tempurl = 'https://dummyjson.com/products/search?q=';
const inp = document.getElementById('inp');
const div = document.getElementById('container');

btn.addEventListener('click', () => {
    const url = tempurl + inp.value;

    // Clear previous results
    div.innerHTML = '';

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            for (let product of data.products) {
                console.log(product);

                const productitems = document.createElement('div');
                productitems.style.border = "1px solid #ccc";
                productitems.style.margin = "10px";
                productitems.style.padding = "10px";

                const h2 = document.createElement('h2');
                h2.innerText = product.title;

                const p = document.createElement('p');
                p.innerText = product.description;

                const img = document.createElement('img');
                img.src = product.thumbnail;
                img.style.width = "150px";

                productitems.appendChild(h2);
                productitems.appendChild(p);
                productitems.appendChild(img);

                div.appendChild(productitems); // <-- append to the container
            }
        })
        .catch(err => {
            console.error("Error fetching data:", err);
        });
});
