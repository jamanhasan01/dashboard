document.addEventListener('DOMContentLoaded', function() {
    populateBlogTable(1);
    renderPaginationControls();
});

const blogData = [
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Article', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article 1' },
    { title: 'testing - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article 2' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article 3' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article4' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article5' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article6' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article7' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article8' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article9' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article10' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article11' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article12' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article13' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article14' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article15' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article' },
    { title: 'Ed Festival - Dubai', author: 'Md. Sharifuis Shakib', categories: 'Traveling', published: '7/11/2024', id: '112025', seoDetails: 'Keywords: Traveling, Adventure<br>Scheme: Article 00' },

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
            <td>${blog.author}</td>
            <td>${blog.categories}</td>
            <td>${blog.published}</td>
            <td>${blog.id}</td>
            <td>${blog.seoDetails}</td>
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
