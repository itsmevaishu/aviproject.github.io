document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('incident-form');
    const addRowBtn = document.getElementById('add-row-btn');
    const dynamicInputs = document.getElementById('dynamic-inputs');

    let rowCounter = 1;

    addRowBtn.addEventListener('click', function() {
        if (rowCounter >= 5) {
            alert('You can only add up to 5 rows.');
            return;
        }

        const newRow = document.createElement('div');
        newRow.classList.add('row');

        newRow.innerHTML = `
            <label for="full-name">Full Name:</label>
            <input type="text" class="full-name" name="full-name[]" required>
            <label for="class">Class:</label>
            <input type="text" class="class" name="class[]" required>
            <label for="involvement">Involvement:</label>
            <select class="involvement" name="involvement[]" required>
                <option value="">Select</option>
                <option value="casualty">Casualty</option>
                <option value="witness">Witness</option>
            </select>
            <button type="button" class="delete-row-btn">Delete</button>
        `;

        dynamicInputs.appendChild(newRow);
        rowCounter++;
    });

    dynamicInputs.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-row-btn')) {
            const row = event.target.closest('.row');
            dynamicInputs.removeChild(row);
            rowCounter--;
        }
    });
});
