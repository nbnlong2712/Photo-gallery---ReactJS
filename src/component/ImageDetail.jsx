import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchPhotoDetails } from "../api/Unsplash";

function ImageDetail() {
    const { id } = useParams();
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPhotoDetails(id).then((res) => {
            setImage(res.data);
            setLoading(false);
        }).catch((err) => {
            console.log(err)
        })
    }, [id])

    if (loading) return <p>Image loading...</p>
    if (!image) return <p>Image not found!</p>

    return (
        <div className="image-details">
            <img className="reponsive-image" src={image.urls.full} alt={image.alt_description} />
            <h2>{image.description || 'Untitled'}</h2>
            <p>By {image.user.name}</p>
            <p>{image.alt_description || 'No description available'}</p>
        </div>
    );
}

export default ImageDetail