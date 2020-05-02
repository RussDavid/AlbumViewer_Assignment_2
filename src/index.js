import React from 'react';
import ReactDOM from 'react-dom';
import Info from './Components/Info';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectAlbum from './Components/SelectAlbum';
import ViewAlbum from './Components/ViewAlbum';
import store from './Redux/Reducers';
import { Provider } from 'react-redux';
import { ListGroup, Row, Col, Container } from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Container fluid="md">
                    <Info />
                    <Row>
                        <Col >
                            <ListGroup>
                                <Route exact path="/" component = {SelectAlbum} />
                            </ListGroup>
                        </Col>
                    </Row>
                    <Route path = "/viewAlbum/:id" component = {ViewAlbum} />
                    </Container>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)