document.getElementById('checkBalance').addEventListener('click', function() {
   
    document.getElementById('response').innerText = "Hizmat hali ishga tushirilmadi lekin  ${amount} lekin ushu hizmatlardan @obunachins_bot orqali foydalaning";
});

document.getElementById('topUpAccount').addEventListener('click', function() {
    let amount = prompt("Hizmat hali ishga tushirilmadi lekin  ${amount} lekin ushu hizmatlardan @obunachins_bot orqali foydalaning");
    if (amount) {
        document.getElementById('response').innerText = `Sizning hisobingiz ${amount} so'mga toʻldirildi.`;
    } else {
        document.getElementById('response').innerText = "Hizmat hali ishga tushirilmadi lekin  ${amount} lekin ushu hizmatlardan @obunachins_bot orqali foydalaning";
    }
});

document.getElementById('partnership').addEventListener('click', function() {
    document.getElementById('response').innerText = "Hizmat hali ishga tushirilmadi lekin  ${amount} lekin ushu hizmatlardan @obunachins_bot orqali foydalaning";
});

document.getElementById('help').addEventListener('click', function() {
    document.getElementById('response').innerText = "Hizmat hali ishga tushirilmadi lekin  ${amount} lekin ushu hizmatlardan @obunachins_bot orqali foydalaning";
});
