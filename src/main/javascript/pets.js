import React from 'react'
import { observer, inject } from "mobx-react"

@inject('store')
@observer
class Pets extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { store } = this.props;
        store.fetchPets();
    }

    dispalyPetsDetails(pets) {
        return pets.map((item, index) => {
            return (
                <tr key={"" + item.id} className="results_row">
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.dateOfBirth}</td>
                    <td>{item.owner_id}</td>
                </tr>
            )
        })
    }

    render() {
        const { store } = this.props;
        const { pets } = store;

        return (
            <table className="results">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Owner ID</th>
                    </tr>
                    {this.dispalyPetsDetails(pets)}
                </tbody>
            </table>
        )
    }
}

export default Pets;