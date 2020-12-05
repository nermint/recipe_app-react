import React from 'react';
import style from './recipe.module.css';

const Recipe =({title,calories,image, ingredients})=>{
  return(
   <div className={style.recipe}>
     <h1>{ title }</h1>
     <ol>
       { ingredients.map(ingredient =>(
         <li>{ ingredient.text }</li>
       )) }
    </ol>
     <p><b>Calorie: </b> { calories }</p>
     <img className={style.image} src={ image } alt={title}/>
     <br/>
     <br/>
     <br/>
     <hr/>
   </div>
  );
}


export default Recipe;
