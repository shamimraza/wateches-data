
const Watch = ({ watch }) => {
    console.log(watch);
    const { name, price } = watch;
    return (
        <div>
            <h3>{name}</h3>
            <p>price: {price}</p>
        </div>
    );
};

export default Watch;