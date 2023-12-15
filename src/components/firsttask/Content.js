import React from 'react'

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            background3Color: '',
            color3: '',
            background4Color: '',
            color4: '',
        };
    }

    changeBackground = (elid) => {
        if(elid==="element3"){
            this.setState({
                background3Color: this.state.background3Color === "black" ? "white" : "black",
            });
        } else {
            this.setState({
                background4Color: this.state.background4Color === "black" ? "white" : "black",
            });
        }
    };
    changeColor = (elid) => {
        if(elid==="element3") {
            this.setState({
                color3: this.state.background3Color === "black" ? "black" : "white",
            });
        } else {
            this.setState({
                color4: this.state.background4Color === "black" ? "black" : "white",
            });
        }
    };

    render() {
        return (
            <main className="main-content">
                <div className="main-info">
                    <p>Дата і місце народження: 05.02.2003, м. Дніпро</p>
                    <p id="element3" style={{backgroundColor: this.state.background3Color, color: this.state.color3 }}
                                    onClick={() => {this.changeBackground("element3");
                                        this.changeColor("element3");}}>
                        Освіта: Криворізький Покровський Ліцей; НТУУ "КПІ"</p>
                </div>

                <div className="hobby">
                    <p id="element4" style={{ backgroundColor: this.state.background4Color, color: this.state.color4 }}
                                  onClick={() => {this.changeBackground("element4");
                                      this.changeColor("element4");}}>
                        Хобі</p>
                    <ul>
                        <li>Комп'ютерні ігри</li>
                        <li>Велосипед</li>
                        <li>Картографія</li>
                    </ul>
                </div>

                <div className="fav-films">
                    <p>Улюблені ігри</p>
                    <ol>
                        <li>Cyberpunk 2077</li>
                        <li>Devil May Cry 3, 5</li>
                        <li>Celeste</li>
                    </ol>
                </div>

                <div className="city">
                    <p>Львів — місто в Україні, адміністративний центр області, агломерації, району, міської громади,
                        національно-культурний та освітньо-науковий осередок країни, великий промисловий центр і
                        транспортний вузол,
                        вважається столицею Галичини та центром Західної України. За кількістю населення —
                        п'яте місто країни (717 273 станом на 01.01.2022)
                        </p>
                </div>
            </main>
    )
    }
    }
    export default Content