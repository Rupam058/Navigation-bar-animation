
const navSlide = () =>
{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    // Toggle nav
    burger.addEventListener('click', () =>
    {
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((links, index) =>
        {
            // we want our animation to happen every time we hit burger
            if (links.style.animation)
                links.style.animation = ''
            else
            {
                links.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })

        // Burger Animation
        burger.classList.toggle('toggle')

    })
}

navSlide();