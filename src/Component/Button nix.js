import {Button, Col, Image} from 'react-bootstrap';
import React from "react";

const ButtonNix = () => {
    return(
        <div>
            <Button href="/Admin" >
                    <Image src="/Club_Nix.png" id="Logo" circle />
            </Button>
        </div>
    )
}
export default ButtonNix;
