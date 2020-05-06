import React from "react";
import {Link }from "react-router-dom"
import "./style-components/cardMenu.css"
class CardMenu extends React.Component {
/* props
this.props.cardMenuTitle // Autoexplicativo

*/



    render() {
        return (
            <React.Fragment>
                <div className="card text-white Tarjeta-menu mb-3 col-2  customCardBodyMenu" >
        <h3 className="card-header">{this.props.cardMenuTitle}</h3>
                    <div className="card-body">
                        <ul>
                            <li><Link className="hover-anclas" to={"/general"}>hola</Link></li>
                            <li><Link className="hover-anclas" href="/">bba</Link></li>
                            <li><Link className="hover-anclas" href="/">como</Link></li>
                            <li><Link className="hover-anclas" href="/">tu</Link></li>

                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CardMenu