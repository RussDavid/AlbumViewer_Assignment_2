import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { setImages, setTitle } from '../Redux/Actions'
import { GetResponse } from '../Utility/GetResponse';
import { connect } from 'react-redux'

const buildImageDisplay = (images) => {
    const imageGrid = images.map(img => {
        return (
            <Col>
                <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={img.thumbnailUrl} />
                    <Card.Body>
                        <Card.Title>{img.title}</Card.Title>
                        <a href={img}>
                            <Button variant="primary">Go somewhere</Button></a>
                    </Card.Body>
                </Card>
            </Col>
        )
    })
    return imageGrid;
}

export class ViewAlbum extends React.Component {

    componentDidMount() {
        const { match: { params } } = this.props;

        GetResponse(`http://jsonplaceholder.typicode.com/albums/${params.id}/photos`)
            .then(response =>
                this.props.imageResponse(response.data)
            )
            .catch(error => {
                alert(error);
            })

        GetResponse(`http://jsonplaceholder.typicode.com/albums/${params.id}`)
            .then(response =>
                this.props.titleResponse(response.data.title)
            )
            .catch(error => {
                alert(error);
            })

    }

    render() {
        const { images } = this.props;
        const builtGrid = buildImageDisplay(images);
        return (
            <React.Fragment>
                <h2>Viewing Album: <strong>{this.props.title}</strong></h2>
                <Row>
                {builtGrid}
                </Row>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        images: state.images,
        title: state.title
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        titleResponse: (title) => {
            dispatch(setTitle(title))
        },
        imageResponse: (img) => {
            dispatch(setImages(img))

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAlbum);
