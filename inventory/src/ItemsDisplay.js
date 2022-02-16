function ItemsDisplay({items, deleteItem}) {
    const showItem = (item) => {
        return (
            <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{"$"+Math.abs(item.price).toFixed(2)}</td>
                <td>{item.type}</td>
                <td>{item.brand}</td>
                <td><button className="btn btn-outline-danger btn-sm" onClick={() => {deleteItem(item)}}>Delete</button></td>
            </tr>
        );
    };

    return (
        <div className="container">
            <div className="row">
                <h2>Items</h2>
            </div>
            <div className="row">
                <table className="table table-striped table-dark table-hover table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Type</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>{items.map(showItem)}</tbody>
                </table>
            </div>
        </div> 
    );
}

export default ItemsDisplay;