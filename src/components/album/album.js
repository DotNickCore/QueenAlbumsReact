import './card.styles.css';

const Album = ({ album }) => {
    return (
        <div className="card-container">
            <img alt="album" src={album.image} width="200px" height="200px" className="center" />
            <h1>{album.name}</h1>
            <h2>{album.releasedate}</h2>
        </div>
    )
}

export default Album
