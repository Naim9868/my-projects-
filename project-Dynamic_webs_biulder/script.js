//when upload a video that will show like youtube playlist..
const videoData = [
    {
        title: "How to Build a Responsive Website from Scratch",
        channel: "Web Dev Simplified",
        views: 1200000,
        timeAgo: "2024-01-10",
        duration: "12:34",
        thumbnail: "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg",
        channelIcon: "https://yt3.ggpht.com/ytc/AIdro_kX3sdbuu3KFmRPsmlu0R5Rx_BhpxwupjtvJmkEdNfla7w=s88-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "Learn JavaScript in 1 Hour - Crash Course",
        channel: "Programming with Mosh",
        views: 5700000,
        timeAgo: "2025-01-13",
        duration: "1:05:22",
        thumbnail: "https://i.ytimg.com/vi/CO_DAXswOrc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAbDeaG5nlgOfmj0aGOejvuL6680Q",
        channelIcon: "https://yt3.ggpht.com/ytc/AIdro_kX3sdbuu3KFmRPsmlu0R5Rx_BhpxwupjtvJmkEdNfla7w=s88-c-k-c0x00ffffff-no-rj"
    },
    {
        title: "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73",
        channel: "CodeWithHarry",
        views: 890000,
        timeAgo: "Mon Apr 14 2025 19:54:52 GMT+0600 (Bangladesh Standard Time),",//here need to capture the upload time
        duration: "28:15",
        thumbnail: "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg",
        channelIcon: "https://yt3.ggpht.com/ytc/AIdro_kX3sdbuu3KFmRPsmlu0R5Rx_BhpxwupjtvJmkEdNfla7w=s88-c-k-c0x00ffffff-no-rj"
    }
];

// Function to create a single card
function createCard(video) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <div class="thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}">
            <span class="duration">${video.duration}</span>
        </div>
        <div class="card-content">
            <div class="channel-icon">
                <img src="${video.channelIcon}" alt="">
            </div>
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <p class="channel-name">${video.channel}</p>
                <p class="video-stats">${formatVideoViews(video.views)} • ${formatTimeDuration(video.timeAgo)}</p>
            </div>
        </div>
    `;
    
    return card;
}

// Function to render all cards
function renderCards() {
    const container = document.getElementById('cardsContainer');
    
    videoData.forEach(video => {
        const card = createCard(video);
        container.appendChild(card);
    });
}
//formating views.....
function formatVideoViews(views){
    if(views>=1000 && views<1000000){
        views = (views/1000).toFixed(1) + "K" + " views";
    }else if(views>=1000000){
        views = (views/1000000).toFixed(1) + "M" + " views";
    }else{
        views = views + " views";
    }
    return views;
}
// formating Times....
function formatTimeDuration(uploadDate){
    const now = new Date();
    const uploadTime = new Date(uploadDate).getTime();
    // difference between upload time to current time(ms)..
    const timeDiff = now.getTime() - uploadTime;
    
    //now calculate day, week, month, year..
    const Hours = Math.floor(timeDiff/(1000*60*60));
    const Days = Math.floor(Hours/24);
    const Weeks = Math.floor(Days/7);
    const Months = Math.floor(Days/30);
    const years = Math.floor(Days/365);

    if(Hours<24 && Hours>=1){
        return `${Hours}h ago`
    }else if(Days>=1 && Days<7){
        return `${Days} days ago`
    }else if(Weeks>=1 && Weeks<4){
        return `${Weeks} weeks ago`
    }else if(Months>=1 && Months<12){
        return `${Months} months ago`
    }else if(years>=1){
        return `${years} years ago`
    }else{
        return `${Math.floor(timeDiff/1000)}s ago`
    }

}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', renderCards);