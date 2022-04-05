import React from "react";
import {Table} from "react-bootstrap";
import {ProductProps} from "../Products/Products";

export type MembersObject = {
    id: number;
    name: string;
    balance: number;
};

export type MembersTableProps = {
    members: MembersObject[];
}

const MembersTable: React.FC<MembersTableProps> = ({members}) => (

    <Table striped bordered hover variant="dark">
        <thead>
        <tr>
            <th>#</th>
            <th>Username</th>
            <th>Balance</th>
            <th>Bouton de la mort qui tue pour de vrai</th>
        </tr>
        </thead>
        <tbody>
        {
            members.map((member, i) => (<tr key={i}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.balance}</td>
                <td><a href={"#/member/" + member.id}>Lien</a></td>
            </tr>))
        }

        </tbody>
    </Table>

)

export default MembersTable;
