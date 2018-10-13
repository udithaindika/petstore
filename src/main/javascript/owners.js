import React from 'react'
import { observer, inject } from "mobx-react"
import { Table, Container } from 'reactstrap';

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
                {pets.map((pet, index) => {
                    return (
                        <li key={pet.id}>{pet.id}</li>
                    )
                })}
            </ul>
        )
    }

    dispalyOwnerDetails(owners) {
        return owners.map((item, index) => {
            return (
                <tr key={item.id} className="results_row">
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
            <Container fluid>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Pet ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.dispalyOwnerDetails(owners)}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default Owners;