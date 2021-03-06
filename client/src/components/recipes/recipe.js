import React, { Component } from 'react'
import axios from 'axios'
import header from '../home/demoImg.jpg'
import './recipe.css'

/**
 * Each Recipe holds a chosen recipe, displaying it
 * When the recipe is displayed, the nutrition is fetched
 * from the ingredients array, all which are fetched from the
 * database.
 */
export default class EachRecipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipe_title: '',
            recipe_ingredients: [],
            recipe_howTo: '',
            recipe_cat: ''
        }
    }

    componentDidMount() {
        axios.get('/recept/'+this.props.match.params.id)
        .then(res => {
            console.log(res)
            this.setState({ 
                recipe_title: res.data.recipe_title,
                recipe_ingredients: res.data.recipe_ingredients,
                recipe_howTo: res.data.recipe_howTo,
                recipe_cat: res.data.recipe_cat
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="content">
            <div className="recipe-div">
              <h3 className="recipe-title">{this.state.recipe_title}</h3>
              <br/>
              <img className="recipe-img" alt="tillfällig bild" src={header} width="600" height="400"/>
              <div className="rec-row">
              <div className="row-ingr">
              <h4 className="recipe-ingr">Ingredienser</h4>
              <p className="rec-ingr"> {this.state.recipe_ingredients.map((item) => 
                  <ul className="rec-ingr" key={item.id} >{item.label}
                  <li className="rec-ingr">{item.amount}</li>
                  </ul>
              )}
              </p>
              </div>
              <div className="row-how">
              <h4 className="recipe-how">Tillvägagångssätt</h4>
              <p className="recipe-howto">
              {this.state.recipe_howTo}
              </p>
              </div>
              </div>
              <br/>
              <hr />
              <label><p className="nutr-label">Näringsvärde per ingrediens á 100 gram:</p>
              <table className="nutr-table">
              <tr>
              <th>Ingrediens</th>
              <th>Kolhydrater (g)</th>
              <th>Fett (g)</th>
              <th>Protein (g)</th>
              <th>Fiber totalt (g)</th>
              <th>Sockerarter (g)</th>
              <th>Mättat fett (g)</th>
              <th>Kolesterol (mg)</th>
              <th>Vitamin A (µg)</th>
              <th>Betakaroten (µg)</th>
              <th>Vitamin D (µg)</th>
              <th>Vitamin E (mg)</th>
              <th>Vitamin K (µg)</th>
              <th>Tiamin (mg)</th>
              <th>Vitamin B2 (mg)</th>
              <th>Vitamin C (mg)</th>
              <th>Niacin (mg)</th>
              <th>Vitamin B6 (mg)</th>
              <th>Vitamin B12 (µg)</th>
              <th>Folat (µg)</th>
              <th>Fosfor (mg)</th>
              <th>Jod (µg)</th>
              <th>Järn (mg)</th>
              <th>Kalcium (mg)</th>
              <th>Kalium (mg)</th>
              <th>Magnesium (mg)</th>
              <th>Natrium (mg)</th>
              <th>Salt (g)</th>
              <th>Selen (µg)</th>
              <th>Zink (mg)</th>
              </tr>
              <td></td>
              {this.state.recipe_ingredients.map((item, index) => {
                  return (
                      <tr key={index}>
                      <td>{item.label}</td>
                      <td>{item.carbs}</td>
                      <td>{item.Fett}</td>
                      <td>{item.Protein}</td>
                      <td>{item.Fiber}</td>
                      <td>{item.Socker}</td>
                      <td>{item.MättatFett}</td>
                      <td>{item.Kolesterol}</td>
                      <td>{item.VitA}</td>
                      <td>{item.BetaKaroten}</td>
                      <td>{item.VitD}</td>
                      <td>{item.VitE}</td>
                      <td>{item.VitK}</td>
                      <td>{item.Tiamin}</td>
                      <td>{item.Riboflavin}</td>
                      <td>{item.VitC}</td>
                      <td>{item.Niacin}</td>
                      <td>{item.VitB6}</td>
                      <td>{item.VitB12}</td>
                      <td>{item.Folat}</td>
                      <td>{item.Fosfor}</td>
                      <td>{item.Jod}</td>
                      <td>{item.Järn}</td>
                      <td>{item.Kalcium}</td>
                      <td>{item.Kalium}</td>
                      <td>{item.Magnesium}</td>
                      <td>{item.Natrium}</td>
                      <td>{item.Salt}</td>
                      <td>{item.Selen}</td>
                      <td>{item.Zink}</td>
                      </tr>  
                  )
                  })}
              </table>
              </label>
            <p className="recipe-cat">Kategori: {this.state.recipe_cat}</p>
            </div>
            </div>
        )
    }
}