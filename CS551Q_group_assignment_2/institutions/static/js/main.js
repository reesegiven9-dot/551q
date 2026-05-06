document.addEventListener('DOMContentLoaded', function() {
    const compareCheckboxes = document.querySelectorAll('input[name="institution_ids"]');
    const compareForms = document.querySelectorAll('form[action*="compare"]');
    const maxSelections = 3;

    if (compareCheckboxes.length > 0) {
        compareCheckboxes.forEach(function(checkbox) {
            checkbox.addEventListener('change', function() {
                const checkedCount = document.querySelectorAll('input[name="institution_ids"]:checked').length;

                compareCheckboxes.forEach(function(box) {
                    box.disabled = checkedCount >= maxSelections && !box.checked;
                });
            });
        });
    }

    compareForms.forEach(function(compareForm) {
        compareForm.addEventListener('submit', function(event) {
            const checkedCount = compareForm.querySelectorAll('input[name="institution_ids"]:checked').length;

            if (checkedCount < 2) {
                event.preventDefault();
                alert('Please select at least 2 institutions to compare.');
            }
        });
    });
});
