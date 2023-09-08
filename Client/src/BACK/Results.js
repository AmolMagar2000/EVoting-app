import { useEffect, useState } from "react";
import { Alert, Button, Container, Modal, Table } from "react-bootstrap"
import styled from "styled-components";
import {  getAllVotesFromServer } from "../services/SignUpApi";
import 'bootstrap/dist/css/bootstrap.css';
export function Results() {

    const [voterCount, setVoterCount] = useState([]);
    const [isModalOpened, setIsModalOpened] = useState(false);

    const openModal = () => {
        setIsModalOpened(true);
    }
    const closeModal = () => {
        setIsModalOpened(false);
    }

    async function getAllCounts() {
        const response = await getAllVotesFromServer();
        setVoterCount(response.data);
    }

    useEffect(() => {
        getAllCounts();
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
                                    <th>Party Name</th>
                                    <th>Vote Counts</th>
                                    
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    voterCount.map((test) => {
                                        return (
                                            <tr>
                                                <td>{test.Parties_Name}</td>
                                                <td>{test.count}</td>
                                
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Container>
                </section>

                {/* <Modal show={isModalOpened} onHide={closeModal}>
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
                </Modal> */}
            </AllTestContainer>

        </>
    );
}

const AllTestContainer = styled.section`

    section{

        padding-top: 00px;
    }
`;