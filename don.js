document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;
    
        console.log('Name:', name);
    console.log('Email:', email);
    console.log('Amount:', amount);
    
    alert('Thank you for your donation, ' + name + '!');
});
