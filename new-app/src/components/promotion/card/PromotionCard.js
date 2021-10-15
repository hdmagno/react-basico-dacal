import "./PromotionCard.css";

export default function PromotionCard({ promotion }) {
  return (
    <div className="promotion_card">
      <img src={promotion.imageUrl} alt={promotion.title} />
      <div className="promotion_card_info">
        <h1>{promotion.title}</h1>
        <span>R$ {promotion.price}</span>
        <footer>
          <div>
            <ul>
              {promotion.comments.length > 0 ? (
                promotion.comments.map((comment, i) => (
                  <li key={i}>{comment.comment}</li>
                ))
              ) : (
                <p>Não há comentários</p>
              )}
            </ul>
          </div>
          <div>
            {promotion.comments.length}
            {promotion.comments.length > 1 ? " Comentarios" : " Comentário"}
          </div>
          <a href={promotion.url} target="_blank" rel="noreferrer">
            IR PARA O SITE
          </a>
        </footer>
      </div>
    </div>
  );
}
