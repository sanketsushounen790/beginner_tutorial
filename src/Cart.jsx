import { useState } from 'react'

//TODO: Lam nut "Lay ra khoi gia hang" cho cai' the san pham de giam so luong va gia tien cua san pham do trong gio

const Cart = () => {
    //state san pham (products) duoc khoi tao la 1 array cua cac object. Moi object la 1 san pham voi cac thuoc tinh cua san pham do
    const [products, setProducts] = useState([
        {
            id: 1,
            thumbnail: "https://imgs.search.brave.com/NU_zMeHPL8lyyXP7EKEejjSYjttMllkv2ZCMqVW2WYI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvOGY3/NzQ3M2UtMTg3OS00/Y2Y0LWI3MWYtNGQ0/MDU0ZTY1ZjEzXzEu/Yzg3ZTc2YzI5NDEx/MzcyZTBhZjlkZDZj/NGYyOGUxYjkuanBl/Zw",
            name: "Chuot gaming",
            price: 300,
            quantities: 0
        },
        {
            id: 2,
            thumbnail: "https://imgs.search.brave.com/ymMAq-wvgAKrdYPcE_wAZw_wq9fei2pDpHxvWPOfmS8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kaXNw/bGF5bGFnLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8w/Mi8yMDE5MDEwOF8x/NzI2MTEuanBn",
            name: "Man hinh full HD",
            price: 1000,
            quantities: 0
        },
        {
            id: 3,
            thumbnail: "https://imgs.search.brave.com/i7bjKvdrB_9p9vxdsQHVfgARMqkOYmrBbLK2ducgC8w/rs:fit:1200:975:1/g:ce/aHR0cHM6Ly93d3cu/ZHF3ZWVrLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/MS9jb3NhaXIucG5n",
            name: "Ban phim",
            price: 500,
            quantities: 0
        }
    ])

     //state cua gio hang (cart) duoc khoi tao la 1 array cua cac object. Moi object la 1 san pham voi cac thuoc tinh cua san pham do, chi hoi khac object cua products 1 chut
    const [cart, setCart] = useState([
        {
            id: 1,
            name: "Chuot gaming",
            price: 300,
            quantities: 0
        },
        {
            id: 2,
            name: "Man hinh full HD",
            price: 1000,
            quantities: 0
        },
        {
            id: 3,
            name: "Ban phim",
            price: 500,
            quantities: 0
        }
    ])

    const updateCart = (productId) => {

        //Tim item duoc an nut chon mua them
        let itemMatched = cart.find(item => item.id === productId)

        //Cap nhat so luong mua cho item vua tim duoc
        itemMatched.quantities += 1

        //Xoa chinh item do dang hien dien trong gia hang de tranh bi duplicate
        const filterOutTheChosenItem = cart.filter(item => item.id !== productId)

        //Sau do them chinh item(da duoc cap nhat so luong moi) do vao lai gio hang
        setCart([...filterOutTheChosenItem, itemMatched])
    }


    return (
        <div style={{
            backroundColor: "cyan",
            width: "100vw",
            height: "100vh"
        }}>
            <h1>Tech shop</h1>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "70px" }}>
                <h2 >Gio hang (Cart)</h2>
                <ul>
                    {/* Chay 1 vong lap de hien thi gio hang (cart) */}
                    {
                        cart.map(item => {
                            return (
                                <li key={item.id} style={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}
                                >
                                    {/* Hien thi ten */}
                                    <p>{item.name}</p>

                                    {/* Hien thi so luong san pham */}
                                    <p style={{ marginLeft: "10px" }}>x {item.quantities}</p>

                                    {/* Hien thi tong gia tien cua san pham theo so luong dang chon */}
                                    <p style={{ marginLeft: "10px" }}>- Gia tien: {item.price * item.quantities}</p>
                                </li>

                            )
                        })
                    }
                </ul>
            </div>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "-100px" }}>
                <h2>Cac san pham (Products)</h2>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                backroundColor: "cyan",
                width: "100vw",
                height: "70vh"
            }}>
                {/* Chay 1 vong lap qua state "products" o tren de hien thi ra tung san pham */}
                {
                    products.map(item => {
                        return (
                            <div key={item.id}
                                style={{
                                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                                    width: "300px",
                                    height: "auto",
                                    paddingBottom: "15px"
                                }}>

                                {/* Hien thi ten san pham */}
                                <h4>{item.name}</h4>

                                {/* Hien thi anh nen cua san pham */}
                                <img style={{
                                    width: "80%",
                                    height: "80%"
                                }}
                                    src={item.thumbnail}
                                    alt="item thumnail"
                                />

                                {/* Hien thi gia cua san pham */}
                                <p>{item.price} $</p>

                                {/* Nut them san pham su dung ham "updateCart" o tren */}
                                {/* Ham "updateCart" nhan vao id cua san pham hien tai trong vong lap va su dung no de thao tac voi state "cart" o tren */}
                                <button onClick={() => updateCart(item.id)} >Them vao gio</button>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    )
}

export default Cart
