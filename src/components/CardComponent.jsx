
export default function CardComponent({ posts }) {
    // console.log(posts);
    return (
        posts.map((post) => {
            return <div className="card" key={post.id}>
                <img src={post.image} className="card-img-top" alt={post.title} />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                    <a href="#" className="btn btn-warning text-uppercase">Scopri di più</a>
                </div>
            </div>
        })
    );
}
