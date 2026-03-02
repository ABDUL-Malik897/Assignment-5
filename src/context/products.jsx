import useFetch from "../components/Fetch";

function Products() {
    const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
    );

    if (loading) return <h2 className="status">Loading...</h2>;
    if (error) return <h2 className="status">Error: {error}</h2>;

    return (
    <>
    <h1 className="title">Photo</h1>
    <div className="container">
        {/* <h2>Products</h2> */}

        {data.map((item) => (
        <div key={item.id} className="card">
            <img src={item.images[0]} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
        </div>
        ))}
    </div>
    </>
    );
}

export default Products;