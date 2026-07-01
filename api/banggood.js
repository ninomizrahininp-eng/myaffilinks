export default async function handler(req, res) {
  const cookie = process.env.BANGGOOD_COOKIE;

  const url =
    "https://fr.banggood.com/index.php?com=point&t=commissionStatPage&is_ajax=1&startTime=2026-06-24&endTime=2026-06-30&pageNum=10&currPage=1";

  const response = await fetch(url, {
    headers: {
      cookie: cookie,
      "x-requested-with": "XMLHttpRequest",
      accept: "application/json, text/javascript, */*; q=0.01",
      referer:
        "https://fr.banggood.com/index.php?com=point&t=commissionStatPage",
      "user-agent": "Mozilla/5.0"
    }
  });

  const data = await response.text();

  res.status(200).send(data);
}

