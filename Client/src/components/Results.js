import { useEffect, useState } from "react";
import { Alert, Container, Modal, Table } from "react-bootstrap"
import styled from "styled-components";
import { getAllVotesFromServer } from "../services/SignUpApi";
import 'bootstrap/dist/css/bootstrap.css';
export function Results() {

    const [voterCount, setVoterCount] = useState([]);


    async function getAllCounts() {
        const response = await getAllVotesFromServer();
        setVoterCount(response.data);
    }

    useEffect(() => {
        getAllCounts();
    }, []);

    return (
        <>
            <AllContainer>
                <section className="alltestlist">
                    <Container className="mt-4 mb-4 text-center">
                        <Alert class="fade alert alert-success show">
                            Voting Counts Of Parties
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


            </AllContainer>

        </>
    );
}

const AllContainer = styled.section`

    .alert-success {
        --bs-alert-bg: #63e1a8;}
    tbody, td, tfoot, th, thead, tr {
        border-color: brown;
        border-style: double;
        border-width: 1px;
    }
    .table {
        --bs-table-color: #d31b1b;
    }
    .table>:not(caption)>*>* {
        padding: 1.2rem 15rem;
        background-color: #f8d9d9;}
    .show{
        font-size:1.5rem;
        font-weight:500;
    }
    
`;