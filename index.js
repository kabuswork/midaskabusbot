export default {
  async fetch(request, env) {
    const token = env.TELEGRAM_BOT_TOKEN;

    if (!token) {
      return new Response("TELEGRAM_BOT_TOKEN bulunamadı");
    }

    return new Response(
      JSON.stringify({
        token_var: true,
        token_length: token.length,
        token_start: token.slice(0, 5),
        token_end: token.slice(-5)
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
