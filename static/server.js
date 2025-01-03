const express = require("express");
const bodyParser = require("body-parser");
const stripe = require("stripe")("sk_test_51QctGfQPRRiHq8ZpoMHbQRDsTrmlQkHmOoAgS9SZCXMJHhZbOyJuA472KCNc3tkstIg6EZAyncqb1oKwVcuRZFpd00IyvcqkvD");

const app = express();
app.use(bodyParser.json());

// Токенизированная карта, на которую приходят платежи
const DESTINATION_CARD = "acct_1ABCDEF1234567"; // Замените на ID вашего Stripe аккаунта

app.post("/api/payment", async (req, res) => {
  const { amount } = req.body;

  if (!amount) {
    return res.status(400).json({ error: "Сумма обязательна." });
  }

  try {
    // Создание платежа через Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Сумма в тийинах (1 сом = 100 тийинов)
      currency: "kgs", // Валюта Кыргызстана
      payment_method_types: ["card"],
      transfer_data: {
        destination: DESTINATION_CARD, // Укажите ваш аккаунт Stripe
      },
    });

    res.status(201).json({
      message: "Платеж создан.",
      paymentIntent: paymentIntent.client_secret, // Возвращаем клиентский ключ для завершения оплаты
    });
  } catch (error) {
    console.error("Ошибка создания платежа:", error);
    res.status(500).json({ error: "Ошибка сервера. Попробуйте снова позже." });
  }
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
