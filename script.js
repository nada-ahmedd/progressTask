let isLoading = false;
    document.getElementById('startBtn').addEventListener('click', () => {
    if (isLoading) return;
    isLoading = true;
      const progressBar = document.querySelector('.progress-bar');
      const progressText = document.querySelector('.progress-text');
      let progress = 0;
      const interval = setInterval(() => {
        if (progress >= 100) {
          clearInterval(interval);
          isLoading = false;
        } else {
          progress++;
          progressBar.style.width = progress + '%';
          progressText.textContent = progress + '%';
        }
      }, 100);
    });