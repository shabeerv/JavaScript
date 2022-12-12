import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getImage } from '../../redux/Selectors'
import Overlay from '../Overlay'
import './Images.css'
//import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchImages, actionTypes as imageActions } from '../../redux/actions/imageAction'
import { hasErrorsSelector } from '../../redux/Selectors/statusSelector'
import { logout } from '../../redux/Reducers/userReducer'
import { useNavigate } from 'react-router-dom'
//import { getLatestError } from '../../redux/Selectors/errorSelector'

export const Images = () => {
    const image = useSelector(getImage)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const hasError = useSelector((state) => hasErrorsSelector([imageActions.IMAGE], state))
    console.log("IMG:", hasError)
    

    //const isError = useSelector(getLatestError)
    //console.log(isError)
    //console.log(getLatestError)

    const logoutClicked = () => {
        dispatch(logout());
        //navigate("/login")
        //window.location.reload()
      };

    useEffect(() => {
        dispatch(fetchImages())
    }, [dispatch])

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
    
    return (
        <div className='container'>
            <div className="image-gallery">
                {/* <InfiniteScroll
                    dataLength={image.images?.length}
                    next={dispatch(fetchImages())}
                    hasMore={true}
                    loader={<div>Loading2</div>} 
                > */}
                
                {/* {isError && <div>Error: {isError.message}</div>}  */}
                {image.images?.length &&
                (
                    <div className="column">
                        {image.images.map((image) => (
                            <div key={image.id}
                                onClick={() => openInNewTab(image.urls.full)} 
                                className="image-item">
                                <img 
                                    src={image.urls.small} 
                                    alt=""
                                    loading="lazy"
                                />
                                <Overlay 
                                    likes={image.likes} 
                                    username={image.user.username} 
                                />
                            </div>
                        ))}
                    </div>
                )} 
                {/* // </InfiniteScroll> */}
            </div>
            <button onClick={logoutClicked}>Logout</button>
        </div>
    )
}

export default Images