import { useEffect, useState } from "react"
import { fetchPhotos } from "../api/Unsplash";
import { Link } from "react-router-dom";

function ImageGrid() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetchImages();
    }, [page]);

    async function fetchImages() {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000)); //delay 1s
        fetchPhotos(page).then((response) => {
            if (response.data.length === 0) setHasMore(false);
            setImages((prev) => [...prev, ...response.data]);
            setLoading(false);
        });
    }

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) return;
        setPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [loading])

    return (
        <>
            <div className="image-grid">
                {images.map((image) => {
                    return (<div key={image.id} className="image-item">
                        <Link to={`/${image.id}`}>
                            <img src={image.urls.small} alt={image.alt_description} />
                            <p>{image.user.name}</p>
                        </Link>
                    </div>);
                })}
            </div>
            {loading && (
                <>
                    <p style={{ fontWeight: "bold", fontSize: 20 }}>Loading more image...</p>
                    <div className="loading-spinner"></div>
                </>
            )}
            {!hasMore && <p style={{ fontWeight: "bold", fontSize: 20 }}>No more image to load</p>}
        </>
    );
}

export default ImageGrid