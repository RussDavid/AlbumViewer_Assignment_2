import React from 'react'
import { GetResponse } from '../Utility/GetResponse';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { setAlbum } from '../Redux/Actions';
import { connect } from 'react-redux'

export class SelectAlbum extends React.Component {
    
    componentDidMount() {
        GetResponse('http://jsonplaceholder.typicode.com/albums')
            .then(response =>
                this.props.albumResponse(response.data)
            )
            .catch(error => {
                alert(error);
            })
    }
    
    render() {
        const { albums } = this.props;
        return (
            albums.map(album => {
                return (
                    <React.Fragment key={album.id}>
                        <ListGroup.Item>
                            <Link to={`/viewAlbum/${album.id}`}>
                                {album.title}
                            </Link>
                        </ListGroup.Item>
                    </React.Fragment>
                )
            })

        )
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        albumResponse: (list) => {
            dispatch(setAlbum(list))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectAlbum);

