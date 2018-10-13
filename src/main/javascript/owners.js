import React from 'react'
import { observer, inject } from "mobx-react"

@inject('store')
@observer
class Owners extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { store } = this.props;
        store.fetchOwners();
    }

    displayPetIDs(owner) {
        const pets = owner.pets || [];
        return (
            <ul>
                {pets.map((item, index) => {
                    return (
                        <li key={item}>{item.id}</li>
                    )
                })}
            </ul>
        )
    }

    dispalyOwnerDetails(owners) {
        return owners.map((item, index) => {
            return (
                <tr key={item} className="results_row">
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{this.displayPetIDs(item)}</td>
                </tr>
            )
        })
    }

    render() {
        const { store } = this.props;
        const { owners } = store;

        return (
            <table className="results">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Pet ID</th>
                    </tr>
                    {this.dispalyOwnerDetails(owners)}
                </tbody>
            </table>
        )
    }
}

export default Owners;