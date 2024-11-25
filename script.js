// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Create a toggle button for dark mode
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    toggleButton.style.position = 'fixed';
    toggleButton.style.bottom = '10px';
    toggleButton.style.right = '10px';
    toggleButton.style.padding = '10px 15px';
    toggleButton.style.border = 'none';
    toggleButton.style.borderRadius = '5px';
    toggleButton.style.backgroundColor = '#333';
    toggleButton.style.color = '#fff';
    toggleButton.style.cursor = 'pointer';
    document.body.appendChild(toggleButton);

    // Toggle dark mode on button click
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Add More Blogs Logic
    const loadMoreButton = document.getElementById('loadMore');
    const blogGrid = document.getElementById('blog-grid');

    loadMoreButton.addEventListener('click', () => {
        // Mock data for additional blogs
        const newBlogs = [
            {
                img: 'meditation.jpg',
                title: 'Meditation Basics',
                description: 'Learn how to meditate and find inner peace.',
                link: '#'
            },
            {
                img: 'fitness.jpg',
                title: 'Fitness for Everyone',
                description: 'Simple exercises to keep you fit and active.',
                link: '#'
            },
            {
                img: 'sleep.jpg',
                title: 'Better Sleep Habits',
                description: 'Improve your sleep quality with these tips.',
                link: '#'
            }
        ];

        // Create new blog cards
        newBlogs.forEach(blog => {
            const bogCard = document.createElement('article');
            bogCard.classList.add('blog-card');
            bogCard.innerHTML = `
                <img src="${blog.img}" alt="${blog.title}">
                <h3>${blog.title}</h3>
                <p>${blog.description}</p>
                <a href="${blog.link}">Read More</a>
            `;
            blogGrid.appendChild(bogCard);
        });

        // Optionally hide the button after adding more blogs
        loadMoreButton.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const modal = document.getElementById('popup-modal');
    const modalTitle = document.getElementById('popup-title');
    const modalText = document.getElementById('popup-text');
    const closeModalButton = document.getElementById('close-modal');

    // Show Modal on "Read More" Button Click
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const title = button.getAttribute('data-title');
            const content = button.getAttribute('data-content');

            modalTitle.textContent = title;
            modalText.textContent = content;

            modal.style.display = 'flex'; // Show the modal
        });
    });

    // Close Modal on "Close" Button Click
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Hide the modal
    });

    // Close Modal when clicking outside of the popup
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const popupButtons = document.querySelectorAll('.popup-btn, .nav-link');
    const modal = document.getElementById('popup-modal');
    const modalTitle = document.getElementById('popup-title');
    const modalText = document.getElementById('popup-text');
    const closeModalButton = document.getElementById('close-modal');

    // Show Modal on Button/Link Click
    popupButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const title = button.getAttribute('data-title');
            const content = button.getAttribute('data-content');

            modalTitle.textContent = title;
            modalText.textContent = content;

            modal.style.display = 'flex'; // Show the modal
        });
    });

    // Close Modal on "Close" Button Click
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Hide the modal
    });

    // Close Modal when clicking outside of the popup
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const popupButtons = document.querySelectorAll('.addMore');
    const modal = document.getElementById('addNewBlog');

    // Show Modal on Button/Link Click
    popupButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            // const title = button.getAttribute('data-title');
            // const content = button.getAttribute('data-content');

            // modalTitle.textContent = title;
            // modalText.textContent = content;

            modal.style.display = 'flex'; // Show the modal
        });
    });

    value.addEventListener('click', () => {
        console.log(value)
        modal.style.display = 'none'; // Hide the modal
    });
    // Close Modal when clicking outside of the popup
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const value = document.querySelectorAll('#value'); // All buttons with ID "value"
    const dataCont = document.getElementById('data-cont'); // Input for content
    const Header = document.getElementById('Header'); // Input for header
    const imageupload = document.getElementById('imageUpload'); // File input for image
    const bogCard = document.getElementById('bog-card-1'); // Blog card container
    const read=document.getElementById('Read');

    console.log(value);
    console.log(bogCard);
    console.log(imageupload);
    console.log(Header);

    // Show Modal on Button/Link Click
    value.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(Header);

            // Retrieve content from input fields
            const x = dataCont.value; // Get the value of the content input
            const h = Header.value;  // Get the value of the header input

            const file = imageupload.files[0]; // Get the uploaded file

            // Handle image upload
            if (file) {
                const reader = new FileReader();

                // Load the file and display it as an image
                reader.onload = () => {
                    document.getElementById('imge').src=reader.result;
                    // bogCard.innerHTML = `<img src=""${reader.result} alt="Uploaded Image" />`;
                };

                reader.readAsDataURL(file); // Read the file as a Data URL (base64)
            }
            // Update the blog card with text content
            const h3Element = document.getElementById('H3');
            const pElement = document.getElementById('p');
            
            h3Element.innerHTML=h;
            pElement.innerHTML=x;
            read.dataset.title=h;
            read.dataset.content=x;
            // Show the blog card with updated content
            bogCard.style.display = 'flex';
        });
    });
    // Close Modal when clicking ou
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
