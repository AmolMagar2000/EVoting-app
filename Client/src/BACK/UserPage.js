import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap"
import styled from "styled-components";
import { deleteVoterFromServer, getAllVoterFromServer } from "../services/SignUpApi";
import 'bootstrap/dist/css/bootstrap.css';
export function UserPage() {

    const [voterList, setVoterList] = useState([]);
    const [selectedVoterID, setSelectedVoterID] = useState('');
    const [isModalOpened, setIsModalOpened] = useState(false);

    const openModal = () => {
        setIsModalOpened(true);
    }
    const closeModal = () => {
        setIsModalOpened(false);
    }

    async function getAllVoter() {
        const response = await getAllVoterFromServer();
        setVoterList(response.data);
    }

    const deleteVoter = async () => {
        const response = await deleteVoterFromServer(selectedVoterID);
        console.log(response.data);
        closeModal();
        getAllVoter();
    }

    useEffect(() => {
        getAllVoter();
    }, []);

    return (
        <>
            <AllTestContainer>
                <section className="alltestlist">
                    <Container className="mt-4 mb-4 text-center">
                        <Alert>
                            List of all Voter's
                        </Alert>
                    </Container>
                    <Container>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Voter Name</th>
                                    <th>Voter ID</th>
                                    <th>Voting Center</th>
                                    <th>Email</th>
                                    <th>Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    voterList.map((test) => {
                                        return (
                                            <tr>
                                                <td>{test.Full_Name}</td>
                                                <td>{test.VoterID}</td>
                                                <td>{test.VotingCenter}</td>
                                                <td>{test.Email}</td>

                                                <td><Button variant="danger" className="btn-sm" onClick={() => {
                                                    setSelectedVoterID(test.VoterID);
                                                    openModal();
                                                }}>Delete</Button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Container>
                </section>

                <Modal show={isModalOpened} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete test with {selectedVoterID} ?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={deleteVoter}>
                            Yes, Delete
                        </Button>
                        <Button variant="danger" onClick={closeModal}>
                            No
                        </Button>
                    </Modal.Footer>
                </Modal>
            </AllTestContainer>

        </>
    );
}

const AllTestContainer = styled.section`

    section{

        padding-top: 00px;
    }
`;