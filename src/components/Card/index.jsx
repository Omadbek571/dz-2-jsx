import "./index.css"
import data from "../../assets/data.json"



function Card() {
    console.log(data);

    return (
        <>
            {data.length && data.map(function (value, index) {
                return (
                    <div className="card">
                        <img className="img" src={value.image} alt="" />
                        <div className="box1">
                            <h2>{value.firstName}</h2>
                            <h2>{value.lastName}</h2>
                        </div>
                        <div className="id">{value.id}</div>
                        <h2 className="phon">{value.phone}</h2>
                        <h2 className="email">{value.email}</h2>
                        <div className="box">
                            <div className="chek">
                                <input type="checkbox" />
                                <h2>{value.address.region}</h2>
                            </div>
                            <div className="chek">
                                <input type="checkbox" />
                                <h2>{value.address.zip}</h2>
                            </div>
                        </div>
                        {value.cars.length > 0 && <div className="box">
                            {value.cars.map((el) => <div className="chek">
                                <input type="checkbox" />
                                <h2>{el}</h2>
                            </div>)}
                        </div>}
                    </div>
                )
            })}
        </>
    )
}

export default Card;