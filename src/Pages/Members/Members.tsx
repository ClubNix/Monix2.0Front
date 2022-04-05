import React from "react";
import MembersTable, {MembersObject} from "../../Components/Home/MembersTable";


const members: MembersObject[] = [
    {id: 1, name: "ArmadindonLe+Bo", balance: 999999999999999999999999999999999999999999999999999999},
    {id: 2, name: "ArmadindonLe+Cho", balance: 999999999999999999999999999999999999999999999999999999},
    {id: 3, name: "ArmadindonLe+Kosto", balance: 999999999999999999999999999999999999999999999999999999},
    {id: 4, name: "ZenLe+Puant+KiRimePas", balance: -10}
]

const Members: React.FC = () => {
    return (
        <div>
            <MembersTable members={members}/>
        </div>);
}
export default Members;
