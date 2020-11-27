const AuthorSmallCard = (props) => {
    const {author} = props;
  return (
    <div className="author-details">
      <div className="author-image">
        <img src={author.avatar_url} alt={author.name} />
      </div>
      <div className="author-details">
        <p>{"summary"}</p>
      </div>
    </div>
  );
};

export default AuthorSmallCard;
