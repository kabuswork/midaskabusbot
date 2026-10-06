export default {
  async fetch(request, env) {
    const url = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: env.TELEGRAM_CHAT_ID,
        text: "🤖 Midas Kabus Bot aktif! Telegram bağlantısı başarılı."
      })
    });

    const result = await response.text();

    return new Response(result, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
