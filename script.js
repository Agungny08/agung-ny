    document.addEventListener('DOMContentLoaded', function() {
      const cards = document.querySelectorAll('.card');

      // Add subtle hover effect to cards
      cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
          const rect = this.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          // Calculate rotation based on cursor position
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 20;
          const rotateY = (centerX - x) / 20;

          // Apply subtle transform
          this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', function() {
          // Reset transform on mouse leave
          this.style.transform = '';
        });
      });

      // Ghost jump scare effect
      function showGhost() {
        const ghost = document.getElementById('ghost');
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;

        ghost.style.left = `${randomX}px`;
        ghost.style.top = `${randomY}px`;
        ghost.style.opacity = 1;

        setTimeout(() => {
          ghost.style.opacity = 0;
        }, 1000);
      }

      // Show ghost every 5 seconds
      setInterval(showGhost, 5000);
    });
