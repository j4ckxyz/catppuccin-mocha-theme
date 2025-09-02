// Social icons fallback handling
document.addEventListener('DOMContentLoaded', function() {
  // Check if Bluesky icon loaded properly, if not show emoji fallback
  const blueskyIcons = document.querySelectorAll('.fa-bluesky');
  blueskyIcons.forEach(function(icon) {
    const computedStyle = window.getComputedStyle(icon, '::before');
    const content = computedStyle.getPropertyValue('content');
    
    // If the icon didn't load properly (no content), show fallback
    if (!content || content === 'none' || content === '""') {
      icon.style.display = 'none';
      const fallback = icon.parentNode.querySelector('.bluesky-fallback');
      if (fallback) {
        fallback.style.display = 'inline';
      }
    }
  });
});
