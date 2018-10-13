import React from 'react'
import { observer, inject } from "mobx-react"
import { Table, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col, Alert } from 'reactstrap';

@inject('store')
@observer
class Pets extends React.Component {

    constructor(props) {
        super(props)
        this.state = { addPet: false, saveErrors: false, petName: "", petDOB: "", ownerId: "" }
        this.addPet = this.addPet.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentDidMount() {
        const { store } = this.props;
        store.fetchPets();
    }

    addPet() {
        const { store } = this.props;
        store.fetchOwners();
        this.setState({ addPet: true });
    }

    onSave() {
        const { petName, petDOB, ownerId } = this.state;
        const { store } = this.props;

        if (!petName || !petDOB || !ownerId) {
            this.setState({ addPet: true, saveErrors: true });
        } else {
            this.setState({ addPet: false, saveErrors: false, petName: "", petDOB: "", ownerId: "" });
            store.createPet(petName, petDOB, ownerId);
        }
    }

    dispalyPetsDetails(pets) {
        return pets.map((item, index) => {
            return (
                <tr key={item.id} className="results_row">
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.dateOfBirth.substring(0, 10)}</td>
                    <td>{item.owner_id}</td>
                </tr>
            )
        })
    }

    dispalyAddPetForm() {

        const { store } = this.props;
        const owners = store.owners || [];

        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Form>
                            {
                                this.state.saveErrors &&
                                <Alert color="danger">
                                    Please Enter All the Details</Alert>
                            }
                            <FormGroup>
                                <Label for="petName">Pet Name</Label>
                                <Input type="text" name="petName" id="petName" placeholder="Enter Pet Name" value={this.state.petName} onChange={e => this.setState({ petName: e.target.value })} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="petDOB">Pet DOB</Label>
                                <Input type="date" name="petDOB" id="petDOB" placeholder="with a placeholder" value={this.state.petDOB} onChange={e => this.setState({ petDOB: e.target.value })} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="owner">Owner</Label>
                                <Input type="select" name="owner" id="owner" value={this.state.ownerId} onChange={e => this.setState({ ownerId: e.target.value })}>
                                    <option value> -- Select Owner -- </option>
                                    {
                                        owners.map((owner, index) => {
                                            return <option value={owner.id} key={owner.id}>
                                                {`${owner.id} - ${owner.firstName} ${owner.lastName}`}
                                            </option>
                                        })
                                    }
                                </Input>
                            </FormGroup>
                            <Button color="primary" onClick={this.onSave}>Save</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

    render() {
        const { store } = this.props;
        const { pets } = store;

        return (
            <Container fluid>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Owner ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.dispalyPetsDetails(pets)}
                    </tbody>
                </Table>
                {!this.state.addPet && <Button color="primary" onClick={this.addPet} >Add Pet</Button>}
                {this.state.addPet && this.dispalyAddPetForm()}
            </Container>
        )
    }
}

export default Pets;