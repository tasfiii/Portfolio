function switchTab(tabId, event) 
{
    document.querySelectorAll('.content-section, .tab-btn').forEach(el => el.classList.remove('active'));
    // keep unclicked buttons inactive

    document.getElementById(tabId).classList.add('active');
    //activates clicked button

    event.currentTarget.classList.add('active');
    //highlights clicked button
}


