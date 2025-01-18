
document.addEventListener('DOMContentLoaded', () => {
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
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
    const loadMoreButton = document.getElementById('loadMore');
    const blogGrid = document.getElementById('blog-grid');

    loadMoreButton.addEventListener('click', () => {
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
        loadMoreButton.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const modal = document.getElementById('popup-modal');
    const modalTitle = document.getElementById('popup-title');
    const modalText = document.getElementById('popup-text');
    const closeModalButton = document.getElementById('close-modal');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const title = button.getAttribute('data-title');
            const content = button.getAttribute('data-content');

            modalTitle.textContent = title;
            modalText.textContent = content;

            modal.style.display = 'flex'; // Show the modal
        });
    });
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Hide the modal
    });
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
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Hide the modal
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const popupButtons = document.querySelectorAll('.addMore');
    const modal = document.getElementById('addNewBlog');

    popupButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            modal.style.display = 'flex';
        });
    });

    value.addEventListener('click', () => {
        console.log(value)
        modal.style.display = 'none';
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const value = document.querySelectorAll('#value'); 
    const dataCont = document.getElementById('data-cont'); 
    const Header = document.getElementById('Header'); 
    const imageupload = document.getElementById('imageUpload'); 
    const bogCard = document.getElementById('bog-card-1'); 
    const read=document.getElementById('Read');

    console.log(value);
    console.log(bogCard);
    console.log(imageupload);
    console.log(Header);

 
    value.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(Header);

           
            const x = dataCont.value;
            const h = Header.value;  
            const file = imageupload.files[0]; 

            // Handle image upload
            if (file) {
                const reader = new FileReader();

                reader.onload = () => {
                    document.getElementById('imge').src=reader.result;
                
                };

                reader.readAsDataURL(file);
            }
           
            const h3Element = document.getElementById('H3');
            const pElement = document.getElementById('p');
            
            h3Element.innerHTML=h;
            pElement.innerHTML=x;
            read.dataset.title=h;
            read.dataset.content=x;
      
            bogCard.style.display = 'flex';
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
