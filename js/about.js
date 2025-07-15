// Timeline animation
const timelineItems = document.querySelectorAll('.timeline-item');

const animateTimeline = () => {
    timelineItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (itemPosition < screenPosition) {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }
    });
};

// Set initial state for timeline items
timelineItems.forEach(item => {
    if (item.classList.contains('odd')) {
        item.style.transform = 'translateX(-50px)';
    } else {
        item.style.transform = 'translateX(50px)';
    }
    item.style.opacity = '0';
    item.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', animateTimeline);
window.addEventListener('load', animateTimeline);

// Team member animation
const teamMembers = document.querySelectorAll('.team-member');

const animateTeam = () => {
    teamMembers.forEach(member => {
        const memberPosition = member.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (memberPosition < screenPosition) {
            member.style.opacity = '1';
            member.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for team members
teamMembers.forEach(member => {
    member.style.opacity = '0';
    member.style.transform = 'translateY(50px)';
    member.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', animateTeam);
window.addEventListener('load', animateTeam);