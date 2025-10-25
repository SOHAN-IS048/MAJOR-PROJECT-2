document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question button');
    faqQuestions.forEach(button => {
        button.addEventListener('click', () => {
            const parent = button.parentElement;
            // Close other open FAQs
            document.querySelectorAll('.faq-question.active').forEach(openFaq => {
                if (openFaq !== parent) {
                    openFaq.classList.remove('active');
                }
            });
            // Toggle current FAQ
            parent.classList.toggle('active');
        });
    });

    // Scroll to top button
    const toTopButton = document.getElementById('to-top-button');
    if (toTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                toTopButton.classList.remove('hidden');
            } else {
                toTopButton.classList.add('hidden');
            }
        });

        toTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
