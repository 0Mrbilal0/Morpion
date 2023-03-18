import React, { Component } from "react";

class GameTableBoard extends Component {
    handleRazButtonClick(e) {
        console.log("Fonction de réinitialisation du plateau appelée...");
        this.props.razBoardOnClick(e);
    }

    handleRazScoresButtonClick(e) {
        console.log("Fonction de réinitialisation de scores appelée...");
        this.props.razScoresOnClick(e);
    }

    cancelLastMove(e) {
        console.log("Annulation du dernier coup...");
    }

    render() {
        return(
            <div className="operationsManagment">
                <h2>Menu</h2>
                <tbody id="operationsManagment">
                    <tr>
                        <td>
                            <input
                            type={"button"} 
                            onClick={this.handleRazButtonClick.bind(this)}
                            value="Réinitialiser le plateau."
                            />

                            <input
                            type={"button"} 
                            onClick={this.handleRazScoresButtonClick.bind(this)}
                            value="Réinitialiser le plateau."
                            />

                            <input
                            type={"button"} 
                            onClick={this.cancelLastMove.bind(this)}
                            value="Enlevé le dernier coup."
                            />
                        </td>
                    </tr>
                </tbody>
            </div>
        )
    }
}

export default GameTableBoard;