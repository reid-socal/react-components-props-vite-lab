function getReadTime(minutes) {
  if (minutes === undefined || minutes === null) return "";

  // Under 30 minutes: one coffee cup per 5 minutes (rounded up)
  // 30 minutes or more: one bento box per 10 minutes (rounded up)
  const emoji = minutes < 30 ? "☕️" : "🍱";
  const unit = minutes < 30 ? 5 : 10;

  return `${emoji.repeat(Math.ceil(minutes / unit))} ${minutes} min read`;
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const readTime = getReadTime(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date}
        {readTime && ` • ${readTime}`}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;