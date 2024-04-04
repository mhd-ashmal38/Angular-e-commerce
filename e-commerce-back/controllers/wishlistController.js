// wishlistController.js
const Wishlists = require('../models/wishlistSchema');

// add to wishlist
exports.addToWishlist = async (req, res) => {
    try {
        const { productId, title, price, image, description } = req.body;

        const wishlistItem = new Wishlists({
            productId: productId,
            title: title,
            price: price,
            image: image,
            description: description
        });

        const savedWishlistItem = await wishlistItem.save();

        res.status(200).json(savedWishlistItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// get all wishlist items
exports.getAllWishlist=async(req,res)=>{
    try{
        const allWishlist=await Wishlists.find()
        res.status(200).json(allWishlist)
    }catch(err){
        res.status(401).json(err)
    }
}

// delete wishlist items
exports.deleteWishlistItem=async(req,res)=>{
    try{
        const wishlistId=req.params.id;
        await Wishlists.findByIdAndDelete(wishlistId);
        res.status(200).json({message:"Wishlist item deleted successfully"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}