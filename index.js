export default {
  async fetch(request, env) {
    const tokenCheck = await fetch(
      `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/getMe`
    );

    const telegram = await tokenCheck.text();

    return new Response(telegram, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
