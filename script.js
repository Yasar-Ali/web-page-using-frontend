document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const leftMenu = document.getElementById('leftMenu');
    const mainContent = document.getElementById('mainContent');
    const menuIcon = document.getElementById('menuIcon');
    const toggleText = document.querySelector('.toggle-text');
    
    // Function to toggle menu
    function toggleMenu() {
        leftMenu.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
        menuToggle.classList.toggle('collapsed');
        
        // Update icon and text
        if (leftMenu.classList.contains('collapsed')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-chevron-right');
            toggleText.textContent = 'Expand Menu';
        } else {
            menuIcon.classList.remove('fa-chevron-right');
            menuIcon.classList.add('fa-bars');
            toggleText.textContent = 'Collapse Menu';
        }
    }
    
    // Toggle menu on button click
    menuToggle.addEventListener('click', toggleMenu);

    // Function to handle responsive scaling
    function handleResponsiveScaling() {
        const width = window.innerWidth;
        const container = document.querySelector('.container');
        
        // Reset transform
        container.style.transform = 'none';
        
        // Apply scaling based on screen width
        if (width >= 992 && width <= 1600) {
            container.style.transform = 'scale(0.9)';
        } else if (width >= 700 && width <= 767) {
            container.style.transform = 'scale(0.8)';
        } else if (width >= 600 && width <= 700) {
            container.style.transform = 'scale(0.75)';
        } else if (width <= 600) {
            container.style.transform = 'scale(0.5)';
        }
    }

    // Initial call
    handleResponsiveScaling();

    // Add event listener for window resize
    window.addEventListener('resize', handleResponsiveScaling);
});