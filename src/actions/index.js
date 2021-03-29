const menuLoaded = (newMenu)=>{
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}
const menuRequsted = ()=>{
    return {
        type: 'MENU_REQUSTED'
    }
}
const addedToCart = (id)=>{
    return {
        type: 'ITEM_ADD_TO_CART',
        payload:id
    }
}
const deleteCartForm = (id)=>{
    return {
        type: 'ITEM_REMOVE_TO_CART',
        payload:id
    }
}
export {
    menuLoaded,
    menuRequsted,
    addedToCart,
    deleteCartForm
}