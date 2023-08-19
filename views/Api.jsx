import React from 'react'

export const Api = () => {
    return (
        <div>
        <h2>Remove or Add API Data</h2>
        <p><h3><a href="/">Back to Index</a></h3></p>
        <br></br>
            <form action="/api" method="POST">
            <select id="api" name='api'>
                <option value="add">ADD</option>
                <option value="remove">REMOVE</option>
            </select>
            <button>Submit</button>
            </form>

    </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default Api