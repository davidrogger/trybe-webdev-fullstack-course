  const postSalesValidation = (req, res, next) => {

    if(Object.keys(req.body).length === 0) {
      res.status(400).json({ message: "productName and infos are required  " });
      return;
    }

    const { productName }  = req.body;

    if ( !productName ) {
      res.status(400).json({ message: "productName is required  " });
      return;
    }
    if ( productName.length < 4 ) {
      res.status(400).json({ message: "producName need to have four caracter at least." 
    });
    return;
  }

    next();
};

module.exports = postSalesValidation;