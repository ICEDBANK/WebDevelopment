document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            const accordionBody = this.nextElementSibling;
            accordionBody.classList.toggle('show');
        });
    });
});

$('.smooth').on('click', function () {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: '#' + this.id
    });

    return false;
});

document.addEventListener("DOMContentLoaded", function () {
    // Function to truncate paragraph text to a specific length
    function truncateText(selector, maxLength) {
        var element = document.querySelector(selector);
        var text = element.innerText;
        var truncated = text.slice(0, maxLength);
        var remaining = text.slice(maxLength);

        // Truncate the text and add a button to show more
        element.innerHTML = truncated + '<span class="truncated">' + remaining +
            '</span> <button class="show-more">Show more</button>';

        // Hide the remaining text initially
        var truncatedSpan = element.querySelector('.truncated');
        if (remaining.length > 0) {
            truncatedSpan.style.display = 'none';
        }

        // Add click event listener to show more button
        element.querySelector('.show-more').addEventListener('click', function () {
            var display = truncatedSpan.style.display;
            if (display === 'none' || display === '') {
                truncatedSpan.style.display = 'inline';
                this.textContent = 'Show less';
            } else {
                truncatedSpan.style.display = 'none';
                this.textContent = 'Show more';
            }
        });
    }

    // Truncate summary paragraph to 60 characters
    truncateText('.summary-p', 60);

    // Truncate education paragraph to 60 characters
    truncateText('.education-p', 60);

    // Truncate experience paragraph to 60 characters
    truncateText('.experience-p', 60);
});