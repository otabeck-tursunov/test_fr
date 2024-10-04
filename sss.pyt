import telebot
from telebot.types import ReplyKeyboardMarkup, KeyboardButton

# Telegram bot tokeningizni kiriting
bot = telebot.TeleBot('YOUR_BOT_TOKEN')

# Start komandasi bo'yicha tugmalarni yaratish
@bot.message_handler(commands=['start'])
def send_welcome(message):
    markup = ReplyKeyboardMarkup(resize_keyboard=True)
    btn1 = KeyboardButton('Hisobni tekshirish')
    btn2 = KeyboardButton('Hisobni toʻldirish')
    btn3 = KeyboardButton('Hamkorlik')
    btn4 = KeyboardButton('Yordam')
    
    markup.add(btn1, btn2)
    markup.add(btn3, btn4)
    
    bot.send_message(message.chat.id, "Xush kelibsiz! Tanlang:", reply_markup=markup)

# Hisobni tekshirish
@bot.message_handler(func=lambda message: message.text == 'Hisobni tekshirish')
def check_balance(message):
    # Hisobni tekshirish kodini yozish kerak
    balance = 10000  # Misol uchun, hisob balansi
    bot.send_message(message.chat.id, f"Sizning hisobingiz: {balance} so'm.")

# Hisobni toʻldirish
@bot.message_handler(func=lambda message: message.text == 'Hisobni toʻldirish')
def top_up_account(message):
    bot.send_message(message.chat.id, "Hisobingizni to'ldirish uchun summani kiriting.")

# Hamkorlik
@bot.message_handler(func=lambda message: message.text == 'Hamkorlik')
def partnership(message):
    bot.send_message(message.chat
