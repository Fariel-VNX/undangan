document.addEventListener('DOMContentLoaded', function() {
    // WhatsApp RSVP
    const whatsappButton = document.getElementById('whatsappButton');
    const rsvpForm = document.getElementById('rsvpForm');
    
    whatsappButton.addEventListener('click', function() {
        const name = document.getElementById('name').value;
        const attendance = document.getElementById('attendance').value;
        const message = document.getElementById('message').value;
        
        if (!name || !attendance) {
            alert('Harap isi nama dan konfirmasi kehadiran');
            return;
        }
        
        // Format pesan WhatsApp
        const whatsappMessage = `Halo, saya ${name} ingin mengkonfirmasi kehadiran untuk acara pernikahan Fahmi & Farin:\n\n` +
                               `Konfirmasi: ${attendance}\n` +
                               `Pesan: ${message || '-'}\n\n` +
                               `Terima kasih`;
        
        // Encode untuk URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Nomor WhatsApp tujuan (ganti dengan nomor Anda)
        const phoneNumber = '6285746556749';
        
        // Buka link WhatsApp
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    });
    
    // Animasi scroll halus untuk semua link
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Efek parallax sederhana
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const container = document.querySelector('.container');
        
        container.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    
    // Set volume (30% untuk background music)
    music.volume = 0.3;
    
    // Fungsi untuk memulai musik
    function startMusic() {
        // Coba memutar musik
        const playPromise = music.play();
        
        // Tangani jika autoplay diblokir
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                // Tampilkan pesan atau kontrol khusus
                musicBtn.style.display = 'flex';
                musicBtn.title = "Klik untuk memutar musik";
            });
        }
    }
    
    // Mulai musik setelah interaksi pertama
    function handleFirstInteraction() {
        startMusic();
        document.body.removeEventListener('click', handleFirstInteraction);
        document.body.removeEventListener('keydown', handleFirstInteraction);
        document.body.removeEventListener('touchstart', handleFirstInteraction);
    }
    
    // Tambahkan event listeners untuk interaksi pertama
    document.body.addEventListener('click', handleFirstInteraction);
    document.body.addEventListener('keydown', handleFirstInteraction);
    document.body.addEventListener('touchstart', handleFirstInteraction);
    
    // Kontrol tombol musik
    musicBtn.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            musicBtn.innerHTML = '<i class="music-icon"></i>';
        } else {
            music.pause();
            musicBtn.innerHTML = '<i class="music-icon" style="opacity:0.5"></i>';
        }
    });
    
    // Sembunyikan tombol jika musik berhasil autoplay
    music.onplaying = function() {
        musicBtn.style.display = 'none';
    };
});