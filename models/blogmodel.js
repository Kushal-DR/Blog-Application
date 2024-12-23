const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
       
    },
    image:{
        type:String,
        
        default : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR8AAACwCAMAAAABtJrwAAAAJFBMVEXu7u7W1tbw8PDX19fm5ubi4uLs7Oza2trf39/l5eXp6eng4OBJ89NWAAADGUlEQVR4nO3b3XarIBCGYUsUkNz//W6YUcT8aHJSup33OWm7YtbSbwnDoB0GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPivONH7LP4UtxoGn8Z5inE0H1AbSRqnnEm43X6q2WhAWyZzziSEJpKdm8l8nD/KZJdP71PtIh1nEkK8T/OYSoC9T7UHF19mMpVMfDNNT/kD3/tkO9B8bprJmNpMdoeN+ajU6yQ7cvd84WNNxO1thyU5rOOJdiIDR3+rd1KIsQywPMLkfpLUvBR4e+tENy8DR4J6N0vn0PKPUGalMgbLIOx94r9EJ5YyssIHJX4zWQko/ejK2H2yBGpYmYz8cjNIPjH3FXNeRd9zaxF2zcWTaCSfYR0s5aIf61dpO3LfoaFFDc1YPm69VsnnzTEPoQVL+eQbIiz5HHegtbRLqbMyQZe6VfLxJ/m4NN3H5VdT+UTNpeQT3l/zsnr05QhZc1vZDZKLHbTOv8+nrh7lj2gpH20w3HE+Q7sulHysrH+kwfC6jn5fk3y77JGldrKSj+5cSEz3b/L5zZPsSXcunmvSfn9jXRaOaz5mNsu0wXjKx40hbHOMW7ZhZYaSsMzkM2z5NDVJA3kMSCcoZ2ozWhuMh5q93i/bLOxcSuuuz0Ercj3aYOxrtqtPNV4Oo/KBkfK1Nhi7muRqudoeerV5nLZqV6INxvzT1uxmn0fXjG6Yt2+ctWrXIiPL7wbTbl+sBCSLpPqNk1btYqRyhdpcZQ870bloaXO6RnLSilyMDq0tn/cb9UsmZ63axcjY2fI5eo6h/cdJq3Y5qc3nxfP4hiyQ5IYzlE8t5nmCOY5neVJW8rGyfVhs88vRQ1TljW2vDk1vHs7jKevFx1bt8vwSUBwPo6k3maXtVeG0Zn/2hDma2l5duE9uncVU8jGzfaiaReK5m8F8zmfmPTvbh4J8jn2dT+8T/mXkc+bL18dslfdi0lfGPsvJzvZh1bzyLK+MjfU9uxcv2hlbHr7w9J54E9rdysP3b7361wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBt/wAQSBG9wGpHgQAAAABJRU5ErkJggg=="
    },
    user:{
        type : mongoose.Types.ObjectId,
        ref : 'User',
        required : true
    }
},
{
    timestamps:true
})

const blogModel = mongoose.model("Blog" , blogSchema);

module.exports = blogModel;