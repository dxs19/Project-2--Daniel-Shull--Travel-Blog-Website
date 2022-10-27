import React from "react"
const Home = (props) => {
    return (<div >

        <button onClick={props.navigateToFlags}
            className="flags-button">To Other Experiences</button>
        <h1 class='main-title'>Travel Blog Website</h1>
        <div class="homepage-images" >
            <div className="larger-image">
                <img className="l-image" src="https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727__480.jpg" ></img>
            </div>
            <div className="flexbox-container">
                <ul>
                    <img class="item item-1" src="https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055__480.jpg"></img>
                    <img class="item item-2" src="https://cdn.pixabay.com/photo/2018/08/19/10/16/nature-3616194__480.jpg"></img>
                    <img class="item item-3" src="https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619__480.jpg"></img>
                </ul>
            </div>
        </div>
        <h1 class='title'>Write your experience here.</h1>
        <h1 class="trip">Add Another Trip:</h1>
        <div className="flexbox-2">
            <form onSubmit={props.handleSubmit} class="labels">
                <label htmlFor='name'>Country Name:</label>
                <input id='name' value={props.formState.name} onChange={props.handleChange} />
                <label htmlFor='city'>City:</label>
                <input id='city' value={props.formState.city} onChange={props.handleChange} />
                <label htmlFor='price'>Price of Trip:</label>
                <input id='price' value={props.formState.price} onChange={props.handleChange} />
                <label htmlFor='description'>Description of Trip:</label>
                <input id='description' class="description" value={props.formState.description} onChange={props.handleChange} />
                <label htmlFor='rating'>Rating:</label>
                <input id='rating' value={props.formState.rating} onChange={props.handleChange} />
                <label htmlFor='url'>Image:</label>
                <input id='url' value={props.formState.image} onChange={props.handleChange} />
                <button type='submit' class="trip-button">Add Trip</button>
            </form>
        </div>
    </div >
    )
}

export default Home