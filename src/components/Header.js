import {Container} from 'react-bootstrap';
const Header = () =>{
    return(
        <>
            <div className="header d-flex align-items-center mb-4">
            <Container>
            <h3>Budget<span className="bold">App</span></h3>
            </Container>
    </div>
        </>
    );
}

export default Header;