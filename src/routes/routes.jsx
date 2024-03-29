import {Route, Routes} from 'react-router-dom'
import { MainPage } from '../pages/mainPage/mainPage'
import { ProfilePage } from '../pages/profilePage/profilePage'
import { AdvPage } from '../pages/advPage/advPage'
import { MyAdvPage } from '../pages/myAdvPage/myAdvPage'
import { SellerProfilePage } from '../pages/sellerProfilePage/sellerProfilePage'
import { Signin } from '../pages/signin/signin'
import { Signup } from '../pages/signup/signup'
import { AddProduct } from '../pages/addProduct/addProduct'
import { EditProduct } from '../pages/editProduct/editProduct'
import { Reviews } from '../pages/reviews/reviews'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/adv' element={<AdvPage/>}/>
            <Route path='/my-adv' element={<MyAdvPage/>}/>
            <Route path='/seller-profile' element={<SellerProfilePage/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/add-product' element={<AddProduct/>}/>
            <Route path='/edit-product' element={<EditProduct/>}/>
            <Route path='/reviews' element={<Reviews/>}/>


        </Routes>
    )
}