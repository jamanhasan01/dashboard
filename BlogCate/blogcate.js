
document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const categoryList = document.getElementById('category-list');
    const selectAll = document.getElementById('select-all');

    addBtn.addEventListener('click', () => {
        const newTitle = document.getElementById('new-title').value;
        const description = document.getElementById('description').value;

        if (newTitle.trim() !== '') {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><input type="checkbox"></td>
                <td>${newTitle}</td>
                <td>${description}</td>
                <td>${newTitle.replace(/\s+/g, '-').toLowerCase()}</td>
                <td>1</td>
            `;
            categoryList.appendChild(tr);

            document.getElementById('new-title').value = '';
            document.getElementById('description').value = '';
        }
    });

    selectAll.addEventListener('change', (event) => {
        const checkboxes = categoryList.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = event.target.checked;
        });
    });
});
