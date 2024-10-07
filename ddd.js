document.getElementById('checkBalance').addEventListener('click', function() {
   
    document.getElementById('response').innerText = "Sizning hisobingiz: 0 so'm.";
});

document.getElementById('topUpAccount').addEventListener('click', function() {
    let amount = prompt("Hisobni qancha toʻldirmoqchisiz? (so'mda)");
    if (amount) {
        document.getElementById('response').innerText = `Sizning hisobingiz ${amount} so'mga toʻldirildi.`;
    } else {
        document.getElementById('response').innerText = "Hisobni toʻldirish bekor qilindi.";
    }
});

document.getElementById('partnership').addEventListener('click', function() {
    document.getElementById('response').innerText = "Hamkorlik uchun bizga murojaat qiling: ";
});

document.getElementById('help').addEventListener('click', function() {
    document.getElementById('response').innerText = "Yordam uchun FAQ bo'limiga o'ting yoki biz bilan bog'laning.";
});
