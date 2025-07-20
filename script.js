        document.getElementById('category').addEventListener('change', function() {
            const selectedValue = this.value;
            if (selectedValue === 'electronics') {
                document.getElementById('electronics').scrollIntoView({ behavior: 'smooth' });
            } else if (selectedValue === 'clothing') {
                document.getElementById('clothing').scrollIntoView({ behavior: 'smooth' });
            } else if (selectedValue === 'home-apliances') {
                document.getElementById('home-apliances').scrollIntoView({ behavior: 'smooth' });
            }
        });

        function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
        }