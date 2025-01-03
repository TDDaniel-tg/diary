document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#scores-table tbody');

    const data = [
        { subject: 'Биология', scores: '23/25', average: '70.4%', total: 87.5, correction: 'Yes', notes: '' },
        { subject: 'Математика', scores: '85%', average: '76.4%', total: 90.0, correction: 'No', notes: '' },
        { subject: 'Английский', scores: '95%', average: '74.9%', total: 96.0, correction: 'No', notes: '' },
        { subject: 'Физика', scores: '88%', average: '84.8%', total: 88.67, correction: 'Yes', notes: '' },
        { subject: 'Биология', scores: '23/25', average: '70.4%', total: 87.5, correction: 'Yes', notes: '' },
        { subject: 'Математика', scores: '85%', average: '76.4%', total: 90.0, correction: 'No', notes: '' },
        { subject: 'Английский', scores: '95%', average: '74.9%', total: 96.0, correction: 'No', notes: '' },
        { subject: 'Физика', scores: '88%', average: '84.8%', total: 88.67, correction: 'Yes', notes: '' },
        
    ];

    function renderTableRows(data) {
        tableBody.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.subject}</td>
                <td>${item.scores}</td>
                <td>${item.average}</td>
                <td>${item.total}</td>
                <td>${item.correction}</td>
                <td>${item.notes}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    renderTableRows(data);
});
