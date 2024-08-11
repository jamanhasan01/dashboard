document.addEventListener('DOMContentLoaded', function() {
    populateBlogTable(1);
    renderPaginationControls();
});

const blogData = [
   {title:"Gulf tour",description:"If you are looking for a famous place in UAE Gulf tour can be a best choice for you. You may make best plan with us ",categories:"Special Package ", date:"8/7/2024",price:"$1500",duration:"3 days 2 nights"},
   {title:"Gulf tour",description:"If you are looking for a famous place in UAE Gulf tour can be a best choice for you. You may make best plan with us ",categories:"Special Package ", date:"8/7/2024",price:"$1500",duration:"3 days 2 nights"},
   {title:"Gulf tour",description:"If you are looking for a famous place in UAE Gulf tour can be a best choice for you. You may make best plan with us ",categories:"Special Package ", date:"8/7/2024",price:"$1500",duration:"3 days 2 nights"},
   {title:"Gulf tour",description:"If you are looking for a famous place in UAE Gulf tour can be a best choice for you. You may make best plan with us ",categories:"Special Package ", date:"8/7/2024",price:"$1500",duration:"3 days 2 nights"},
   {title:"Gulf tour",description:"If you are looking for a famous place in UAE Gulf tour can be a best choice for you. You may make best plan with us ",categories:"Special Package ", date:"8/7/2024",price:"$1500",duration:"3 days 2 nights"},

    // ... (repeated blog data)
];

const itemsPerPage = 10;
let filteredData = blogData;

function populateBlogTable(page, data = filteredData) {
    const blogTableBody = document.getElementById('blogTableBody');
    blogTableBody.innerHTML = ''; // Clear existing rows

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedData = data.slice(startIndex, endIndex);

    paginatedData.forEach(blog => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${blog.title}</td>
            <td class"">${blog.description}</td>
            <td>${blog.categories}</td>
            <td>${blog.date}</td>
            <td>${blog.price }</td>
            <td>${blog.duration}</td>
        `;
        blogTableBody.appendChild(row);
    });
}

function renderPaginationControls(data = filteredData) {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = ''; // Clear existing pagination controls

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.classList.add('page-item');
        if (i === 1) pageItem.classList.add('active');

        const pageLink = document.createElement('a');
        pageLink.classList.add('page-link');
        pageLink.href = '#';
        pageLink.textContent = i;
        pageLink.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.pagination .active').classList.remove('active');
            pageItem.classList.add('active');
            populateBlogTable(i, data);
        });

        pageItem.appendChild(pageLink);
        paginationContainer.appendChild(pageItem);
    }
}

function searchBlogs() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    filteredData = blogData.filter(blog => blog.title.toLowerCase().includes(searchInput));
    populateBlogTable(1, filteredData);
    renderPaginationControls(filteredData);
}

function applyBulkAction() {
    const bulkAction = document.getElementById('bulkAction').value;
    console.log(`Applying bulk action: ${bulkAction}`);
    // Implement bulk action functionality here
}

function filterBlogs() {
    const categories = document.getElementById('categories').value;
    const subCategories = document.getElementById('subCategories').value;
    console.log(`Filtering blogs by categories: ${categories} and subcategories: ${subCategories}`);
    // Implement filter functionality here
}
  