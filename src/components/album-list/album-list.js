import Album from "../album/album"
import './card-list.styles.css';

const AlbumList = ({albums}) => {
    return (
        <div className="card-list">
            {albums.map((album) => (
                <Album key={album.id} album={album}/>
            ))}
        </div>
    )
}

export default AlbumList
