document.getElementById('volunteer').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    
        console.log('name', name);
    
    alert('Thank you for your donation, ' + name + '!');
});
