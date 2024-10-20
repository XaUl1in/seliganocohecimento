document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const jobListings = document.querySelector('.job-listings');

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const jobSearch = document.getElementById('job-search').value;
        const locationSearch = document.getElementById('location-search').value;

        // Aqui você faria uma chamada para sua API de backend
        // Por enquanto, vamos apenas simular alguns resultados
        const mockResults = [
            { title: 'Desenvolvedor Web', company: 'Tech Co', location: 'São Paulo' },
            { title: 'Designer UX', company: 'Creative Inc', location: 'Rio de Janeiro' },
            { title: 'Gerente de Projetos', company: 'Management Ltd', location: 'Belo Horizonte' },
        ];

        displayResults(mockResults);
    });

    function displayResults(results) {
        jobListings.innerHTML = '';
        results.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.classList.add('job-item');
            jobElement.innerHTML = `
                <h2>${job.title}</h2>
                <p>${job.company} - ${job.location}</p>
            `;
            jobListings.appendChild(jobElement);
        });
    }