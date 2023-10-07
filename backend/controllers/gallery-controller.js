import Gallery from "../models/Gallery";
export const getDeptGallery=async(req,res,next)=>{
    try{
        const identifier=req.params.id;
        await Gallery.findOne({"_id":identifier})
        .then((data)=>{
            if(data){
                res.send(data);
            }
            else{
                res.status(404).json({message:"Gallery data not found!"});
            }
        });
    }
    catch(err){
        return console.log(err);
    }
};
export const insertGallery=async(req,res,next)=>{
    const {_id,imageurl}=req.body;
    try{
        const Objv = await Gallery.findOne({"_id":_id});
        if(!Objv){
            await Gallery.create(req.body)
            .then((data)=>{
                res.send(data);
            }).catch((err)=>{
                res.status(404).json({message:"Gallery data not inserted!"});
            });
        }
        else{
            Objv.imageurl=Objv.imageurl.concat(imageurl);
            await Objv.save().then((response)=>{
                res.send(response);
            })
            .catch((err)=>{
                res.status(501).json({message:"Insertion of gallery images is not done"});
            });
        }
    }
    catch(err){
        return console.log(err);
    }
};