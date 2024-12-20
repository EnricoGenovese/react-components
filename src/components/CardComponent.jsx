
export default function CardComponent({ obj }) {
    return (
        <div className="card my-4" id={obj.id}>
            <img src={obj.image} className="card-img-top" alt={obj.title} />
            <div className="card-body">
                <h5 className="card-title fw-bold">{obj.title}</h5>
                <p className="card-text">{obj.content}</p>
                <a href="#" className="btn btn-warning text-uppercase">Scopri di più</a>
            </div>
        </div>
    );
}
