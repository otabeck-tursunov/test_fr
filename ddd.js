document.getElementById('checkBalance').addEventListener('click', function() {
   
    document.getElementById('response').innerText = "Sizning hisobingiz: 0 so'm.";
});

document.getElementById('topUpAccount').addEventListener('click', function() {
    let amount = prompt("@obunachins_bot");
    if (amount) {
        document.getElementById('response').innerText = `Hizmat hali ishga tushirilmadi lekin  ${amount} lekin ushu hizmatlardan @obunachins_bot orqali foydalaning`;
    } else {
        document.getElementById('response').innerText = "@obunachins_bot";
    }
});

document.getElementById('partnership').addEventListener('click', function() {
    document.getElementById('response').innerText = "Hamkorlik uchun bizga murojaat qiling: @obunachins_bot";
});

document.getElementById('help').addEventListener('click', function() {
    document.getElementById('response').innerText = "Yordam uchun @obunachins_bot ";
});
