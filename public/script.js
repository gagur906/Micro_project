// public/script.js
document.getElementById('fetchData').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/items');
        const items = await response.json();

        const output = document.getElementById('output');
        output.innerHTML = '';

        items.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `<p><strong>${item.name}</strong>: ${item.price}</p>`;
            output.appendChild(div);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});